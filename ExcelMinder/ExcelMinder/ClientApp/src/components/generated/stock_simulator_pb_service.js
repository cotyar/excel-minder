// package: 
// file: stock_simulator.proto

var stock_simulator_pb = require("./stock_simulator_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var StockSimulator = (function () {
  function StockSimulator() {}
  StockSimulator.serviceName = "StockSimulator";
  return StockSimulator;
}());

StockSimulator.ListSymbols = {
  methodName: "ListSymbols",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.SymbolListRequest,
  responseType: stock_simulator_pb.StockList
};

StockSimulator.ListSymbolsUpdates = {
  methodName: "ListSymbolsUpdates",
  service: StockSimulator,
  requestStream: false,
  responseStream: true,
  requestType: stock_simulator_pb.SymbolListRequest,
  responseType: stock_simulator_pb.StockList
};

StockSimulator.AddStocks = {
  methodName: "AddStocks",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.Stock,
  responseType: google_protobuf_empty_pb.Empty
};

StockSimulator.GetStockPrice = {
  methodName: "GetStockPrice",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.StockRequest,
  responseType: stock_simulator_pb.StockPrice
};

StockSimulator.GetStockPriceUpdates = {
  methodName: "GetStockPriceUpdates",
  service: StockSimulator,
  requestStream: false,
  responseStream: true,
  requestType: stock_simulator_pb.StockRequest,
  responseType: stock_simulator_pb.StockPriceSnapshot
};

StockSimulator.ExecuteTrade = {
  methodName: "ExecuteTrade",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.TradeRequest,
  responseType: stock_simulator_pb.TradeResponse
};

StockSimulator.LastTradeRequests = {
  methodName: "LastTradeRequests",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.PageRequest,
  responseType: stock_simulator_pb.TradeRequestList
};

StockSimulator.LastExecutedTrades = {
  methodName: "LastExecutedTrades",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.PageRequest,
  responseType: stock_simulator_pb.TradeResponseList
};

StockSimulator.ListExcelReports = {
  methodName: "ListExcelReports",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: stock_simulator_pb.ListExcelReportResponse
};

StockSimulator.AddExcelReport = {
  methodName: "AddExcelReport",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.ExcelReport,
  responseType: google_protobuf_empty_pb.Empty
};

StockSimulator.DeleteExcelReport = {
  methodName: "DeleteExcelReport",
  service: StockSimulator,
  requestStream: false,
  responseStream: false,
  requestType: stock_simulator_pb.DeleteExcelReportRequest,
  responseType: stock_simulator_pb.DeleteExcelReportResponse
};

exports.StockSimulator = StockSimulator;

function StockSimulatorClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StockSimulatorClient.prototype.listSymbols = function listSymbols(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.ListSymbols, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.listSymbolsUpdates = function listSymbolsUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(StockSimulator.ListSymbolsUpdates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.addStocks = function addStocks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.AddStocks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.getStockPrice = function getStockPrice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.GetStockPrice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.getStockPriceUpdates = function getStockPriceUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(StockSimulator.GetStockPriceUpdates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.executeTrade = function executeTrade(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.ExecuteTrade, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.lastTradeRequests = function lastTradeRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.LastTradeRequests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.lastExecutedTrades = function lastExecutedTrades(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.LastExecutedTrades, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.listExcelReports = function listExcelReports(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.ListExcelReports, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.addExcelReport = function addExcelReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.AddExcelReport, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StockSimulatorClient.prototype.deleteExcelReport = function deleteExcelReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StockSimulator.DeleteExcelReport, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.StockSimulatorClient = StockSimulatorClient;

