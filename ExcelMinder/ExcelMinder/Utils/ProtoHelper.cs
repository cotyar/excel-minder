using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;

namespace ExcelMinder.Utils;

public static class ProtoHelper
{
    public static StockPrice ToStock(this (string symbol, float price, Timestamp timestamp) stock) => new() { Symbol = stock.symbol, Price = stock.price, Timestamp = stock.timestamp};
    
    public static StockPrice ToStock(this (string symbol, float price, DateTimeOffset dateTimeOffset) stock) => (stock.symbol, stock.price, Timestamp.FromDateTimeOffset(stock.dateTimeOffset)).ToStock();

    public static StockPrice ToStock(this (string symbol, float price) stock) => (stock.symbol, stock.price, DateTimeOffset.Now).ToStock();

    public static StockPriceSnapshot ToStockSnapshot(this IEnumerable<(string Symbol, float Price)> stocks)
    {
        var timestamp = Timestamp.FromDateTimeOffset(DateTimeOffset.Now);
        return new StockPriceSnapshot { Prices = { stocks.Select(s => (s.Symbol, s.Price, timestamp).ToStock()) }, Timestamp = timestamp };
    }
}