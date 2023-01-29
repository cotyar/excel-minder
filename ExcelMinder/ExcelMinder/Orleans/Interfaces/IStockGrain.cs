using ExcelMinder.Shared;

namespace ExcelMinder.Orleans.Interfaces;


public interface IStockGrain : IGrainWithStringKey
{
    Task<StockPrice> Price();
    Task<StockPrice> OpenPrice();
    
    Task SubscribePriceChanges(IStockViewerGrain viewer);
    Task UnSubscribePriceChanges(IStockViewerGrain viewer);
}