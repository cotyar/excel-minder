// package: 
// file: stock_simulator.proto

import * as stock_simulator_pb from "./stock_simulator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StockSimulatorListSymbols = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.SymbolListRequest;
  readonly responseType: typeof stock_simulator_pb.StockList;
};

type StockSimulatorListSymbolsUpdates = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof stock_simulator_pb.SymbolListRequest;
  readonly responseType: typeof stock_simulator_pb.StockList;
};

type StockSimulatorAddStocks = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.Stock;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type StockSimulatorGetStockPrice = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.StockRequest;
  readonly responseType: typeof stock_simulator_pb.StockPrice;
};

type StockSimulatorGetStockPriceUpdates = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof stock_simulator_pb.StockRequest;
  readonly responseType: typeof stock_simulator_pb.StockPriceSnapshot;
};

type StockSimulatorExecuteTrade = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.TradeRequest;
  readonly responseType: typeof stock_simulator_pb.TradeResponse;
};

type StockSimulatorLastTradeRequests = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.PageRequest;
  readonly responseType: typeof stock_simulator_pb.TradeRequestList;
};

type StockSimulatorLastExecutedTrades = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.PageRequest;
  readonly responseType: typeof stock_simulator_pb.TradeResponseList;
};

type StockSimulatorListExcelReports = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof stock_simulator_pb.ListExcelReportResponse;
};

type StockSimulatorAddExcelReport = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.ExcelReport;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type StockSimulatorDeleteExcelReport = {
  readonly methodName: string;
  readonly service: typeof StockSimulator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_simulator_pb.DeleteExcelReportRequest;
  readonly responseType: typeof stock_simulator_pb.DeleteExcelReportResponse;
};

export class StockSimulator {
  static readonly serviceName: string;
  static readonly ListSymbols: StockSimulatorListSymbols;
  static readonly ListSymbolsUpdates: StockSimulatorListSymbolsUpdates;
  static readonly AddStocks: StockSimulatorAddStocks;
  static readonly GetStockPrice: StockSimulatorGetStockPrice;
  static readonly GetStockPriceUpdates: StockSimulatorGetStockPriceUpdates;
  static readonly ExecuteTrade: StockSimulatorExecuteTrade;
  static readonly LastTradeRequests: StockSimulatorLastTradeRequests;
  static readonly LastExecutedTrades: StockSimulatorLastExecutedTrades;
  static readonly ListExcelReports: StockSimulatorListExcelReports;
  static readonly AddExcelReport: StockSimulatorAddExcelReport;
  static readonly DeleteExcelReport: StockSimulatorDeleteExcelReport;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class StockSimulatorClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listSymbols(
    requestMessage: stock_simulator_pb.SymbolListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.StockList|null) => void
  ): UnaryResponse;
  listSymbols(
    requestMessage: stock_simulator_pb.SymbolListRequest,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.StockList|null) => void
  ): UnaryResponse;
  listSymbolsUpdates(requestMessage: stock_simulator_pb.SymbolListRequest, metadata?: grpc.Metadata): ResponseStream<stock_simulator_pb.StockList>;
  addStocks(
    requestMessage: stock_simulator_pb.Stock,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addStocks(
    requestMessage: stock_simulator_pb.Stock,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getStockPrice(
    requestMessage: stock_simulator_pb.StockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.StockPrice|null) => void
  ): UnaryResponse;
  getStockPrice(
    requestMessage: stock_simulator_pb.StockRequest,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.StockPrice|null) => void
  ): UnaryResponse;
  getStockPriceUpdates(requestMessage: stock_simulator_pb.StockRequest, metadata?: grpc.Metadata): ResponseStream<stock_simulator_pb.StockPriceSnapshot>;
  executeTrade(
    requestMessage: stock_simulator_pb.TradeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.TradeResponse|null) => void
  ): UnaryResponse;
  executeTrade(
    requestMessage: stock_simulator_pb.TradeRequest,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.TradeResponse|null) => void
  ): UnaryResponse;
  lastTradeRequests(
    requestMessage: stock_simulator_pb.PageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.TradeRequestList|null) => void
  ): UnaryResponse;
  lastTradeRequests(
    requestMessage: stock_simulator_pb.PageRequest,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.TradeRequestList|null) => void
  ): UnaryResponse;
  lastExecutedTrades(
    requestMessage: stock_simulator_pb.PageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.TradeResponseList|null) => void
  ): UnaryResponse;
  lastExecutedTrades(
    requestMessage: stock_simulator_pb.PageRequest,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.TradeResponseList|null) => void
  ): UnaryResponse;
  listExcelReports(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.ListExcelReportResponse|null) => void
  ): UnaryResponse;
  listExcelReports(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.ListExcelReportResponse|null) => void
  ): UnaryResponse;
  addExcelReport(
    requestMessage: stock_simulator_pb.ExcelReport,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addExcelReport(
    requestMessage: stock_simulator_pb.ExcelReport,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteExcelReport(
    requestMessage: stock_simulator_pb.DeleteExcelReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.DeleteExcelReportResponse|null) => void
  ): UnaryResponse;
  deleteExcelReport(
    requestMessage: stock_simulator_pb.DeleteExcelReportRequest,
    callback: (error: ServiceError|null, responseMessage: stock_simulator_pb.DeleteExcelReportResponse|null) => void
  ): UnaryResponse;
}

