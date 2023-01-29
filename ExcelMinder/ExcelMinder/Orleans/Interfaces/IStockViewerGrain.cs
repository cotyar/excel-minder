using System.Collections.Immutable;
using ExcelMinder.Shared;
using Orleans.Runtime;

namespace ExcelMinder.Orleans.Interfaces;

public interface IStockViewerGrain : IGrainWithStringKey
{
    Task<ImmutableArray<Stock>> Symbols();
    Task<StockPriceSnapshot> PriceSnapshot();

    Task<StreamId> PriceUpdatesStreamId();

    Task UpdatePrice(StockPrice price);
    
    const string StreamProviderName = "StockViewverStreams";
}