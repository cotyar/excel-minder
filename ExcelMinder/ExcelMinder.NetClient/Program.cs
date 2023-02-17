using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using Grpc.Net.Client;

using var Channel = GrpcChannel.ForAddress("https://localhost:7038");
var client = new StockSimulator.StockSimulatorClient(Channel);

Console.WriteLine("<Listing Stocks ... />");

foreach (var stock in client.ListSymbols(new SymbolListRequest { Prefix = "", PageSize = 20 }).Stocks)
{
    Console.WriteLine(stock);
}

Console.WriteLine("<Finished Listing Stocks />");

Console.WriteLine("<Getting Price Updates for 'AA' ... />");

var stream = client.GetStockPriceUpdates(new StocksRequest { Symbols = { "GOOG", "MSFT" }}).ResponseStream;

while (await stream.MoveNext())
{
    Console.WriteLine(stream.Current);
}

Console.WriteLine("<Finished Listing Stocks />");