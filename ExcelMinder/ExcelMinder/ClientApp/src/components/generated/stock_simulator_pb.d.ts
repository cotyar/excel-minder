// package: 
// file: stock_simulator.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class StockList extends jspb.Message {
  clearStocksList(): void;
  getStocksList(): Array<Stock>;
  setStocksList(value: Array<Stock>): void;
  addStocks(value?: Stock, index?: number): Stock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockList.AsObject;
  static toObject(includeInstance: boolean, msg: StockList): StockList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockList;
  static deserializeBinaryFromReader(message: StockList, reader: jspb.BinaryReader): StockList;
}

export namespace StockList {
  export type AsObject = {
    stocksList: Array<Stock.AsObject>,
  }
}

export class Stock extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stock.AsObject;
  static toObject(includeInstance: boolean, msg: Stock): Stock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Stock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stock;
  static deserializeBinaryFromReader(message: Stock, reader: jspb.BinaryReader): Stock;
}

export namespace Stock {
  export type AsObject = {
    symbol: string,
    name: string,
  }
}

export class StockRequest extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StockRequest): StockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockRequest;
  static deserializeBinaryFromReader(message: StockRequest, reader: jspb.BinaryReader): StockRequest;
}

export namespace StockRequest {
  export type AsObject = {
    symbol: string,
  }
}

export class SymbolListRequest extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolListRequest): SymbolListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolListRequest;
  static deserializeBinaryFromReader(message: SymbolListRequest, reader: jspb.BinaryReader): SymbolListRequest;
}

export namespace SymbolListRequest {
  export type AsObject = {
    prefix: string,
    pagesize: number,
  }
}

export class StockPrice extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPrice.AsObject;
  static toObject(includeInstance: boolean, msg: StockPrice): StockPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPrice;
  static deserializeBinaryFromReader(message: StockPrice, reader: jspb.BinaryReader): StockPrice;
}

export namespace StockPrice {
  export type AsObject = {
    symbol: string,
    price: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StockPriceSnapshot extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSymbolsList(): void;
  getSymbolsList(): Array<string>;
  setSymbolsList(value: Array<string>): void;
  addSymbols(value: string, index?: number): string;

  clearPricesList(): void;
  getPricesList(): Array<StockPrice>;
  setPricesList(value: Array<StockPrice>): void;
  addPrices(value?: StockPrice, index?: number): StockPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPriceSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: StockPriceSnapshot): StockPriceSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockPriceSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPriceSnapshot;
  static deserializeBinaryFromReader(message: StockPriceSnapshot, reader: jspb.BinaryReader): StockPriceSnapshot;
}

export namespace StockPriceSnapshot {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    symbolsList: Array<string>,
    pricesList: Array<StockPrice.AsObject>,
  }
}

export class TradeRequest extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getType(): TradeTypeMap[keyof TradeTypeMap];
  setType(value: TradeTypeMap[keyof TradeTypeMap]): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeRequest): TradeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeRequest;
  static deserializeBinaryFromReader(message: TradeRequest, reader: jspb.BinaryReader): TradeRequest;
}

export namespace TradeRequest {
  export type AsObject = {
    symbol: string,
    quantity: number,
    type: TradeTypeMap[keyof TradeTypeMap],
    price: number,
  }
}

export class TradeResponse extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getType(): TradeTypeMap[keyof TradeTypeMap];
  setType(value: TradeTypeMap[keyof TradeTypeMap]): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradeResponse): TradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeResponse;
  static deserializeBinaryFromReader(message: TradeResponse, reader: jspb.BinaryReader): TradeResponse;
}

export namespace TradeResponse {
  export type AsObject = {
    symbol: string,
    quantity: number,
    type: TradeTypeMap[keyof TradeTypeMap],
    price: number,
    totalCost: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PageRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageRequest): PageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageRequest;
  static deserializeBinaryFromReader(message: PageRequest, reader: jspb.BinaryReader): PageRequest;
}

export namespace PageRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class TradeRequestList extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<TradeRequest>;
  setTradesList(value: Array<TradeRequest>): void;
  addTrades(value?: TradeRequest, index?: number): TradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeRequestList.AsObject;
  static toObject(includeInstance: boolean, msg: TradeRequestList): TradeRequestList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeRequestList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeRequestList;
  static deserializeBinaryFromReader(message: TradeRequestList, reader: jspb.BinaryReader): TradeRequestList;
}

export namespace TradeRequestList {
  export type AsObject = {
    tradesList: Array<TradeRequest.AsObject>,
  }
}

