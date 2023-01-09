using ExcelMinder.Shared;
using Google.Protobuf.WellKnownTypes;
using Grpc.Net.Client;

using var Channel = GrpcChannel.ForAddress("https://localhost:7038");
var client = new StockSimulator.StockSimulatorClient(Channel);

Console.WriteLine("<Connecting ... />");

foreach (var stock in client.ListStocks(new Empty()).Stocks)
{
    Console.WriteLine(stock);
}

Console.WriteLine("<Finished />");