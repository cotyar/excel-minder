using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Windows.Forms;
using ExcelDna.Integration;
using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;
using Grpc.Net.Client;
using Microsoft.Office.Interop.Excel;
using Application = Microsoft.Office.Interop.Excel.Application;
using Range = Microsoft.Office.Interop.Excel.Range;
using ExcelDna.Integration.Rtd;
using ExcelDna.Registration;
using System.Runtime.InteropServices;
using System.Reflection;

namespace ExcelMinder.Excel.Net6;

/// <summary>
/// This example defines three UDFs: `ListStocks`, `GetStockPrice`, and `ExecuteTrade`. These UDFs call the corresponding RPC methods on the Bloomberg stock simulator service using the gRPC client.
/// The ListStocks UDF returns a two-dimensional array of strings, where each row contains the symbol and name of a stock.
///
/// The `GetStockPrice` UDF returns a single value, the current price of the stock with the given symbol.
///
/// The `ExecuteTrade` UDF returns a two-dimensional array of values containing the details of the executed trade, including the symbol, quantity, type, price, total cost, and timestamp.
///
/// To use these UDFs in Excel, you will need to add a reference to the .NET library in your Excel workbook and then use the functions like any other Excel formula.
/// For example, to use the `GetStockPrice` UDF, you could enter the formula `=GetStockPrice("AAPL")` in a cell to retrieve the current price of `Apple Inc.` stock.
/// </summary>
public class ExcelFunctions
{
    [ExcelFunction(Name = $"em_{nameof(SimulateStockPrices)}", Description = "Simulates stock prices using a random walk model.")]
    public static object[,] SimulateStockPrices(
        [ExcelArgument(Description = "The starting price of the stock.")] double startPrice,
        [ExcelArgument(Description = "The number of ticks to simulate.")] int ticks,
        [ExcelArgument(Description = "The mean return of the stock (per tick).")] double meanReturn,
        [ExcelArgument(Description = "The standard deviation of the return (per tick).")] double stdDev)
    {
        var rand = new Random();
        
        var prices = Enumerable.Range(0, ticks)
            .Select(i => startPrice * Math.Exp(meanReturn + stdDev * rand.Next()))
            .ToArray();

        var result = new object[prices.Length, 1];
        for (int i = 0; i < prices.Length; i++)
        {
            // ReSharper disable once HeapView.BoxingAllocation
            result[i, 0] = prices[i];
        }
        return result;
    }
    
    
    private static readonly GrpcChannel Channel = GrpcChannel.ForAddress("https://localhost:7038");
    private static readonly StockSimulator.StockSimulatorClient Client = new(Channel);
    
    [ExcelFunction(Name = $"em_{nameof(ListStocks)}", Description = "Lists the available stocks")]
    public static object[,] ListStocks(
        [ExcelArgument(Description = "The prefix of the stock name.", AllowReference = true)][Optional] object prefix,
        [ExcelArgument(Description = "Number of stocks to display.", AllowReference = false)][Optional] object pageSize)
    {
        var prefixStr = prefix switch
        {
            Missing => "",
            string s => s,
            _ => ""
        };

        var pageSizeInt = pageSize switch
        {
            int size => size,
            _ => 20
        };

        try
        {
            var response = Client.ListSymbols(new SymbolListRequest { Prefix = prefixStr, PageSize = (uint) pageSizeInt });

            var result = new object[response.Stocks.Count, 2];
            for (int i = 0; i < response.Stocks.Count; i++)
            {
                result[i, 0] = response.Stocks[i].Symbol;
                result[i, 1] = response.Stocks[i].Name;
            }

            return result;
        }
        catch (Exception e)
        {
            MessageBox.Show(e.Message, "Connection Exception", MessageBoxButtons.OK, MessageBoxIcon.Error);
            throw;
        }
    }

    [ExcelFunction(Name = $"em_{nameof(GetStockPrice)}", Description = "Gets the current price of a stock")]
    public static object GetStockPrice(string symbol) => Client.GetStockPrice(new StockRequest { Symbol = symbol })?.Price;

    [ExcelFunction(Name = $"em_{nameof(ExecuteTrade)}", Description = "Executes a trade on the stock market")]
    public static object ExecuteTrade(string symbol, long quantity, string type, double price)
    {
        var tradeType = type.ToLower() switch
        {
            "buy" => TradeType.Buy,
            "sell" => TradeType.Sell,
            _ => throw new ArgumentException("Invalid trade type. Must be 'buy' or 'sell'.")
        };

        var response = Client.ExecuteTrade(new TradeRequest
        {
            Symbol = symbol,
            Quantity = quantity,
            Type = tradeType,
            Price = (float)price
        });

        return new object[,]
        {
            { "Symbol", response.Symbol },
            { "Quantity", response.Quantity },
            { "Type", type },
            { "Price", response.Price },
            { "Total Cost", response.TotalCost },
            { "Timestamp", response.Timestamp.ToDateTime() }
        };
    }

    [ExcelFunction(Name = $"em_{nameof(GetRangeProperties)}", Description =
        "Reads the background color, font, font style, text color, cell value, cell weight, cell height, border color, border thickness, border style of all cells in a symbols in an Excel spreadsheet")]
    public static object[,] GetRangeProperties([ExcelArgument(Description = "The starting price of the stock.", AllowReference = true)] object range)
    {
        var (_, _, props) = ((range as ExcelReference)?.ToRange()).GetRangePropertiesList();
        return props.To2DArray();
    }


    [ExcelFunction(Name = $"em_{nameof(ObservableClock)}", Description = "Provides a ticking clock")]
    public static object ObservableClock(string param)
    {
        string functionName = "em_{nameof(ObservableClock)}";
        object paramInfo = param; // could be one parameter passed in directly, or an object array of all the parameters: new object[] {param1, param2}
        return ExcelAsyncUtil.Observe(functionName, paramInfo, () => new ExcelObservableClock());
    }
    
    [ExcelFunction(Name = $"em_{nameof(ObservableStockPrices)}", Description = "Provides ticking stock prices")]
    public static object ObservableStockPrices([ExcelArgument(Description = "The starting price of the stock.", AllowReference = true)] object symbols)
    {
        var symbolStrings = symbols switch
        {
            string s => s.Split(',').Select(s => s.Trim()).ToArray(),
            ExcelReference reference => (reference.ToRange().Value as object[,])?.AsEnumerable().Select(v => v.ToString()).OrderBy(s => s).ToArray() ?? throw new ArgumentException("Invalid cell values"),
            _ => throw new ArgumentException("Invalid symbols")
        };

        var functionName = $"em_{nameof(ObservableStockPrices)}";
        var callingCell = (ExcelReference)XlCall.Excel(XlCall.xlfCaller);
        var paramInfo = new object[2];
        paramInfo[0] = symbols;
        paramInfo[1] = callingCell; 
        return ExcelAsyncUtil.Observe(functionName, paramInfo, () =>
        {
            var excelObservable = new ExcelObservable<StockPriceSnapshot>(
                m => m.Prices.Select(p => new object[] { p.Symbol, p.Price }).ToArray().To2DArray(),
                Client.GetStockPriceUpdates(new StocksRequest { Symbols = { symbolStrings } }).ResponseStream);
            return excelObservable;
        });
    }
}