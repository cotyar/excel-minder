using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using ExcelMinder.Utils;
using Orleans.Utilities;

namespace ExcelMinder.Orleans.Grains;

public sealed class StockGrain : Grain, IStockGrain
{
    // TODO: Change to decimals everywhere
    private float _price;
    private float _openPrice;
    private float _prevClosePrice;

    private IDisposable? _timer;
    
    private readonly ObserverManager<IStockViewerGrain> _viewersManager;

    public StockGrain(ILogger<StockGrain> logger)
    {
        _viewersManager = new ObserverManager<IStockViewerGrain>( TimeSpan.FromDays(10), logger);
    }
    
    public Task<StockPrice> Price() => Task.FromResult(GetStockPrice());

    private StockPrice GetStockPrice() => (Symbol, _price, _price - 0.0005f, _price + 0.0005f, _openPrice, _prevClosePrice).ToStockPrice();

    public Task<StockPrice> OpenPrice() => Task.FromResult((Symbol, _openPrice, _openPrice, _openPrice, _openPrice, _prevClosePrice).ToStockPrice());
    
    public Task SubscribePriceChanges(IStockViewerGrain viewer)
    {
        _viewersManager.Subscribe(viewer, viewer);
        return Task.CompletedTask;
    }

    public Task UnSubscribePriceChanges(IStockViewerGrain viewer)
    {
        _viewersManager.Unsubscribe(viewer);
        return Task.CompletedTask;
    }

    public override async Task OnActivateAsync(CancellationToken cancellationToken)
    {
        await base.OnActivateAsync(cancellationToken);        
        
        _price = _openPrice = (float) Math.Round(125f + new Random().NextDouble() * 100f - 50f, 4);
        _prevClosePrice = SimulationHelper.RandomWalkSimulation(_price, 1, _openPrice, _openPrice / 50f)[0];

        _timer = RegisterTimer(
            UpdatePrice,
            null,
            TimeSpan.FromMilliseconds(50), 
            TimeSpan.FromMilliseconds(50));
    }

    public override Task OnDeactivateAsync(DeactivationReason reason, CancellationToken cancellationToken)
    {
        _timer?.Dispose();
        _timer = null;
        return base.OnDeactivateAsync(reason, cancellationToken);
    }
    
    private Task UpdatePrice(object state)
    {
        _price = SimulationHelper.RandomWalkSimulation(_price, 1, _openPrice, _openPrice / 50f)[0];
        return _viewersManager.Notify(s => s.UpdatePrice(GetStockPrice()));
    }

    private string Symbol => this.GetPrimaryKeyString();
}