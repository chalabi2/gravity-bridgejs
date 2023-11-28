import { Params, ParamsSDKType } from "./params";
import { AuctionPeriod, AuctionPeriodSDKType, Auction, AuctionSDKType } from "./auction";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryAuctionPeriodRequest {}
export interface QueryAuctionPeriodRequestSDKType {}
export interface QueryAuctionPeriodResponse {
  auctionPeriod?: AuctionPeriod;
}
export interface QueryAuctionPeriodResponseSDKType {
  auction_period?: AuctionPeriodSDKType;
}
export interface QueryAuctionsRequest {}
export interface QueryAuctionsRequestSDKType {}
export interface QueryAuctionsResponse {
  auctions: Auction[];
}
export interface QueryAuctionsResponseSDKType {
  auctions: AuctionSDKType[];
}
export interface QueryAuctionByIdRequest {
  auctionId: Long;
}
export interface QueryAuctionByIdRequestSDKType {
  auction_id: Long;
}
export interface QueryAuctionByIdResponse {
  auction?: Auction;
}
export interface QueryAuctionByIdResponseSDKType {
  auction?: AuctionSDKType;
}
export interface QueryAuctionByDenomRequest {
  auctionDenom: string;
}
export interface QueryAuctionByDenomRequestSDKType {
  auction_denom: string;
}
export interface QueryAuctionByDenomResponse {
  auction?: Auction;
}
export interface QueryAuctionByDenomResponseSDKType {
  auction?: AuctionSDKType;
}
export interface QueryAllAuctionsByBidderRequest {
  address: string;
}
export interface QueryAllAuctionsByBidderRequestSDKType {
  address: string;
}
export interface QueryAllAuctionsByBidderResponse {
  auctions: Auction[];
}
export interface QueryAllAuctionsByBidderResponseSDKType {
  auctions: AuctionSDKType[];
}
export interface QueryAuctionPoolRequest {}
export interface QueryAuctionPoolRequestSDKType {}
export interface QueryAuctionPoolResponse {
  account: string;
  balances: Coin[];
}
export interface QueryAuctionPoolResponseSDKType {
  account: string;
  balances: CoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryAuctionPeriodRequest(): QueryAuctionPeriodRequest {
  return {};
}
export const QueryAuctionPeriodRequest = {
  encode(_: QueryAuctionPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPeriodRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryAuctionPeriodRequest>): QueryAuctionPeriodRequest {
    const message = createBaseQueryAuctionPeriodRequest();
    return message;
  }
};
function createBaseQueryAuctionPeriodResponse(): QueryAuctionPeriodResponse {
  return {
    auctionPeriod: undefined
  };
}
export const QueryAuctionPeriodResponse = {
  encode(message: QueryAuctionPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionPeriod !== undefined) {
      AuctionPeriod.encode(message.auctionPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionPeriod = AuctionPeriod.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionPeriodResponse>): QueryAuctionPeriodResponse {
    const message = createBaseQueryAuctionPeriodResponse();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? AuctionPeriod.fromPartial(object.auctionPeriod) : undefined;
    return message;
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {};
}
export const QueryAuctionsRequest = {
  encode(_: QueryAuctionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    return message;
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: []
  };
}
export const QueryAuctionsResponse = {
  encode(message: QueryAuctionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAuctionByIdRequest(): QueryAuctionByIdRequest {
  return {
    auctionId: Long.UZERO
  };
}
export const QueryAuctionByIdRequest = {
  encode(message: QueryAuctionByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionByIdRequest>): QueryAuctionByIdRequest {
    const message = createBaseQueryAuctionByIdRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAuctionByIdResponse(): QueryAuctionByIdResponse {
  return {
    auction: undefined
  };
}
export const QueryAuctionByIdResponse = {
  encode(message: QueryAuctionByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionByIdResponse>): QueryAuctionByIdResponse {
    const message = createBaseQueryAuctionByIdResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  }
};
function createBaseQueryAuctionByDenomRequest(): QueryAuctionByDenomRequest {
  return {
    auctionDenom: ""
  };
}
export const QueryAuctionByDenomRequest = {
  encode(message: QueryAuctionByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionDenom !== "") {
      writer.uint32(10).string(message.auctionDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionByDenomRequest>): QueryAuctionByDenomRequest {
    const message = createBaseQueryAuctionByDenomRequest();
    message.auctionDenom = object.auctionDenom ?? "";
    return message;
  }
};
function createBaseQueryAuctionByDenomResponse(): QueryAuctionByDenomResponse {
  return {
    auction: undefined
  };
}
export const QueryAuctionByDenomResponse = {
  encode(message: QueryAuctionByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionByDenomResponse>): QueryAuctionByDenomResponse {
    const message = createBaseQueryAuctionByDenomResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  }
};
function createBaseQueryAllAuctionsByBidderRequest(): QueryAllAuctionsByBidderRequest {
  return {
    address: ""
  };
}
export const QueryAllAuctionsByBidderRequest = {
  encode(message: QueryAllAuctionsByBidderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAuctionsByBidderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionsByBidderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllAuctionsByBidderRequest>): QueryAllAuctionsByBidderRequest {
    const message = createBaseQueryAllAuctionsByBidderRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAllAuctionsByBidderResponse(): QueryAllAuctionsByBidderResponse {
  return {
    auctions: []
  };
}
export const QueryAllAuctionsByBidderResponse = {
  encode(message: QueryAllAuctionsByBidderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAuctionsByBidderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionsByBidderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllAuctionsByBidderResponse>): QueryAllAuctionsByBidderResponse {
    const message = createBaseQueryAllAuctionsByBidderResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAuctionPoolRequest(): QueryAuctionPoolRequest {
  return {};
}
export const QueryAuctionPoolRequest = {
  encode(_: QueryAuctionPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryAuctionPoolRequest>): QueryAuctionPoolRequest {
    const message = createBaseQueryAuctionPoolRequest();
    return message;
  }
};
function createBaseQueryAuctionPoolResponse(): QueryAuctionPoolResponse {
  return {
    account: "",
    balances: []
  };
}
export const QueryAuctionPoolResponse = {
  encode(message: QueryAuctionPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionPoolResponse>): QueryAuctionPoolResponse {
    const message = createBaseQueryAuctionPoolResponse();
    message.account = object.account ?? "";
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};