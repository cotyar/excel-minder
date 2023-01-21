using System.Collections.Concurrent;
using System.Collections.Immutable;
using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using ExcelMinder.Utils;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;

namespace ExcelMinder.Services;

public class StockSimulatorService : StockSimulator.StockSimulatorBase
{
    private readonly IGrainFactory _grainFactory;
    
    private static readonly Guid StreamId = Guid.NewGuid(); 

    // // A list of available stocks
    // private readonly ConcurrentDictionary<string, Stock> _stocks = new(new List<Stock>
    // {
    //     new() { Symbol = "AAPL", Name = "Apple Inc." },
    //     new() { Symbol = "GOOG", Name = "Alphabet Inc." },
    //     new() { Symbol = "MSFT", Name = "Microsoft Corporation" },
    //     new() { Symbol = "FB", Name = "Facebook, Inc." },
    //     new() { Symbol = "AMZN", Name = "Amazon.com, Inc." }
    // }.Select(stock => new KeyValuePair<string, Stock>(stock.Symbol, stock)));

    // A dictionary of stock prices, keyed by symbol
    private volatile StockPriceSnapshot _priceSnapshot = new [] { ("AAPL", 119.50f), ("GOOG", 1_700.00f), ("MSFT", 200.00f), ("FB", 250.00f), ("AMZN", 3_000.00f) }.ToStockSnapshot();
    
    // A list of trade requests
    private readonly ConcurrentDictionary<Timestamp, TradeRequest> _requests = new();
    
    // A list of executed trade requests
    private readonly ConcurrentDictionary<Timestamp, TradeResponse> _responses = new();

    private readonly ConcurrentBag<IServerStreamWriter<StockList>> _responseStreams = new();

    public StockSimulatorService(IGrainFactory grainFactory)
    {
        _grainFactory = grainFactory;
    }
    
    public override Task<TradeResponse> ExecuteTrade(TradeRequest request, ServerCallContext context)
    {
        var timestamp = Timestamp.FromDateTimeOffset(DateTimeOffset.Now);
        
        var response = new TradeResponse
        {
            Price = request.Price,
            Quantity = request.Quantity,
            Symbol = request.Symbol,
            Type = request.Type,
            TotalCost = request.Price * request.Quantity,
            Timestamp = timestamp
        };
    
        _requests[timestamp] = request;
        _responses[timestamp] = response;
        
        return Task.FromResult(response);
    }

    // The ListStocks method returns a list of available stocks
    public override async Task<StockList> ListSymbols(SymbolListRequest request, ServerCallContext context)
    {
        var stocks = await _grainFactory.GetGrain<IStockDataProviderGrain>(IStockDataProviderGrain.DefaultGrainId).SearchSymbols(request.Prefix);
        return new StockList { Stocks = { stocks.OrderBy(s => s.Symbol) } };
    }

    public override Task ListSymbolsUpdates(SymbolListRequest request, IServerStreamWriter<StockList> responseStream, ServerCallContext context)
    {
        _grainFactory.Get
        context.CancellationToken.Register(() => _responseStreams.TryTake(out _));
        
        return base.ListSymbolsUpdates(request, responseStream, context);
    }

    // The GetStockPrice method returns the current price of a stock
    public override Task<StockPrice> GetStockPrice(StockRequest request, ServerCallContext context)
    {
    //     if (_priceSnapshot.TryGetValue(request.Symbol, out var price))
    //     {
    //         return Task.FromResult(new StockPrice
    //         {
    //             Symbol = request.Symbol,
    //             Price = price.Price,
    //             Timestamp = Timestamp.FromDateTime(DateTime.UtcNow)
    //         });
    //     }

        StockPrice price;
        if ((price = _priceSnapshot.Prices.FirstOrDefault(s => s.Symbol == request.Symbol)) != null)
        {
            return Task.FromResult(price);
        }
        
        throw new RpcException(new Status(StatusCode.NotFound, $"Stock not found: {request.Symbol}"));
    }

    public override Task ListStocksUpdates(Empty request, IServerStreamWriter<StockList> responseStream, ServerCallContext context)
    {
        _responseStreams.Add(responseStream);
        return base.ListStocksUpdates(request, responseStream, context);
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
        var tradeRequests = _requests.Values.Skip(request.Page * request.PageSize).Take(request.PageSize).ToList();
        return Task.FromResult(new TradeRequestList { Trades = { tradeRequests } });
    }

    public override Task<TradeResponseList> LastExecutedTrades(PageRequest request, ServerCallContext context)
    {
        var tradeResponses = _responses.Values.Skip(request.Page * request.PageSize).Take(request.PageSize).ToList();
        return Task.FromResult(new TradeResponseList { Trades = { tradeResponses } });
    }
}