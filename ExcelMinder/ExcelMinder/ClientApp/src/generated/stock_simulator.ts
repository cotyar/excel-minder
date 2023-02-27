/* eslint-disable */
// @ts-ignore
import * as Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

export enum TradeType {
  BUY = 0,
  SELL = 1,
  UNRECOGNIZED = -1,
}

export interface StockList {
  stocks: Stock[];
}

export interface Stock {
  symbol: string;
  name: string;
}

export interface StockRequest {
  symbol: string;
}

export interface StocksRequest {
  symbols: string[];
}

export interface SymbolListRequest {
  prefix: string;
  pageSize: number;
}

export interface StockPrice {
  symbol: string;
  /** TODO: Use a WKT decimal type */
  price: number;
  timestamp: Date | undefined;
}

export interface StockPriceSnapshot {
  timestamp: Date | undefined;
  symbols: string[];
  prices: StockPrice[];
}

export interface TradeRequest {
  symbol: string;
  quantity: number;
  type: TradeType;
  price: number;
}

export interface TradeResponse {
  symbol: string;
  quantity: number;
  type: TradeType;
  price: number;
  totalCost: number;
  timestamp: Date | undefined;
}

export interface PageRequest {
  page: number;
  pageSize: number;
}

export interface TradeRequestList {
  trades: TradeRequest[];
}

export interface TradeResponseList {
  trades: TradeResponse[];
}

export interface RealtimeCurrencyExchangeRate {
  fromCurrencyCode: string;
  fromCurrencyName: string;
  toCurrencyCode: string;
  toCurrencyName: string;
  exchangeRate: number;
  lastRefreshed: string;
  timeZone: string;
  bidPrice: number;
  askPrice: number;
}

export interface CellProperties {
  row: number;
  column: number;
  textColor: CellProperties_Color | undefined;
  backgroundColor: CellProperties_Color | undefined;
  font: string;
  fontSize: number;
  fontStyle: CellProperties_FontStyle | undefined;
  cellValue: string;
  columnWeight: number;
  rowHeight: number;
  border: CellProperties_Border | undefined;
}

export enum CellProperties_LineStyle {
  NONE = 0,
  SOLID = 1,
  DASHED = 2,
  DOTTED = 3,
  DOUBLE = 4,
  DASH_DOTTED = 5,
  DASH_DOT_DOTTED = 6,
  SLANT_DASH_DOTTED = 7,
  UNRECOGNIZED = -1,
}

export interface CellProperties_FontStyle {
  bold: boolean;
  italic: boolean;
  underline: number;
}

export interface CellProperties_Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export interface CellProperties_Border {
  all: CellProperties_Border_BorderProperties | undefined;
  top: CellProperties_Border_BorderProperties | undefined;
  bottom: CellProperties_Border_BorderProperties | undefined;
  left: CellProperties_Border_BorderProperties | undefined;
  right: CellProperties_Border_BorderProperties | undefined;
}

export interface CellProperties_Border_BorderProperties {
  color: CellProperties_Color | undefined;
  thickness: number;
  lineStyle: CellProperties_LineStyle;
}

export interface ExcelReport {
  reportId: string;
  rowCount: number;
  columnCount: number;
  cellProperties: CellProperties[];
}

export interface ListExcelReportResponse {
  reports: ExcelReport[];
}

export interface DeleteExcelReportRequest {
  reportId: string;
}

export interface DeleteExcelReportResponse {
  deleted: boolean;
}

function createBaseStockList(): StockList {
  return { stocks: [] };
}

