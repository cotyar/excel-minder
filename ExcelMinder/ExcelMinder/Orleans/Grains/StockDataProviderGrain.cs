using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using Orleans.Runtime;

namespace ExcelMinder.Orleans.Grains;

public class StockDataProviderGrain : IStockDataProviderGrain
{
    private readonly IGrainFactory _grainFactory;

    // A list of available stocks
    private readonly Dictionary<string, Stock> _stocks = new(new List<Stock>
    {
        new() { Symbol = "AAPL", Name = "Apple Inc." },
        new() { Symbol = "GOOG", Name = "Alphabet Inc." },
        new() { Symbol = "MSFT", Name = "Microsoft Corporation" },
        new() { Symbol = "FB", Name = "Facebook, Inc." },
        new() { Symbol = "AMZN", Name = "Amazon.com, Inc." }
    }.Select(stock => new KeyValuePair<string, Stock>(stock.Symbol, stock)));

    public StockDataProviderGrain(IGrainFactory grainFactory)
    {
        _grainFactory = grainFactory;
    }
    
    public Task<Stock[]> SearchSymbols(string prefix) => 
        Task.FromResult(_stocks.Values.Where(s => s.Symbol.StartsWith(prefix)).OrderBy(s => s.Symbol).ToArray());

    public Task<IStockViewerGrain> GetStockViewer(string[] symbols) => 
        Task.FromResult(_grainFactory.GetGrain<IStockViewerGrain>(string.Join(",", symbols.OrderBy(s => s))));

    public Task<StockPrice> Price(string symbol) => _grainFactory.GetGrain<IStockGrain>(symbol).Price();

    public Task<StockPrice> OpenPrice(string symbol)=> _grainFactory.GetGrain<IStockGrain>(symbol).OpenPrice();
}