export class TradeResponseList extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<TradeResponse>;
  setTradesList(value: Array<TradeResponse>): void;
  addTrades(value?: TradeResponse, index?: number): TradeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeResponseList.AsObject;
  static toObject(includeInstance: boolean, msg: TradeResponseList): TradeResponseList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeResponseList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeResponseList;
  static deserializeBinaryFromReader(message: TradeResponseList, reader: jspb.BinaryReader): TradeResponseList;
}

export namespace TradeResponseList {
  export type AsObject = {
    tradesList: Array<TradeResponse.AsObject>,
  }
}

export class RealtimeCurrencyExchangeRate extends jspb.Message {
  getFromCurrencyCode(): string;
  setFromCurrencyCode(value: string): void;

  getFromCurrencyName(): string;
  setFromCurrencyName(value: string): void;

  getToCurrencyCode(): string;
  setToCurrencyCode(value: string): void;

  getToCurrencyName(): string;
  setToCurrencyName(value: string): void;

  getExchangeRate(): number;
  setExchangeRate(value: number): void;

  getLastRefreshed(): string;
  setLastRefreshed(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getBidPrice(): number;
  setBidPrice(value: number): void;

  getAskPrice(): number;
  setAskPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealtimeCurrencyExchangeRate.AsObject;
  static toObject(includeInstance: boolean, msg: RealtimeCurrencyExchangeRate): RealtimeCurrencyExchangeRate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RealtimeCurrencyExchangeRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealtimeCurrencyExchangeRate;
  static deserializeBinaryFromReader(message: RealtimeCurrencyExchangeRate, reader: jspb.BinaryReader): RealtimeCurrencyExchangeRate;
}

export namespace RealtimeCurrencyExchangeRate {
  export type AsObject = {
    fromCurrencyCode: string,
    fromCurrencyName: string,
    toCurrencyCode: string,
    toCurrencyName: string,
    exchangeRate: number,
    lastRefreshed: string,
    timeZone: string,
    bidPrice: number,
    askPrice: number,
  }
}

export class CellProperties extends jspb.Message {
  getBackgroundColor(): number;
  setBackgroundColor(value: number): void;

  getFont(): string;
  setFont(value: string): void;

  hasFontStyle(): boolean;
  clearFontStyle(): void;
  getFontStyle(): CellProperties.FontStyle | undefined;
  setFontStyle(value?: CellProperties.FontStyle): void;

  getTextColor(): number;
  setTextColor(value: number): void;

  getCellValue(): string;
  setCellValue(value: string): void;

  getCellWeight(): number;
  setCellWeight(value: number): void;

  getCellHeight(): number;
  setCellHeight(value: number): void;

  hasBorder(): boolean;
  clearBorder(): void;
  getBorder(): CellProperties.Border | undefined;
  setBorder(value?: CellProperties.Border): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellProperties.AsObject;
  static toObject(includeInstance: boolean, msg: CellProperties): CellProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellProperties;
  static deserializeBinaryFromReader(message: CellProperties, reader: jspb.BinaryReader): CellProperties;
}

export namespace CellProperties {
  export type AsObject = {
    backgroundColor: number,
    font: string,
    fontStyle?: CellProperties.FontStyle.AsObject,
    textColor: number,
    cellValue: string,
    cellWeight: number,
    cellHeight: number,
    border?: CellProperties.Border.AsObject,
  }

  export class FontStyle extends jspb.Message {
    getBold(): boolean;
    setBold(value: boolean): void;

    getItalic(): boolean;
    setItalic(value: boolean): void;

    getUnderline(): number;
    setUnderline(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FontStyle.AsObject;
    static toObject(includeInstance: boolean, msg: FontStyle): FontStyle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FontStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FontStyle;
    static deserializeBinaryFromReader(message: FontStyle, reader: jspb.BinaryReader): FontStyle;
  }

  export namespace FontStyle {
    export type AsObject = {
      bold: boolean,
      italic: boolean,
      underline: number,
    }
  }

  export class Border extends jspb.Message {
    hasAll(): boolean;
    clearAll(): void;
    getAll(): CellProperties.Border.BorderProperties | undefined;
    setAll(value?: CellProperties.Border.BorderProperties): void;

    hasTop(): boolean;
    clearTop(): void;
    getTop(): CellProperties.Border.BorderProperties | undefined;
    setTop(value?: CellProperties.Border.BorderProperties): void;

    hasBottom(): boolean;
    clearBottom(): void;
    getBottom(): CellProperties.Border.BorderProperties | undefined;
    setBottom(value?: CellProperties.Border.BorderProperties): void;

