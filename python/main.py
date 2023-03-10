from concurrent import futures
import time

import grpc
from grpc_reflection.v1alpha import reflection

import stock_simulator_pb2 as stock_simulator_pb2
import stock_simulator_pb2_grpc as stock_simulator_pb2_grpc

class StockSimulatorServicer(stock_simulator_pb2_grpc.StockSimulatorServicer):
    def ListStocks(self, request, context):
        """Returns a list of available stocks"""
        pass

    def GetStockPrice(self, request, context):
        """Returns the current price of a stock"""
        pass

    def ExecuteTrade(self, request, context):
        """Executes a trade on the stock market"""
        pass

    def LastTradeRequests(self, request, context):
        """Returns a list of the last trade requests"""
        pass

    def LastExecutedTrades(self, request, context):
        """Returns a list of the last executed trades"""
        pass

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    stock_simulator_pb2_grpc.add_StockSimulatorServicer_to_server(StockSimulatorServicer(), server)
    # the reflection service will be aware of "Greeter" and "ServerReflection" services.
    SERVICE_NAMES = (
        stock_simulator_pb2.DESCRIPTOR.services_by_name['StockSimulator'].full_name,
        reflection.SERVICE_NAME,
    )

    reflection.enable_server_reflection(SERVICE_NAMES, server)

    server.add_insecure_port('[::]:50051')
    server.start()
    try:
        while True:
            time.sleep(86400)
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    serve()
