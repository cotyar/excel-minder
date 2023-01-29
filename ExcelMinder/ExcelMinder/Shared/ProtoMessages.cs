namespace ExcelMinder.Shared;

[Immutable]
[GenerateSerializer]
public sealed partial class Stock
{
    public static string Delimiter = ",";
    
    // public string Symbol { get; set; }
    // public string Name { get; set; }
    // public string Exchange { get; set; }
    // public string Currency { get; set; }
    // public string Type { get; set; }
    // public string Region { get; set; }
    // public string MarketOpen { get; set; }
    // public string MarketClose { get; set; }
    // public string Timezone { get; set; }
    // public string MatchScore { get; set; }
}

[Immutable]
[GenerateSerializer]
public sealed partial class StockPrice { }

// [Immutable]
// [GenerateSerializer]
public sealed partial class StockPriceSnapshot { }

[Immutable]
[GenerateSerializer]
public class StockPriceSnapshotMessage
{
    [Id(0)]
    public long Ticks { get; set; }
    [Id(1)]
    public StockPriceSnapshot Snapshot { get; set; }
}