    hasLeft(): boolean;
    clearLeft(): void;
    getLeft(): CellProperties.Border.BorderProperties | undefined;
    setLeft(value?: CellProperties.Border.BorderProperties): void;

    hasRight(): boolean;
    clearRight(): void;
    getRight(): CellProperties.Border.BorderProperties | undefined;
    setRight(value?: CellProperties.Border.BorderProperties): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Border.AsObject;
    static toObject(includeInstance: boolean, msg: Border): Border.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Border, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Border;
    static deserializeBinaryFromReader(message: Border, reader: jspb.BinaryReader): Border;
  }

  export namespace Border {
    export type AsObject = {
      all?: CellProperties.Border.BorderProperties.AsObject,
      top?: CellProperties.Border.BorderProperties.AsObject,
      bottom?: CellProperties.Border.BorderProperties.AsObject,
      left?: CellProperties.Border.BorderProperties.AsObject,
      right?: CellProperties.Border.BorderProperties.AsObject,
    }

    export class BorderProperties extends jspb.Message {
      getColor(): number;
      setColor(value: number): void;

      getThickness(): number;
      setThickness(value: number): void;

      getLinestyle(): CellProperties.LineStyleMap[keyof CellProperties.LineStyleMap];
      setLinestyle(value: CellProperties.LineStyleMap[keyof CellProperties.LineStyleMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BorderProperties.AsObject;
      static toObject(includeInstance: boolean, msg: BorderProperties): BorderProperties.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BorderProperties, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BorderProperties;
      static deserializeBinaryFromReader(message: BorderProperties, reader: jspb.BinaryReader): BorderProperties;
    }

    export namespace BorderProperties {
      export type AsObject = {
        color: number,
        thickness: number,
        linestyle: CellProperties.LineStyleMap[keyof CellProperties.LineStyleMap],
      }
    }
  }

  export interface LineStyleMap {
    NONE: 0;
    SOLID: 1;
    DASHED: 2;
    DOTTED: 3;
    DOUBLE: 4;
    DASH_DOTTED: 5;
    DASH_DOT_DOTTED: 6;
    SLANT_DASH_DOTTED: 7;
  }

  export const LineStyle: LineStyleMap;
}

export class ExcelReport extends jspb.Message {
  getReportId(): string;
  setReportId(value: string): void;

  clearCellPropertiesList(): void;
  getCellPropertiesList(): Array<CellProperties>;
  setCellPropertiesList(value: Array<CellProperties>): void;
  addCellProperties(value?: CellProperties, index?: number): CellProperties;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelReport.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelReport): ExcelReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExcelReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelReport;
  static deserializeBinaryFromReader(message: ExcelReport, reader: jspb.BinaryReader): ExcelReport;
}

export namespace ExcelReport {
  export type AsObject = {
    reportId: string,
    cellPropertiesList: Array<CellProperties.AsObject>,
  }
}

export class ListExcelReportResponse extends jspb.Message {
  clearReportsList(): void;
  getReportsList(): Array<ExcelReport>;
  setReportsList(value: Array<ExcelReport>): void;
  addReports(value?: ExcelReport, index?: number): ExcelReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExcelReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExcelReportResponse): ListExcelReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExcelReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExcelReportResponse;
  static deserializeBinaryFromReader(message: ListExcelReportResponse, reader: jspb.BinaryReader): ListExcelReportResponse;
}

export namespace ListExcelReportResponse {
  export type AsObject = {
    reportsList: Array<ExcelReport.AsObject>,
  }
}

export class DeleteExcelReportRequest extends jspb.Message {
  getReportId(): string;
  setReportId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExcelReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExcelReportRequest): DeleteExcelReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExcelReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExcelReportRequest;
  static deserializeBinaryFromReader(message: DeleteExcelReportRequest, reader: jspb.BinaryReader): DeleteExcelReportRequest;
}

export namespace DeleteExcelReportRequest {
  export type AsObject = {
    reportId: string,
  }
}

export class DeleteExcelReportResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExcelReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExcelReportResponse): DeleteExcelReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExcelReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExcelReportResponse;
  static deserializeBinaryFromReader(message: DeleteExcelReportResponse, reader: jspb.BinaryReader): DeleteExcelReportResponse;
}

export namespace DeleteExcelReportResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export interface TradeTypeMap {
  BUY: 0;
  SELL: 1;
}

export const TradeType: TradeTypeMap;