export const StockList = {
  encode(message: StockList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stocks) {
      Stock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StockList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStockList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stocks.push(Stock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<StockList>): StockList {
    return StockList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StockList>): StockList {
    const message = createBaseStockList();
    message.stocks = object.stocks?.map((e) => Stock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStock(): Stock {
  return { symbol: "", name: "" };
}

export const Stock = {
  encode(message: Stock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<Stock>): Stock {
    return Stock.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Stock>): Stock {
    const message = createBaseStock();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseStockRequest(): StockRequest {
  return { symbol: "" };
}

export const StockRequest = {
  encode(message: StockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<StockRequest>): StockRequest {
    return StockRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StockRequest>): StockRequest {
    const message = createBaseStockRequest();
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseStocksRequest(): StocksRequest {
  return { symbols: [] };
}

export const StocksRequest = {
  encode(message: StocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.symbols) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbols.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<StocksRequest>): StocksRequest {
    return StocksRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StocksRequest>): StocksRequest {
    const message = createBaseStocksRequest();
    message.symbols = object.symbols?.map((e) => e) || [];
    return message;
  },
};

function createBaseSymbolListRequest(): SymbolListRequest {
  return { prefix: "", pageSize: 0 };
}

export const SymbolListRequest = {
  encode(message: SymbolListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).uint32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymbolListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymbolListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.pageSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<SymbolListRequest>): SymbolListRequest {
    return SymbolListRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SymbolListRequest>): SymbolListRequest {
    const message = createBaseSymbolListRequest();
    message.prefix = object.prefix ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseStockPrice(): StockPrice {
  return { symbol: "", price: 0, timestamp: undefined };
}

export const StockPrice = {
  encode(message: StockPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.price !== 0) {
      writer.uint32(21).float(message.price);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StockPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStockPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.price = reader.float();
          break;
        case 30:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<StockPrice>): StockPrice {
    return StockPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StockPrice>): StockPrice {
    const message = createBaseStockPrice();
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseStockPriceSnapshot(): StockPriceSnapshot {
  return { timestamp: undefined, symbols: [], prices: [] };
}

export const StockPriceSnapshot = {
  encode(message: StockPriceSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.prices) {
      StockPrice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StockPriceSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStockPriceSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.symbols.push(reader.string());
          break;
        case 3:
          message.prices.push(StockPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<StockPriceSnapshot>): StockPriceSnapshot {
    return StockPriceSnapshot.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StockPriceSnapshot>): StockPriceSnapshot {
    const message = createBaseStockPriceSnapshot();
    message.timestamp = object.timestamp ?? undefined;
    message.symbols = object.symbols?.map((e) => e) || [];
    message.prices = object.prices?.map((e) => StockPrice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradeRequest(): TradeRequest {
  return { symbol: "", quantity: 0, type: 0, price: 0 };
}

export const TradeRequest = {
  encode(message: TradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.price !== 0) {
      writer.uint32(37).float(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.price = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<TradeRequest>): TradeRequest {
    return TradeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TradeRequest>): TradeRequest {
    const message = createBaseTradeRequest();
    message.symbol = object.symbol ?? "";
    message.quantity = object.quantity ?? 0;
    message.type = object.type ?? 0;
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseTradeResponse(): TradeResponse {
  return { symbol: "", quantity: 0, type: 0, price: 0, totalCost: 0, timestamp: undefined };
}

export const TradeResponse = {
  encode(message: TradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.price !== 0) {
      writer.uint32(37).float(message.price);
    }
    if (message.totalCost !== 0) {
      writer.uint32(45).float(message.totalCost);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.price = reader.float();
          break;
        case 5:
          message.totalCost = reader.float();
          break;
        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<TradeResponse>): TradeResponse {
    return TradeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TradeResponse>): TradeResponse {
    const message = createBaseTradeResponse();
    message.symbol = object.symbol ?? "";
    message.quantity = object.quantity ?? 0;
    message.type = object.type ?? 0;
    message.price = object.price ?? 0;
    message.totalCost = object.totalCost ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBasePageRequest(): PageRequest {
  return { page: 0, pageSize: 0 };
}

export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.page = reader.int32();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<PageRequest>): PageRequest {
    return PageRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PageRequest>): PageRequest {
    const message = createBasePageRequest();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseTradeRequestList(): TradeRequestList {
  return { trades: [] };
}

export const TradeRequestList = {
  encode(message: TradeRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      TradeRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(TradeRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<TradeRequestList>): TradeRequestList {
    return TradeRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TradeRequestList>): TradeRequestList {
    const message = createBaseTradeRequestList();
    message.trades = object.trades?.map((e) => TradeRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradeResponseList(): TradeResponseList {
  return { trades: [] };
}

export const TradeResponseList = {
  encode(message: TradeResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      TradeResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(TradeResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<TradeResponseList>): TradeResponseList {
    return TradeResponseList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TradeResponseList>): TradeResponseList {
    const message = createBaseTradeResponseList();
    message.trades = object.trades?.map((e) => TradeResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRealtimeCurrencyExchangeRate(): RealtimeCurrencyExchangeRate {
  return {
    fromCurrencyCode: "",
    fromCurrencyName: "",
    toCurrencyCode: "",
    toCurrencyName: "",
    exchangeRate: 0,
    lastRefreshed: "",
    timeZone: "",
    bidPrice: 0,
    askPrice: 0,
  };
}

export const RealtimeCurrencyExchangeRate = {
  encode(message: RealtimeCurrencyExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromCurrencyCode !== "") {
      writer.uint32(10).string(message.fromCurrencyCode);
    }
    if (message.fromCurrencyName !== "") {
      writer.uint32(18).string(message.fromCurrencyName);
    }
    if (message.toCurrencyCode !== "") {
      writer.uint32(26).string(message.toCurrencyCode);
    }
    if (message.toCurrencyName !== "") {
      writer.uint32(34).string(message.toCurrencyName);
    }
    if (message.exchangeRate !== 0) {
      writer.uint32(41).double(message.exchangeRate);
    }
    if (message.lastRefreshed !== "") {
      writer.uint32(50).string(message.lastRefreshed);
    }
    if (message.timeZone !== "") {
      writer.uint32(58).string(message.timeZone);
    }
    if (message.bidPrice !== 0) {
      writer.uint32(65).double(message.bidPrice);
    }
    if (message.askPrice !== 0) {
      writer.uint32(73).double(message.askPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RealtimeCurrencyExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRealtimeCurrencyExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCurrencyCode = reader.string();
          break;
        case 2:
          message.fromCurrencyName = reader.string();
          break;
        case 3:
          message.toCurrencyCode = reader.string();
          break;
        case 4:
          message.toCurrencyName = reader.string();
          break;
        case 5:
          message.exchangeRate = reader.double();
          break;
        case 6:
          message.lastRefreshed = reader.string();
          break;
        case 7:
          message.timeZone = reader.string();
          break;
        case 8:
          message.bidPrice = reader.double();
          break;
        case 9:
          message.askPrice = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<RealtimeCurrencyExchangeRate>): RealtimeCurrencyExchangeRate {
    return RealtimeCurrencyExchangeRate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RealtimeCurrencyExchangeRate>): RealtimeCurrencyExchangeRate {
    const message = createBaseRealtimeCurrencyExchangeRate();
    message.fromCurrencyCode = object.fromCurrencyCode ?? "";
    message.fromCurrencyName = object.fromCurrencyName ?? "";
    message.toCurrencyCode = object.toCurrencyCode ?? "";
    message.toCurrencyName = object.toCurrencyName ?? "";
    message.exchangeRate = object.exchangeRate ?? 0;
    message.lastRefreshed = object.lastRefreshed ?? "";
    message.timeZone = object.timeZone ?? "";
    message.bidPrice = object.bidPrice ?? 0;
    message.askPrice = object.askPrice ?? 0;
    return message;
  },
};

function createBaseCellProperties(): CellProperties {
  return {
    row: 0,
    column: 0,
    textColor: undefined,
    backgroundColor: undefined,
    font: "",
    fontSize: 0,
    fontStyle: undefined,
    cellValue: "",
    columnWeight: 0,
    rowHeight: 0,
    border: undefined,
  };
}

export const CellProperties = {
  encode(message: CellProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.row !== 0) {
      writer.uint32(8).int32(message.row);
    }
    if (message.column !== 0) {
      writer.uint32(16).int32(message.column);
    }
    if (message.textColor !== undefined) {
      CellProperties_Color.encode(message.textColor, writer.uint32(26).fork()).ldelim();
    }
    if (message.backgroundColor !== undefined) {
      CellProperties_Color.encode(message.backgroundColor, writer.uint32(34).fork()).ldelim();
    }
    if (message.font !== "") {
      writer.uint32(42).string(message.font);
    }
    if (message.fontSize !== 0) {
      writer.uint32(49).double(message.fontSize);
    }
    if (message.fontStyle !== undefined) {
      CellProperties_FontStyle.encode(message.fontStyle, writer.uint32(58).fork()).ldelim();
    }
    if (message.cellValue !== "") {
      writer.uint32(66).string(message.cellValue);
    }
    if (message.columnWeight !== 0) {
      writer.uint32(73).double(message.columnWeight);
    }
    if (message.rowHeight !== 0) {
      writer.uint32(81).double(message.rowHeight);
    }
    if (message.border !== undefined) {
      CellProperties_Border.encode(message.border, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.row = reader.int32();
          break;
        case 2:
          message.column = reader.int32();
          break;
        case 3:
          message.textColor = CellProperties_Color.decode(reader, reader.uint32());
          break;
        case 4:
          message.backgroundColor = CellProperties_Color.decode(reader, reader.uint32());
          break;
        case 5:
          message.font = reader.string();
          break;
        case 6:
          message.fontSize = reader.double();
          break;
        case 7:
          message.fontStyle = CellProperties_FontStyle.decode(reader, reader.uint32());
          break;
        case 8:
          message.cellValue = reader.string();
          break;
        case 9:
          message.columnWeight = reader.double();
          break;
        case 10:
          message.rowHeight = reader.double();
          break;
        case 11:
          message.border = CellProperties_Border.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<CellProperties>): CellProperties {
    return CellProperties.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CellProperties>): CellProperties {
    const message = createBaseCellProperties();
    message.row = object.row ?? 0;
    message.column = object.column ?? 0;
    message.textColor = (object.textColor !== undefined && object.textColor !== null)
      ? CellProperties_Color.fromPartial(object.textColor)
      : undefined;
    message.backgroundColor = (object.backgroundColor !== undefined && object.backgroundColor !== null)
      ? CellProperties_Color.fromPartial(object.backgroundColor)
      : undefined;
    message.font = object.font ?? "";
    message.fontSize = object.fontSize ?? 0;
    message.fontStyle = (object.fontStyle !== undefined && object.fontStyle !== null)
      ? CellProperties_FontStyle.fromPartial(object.fontStyle)
      : undefined;
    message.cellValue = object.cellValue ?? "";
    message.columnWeight = object.columnWeight ?? 0;
    message.rowHeight = object.rowHeight ?? 0;
    message.border = (object.border !== undefined && object.border !== null)
      ? CellProperties_Border.fromPartial(object.border)
      : undefined;
    return message;
  },
};

function createBaseCellProperties_FontStyle(): CellProperties_FontStyle {
  return { bold: false, italic: false, underline: 0 };
}

export const CellProperties_FontStyle = {
  encode(message: CellProperties_FontStyle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bold === true) {
      writer.uint32(8).bool(message.bold);
    }
    if (message.italic === true) {
      writer.uint32(16).bool(message.italic);
    }
    if (message.underline !== 0) {
      writer.uint32(24).int32(message.underline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellProperties_FontStyle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellProperties_FontStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bold = reader.bool();
          break;
        case 2:
          message.italic = reader.bool();
          break;
        case 3:
          message.underline = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<CellProperties_FontStyle>): CellProperties_FontStyle {
    return CellProperties_FontStyle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CellProperties_FontStyle>): CellProperties_FontStyle {
    const message = createBaseCellProperties_FontStyle();
    message.bold = object.bold ?? false;
    message.italic = object.italic ?? false;
    message.underline = object.underline ?? 0;
    return message;
  },
};

function createBaseCellProperties_Color(): CellProperties_Color {
  return { red: 0, green: 0, blue: 0, alpha: 0 };
}

export const CellProperties_Color = {
  encode(message: CellProperties_Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.red !== 0) {
      writer.uint32(13).float(message.red);
    }
    if (message.green !== 0) {
      writer.uint32(21).float(message.green);
    }
    if (message.blue !== 0) {
      writer.uint32(29).float(message.blue);
    }
    if (message.alpha !== 0) {
      writer.uint32(37).float(message.alpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellProperties_Color {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellProperties_Color();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.red = reader.float();
          break;
        case 2:
          message.green = reader.float();
          break;
        case 3:
          message.blue = reader.float();
          break;
        case 4:
          message.alpha = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<CellProperties_Color>): CellProperties_Color {
    return CellProperties_Color.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CellProperties_Color>): CellProperties_Color {
    const message = createBaseCellProperties_Color();
    message.red = object.red ?? 0;
    message.green = object.green ?? 0;
    message.blue = object.blue ?? 0;
    message.alpha = object.alpha ?? 0;
    return message;
  },
};

function createBaseCellProperties_Border(): CellProperties_Border {
  return { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined };
}

export const CellProperties_Border = {
  encode(message: CellProperties_Border, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.all !== undefined) {
      CellProperties_Border_BorderProperties.encode(message.all, writer.uint32(10).fork()).ldelim();
    }
    if (message.top !== undefined) {
      CellProperties_Border_BorderProperties.encode(message.top, writer.uint32(18).fork()).ldelim();
    }
    if (message.bottom !== undefined) {
      CellProperties_Border_BorderProperties.encode(message.bottom, writer.uint32(26).fork()).ldelim();
    }
    if (message.left !== undefined) {
      CellProperties_Border_BorderProperties.encode(message.left, writer.uint32(34).fork()).ldelim();
    }
    if (message.right !== undefined) {
      CellProperties_Border_BorderProperties.encode(message.right, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellProperties_Border {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellProperties_Border();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.all = CellProperties_Border_BorderProperties.decode(reader, reader.uint32());
          break;
        case 2:
          message.top = CellProperties_Border_BorderProperties.decode(reader, reader.uint32());
          break;
        case 3:
          message.bottom = CellProperties_Border_BorderProperties.decode(reader, reader.uint32());
          break;
        case 4:
          message.left = CellProperties_Border_BorderProperties.decode(reader, reader.uint32());
          break;
        case 5:
          message.right = CellProperties_Border_BorderProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<CellProperties_Border>): CellProperties_Border {
    return CellProperties_Border.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CellProperties_Border>): CellProperties_Border {
    const message = createBaseCellProperties_Border();
    message.all = (object.all !== undefined && object.all !== null)
      ? CellProperties_Border_BorderProperties.fromPartial(object.all)
      : undefined;
    message.top = (object.top !== undefined && object.top !== null)
      ? CellProperties_Border_BorderProperties.fromPartial(object.top)
      : undefined;
    message.bottom = (object.bottom !== undefined && object.bottom !== null)
      ? CellProperties_Border_BorderProperties.fromPartial(object.bottom)
      : undefined;
    message.left = (object.left !== undefined && object.left !== null)
      ? CellProperties_Border_BorderProperties.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? CellProperties_Border_BorderProperties.fromPartial(object.right)
      : undefined;
    return message;
  },
};

function createBaseCellProperties_Border_BorderProperties(): CellProperties_Border_BorderProperties {
  return { color: undefined, thickness: 0, lineStyle: 0 };
}

export const CellProperties_Border_BorderProperties = {
  encode(message: CellProperties_Border_BorderProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== undefined) {
      CellProperties_Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.thickness !== 0) {
      writer.uint32(17).double(message.thickness);
    }
    if (message.lineStyle !== 0) {
      writer.uint32(24).int32(message.lineStyle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellProperties_Border_BorderProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellProperties_Border_BorderProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = CellProperties_Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.thickness = reader.double();
          break;
        case 3:
          message.lineStyle = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<CellProperties_Border_BorderProperties>): CellProperties_Border_BorderProperties {
    return CellProperties_Border_BorderProperties.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CellProperties_Border_BorderProperties>): CellProperties_Border_BorderProperties {
    const message = createBaseCellProperties_Border_BorderProperties();
    message.color = (object.color !== undefined && object.color !== null)
      ? CellProperties_Color.fromPartial(object.color)
      : undefined;
    message.thickness = object.thickness ?? 0;
    message.lineStyle = object.lineStyle ?? 0;
    return message;
  },
};

function createBaseExcelReport(): ExcelReport {
  return { reportId: "", rowCount: 0, columnCount: 0, cellProperties: [] };
}

export const ExcelReport = {
  encode(message: ExcelReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reportId !== "") {
      writer.uint32(10).string(message.reportId);
    }
    if (message.rowCount !== 0) {
      writer.uint32(16).int32(message.rowCount);
    }
    if (message.columnCount !== 0) {
      writer.uint32(24).int32(message.columnCount);
    }
    for (const v of message.cellProperties) {
      CellProperties.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExcelReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExcelReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = reader.string();
          break;
        case 2:
          message.rowCount = reader.int32();
          break;
        case 3:
          message.columnCount = reader.int32();
          break;
        case 4:
          message.cellProperties.push(CellProperties.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<ExcelReport>): ExcelReport {
    return ExcelReport.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExcelReport>): ExcelReport {
    const message = createBaseExcelReport();
    message.reportId = object.reportId ?? "";
    message.rowCount = object.rowCount ?? 0;
    message.columnCount = object.columnCount ?? 0;
    message.cellProperties = object.cellProperties?.map((e) => CellProperties.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListExcelReportResponse(): ListExcelReportResponse {
  return { reports: [] };
}

export const ListExcelReportResponse = {
  encode(message: ListExcelReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reports) {
      ExcelReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExcelReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExcelReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(ExcelReport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<ListExcelReportResponse>): ListExcelReportResponse {
    return ListExcelReportResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListExcelReportResponse>): ListExcelReportResponse {
    const message = createBaseListExcelReportResponse();
    message.reports = object.reports?.map((e) => ExcelReport.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteExcelReportRequest(): DeleteExcelReportRequest {
  return { reportId: "" };
}

export const DeleteExcelReportRequest = {
  encode(message: DeleteExcelReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reportId !== "") {
      writer.uint32(10).string(message.reportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExcelReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExcelReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<DeleteExcelReportRequest>): DeleteExcelReportRequest {
    return DeleteExcelReportRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteExcelReportRequest>): DeleteExcelReportRequest {
    const message = createBaseDeleteExcelReportRequest();
    message.reportId = object.reportId ?? "";
    return message;
  },
};

function createBaseDeleteExcelReportResponse(): DeleteExcelReportResponse {
  return { deleted: false };
}

export const DeleteExcelReportResponse = {
  encode(message: DeleteExcelReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deleted === true) {
      writer.uint32(8).bool(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExcelReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExcelReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  create(base?: DeepPartial<DeleteExcelReportResponse>): DeleteExcelReportResponse {
    return DeleteExcelReportResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteExcelReportResponse>): DeleteExcelReportResponse {
    const message = createBaseDeleteExcelReportResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

export type StockSimulatorDefinition = typeof StockSimulatorDefinition;
export const StockSimulatorDefinition = {
  name: "StockSimulator",
  fullName: "StockSimulator",
  methods: {
    /** Returns a list of available stocks */
    listSymbols: {
      name: "ListSymbols",
      requestType: SymbolListRequest,
      requestStream: false,
      responseType: StockList,
      responseStream: false,
      options: {},
    },
    listSymbolsUpdates: {
      name: "ListSymbolsUpdates",
      requestType: SymbolListRequest,
      requestStream: false,
      responseType: StockList,
      responseStream: true,
      options: {},
    },
    /** Add a stock to the list of available stocks */
    addStocks: {
      name: "AddStocks",
      requestType: Stock,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    /** Returns the current price of a stock */
    getStockPrice: {
      name: "GetStockPrice",
      requestType: StockRequest,
      requestStream: false,
      responseType: StockPrice,
      responseStream: false,
      options: {},
    },
    /** Returns the current price snapshot of a stock */
    getStockPrices: {
      name: "GetStockPrices",
      requestType: StocksRequest,
      requestStream: false,
      responseType: StockPriceSnapshot,
      responseStream: false,
      options: {},
    },
    getStockPriceUpdates: {
      name: "GetStockPriceUpdates",
      requestType: StocksRequest,
      requestStream: false,
      responseType: StockPriceSnapshot,
      responseStream: true,
      options: {},
    },
    /** Executes a trade on the stock market */
    executeTrade: {
      name: "ExecuteTrade",
      requestType: TradeRequest,
      requestStream: false,
      responseType: TradeResponse,
      responseStream: false,
      options: {},
    },
    lastTradeRequests: {
      name: "LastTradeRequests",
      requestType: PageRequest,
      requestStream: false,
      responseType: TradeRequestList,
      responseStream: false,
      options: {},
    },
    lastExecutedTrades: {
      name: "LastExecutedTrades",
      requestType: PageRequest,
      requestStream: false,
      responseType: TradeResponseList,
      responseStream: false,
      options: {},
    },
    listExcelReports: {
      name: "ListExcelReports",
      requestType: Empty,
      requestStream: false,
      responseType: ListExcelReportResponse,
      responseStream: false,
      options: {},
    },
    addExcelReport: {
      name: "AddExcelReport",
      requestType: ExcelReport,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    deleteExcelReport: {
      name: "DeleteExcelReport",
      requestType: DeleteExcelReportRequest,
      requestStream: false,
      responseType: DeleteExcelReportResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface StockSimulatorServiceImplementation<CallContextExt = {}> {
  /** Returns a list of available stocks */
  listSymbols(request: SymbolListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StockList>>;
  listSymbolsUpdates(
    request: SymbolListRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<StockList>>;
  /** Add a stock to the list of available stocks */
  addStocks(request: Stock, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  /** Returns the current price of a stock */
  getStockPrice(request: StockRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StockPrice>>;
  /** Returns the current price snapshot of a stock */
  getStockPrices(
    request: StocksRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StockPriceSnapshot>>;
  getStockPriceUpdates(
    request: StocksRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<StockPriceSnapshot>>;
  /** Executes a trade on the stock market */
  executeTrade(request: TradeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TradeResponse>>;
  lastTradeRequests(
    request: PageRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TradeRequestList>>;
  lastExecutedTrades(
    request: PageRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TradeResponseList>>;
  listExcelReports(
    request: Empty,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListExcelReportResponse>>;
  addExcelReport(request: ExcelReport, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  deleteExcelReport(
    request: DeleteExcelReportRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteExcelReportResponse>>;
}

export interface StockSimulatorClient<CallOptionsExt = {}> {
  /** Returns a list of available stocks */
  listSymbols(request: DeepPartial<SymbolListRequest>, options?: CallOptions & CallOptionsExt): Promise<StockList>;
  listSymbolsUpdates(
    request: DeepPartial<SymbolListRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<StockList>;
  /** Add a stock to the list of available stocks */
  addStocks(request: DeepPartial<Stock>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  /** Returns the current price of a stock */
  getStockPrice(request: DeepPartial<StockRequest>, options?: CallOptions & CallOptionsExt): Promise<StockPrice>;
  /** Returns the current price snapshot of a stock */
  getStockPrices(
    request: DeepPartial<StocksRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StockPriceSnapshot>;
  getStockPriceUpdates(
    request: DeepPartial<StocksRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<StockPriceSnapshot>;
  /** Executes a trade on the stock market */
  executeTrade(request: DeepPartial<TradeRequest>, options?: CallOptions & CallOptionsExt): Promise<TradeResponse>;
  lastTradeRequests(
    request: DeepPartial<PageRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TradeRequestList>;
  lastExecutedTrades(
    request: DeepPartial<PageRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TradeResponseList>;
  listExcelReports(
    request: DeepPartial<Empty>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListExcelReportResponse>;
  addExcelReport(request: DeepPartial<ExcelReport>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  deleteExcelReport(
    request: DeepPartial<DeleteExcelReportRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteExcelReportResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
