using System.Collections.Concurrent;
using System.Collections.Immutable;
using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;

namespace ExcelMinder.Services;

public class StockSimulatorService : StockSimulator.StockSimulatorBase
{
    // A list of available stocks
    private static readonly ImmutableArray<Stock> Stocks = new List<Stock>
    {
        new() { Symbol = "AAPL", Name = "Apple Inc." },
        new() { Symbol = "GOOG", Name = "Alphabet Inc." },
        new() { Symbol = "MSFT", Name = "Microsoft Corporation" },
        new() { Symbol = "FB", Name = "Facebook, Inc." },
        new() { Symbol = "AMZN", Name = "Amazon.com, Inc." }
    }.ToImmutableArray();

    // A dictionary of stock prices, keyed by symbol
    private static readonly Dictionary<string, float> Prices = new()
    {
        { "AAPL", 119.50f },
        { "GOOG", 1035.00f },
        { "MSFT", 97.50f },
        { "FB", 199.00f },
        { "AMZN", 1350.00f }
    };
    
    // A list of trade requests
    private static ConcurrentDictionary<Timestamp, TradeRequest> requests = new();
    
    // A list of executed trade requests
    private static ConcurrentDictionary<Timestamp, TradeResponse> responses = new();
    
    public override Task<TradeResponse> ExecuteTrade(TradeRequest request, ServerCallContext context)
    {
        var timestamp = Timestamp.FromDateTimeOffset(DateTimeOffset.Now);
        
        var response = new TradeResponse
        {
            Price = request.Price,
            Quantity = request.Quantity,
            Symbol = request.Symbol,
            Type = request.Type,
            TotalCost = request.Price + request.Quantity,
            Timestamp = timestamp
        };
    
        requests[timestamp] = request;
        responses[timestamp] = response;
        
        return Task.FromResult(response);
    }

    // The ListStocks method returns a list of available stocks
    public override Task<StockList> ListStocks(Empty request, ServerCallContext context) => Task.FromResult(new StockList { Stocks = { Stocks } });

    // The GetStockPrice method returns the current price of a stock
    public override Task<StockPrice> GetStockPrice(StockRequest request, ServerCallContext context)
    {
        if (Prices.TryGetValue(request.Symbol, out var price))
        {
            return Task.FromResult(new StockPrice
            {
                Symbol = request.Symbol,
                Price = price,
                Timestamp = Timestamp.FromDateTime(DateTime.UtcNow)
            });
        }

        throw new RpcException(new Status(StatusCode.NotFound, $"Stock not found: {request.Symbol}"));
    }
    
    // public override async Task GetTradeHistory(Empty request, IServerStreamWriter<TradeResponse> responseStream, ServerCallContext context)
    // {
    //     foreach (var response in responses.Values)
    //     {
    //         await responseStream.WriteAsync(response);
    //     }
    // }

    public override Task<TradeRequestList> LastTradeRequests(PageRequest request, ServerCallContext context)
    {
        var tradeRequests = requests.Values.Skip(request.Page * request.PageSize).Take(request.PageSize).ToList();
        return Task.FromResult(new TradeRequestList { Trades = { tradeRequests } });
    }

    public override Task<TradeResponseList> LastExecutedTrades(PageRequest request, ServerCallContext context)
    {
        var tradeResponses = responses.Values.Skip(request.Page * request.PageSize).Take(request.PageSize).ToList();
        return Task.FromResult(new TradeResponseList { Trades = { tradeResponses } });
    }
}