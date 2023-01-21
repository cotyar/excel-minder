using ExcelMinder.Shared;

namespace ExcelMinder.Orleans.Interfaces;


public interface IStockGrain : IGrainWithStringKey
{
    Task<StockPrice> Price();
    Task<StockPrice> OpenPrice();
    
    Task SubscribePriceChanges(IStockViewerGrain viewer);
    Task UnSubscribePriceChanges(IStockViewerGrain viewer);
}

public interface IStockViewerGrain : IGrainWithStringKey
{
    Task<Stock[]> Symbols();
    Task<StockPriceSnapshot> PriceSnapshot();
}

public interface IStockDataProviderGrain : IGrainWithStringKey
{
    Task<Stock[]> SearchSymbols(string prefix);
    
    Task<IStockViewerGrain> GetStockViewer(string[] symbols);
    
    Task<StockPrice> Price(string symbol);
    Task<StockPrice> OpenPrice(string symbol);
    
    const string DefaultGrainId = "Default";  
}