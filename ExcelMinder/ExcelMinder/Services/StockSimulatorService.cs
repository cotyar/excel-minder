using System.Collections.Concurrent;
using System.Collections.Immutable;
using ExcelMinder.Orleans.Grains;
using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using ExcelMinder.Utils;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;

namespace ExcelMinder.Services;

public class StockSimulatorService : StockSimulator.StockSimulatorBase
{
    private readonly IClusterClient _clusterClient;
    private readonly ILogger<StockSimulatorService> _logger;

    // private static readonly Guid StreamId = Guid.NewGuid(); 
    //
    // // // A list of available stocks
    // // private readonly ConcurrentDictionary<string, Stock> _stocks = new(new List<Stock>
    // // {
    // //     new() { Symbol = "AAPL", Name = "Apple Inc." },
    // //     new() { Symbol = "GOOG", Name = "Alphabet Inc." },
    // //     new() { Symbol = "MSFT", Name = "Microsoft Corporation" },
    // //     new() { Symbol = "FB", Name = "Facebook, Inc." },
    // //     new() { Symbol = "AMZN", Name = "Amazon.com, Inc." }
    // // }.Select(stock => new KeyValuePair<string, Stock>(stock.Symbol, stock)));
    //
    // // A dictionary of stock prices, keyed by symbol
    // private volatile StockPriceSnapshot _priceSnapshot = new [] { ("AAPL", 119.50f), ("GOOG", 1_700.00f), ("MSFT", 200.00f), ("FB", 250.00f), ("AMZN", 3_000.00f) }.ToStockSnapshot();
    //
    // A list of trade requests
    private readonly ConcurrentDictionary<Timestamp, TradeRequest> _requests = new();
    
    // A list of executed trade requests
    private readonly ConcurrentDictionary<Timestamp, TradeResponse> _responses = new();
    //
    // private readonly ConcurrentBag<IServerStreamWriter<StockList>> _responseStreams = new();

    public StockSimulatorService(IClusterClient clusterClient, ILogger<StockSimulatorService> logger)
    {
        _clusterClient = clusterClient;
        _logger = logger;
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
        var stocks = await _clusterClient.GetGrain<IStockDataProviderGrain>(IStockDataProviderGrain.DefaultGrainId).SearchSymbols(request.Prefix, request.PageSize);
        return new StockList { Stocks = { stocks.OrderBy(s => s.Symbol) } };
    }

    public override Task ListSymbolsUpdates(SymbolListRequest request, IServerStreamWriter<StockList> responseStream, ServerCallContext context)
    {
    //     _clusterClient.Get
    //     context.CancellationToken.Register(() => _responseStreams.TryTake(out _));
        
        return base.ListSymbolsUpdates(request, responseStream, context);
    }

    // The GetStockPrice method returns the current price of a stock
    public override async Task<StockPrice> GetStockPrice(StockRequest request, ServerCallContext context)
    {
        try
        {
            return await _clusterClient.GetGrain<IStockDataProviderGrain>(IStockDataProviderGrain.DefaultGrainId).Price(request.Symbol);
        }
        catch (Exception e)
        {
            _logger.LogError($"Error during getting stock price for {request.Symbol}", e);
            throw new RpcException(new Status(StatusCode.NotFound, $"Stock not found: {request.Symbol}"));
        }
    }

    public override async Task GetStockPriceUpdates(StockRequest request, IServerStreamWriter<StockPriceSnapshot> responseStream, ServerCallContext context)
    {
        var stockViewer = await _clusterClient.GetGrain<IStockDataProviderGrain>(IStockDataProviderGrain.DefaultGrainId).GetStockViewer(new [] { request.Symbol }.ToImmutableArray());
        var streamId = await stockViewer.PriceUpdatesStreamId();
        var stream = _clusterClient
            .GetStreamProvider(IStockViewerGrain.StreamProviderName)
            .GetStream<StockPriceSnapshotMessage>(streamId);
            
        var observer = new StreamObserver<StockPriceSnapshotMessage>(_logger, snapshot => responseStream.WriteAsync(snapshot.Snapshot));

        var subscription = await stream.SubscribeAsync(observer);
        context.CancellationToken.Register(() => subscription.UnsubscribeAsync().Wait());

        await observer.CompletionTask;
    }

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