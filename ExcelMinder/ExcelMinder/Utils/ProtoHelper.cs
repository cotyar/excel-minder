using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;

namespace ExcelMinder.Utils;

public static class ProtoHelper
{
    public static StockPrice ToStockPrice(this (string symbol, float price, Timestamp timestamp, float bid, float ask, float open, float prevClose) stock) => 
        new() { Symbol = stock.symbol, Price = stock.price, Timestamp = stock.timestamp, Bid = stock.bid, Ask = stock.ask, Open = stock.open, PrevClose = stock.prevClose };
    
    public static StockPrice ToStockPrice(this (string symbol, float price, DateTimeOffset dateTimeOffset, float bid, float ask, float open, float prevClose) stock) => 
        (stock.symbol, stock.price, Timestamp.FromDateTimeOffset(stock.dateTimeOffset), stock.bid, stock.ask, stock.open, stock.prevClose).ToStockPrice();

    public static StockPrice ToStockPrice(this (string symbol, float price, float bid, float ask, float open, float prevClose) stock) => 
        (stock.symbol, stock.price, DateTimeOffset.Now, stock.bid, stock.ask, stock.open, stock.prevClose).ToStockPrice();

    // public static StockPriceSnapshot ToStockSnapshot(this IEnumerable<(string Symbol, float Price)> stocks)
    // {
    //     var timestamp = Timestamp.FromDateTimeOffset(DateTimeOffset.Now);
    //     return new StockPriceSnapshot
    //     {
    //         Symbols = { stocks.Select(s => s.Symbol).Distinct() },
    //         Prices = { stocks.Select(s => (s.Symbol, s.Price, timestamp).ToStockPrice()) }, Timestamp = timestamp
    //     };
    // }
}