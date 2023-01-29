using System.Collections.Immutable;
using ExcelMinder.Shared;

namespace ExcelMinder.Orleans.Interfaces;

public interface IRefDataProviderGrain : IGrainWithStringKey
{
    Task<Stock> GetStock(string symbol);
    
    Task<ImmutableArray<Stock>> GetKnownStocks();
    
    Task<ImmutableArray<Stock>> SearchSymbols(string prefix, int pageSize);
    
    const string DefaultGrainId = "";
}