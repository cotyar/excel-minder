using System.Collections.Immutable;
using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using Orleans.Runtime;
using Orleans.Streams;

namespace ExcelMinder.Orleans.Grains;

public class StockViewerGrain : Grain, IStockViewerGrain
{
    private IDisposable? _timer;
    private ImmutableArray<Stock> _stocks;
    private bool _updated;
    private StockPriceSnapshot _priceSnapshot = new();
    private StreamId _streamId;
    private IAsyncStream<StockPriceSnapshotMessage> _stream;
    
    private readonly IGrainFactory _grainFactory;
    
    public StockViewerGrain(IGrainFactory grainFactory)
    {
        _grainFactory = grainFactory;
    }
    
    public override async Task OnActivateAsync(CancellationToken cancellationToken)
    {
        await base.OnActivateAsync(cancellationToken);
        _timer = RegisterTimer(OnTimer, null, TimeSpan.FromMilliseconds(50), TimeSpan.FromMilliseconds(50));
        _stocks = this.GetPrimaryKeyString().Split(Stock.Delimiter).Select(s => new Stock { Symbol = s }).ToImmutableArray();
        _priceSnapshot = await BuildPriceSnapshot();
        
        _streamId = StreamId.Create(this.GetPrimaryKeyString(), Guid.Empty);
        _stream = this.GetStreamProvider(IStockViewerGrain.StreamProviderName).GetStream<StockPriceSnapshotMessage>(_streamId);
        _stream    
            .OnNextAsync(new StockPriceSnapshotMessage { Ticks = DateTime.Now.Ticks, Snapshot = _priceSnapshot.Clone() })
            .Ignore();
    }
    
    public override async Task OnDeactivateAsync(DeactivationReason reason, CancellationToken cancellationToken)
    {
        _timer?.Dispose();
        _timer = null;
        foreach (var stockPriceGrain in _stocks.Select(stock => _grainFactory.GetGrain<IStockGrain>(stock.Symbol)))
        {
            await stockPriceGrain.UnSubscribePriceChanges(this);
        }
        
        await base.OnDeactivateAsync(reason, cancellationToken);   
    }
    
    private async Task OnTimer(object arg)
    {
        if (_updated)
        {
            // TODO: Update stream
            // Notify listeners - best effort only
            await _stream.OnNextAsync(new StockPriceSnapshotMessage { Ticks = DateTime.Now.Ticks, Snapshot = _priceSnapshot.Clone() });
            _updated = false;
        }
    }

    public Task<ImmutableArray<Stock>> Symbols() => Task.FromResult(_stocks);
    public Task<StockPriceSnapshot> PriceSnapshot() => Task.FromResult(_priceSnapshot.Clone());
    public Task<StreamId> PriceUpdatesStreamId() => Task.FromResult(_streamId);

    public Task UpdatePrice(StockPrice price)
    {
        var existingPrice = _priceSnapshot.Prices.FirstOrDefault(p => p.Symbol == price.Symbol);
        if (existingPrice == null || Math.Abs(existingPrice.Price - price.Price) > 0.0001)
        {
            _priceSnapshot = _priceSnapshot.Clone(); 
            var prices = _priceSnapshot
                .Prices
                .Where(s => s.Symbol != price.Symbol)
                .Concat(new [] { price })
                .OrderBy(p => p.Symbol)
                .ToImmutableArray();
            _priceSnapshot.Prices.Clear();
            _priceSnapshot.Prices.AddRange(prices);
            _updated = true;
        }

        return Task.CompletedTask;
    }
    
    private async Task<StockPriceSnapshot> BuildPriceSnapshot()
    {
        var priceSnapshot = new StockPriceSnapshot(); 
        foreach (var stockPriceGrain in _stocks.Select(stock => _grainFactory.GetGrain<IStockGrain>(stock.Symbol)))
        {
            await stockPriceGrain.SubscribePriceChanges(this);
            var price = await stockPriceGrain.Price();
            priceSnapshot.Prices.Add(price);
        }
        
        return priceSnapshot;
    }
}