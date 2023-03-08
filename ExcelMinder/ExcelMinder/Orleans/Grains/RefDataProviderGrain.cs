using System.Collections.Immutable;
using System.Globalization;
using CsvHelper;
using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;
using Microsoft.Extensions.FileSystemGlobbing.Internal.PatternContexts;

namespace ExcelMinder.Orleans.Grains;

public class RefDataProviderGrain : Grain, IRefDataProviderGrain
{
    // A list of available stocks
    private SortedDictionary <string, Stock> _stocks = new();
    
    public Task<Stock> GetStock(string symbol) => Task.FromResult(_stocks[symbol]);

    public Task<ImmutableArray<Stock>> GetKnownStocks() => Task.FromResult(_stocks.Values.OrderBy(s => s.Symbol).ToImmutableArray());
    public Task<ImmutableArray<Stock>> SearchSymbols(string prefix, int pageSize)
    {
        var prefixLower = prefix.ToLower();
        var stocks = _stocks.Values
            .Where(s => (s.Symbol ?? "").ToLower().StartsWith(prefixLower) || (s.Name ?? "").ToLower().Contains(prefixLower)).OrderBy(s => s.Symbol)
            .Take(pageSize)
            .ToImmutableArray();
        return Task.FromResult(stocks);
    }

    public override async Task OnActivateAsync(CancellationToken cancellationToken)
    {
        await base.OnActivateAsync(cancellationToken);
        // var filePath = "Data/Files/listing_status.csv";
        var filePath = "../../data/listing_status.csv";
        using var reader = new StreamReader(filePath);
        using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
        csv.Context.TypeConverterOptionsCache.GetOptions<DateTime?>().NullValues.Add("null");
        var securities = csv.GetRecords<Security>().ToList();
        _stocks = new SortedDictionary<string, Stock>(securities.ToDictionary(s => s.symbol, s => new Stock { Symbol = s.symbol, Name = s.name }));
    }
    
    private class Security
    {
        public string symbol { get; set; }
        public string name { get; set; }
        public string exchange { get; set; }
        public string assetType { get; set; }
        public DateTime? ipoDate { get; set; }
        public DateTime? delistingDate { get; set; }
        public string status { get; set; }
    }
}