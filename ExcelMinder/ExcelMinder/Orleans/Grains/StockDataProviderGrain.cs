using CsvHelper;
using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using Orleans.Runtime;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;

namespace ExcelMinder.Orleans.Grains;

public class StockDataProviderGrain : Grain, IStockDataProviderGrain
{
    private readonly IGrainFactory _grainFactory;
    
    public StockDataProviderGrain(IGrainFactory grainFactory)
    {
        _grainFactory = grainFactory;
    }

    public override async Task OnActivateAsync(CancellationToken cancellationToken)
    {
        await base.OnActivateAsync(cancellationToken);
    }

    public Task<ImmutableArray<Stock>> SearchSymbols(string prefix, uint pageSize) => 
        _grainFactory.GetGrain<IRefDataProviderGrain>(IRefDataProviderGrain.DefaultGrainId).SearchSymbols(prefix, (int) pageSize);

    public Task<IStockViewerGrain> GetStockViewer(ImmutableArray<string> symbols) => 
        Task.FromResult(_grainFactory.GetGrain<IStockViewerGrain>(string.Join(",", symbols.OrderBy(s => s))));

    public Task<StockPrice> Price(string symbol) => _grainFactory.GetGrain<IStockGrain>(symbol).Price();

    public Task<StockPrice> OpenPrice(string symbol)=> _grainFactory.GetGrain<IStockGrain>(symbol).OpenPrice();
}