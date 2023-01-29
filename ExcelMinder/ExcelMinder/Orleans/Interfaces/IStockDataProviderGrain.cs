using System.Collections.Immutable;
using ExcelMinder.Shared;

namespace ExcelMinder.Orleans.Interfaces;

public interface IStockDataProviderGrain : IGrainWithStringKey
{
    Task<ImmutableArray<Stock>> SearchSymbols(string prefix, uint pageSize);
    
    Task<IStockViewerGrain> GetStockViewer(ImmutableArray<string> symbols);
    
    Task<StockPrice> Price(string symbol);
    Task<StockPrice> OpenPrice(string symbol);
    
    const string DefaultGrainId = "";  
}