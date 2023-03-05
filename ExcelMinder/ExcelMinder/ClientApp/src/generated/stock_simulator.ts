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

export function tradeTypeFromJSON(object: any): TradeType {
  switch (object) {
    case 0:
    case "BUY":
      return TradeType.BUY;
    case 1:
    case "SELL":
      return TradeType.SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TradeType.UNRECOGNIZED;
  }
}

export function tradeTypeToJSON(object: TradeType): string {
  switch (object) {
    case TradeType.BUY:
      return "BUY";
    case TradeType.SELL:
      return "SELL";
    case TradeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
  alignment: CellProperties_Alignment | undefined;
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

export function cellProperties_LineStyleFromJSON(object: any): CellProperties_LineStyle {
  switch (object) {
    case 0:
    case "NONE":
      return CellProperties_LineStyle.NONE;
    case 1:
    case "SOLID":
      return CellProperties_LineStyle.SOLID;
    case 2:
    case "DASHED":
      return CellProperties_LineStyle.DASHED;
    case 3:
    case "DOTTED":
      return CellProperties_LineStyle.DOTTED;
    case 4:
    case "DOUBLE":
      return CellProperties_LineStyle.DOUBLE;
    case 5:
    case "DASH_DOTTED":
      return CellProperties_LineStyle.DASH_DOTTED;
    case 6:
    case "DASH_DOT_DOTTED":
      return CellProperties_LineStyle.DASH_DOT_DOTTED;
    case 7:
    case "SLANT_DASH_DOTTED":
      return CellProperties_LineStyle.SLANT_DASH_DOTTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CellProperties_LineStyle.UNRECOGNIZED;
  }
}

export function cellProperties_LineStyleToJSON(object: CellProperties_LineStyle): string {
  switch (object) {
    case CellProperties_LineStyle.NONE:
      return "NONE";
    case CellProperties_LineStyle.SOLID:
      return "SOLID";
    case CellProperties_LineStyle.DASHED:
      return "DASHED";
    case CellProperties_LineStyle.DOTTED:
      return "DOTTED";
    case CellProperties_LineStyle.DOUBLE:
      return "DOUBLE";
    case CellProperties_LineStyle.DASH_DOTTED:
      return "DASH_DOTTED";
    case CellProperties_LineStyle.DASH_DOT_DOTTED:
      return "DASH_DOT_DOTTED";
    case CellProperties_LineStyle.SLANT_DASH_DOTTED:
      return "SLANT_DASH_DOTTED";
    case CellProperties_LineStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export interface CellProperties_Alignment {
  horizontal: CellProperties_Alignment_HorizontalAlignment;
  vertical: CellProperties_Alignment_VerticalAlignment;
}

export enum CellProperties_Alignment_HorizontalAlignment {
  LEFT = 0,
  CENTER = 1,
  RIGHT = 2,
  JUSTIFY = 3,
  UNRECOGNIZED = -1,
}

export function cellProperties_Alignment_HorizontalAlignmentFromJSON(
  object: any,
): CellProperties_Alignment_HorizontalAlignment {
  switch (object) {
    case 0:
    case "LEFT":
      return CellProperties_Alignment_HorizontalAlignment.LEFT;
    case 1:
    case "CENTER":
      return CellProperties_Alignment_HorizontalAlignment.CENTER;
    case 2:
    case "RIGHT":
      return CellProperties_Alignment_HorizontalAlignment.RIGHT;
    case 3:
    case "JUSTIFY":
      return CellProperties_Alignment_HorizontalAlignment.JUSTIFY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CellProperties_Alignment_HorizontalAlignment.UNRECOGNIZED;
  }
}

export function cellProperties_Alignment_HorizontalAlignmentToJSON(
  object: CellProperties_Alignment_HorizontalAlignment,
): string {
  switch (object) {
    case CellProperties_Alignment_HorizontalAlignment.LEFT:
      return "LEFT";
    case CellProperties_Alignment_HorizontalAlignment.CENTER:
      return "CENTER";
    case CellProperties_Alignment_HorizontalAlignment.RIGHT:
      return "RIGHT";
    case CellProperties_Alignment_HorizontalAlignment.JUSTIFY:
      return "JUSTIFY";
    case CellProperties_Alignment_HorizontalAlignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CellProperties_Alignment_VerticalAlignment {
  TOP = 0,
  MIDDLE = 1,
  BOTTOM = 2,
  UNRECOGNIZED = -1,
}

export function cellProperties_Alignment_VerticalAlignmentFromJSON(
  object: any,
): CellProperties_Alignment_VerticalAlignment {
  switch (object) {
    case 0:
    case "TOP":
      return CellProperties_Alignment_VerticalAlignment.TOP;
    case 1:
    case "MIDDLE":
      return CellProperties_Alignment_VerticalAlignment.MIDDLE;
    case 2:
    case "BOTTOM":
      return CellProperties_Alignment_VerticalAlignment.BOTTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CellProperties_Alignment_VerticalAlignment.UNRECOGNIZED;
  }
}

export function cellProperties_Alignment_VerticalAlignmentToJSON(
  object: CellProperties_Alignment_VerticalAlignment,
): string {
  switch (object) {
    case CellProperties_Alignment_VerticalAlignment.TOP:
      return "TOP";
    case CellProperties_Alignment_VerticalAlignment.MIDDLE:
      return "MIDDLE";
    case CellProperties_Alignment_VerticalAlignment.BOTTOM:
      return "BOTTOM";
    case CellProperties_Alignment_VerticalAlignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

  fromJSON(object: any): StockList {
    return { stocks: Array.isArray(object?.stocks) ? object.stocks.map((e: any) => Stock.fromJSON(e)) : [] };
  },

  toJSON(message: StockList): unknown {
    const obj: any = {};
    if (message.stocks) {
      obj.stocks = message.stocks.map((e) => e ? Stock.toJSON(e) : undefined);
    } else {
      obj.stocks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StockList>, I>>(base?: I): StockList {
    return StockList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StockList>, I>>(object: I): StockList {
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

  fromJSON(object: any): Stock {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Stock): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Stock>, I>>(base?: I): Stock {
    return Stock.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Stock>, I>>(object: I): Stock {
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

  fromJSON(object: any): StockRequest {
    return { symbol: isSet(object.symbol) ? String(object.symbol) : "" };
  },

  toJSON(message: StockRequest): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  create<I extends Exact<DeepPartial<StockRequest>, I>>(base?: I): StockRequest {
    return StockRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StockRequest>, I>>(object: I): StockRequest {
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

  fromJSON(object: any): StocksRequest {
    return { symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [] };
  },

  toJSON(message: StocksRequest): unknown {
    const obj: any = {};
    if (message.symbols) {
      obj.symbols = message.symbols.map((e) => e);
    } else {
      obj.symbols = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StocksRequest>, I>>(base?: I): StocksRequest {
    return StocksRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StocksRequest>, I>>(object: I): StocksRequest {
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

  fromJSON(object: any): SymbolListRequest {
    return {
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: SymbolListRequest): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<SymbolListRequest>, I>>(base?: I): SymbolListRequest {
    return SymbolListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SymbolListRequest>, I>>(object: I): SymbolListRequest {
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

  fromJSON(object: any): StockPrice {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: StockPrice): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.price !== undefined && (obj.price = message.price);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<StockPrice>, I>>(base?: I): StockPrice {
    return StockPrice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StockPrice>, I>>(object: I): StockPrice {
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

  fromJSON(object: any): StockPriceSnapshot {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => StockPrice.fromJSON(e)) : [],
    };
  },

  toJSON(message: StockPriceSnapshot): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    if (message.symbols) {
      obj.symbols = message.symbols.map((e) => e);
    } else {
      obj.symbols = [];
    }
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? StockPrice.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StockPriceSnapshot>, I>>(base?: I): StockPriceSnapshot {
    return StockPriceSnapshot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StockPriceSnapshot>, I>>(object: I): StockPriceSnapshot {
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

  fromJSON(object: any): TradeRequest {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      type: isSet(object.type) ? tradeTypeFromJSON(object.type) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: TradeRequest): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.type !== undefined && (obj.type = tradeTypeToJSON(message.type));
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  create<I extends Exact<DeepPartial<TradeRequest>, I>>(base?: I): TradeRequest {
    return TradeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TradeRequest>, I>>(object: I): TradeRequest {
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

  fromJSON(object: any): TradeResponse {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      type: isSet(object.type) ? tradeTypeFromJSON(object.type) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      totalCost: isSet(object.totalCost) ? Number(object.totalCost) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: TradeResponse): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.type !== undefined && (obj.type = tradeTypeToJSON(message.type));
    message.price !== undefined && (obj.price = message.price);
    message.totalCost !== undefined && (obj.totalCost = message.totalCost);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<TradeResponse>, I>>(base?: I): TradeResponse {
    return TradeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TradeResponse>, I>>(object: I): TradeResponse {
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

  fromJSON(object: any): PageRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<PageRequest>, I>>(base?: I): PageRequest {
    return PageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PageRequest>, I>>(object: I): PageRequest {
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

  fromJSON(object: any): TradeRequestList {
    return { trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => TradeRequest.fromJSON(e)) : [] };
  },

  toJSON(message: TradeRequestList): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => e ? TradeRequest.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TradeRequestList>, I>>(base?: I): TradeRequestList {
    return TradeRequestList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TradeRequestList>, I>>(object: I): TradeRequestList {
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

  fromJSON(object: any): TradeResponseList {
    return { trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => TradeResponse.fromJSON(e)) : [] };
  },

  toJSON(message: TradeResponseList): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => e ? TradeResponse.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TradeResponseList>, I>>(base?: I): TradeResponseList {
    return TradeResponseList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TradeResponseList>, I>>(object: I): TradeResponseList {
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

  fromJSON(object: any): RealtimeCurrencyExchangeRate {
    return {
      fromCurrencyCode: isSet(object.fromCurrencyCode) ? String(object.fromCurrencyCode) : "",
      fromCurrencyName: isSet(object.fromCurrencyName) ? String(object.fromCurrencyName) : "",
      toCurrencyCode: isSet(object.toCurrencyCode) ? String(object.toCurrencyCode) : "",
      toCurrencyName: isSet(object.toCurrencyName) ? String(object.toCurrencyName) : "",
      exchangeRate: isSet(object.exchangeRate) ? Number(object.exchangeRate) : 0,
      lastRefreshed: isSet(object.lastRefreshed) ? String(object.lastRefreshed) : "",
      timeZone: isSet(object.timeZone) ? String(object.timeZone) : "",
      bidPrice: isSet(object.bidPrice) ? Number(object.bidPrice) : 0,
      askPrice: isSet(object.askPrice) ? Number(object.askPrice) : 0,
    };
  },

  toJSON(message: RealtimeCurrencyExchangeRate): unknown {
    const obj: any = {};
    message.fromCurrencyCode !== undefined && (obj.fromCurrencyCode = message.fromCurrencyCode);
    message.fromCurrencyName !== undefined && (obj.fromCurrencyName = message.fromCurrencyName);
    message.toCurrencyCode !== undefined && (obj.toCurrencyCode = message.toCurrencyCode);
    message.toCurrencyName !== undefined && (obj.toCurrencyName = message.toCurrencyName);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.lastRefreshed !== undefined && (obj.lastRefreshed = message.lastRefreshed);
    message.timeZone !== undefined && (obj.timeZone = message.timeZone);
    message.bidPrice !== undefined && (obj.bidPrice = message.bidPrice);
    message.askPrice !== undefined && (obj.askPrice = message.askPrice);
    return obj;
  },

  create<I extends Exact<DeepPartial<RealtimeCurrencyExchangeRate>, I>>(base?: I): RealtimeCurrencyExchangeRate {
    return RealtimeCurrencyExchangeRate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RealtimeCurrencyExchangeRate>, I>>(object: I): RealtimeCurrencyExchangeRate {
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
    alignment: undefined,
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
    if (message.alignment !== undefined) {
      CellProperties_Alignment.encode(message.alignment, writer.uint32(98).fork()).ldelim();
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
        case 12:
          message.alignment = CellProperties_Alignment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CellProperties {
    return {
      row: isSet(object.row) ? Number(object.row) : 0,
      column: isSet(object.column) ? Number(object.column) : 0,
      textColor: isSet(object.textColor) ? CellProperties_Color.fromJSON(object.textColor) : undefined,
      backgroundColor: isSet(object.backgroundColor)
        ? CellProperties_Color.fromJSON(object.backgroundColor)
        : undefined,
      font: isSet(object.font) ? String(object.font) : "",
      fontSize: isSet(object.fontSize) ? Number(object.fontSize) : 0,
      fontStyle: isSet(object.fontStyle) ? CellProperties_FontStyle.fromJSON(object.fontStyle) : undefined,
      cellValue: isSet(object.cellValue) ? String(object.cellValue) : "",
      columnWeight: isSet(object.columnWeight) ? Number(object.columnWeight) : 0,
      rowHeight: isSet(object.rowHeight) ? Number(object.rowHeight) : 0,
      border: isSet(object.border) ? CellProperties_Border.fromJSON(object.border) : undefined,
      alignment: isSet(object.alignment) ? CellProperties_Alignment.fromJSON(object.alignment) : undefined,
    };
  },

  toJSON(message: CellProperties): unknown {
    const obj: any = {};
    message.row !== undefined && (obj.row = Math.round(message.row));
    message.column !== undefined && (obj.column = Math.round(message.column));
    message.textColor !== undefined &&
      (obj.textColor = message.textColor ? CellProperties_Color.toJSON(message.textColor) : undefined);
    message.backgroundColor !== undefined &&
      (obj.backgroundColor = message.backgroundColor
        ? CellProperties_Color.toJSON(message.backgroundColor)
        : undefined);
    message.font !== undefined && (obj.font = message.font);
    message.fontSize !== undefined && (obj.fontSize = message.fontSize);
    message.fontStyle !== undefined &&
      (obj.fontStyle = message.fontStyle ? CellProperties_FontStyle.toJSON(message.fontStyle) : undefined);
    message.cellValue !== undefined && (obj.cellValue = message.cellValue);
    message.columnWeight !== undefined && (obj.columnWeight = message.columnWeight);
    message.rowHeight !== undefined && (obj.rowHeight = message.rowHeight);
    message.border !== undefined &&
      (obj.border = message.border ? CellProperties_Border.toJSON(message.border) : undefined);
    message.alignment !== undefined &&
      (obj.alignment = message.alignment ? CellProperties_Alignment.toJSON(message.alignment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CellProperties>, I>>(base?: I): CellProperties {
    return CellProperties.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CellProperties>, I>>(object: I): CellProperties {
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
    message.alignment = (object.alignment !== undefined && object.alignment !== null)
      ? CellProperties_Alignment.fromPartial(object.alignment)
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

  fromJSON(object: any): CellProperties_FontStyle {
    return {
      bold: isSet(object.bold) ? Boolean(object.bold) : false,
      italic: isSet(object.italic) ? Boolean(object.italic) : false,
      underline: isSet(object.underline) ? Number(object.underline) : 0,
    };
  },

  toJSON(message: CellProperties_FontStyle): unknown {
    const obj: any = {};
    message.bold !== undefined && (obj.bold = message.bold);
    message.italic !== undefined && (obj.italic = message.italic);
    message.underline !== undefined && (obj.underline = Math.round(message.underline));
    return obj;
  },

  create<I extends Exact<DeepPartial<CellProperties_FontStyle>, I>>(base?: I): CellProperties_FontStyle {
    return CellProperties_FontStyle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CellProperties_FontStyle>, I>>(object: I): CellProperties_FontStyle {
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

  fromJSON(object: any): CellProperties_Color {
    return {
      red: isSet(object.red) ? Number(object.red) : 0,
      green: isSet(object.green) ? Number(object.green) : 0,
      blue: isSet(object.blue) ? Number(object.blue) : 0,
      alpha: isSet(object.alpha) ? Number(object.alpha) : 0,
    };
  },

  toJSON(message: CellProperties_Color): unknown {
    const obj: any = {};
    message.red !== undefined && (obj.red = message.red);
    message.green !== undefined && (obj.green = message.green);
    message.blue !== undefined && (obj.blue = message.blue);
    message.alpha !== undefined && (obj.alpha = message.alpha);
    return obj;
  },

  create<I extends Exact<DeepPartial<CellProperties_Color>, I>>(base?: I): CellProperties_Color {
    return CellProperties_Color.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CellProperties_Color>, I>>(object: I): CellProperties_Color {
    const message = createBaseCellProperties_Color();
    message.red = object.red ?? 0;
    message.green = object.green ?? 0;
    message.blue = object.blue ?? 0;
    message.alpha = object.alpha ?? 0;
    return message;
  },
};

function createBaseCellProperties_Alignment(): CellProperties_Alignment {
  return { horizontal: 0, vertical: 0 };
}

export const CellProperties_Alignment = {
  encode(message: CellProperties_Alignment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.horizontal !== 0) {
      writer.uint32(8).int32(message.horizontal);
    }
    if (message.vertical !== 0) {
      writer.uint32(16).int32(message.vertical);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellProperties_Alignment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellProperties_Alignment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.horizontal = reader.int32() as any;
          break;
        case 2:
          message.vertical = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CellProperties_Alignment {
    return {
      horizontal: isSet(object.horizontal)
        ? cellProperties_Alignment_HorizontalAlignmentFromJSON(object.horizontal)
        : 0,
      vertical: isSet(object.vertical) ? cellProperties_Alignment_VerticalAlignmentFromJSON(object.vertical) : 0,
    };
  },

  toJSON(message: CellProperties_Alignment): unknown {
    const obj: any = {};
    message.horizontal !== undefined &&
      (obj.horizontal = cellProperties_Alignment_HorizontalAlignmentToJSON(message.horizontal));
    message.vertical !== undefined &&
      (obj.vertical = cellProperties_Alignment_VerticalAlignmentToJSON(message.vertical));
    return obj;
  },

  create<I extends Exact<DeepPartial<CellProperties_Alignment>, I>>(base?: I): CellProperties_Alignment {
    return CellProperties_Alignment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CellProperties_Alignment>, I>>(object: I): CellProperties_Alignment {
    const message = createBaseCellProperties_Alignment();
    message.horizontal = object.horizontal ?? 0;
    message.vertical = object.vertical ?? 0;
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

  fromJSON(object: any): CellProperties_Border {
    return {
      all: isSet(object.all) ? CellProperties_Border_BorderProperties.fromJSON(object.all) : undefined,
      top: isSet(object.top) ? CellProperties_Border_BorderProperties.fromJSON(object.top) : undefined,
      bottom: isSet(object.bottom) ? CellProperties_Border_BorderProperties.fromJSON(object.bottom) : undefined,
      left: isSet(object.left) ? CellProperties_Border_BorderProperties.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? CellProperties_Border_BorderProperties.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: CellProperties_Border): unknown {
    const obj: any = {};
    message.all !== undefined &&
      (obj.all = message.all ? CellProperties_Border_BorderProperties.toJSON(message.all) : undefined);
    message.top !== undefined &&
      (obj.top = message.top ? CellProperties_Border_BorderProperties.toJSON(message.top) : undefined);
    message.bottom !== undefined &&
      (obj.bottom = message.bottom ? CellProperties_Border_BorderProperties.toJSON(message.bottom) : undefined);
    message.left !== undefined &&
      (obj.left = message.left ? CellProperties_Border_BorderProperties.toJSON(message.left) : undefined);
    message.right !== undefined &&
      (obj.right = message.right ? CellProperties_Border_BorderProperties.toJSON(message.right) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CellProperties_Border>, I>>(base?: I): CellProperties_Border {
    return CellProperties_Border.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CellProperties_Border>, I>>(object: I): CellProperties_Border {
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

  fromJSON(object: any): CellProperties_Border_BorderProperties {
    return {
      color: isSet(object.color) ? CellProperties_Color.fromJSON(object.color) : undefined,
      thickness: isSet(object.thickness) ? Number(object.thickness) : 0,
      lineStyle: isSet(object.lineStyle) ? cellProperties_LineStyleFromJSON(object.lineStyle) : 0,
    };
  },

  toJSON(message: CellProperties_Border_BorderProperties): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color ? CellProperties_Color.toJSON(message.color) : undefined);
    message.thickness !== undefined && (obj.thickness = message.thickness);
    message.lineStyle !== undefined && (obj.lineStyle = cellProperties_LineStyleToJSON(message.lineStyle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CellProperties_Border_BorderProperties>, I>>(
    base?: I,
  ): CellProperties_Border_BorderProperties {
    return CellProperties_Border_BorderProperties.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CellProperties_Border_BorderProperties>, I>>(
    object: I,
  ): CellProperties_Border_BorderProperties {
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

  fromJSON(object: any): ExcelReport {
    return {
      reportId: isSet(object.reportId) ? String(object.reportId) : "",
      rowCount: isSet(object.rowCount) ? Number(object.rowCount) : 0,
      columnCount: isSet(object.columnCount) ? Number(object.columnCount) : 0,
      cellProperties: Array.isArray(object?.cellProperties)
        ? object.cellProperties.map((e: any) => CellProperties.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExcelReport): unknown {
    const obj: any = {};
    message.reportId !== undefined && (obj.reportId = message.reportId);
    message.rowCount !== undefined && (obj.rowCount = Math.round(message.rowCount));
    message.columnCount !== undefined && (obj.columnCount = Math.round(message.columnCount));
    if (message.cellProperties) {
      obj.cellProperties = message.cellProperties.map((e) => e ? CellProperties.toJSON(e) : undefined);
    } else {
      obj.cellProperties = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExcelReport>, I>>(base?: I): ExcelReport {
    return ExcelReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExcelReport>, I>>(object: I): ExcelReport {
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

  fromJSON(object: any): ListExcelReportResponse {
    return { reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => ExcelReport.fromJSON(e)) : [] };
  },

  toJSON(message: ListExcelReportResponse): unknown {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) => e ? ExcelReport.toJSON(e) : undefined);
    } else {
      obj.reports = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListExcelReportResponse>, I>>(base?: I): ListExcelReportResponse {
    return ListExcelReportResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListExcelReportResponse>, I>>(object: I): ListExcelReportResponse {
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

  fromJSON(object: any): DeleteExcelReportRequest {
    return { reportId: isSet(object.reportId) ? String(object.reportId) : "" };
  },

  toJSON(message: DeleteExcelReportRequest): unknown {
    const obj: any = {};
    message.reportId !== undefined && (obj.reportId = message.reportId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExcelReportRequest>, I>>(base?: I): DeleteExcelReportRequest {
    return DeleteExcelReportRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExcelReportRequest>, I>>(object: I): DeleteExcelReportRequest {
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

  fromJSON(object: any): DeleteExcelReportResponse {
    return { deleted: isSet(object.deleted) ? Boolean(object.deleted) : false };
  },

  toJSON(message: DeleteExcelReportResponse): unknown {
    const obj: any = {};
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExcelReportResponse>, I>>(base?: I): DeleteExcelReportResponse {
    return DeleteExcelReportResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExcelReportResponse>, I>>(object: I): DeleteExcelReportResponse {
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
    excelReportsUpdates: {
      name: "ExcelReportsUpdates",
      requestType: Empty,
      requestStream: false,
      responseType: ListExcelReportResponse,
      responseStream: true,
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
  excelReportsUpdates(
    request: Empty,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ListExcelReportResponse>>;
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
  excelReportsUpdates(
    request: DeepPartial<Empty>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<ListExcelReportResponse>;
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
