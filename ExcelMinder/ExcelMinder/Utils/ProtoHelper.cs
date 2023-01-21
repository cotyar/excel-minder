using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;

namespace ExcelMinder.Utils;

public static class ProtoHelper
{
    public static StockPrice ToStockPrice(this (string symbol, float price, Timestamp timestamp) stock) => new() { Symbol = stock.symbol, Price = stock.price, Timestamp = stock.timestamp};
    
    public static StockPrice ToStockPrice(this (string symbol, float price, DateTimeOffset dateTimeOffset) stock) => (stock.symbol, stock.price, Timestamp.FromDateTimeOffset(stock.dateTimeOffset)).ToStockPrice();

    public static StockPrice ToStockPrice(this (string symbol, float price) stock) => (stock.symbol, stock.price, DateTimeOffset.Now).ToStockPrice();

    public static StockPriceSnapshot ToStockSnapshot(this IEnumerable<(string Symbol, float Price)> stocks)
    {
        var timestamp = Timestamp.FromDateTimeOffset(DateTimeOffset.Now);
        return new StockPriceSnapshot
        {
            Symbols = { stocks.Select(s => s.Symbol).Distinct() },
            Prices = { stocks.Select(s => (s.Symbol, s.Price, timestamp).ToStockPrice()) }, Timestamp = timestamp
        };
    }
}