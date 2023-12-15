import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AuctionPeriod, AuctionPeriodAmino, AuctionPeriodSDKType, Auction, AuctionAmino, AuctionSDKType } from "./auction";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/auction.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/auction.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/auction.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/auction.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryAuctionPeriodRequest {}
export interface QueryAuctionPeriodRequestProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionPeriodRequest";
  value: Uint8Array;
}
export interface QueryAuctionPeriodRequestAmino {}
export interface QueryAuctionPeriodRequestAminoMsg {
  type: "/auction.v1.QueryAuctionPeriodRequest";
  value: QueryAuctionPeriodRequestAmino;
}
export interface QueryAuctionPeriodRequestSDKType {}
export interface QueryAuctionPeriodResponse {
  auctionPeriod?: AuctionPeriod;
}
export interface QueryAuctionPeriodResponseProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionPeriodResponse";
  value: Uint8Array;
}
export interface QueryAuctionPeriodResponseAmino {
  auction_period?: AuctionPeriodAmino;
}
export interface QueryAuctionPeriodResponseAminoMsg {
  type: "/auction.v1.QueryAuctionPeriodResponse";
  value: QueryAuctionPeriodResponseAmino;
}
export interface QueryAuctionPeriodResponseSDKType {
  auction_period?: AuctionPeriodSDKType;
}
export interface QueryAuctionsRequest {}
export interface QueryAuctionsRequestProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionsRequest";
  value: Uint8Array;
}
export interface QueryAuctionsRequestAmino {}
export interface QueryAuctionsRequestAminoMsg {
  type: "/auction.v1.QueryAuctionsRequest";
  value: QueryAuctionsRequestAmino;
}
export interface QueryAuctionsRequestSDKType {}
export interface QueryAuctionsResponse {
  auctions: Auction[];
}
export interface QueryAuctionsResponseProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionsResponse";
  value: Uint8Array;
}
export interface QueryAuctionsResponseAmino {
  auctions?: AuctionAmino[];
}
export interface QueryAuctionsResponseAminoMsg {
  type: "/auction.v1.QueryAuctionsResponse";
  value: QueryAuctionsResponseAmino;
}
export interface QueryAuctionsResponseSDKType {
  auctions: AuctionSDKType[];
}
export interface QueryAuctionByIdRequest {
  auctionId: bigint;
}
export interface QueryAuctionByIdRequestProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionByIdRequest";
  value: Uint8Array;
}
export interface QueryAuctionByIdRequestAmino {
  auction_id?: string;
}
export interface QueryAuctionByIdRequestAminoMsg {
  type: "/auction.v1.QueryAuctionByIdRequest";
  value: QueryAuctionByIdRequestAmino;
}
export interface QueryAuctionByIdRequestSDKType {
  auction_id: bigint;
}
export interface QueryAuctionByIdResponse {
  auction?: Auction;
}
export interface QueryAuctionByIdResponseProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionByIdResponse";
  value: Uint8Array;
}
export interface QueryAuctionByIdResponseAmino {
  auction?: AuctionAmino;
}
export interface QueryAuctionByIdResponseAminoMsg {
  type: "/auction.v1.QueryAuctionByIdResponse";
  value: QueryAuctionByIdResponseAmino;
}
export interface QueryAuctionByIdResponseSDKType {
  auction?: AuctionSDKType;
}
export interface QueryAuctionByDenomRequest {
  auctionDenom: string;
}
export interface QueryAuctionByDenomRequestProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionByDenomRequest";
  value: Uint8Array;
}
export interface QueryAuctionByDenomRequestAmino {
  auction_denom?: string;
}
export interface QueryAuctionByDenomRequestAminoMsg {
  type: "/auction.v1.QueryAuctionByDenomRequest";
  value: QueryAuctionByDenomRequestAmino;
}
export interface QueryAuctionByDenomRequestSDKType {
  auction_denom: string;
}
export interface QueryAuctionByDenomResponse {
  auction?: Auction;
}
export interface QueryAuctionByDenomResponseProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionByDenomResponse";
  value: Uint8Array;
}
export interface QueryAuctionByDenomResponseAmino {
  auction?: AuctionAmino;
}
export interface QueryAuctionByDenomResponseAminoMsg {
  type: "/auction.v1.QueryAuctionByDenomResponse";
  value: QueryAuctionByDenomResponseAmino;
}
export interface QueryAuctionByDenomResponseSDKType {
  auction?: AuctionSDKType;
}
export interface QueryAllAuctionsByBidderRequest {
  address: string;
}
export interface QueryAllAuctionsByBidderRequestProtoMsg {
  typeUrl: "/auction.v1.QueryAllAuctionsByBidderRequest";
  value: Uint8Array;
}
export interface QueryAllAuctionsByBidderRequestAmino {
  address?: string;
}
export interface QueryAllAuctionsByBidderRequestAminoMsg {
  type: "/auction.v1.QueryAllAuctionsByBidderRequest";
  value: QueryAllAuctionsByBidderRequestAmino;
}
export interface QueryAllAuctionsByBidderRequestSDKType {
  address: string;
}
export interface QueryAllAuctionsByBidderResponse {
  auctions: Auction[];
}
export interface QueryAllAuctionsByBidderResponseProtoMsg {
  typeUrl: "/auction.v1.QueryAllAuctionsByBidderResponse";
  value: Uint8Array;
}
export interface QueryAllAuctionsByBidderResponseAmino {
  auctions?: AuctionAmino[];
}
export interface QueryAllAuctionsByBidderResponseAminoMsg {
  type: "/auction.v1.QueryAllAuctionsByBidderResponse";
  value: QueryAllAuctionsByBidderResponseAmino;
}
export interface QueryAllAuctionsByBidderResponseSDKType {
  auctions: AuctionSDKType[];
}
export interface QueryAuctionPoolRequest {}
export interface QueryAuctionPoolRequestProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionPoolRequest";
  value: Uint8Array;
}
export interface QueryAuctionPoolRequestAmino {}
export interface QueryAuctionPoolRequestAminoMsg {
  type: "/auction.v1.QueryAuctionPoolRequest";
  value: QueryAuctionPoolRequestAmino;
}
export interface QueryAuctionPoolRequestSDKType {}
export interface QueryAuctionPoolResponse {
  account: string;
  balances: Coin[];
}
export interface QueryAuctionPoolResponseProtoMsg {
  typeUrl: "/auction.v1.QueryAuctionPoolResponse";
  value: Uint8Array;
}
export interface QueryAuctionPoolResponseAmino {
  account?: string;
  balances?: CoinAmino[];
}
export interface QueryAuctionPoolResponseAminoMsg {
  type: "/auction.v1.QueryAuctionPoolResponse";
  value: QueryAuctionPoolResponseAmino;
}
export interface QueryAuctionPoolResponseSDKType {
  account: string;
  balances: CoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/auction.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/auction.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionPeriodRequest(): QueryAuctionPeriodRequest {
  return {};
}
export const QueryAuctionPeriodRequest = {
  typeUrl: "/auction.v1.QueryAuctionPeriodRequest",
  encode(_: QueryAuctionPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionPeriodRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): QueryAuctionPeriodRequest {
    return {};
  },
  toJSON(_: QueryAuctionPeriodRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryAuctionPeriodRequest>): QueryAuctionPeriodRequest {
    const message = createBaseQueryAuctionPeriodRequest();
    return message;
  },
  fromAmino(_: QueryAuctionPeriodRequestAmino): QueryAuctionPeriodRequest {
    const message = createBaseQueryAuctionPeriodRequest();
    return message;
  },
  toAmino(_: QueryAuctionPeriodRequest): QueryAuctionPeriodRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuctionPeriodRequestAminoMsg): QueryAuctionPeriodRequest {
    return QueryAuctionPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionPeriodRequestProtoMsg): QueryAuctionPeriodRequest {
    return QueryAuctionPeriodRequest.decode(message.value);
  },
  toProto(message: QueryAuctionPeriodRequest): Uint8Array {
    return QueryAuctionPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionPeriodRequest): QueryAuctionPeriodRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionPeriodRequest",
      value: QueryAuctionPeriodRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionPeriodResponse(): QueryAuctionPeriodResponse {
  return {
    auctionPeriod: undefined
  };
}
export const QueryAuctionPeriodResponse = {
  typeUrl: "/auction.v1.QueryAuctionPeriodResponse",
  encode(message: QueryAuctionPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionPeriod !== undefined) {
      AuctionPeriod.encode(message.auctionPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionPeriodResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAuctionPeriodResponse {
    return {
      auctionPeriod: isSet(object.auctionPeriod) ? AuctionPeriod.fromJSON(object.auctionPeriod) : undefined
    };
  },
  toJSON(message: QueryAuctionPeriodResponse): unknown {
    const obj: any = {};
    message.auctionPeriod !== undefined && (obj.auctionPeriod = message.auctionPeriod ? AuctionPeriod.toJSON(message.auctionPeriod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionPeriodResponse>): QueryAuctionPeriodResponse {
    const message = createBaseQueryAuctionPeriodResponse();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? AuctionPeriod.fromPartial(object.auctionPeriod) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionPeriodResponseAmino): QueryAuctionPeriodResponse {
    const message = createBaseQueryAuctionPeriodResponse();
    if (object.auction_period !== undefined && object.auction_period !== null) {
      message.auctionPeriod = AuctionPeriod.fromAmino(object.auction_period);
    }
    return message;
  },
  toAmino(message: QueryAuctionPeriodResponse): QueryAuctionPeriodResponseAmino {
    const obj: any = {};
    obj.auction_period = message.auctionPeriod ? AuctionPeriod.toAmino(message.auctionPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionPeriodResponseAminoMsg): QueryAuctionPeriodResponse {
    return QueryAuctionPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionPeriodResponseProtoMsg): QueryAuctionPeriodResponse {
    return QueryAuctionPeriodResponse.decode(message.value);
  },
  toProto(message: QueryAuctionPeriodResponse): Uint8Array {
    return QueryAuctionPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionPeriodResponse): QueryAuctionPeriodResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionPeriodResponse",
      value: QueryAuctionPeriodResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {};
}
export const QueryAuctionsRequest = {
  typeUrl: "/auction.v1.QueryAuctionsRequest",
  encode(_: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): QueryAuctionsRequest {
    return {};
  },
  toJSON(_: QueryAuctionsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    return message;
  },
  fromAmino(_: QueryAuctionsRequestAmino): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    return message;
  },
  toAmino(_: QueryAuctionsRequest): QueryAuctionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsRequest): Uint8Array {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: []
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/auction.v1.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Auction.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toJSON(e) : undefined);
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsResponse): Uint8Array {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionByIdRequest(): QueryAuctionByIdRequest {
  return {
    auctionId: BigInt(0)
  };
}
export const QueryAuctionByIdRequest = {
  typeUrl: "/auction.v1.QueryAuctionByIdRequest",
  encode(message: QueryAuctionByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionByIdRequest {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAuctionByIdRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionByIdRequest>): QueryAuctionByIdRequest {
    const message = createBaseQueryAuctionByIdRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAuctionByIdRequestAmino): QueryAuctionByIdRequest {
    const message = createBaseQueryAuctionByIdRequest();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    return message;
  },
  toAmino(message: QueryAuctionByIdRequest): QueryAuctionByIdRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionByIdRequestAminoMsg): QueryAuctionByIdRequest {
    return QueryAuctionByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionByIdRequestProtoMsg): QueryAuctionByIdRequest {
    return QueryAuctionByIdRequest.decode(message.value);
  },
  toProto(message: QueryAuctionByIdRequest): Uint8Array {
    return QueryAuctionByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionByIdRequest): QueryAuctionByIdRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionByIdRequest",
      value: QueryAuctionByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionByIdResponse(): QueryAuctionByIdResponse {
  return {
    auction: undefined
  };
}
export const QueryAuctionByIdResponse = {
  typeUrl: "/auction.v1.QueryAuctionByIdResponse",
  encode(message: QueryAuctionByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAuctionByIdResponse {
    return {
      auction: isSet(object.auction) ? Auction.fromJSON(object.auction) : undefined
    };
  },
  toJSON(message: QueryAuctionByIdResponse): unknown {
    const obj: any = {};
    message.auction !== undefined && (obj.auction = message.auction ? Auction.toJSON(message.auction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionByIdResponse>): QueryAuctionByIdResponse {
    const message = createBaseQueryAuctionByIdResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionByIdResponseAmino): QueryAuctionByIdResponse {
    const message = createBaseQueryAuctionByIdResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryAuctionByIdResponse): QueryAuctionByIdResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionByIdResponseAminoMsg): QueryAuctionByIdResponse {
    return QueryAuctionByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionByIdResponseProtoMsg): QueryAuctionByIdResponse {
    return QueryAuctionByIdResponse.decode(message.value);
  },
  toProto(message: QueryAuctionByIdResponse): Uint8Array {
    return QueryAuctionByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionByIdResponse): QueryAuctionByIdResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionByIdResponse",
      value: QueryAuctionByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionByDenomRequest(): QueryAuctionByDenomRequest {
  return {
    auctionDenom: ""
  };
}
export const QueryAuctionByDenomRequest = {
  typeUrl: "/auction.v1.QueryAuctionByDenomRequest",
  encode(message: QueryAuctionByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionDenom !== "") {
      writer.uint32(10).string(message.auctionDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAuctionByDenomRequest {
    return {
      auctionDenom: isSet(object.auctionDenom) ? String(object.auctionDenom) : ""
    };
  },
  toJSON(message: QueryAuctionByDenomRequest): unknown {
    const obj: any = {};
    message.auctionDenom !== undefined && (obj.auctionDenom = message.auctionDenom);
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionByDenomRequest>): QueryAuctionByDenomRequest {
    const message = createBaseQueryAuctionByDenomRequest();
    message.auctionDenom = object.auctionDenom ?? "";
    return message;
  },
  fromAmino(object: QueryAuctionByDenomRequestAmino): QueryAuctionByDenomRequest {
    const message = createBaseQueryAuctionByDenomRequest();
    if (object.auction_denom !== undefined && object.auction_denom !== null) {
      message.auctionDenom = object.auction_denom;
    }
    return message;
  },
  toAmino(message: QueryAuctionByDenomRequest): QueryAuctionByDenomRequestAmino {
    const obj: any = {};
    obj.auction_denom = message.auctionDenom;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionByDenomRequestAminoMsg): QueryAuctionByDenomRequest {
    return QueryAuctionByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionByDenomRequestProtoMsg): QueryAuctionByDenomRequest {
    return QueryAuctionByDenomRequest.decode(message.value);
  },
  toProto(message: QueryAuctionByDenomRequest): Uint8Array {
    return QueryAuctionByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionByDenomRequest): QueryAuctionByDenomRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionByDenomRequest",
      value: QueryAuctionByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionByDenomResponse(): QueryAuctionByDenomResponse {
  return {
    auction: undefined
  };
}
export const QueryAuctionByDenomResponse = {
  typeUrl: "/auction.v1.QueryAuctionByDenomResponse",
  encode(message: QueryAuctionByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAuctionByDenomResponse {
    return {
      auction: isSet(object.auction) ? Auction.fromJSON(object.auction) : undefined
    };
  },
  toJSON(message: QueryAuctionByDenomResponse): unknown {
    const obj: any = {};
    message.auction !== undefined && (obj.auction = message.auction ? Auction.toJSON(message.auction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionByDenomResponse>): QueryAuctionByDenomResponse {
    const message = createBaseQueryAuctionByDenomResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionByDenomResponseAmino): QueryAuctionByDenomResponse {
    const message = createBaseQueryAuctionByDenomResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryAuctionByDenomResponse): QueryAuctionByDenomResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionByDenomResponseAminoMsg): QueryAuctionByDenomResponse {
    return QueryAuctionByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionByDenomResponseProtoMsg): QueryAuctionByDenomResponse {
    return QueryAuctionByDenomResponse.decode(message.value);
  },
  toProto(message: QueryAuctionByDenomResponse): Uint8Array {
    return QueryAuctionByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionByDenomResponse): QueryAuctionByDenomResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionByDenomResponse",
      value: QueryAuctionByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAuctionsByBidderRequest(): QueryAllAuctionsByBidderRequest {
  return {
    address: ""
  };
}
export const QueryAllAuctionsByBidderRequest = {
  typeUrl: "/auction.v1.QueryAllAuctionsByBidderRequest",
  encode(message: QueryAllAuctionsByBidderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAuctionsByBidderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAllAuctionsByBidderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryAllAuctionsByBidderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAuctionsByBidderRequest>): QueryAllAuctionsByBidderRequest {
    const message = createBaseQueryAllAuctionsByBidderRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAllAuctionsByBidderRequestAmino): QueryAllAuctionsByBidderRequest {
    const message = createBaseQueryAllAuctionsByBidderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAllAuctionsByBidderRequest): QueryAllAuctionsByBidderRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAllAuctionsByBidderRequestAminoMsg): QueryAllAuctionsByBidderRequest {
    return QueryAllAuctionsByBidderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAuctionsByBidderRequestProtoMsg): QueryAllAuctionsByBidderRequest {
    return QueryAllAuctionsByBidderRequest.decode(message.value);
  },
  toProto(message: QueryAllAuctionsByBidderRequest): Uint8Array {
    return QueryAllAuctionsByBidderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAuctionsByBidderRequest): QueryAllAuctionsByBidderRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAllAuctionsByBidderRequest",
      value: QueryAllAuctionsByBidderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAuctionsByBidderResponse(): QueryAllAuctionsByBidderResponse {
  return {
    auctions: []
  };
}
export const QueryAllAuctionsByBidderResponse = {
  typeUrl: "/auction.v1.QueryAllAuctionsByBidderResponse",
  encode(message: QueryAllAuctionsByBidderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAuctionsByBidderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAllAuctionsByBidderResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Auction.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllAuctionsByBidderResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toJSON(e) : undefined);
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllAuctionsByBidderResponse>): QueryAllAuctionsByBidderResponse {
    const message = createBaseQueryAllAuctionsByBidderResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllAuctionsByBidderResponseAmino): QueryAllAuctionsByBidderResponse {
    const message = createBaseQueryAllAuctionsByBidderResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllAuctionsByBidderResponse): QueryAllAuctionsByBidderResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllAuctionsByBidderResponseAminoMsg): QueryAllAuctionsByBidderResponse {
    return QueryAllAuctionsByBidderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAuctionsByBidderResponseProtoMsg): QueryAllAuctionsByBidderResponse {
    return QueryAllAuctionsByBidderResponse.decode(message.value);
  },
  toProto(message: QueryAllAuctionsByBidderResponse): Uint8Array {
    return QueryAllAuctionsByBidderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAuctionsByBidderResponse): QueryAllAuctionsByBidderResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAllAuctionsByBidderResponse",
      value: QueryAllAuctionsByBidderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionPoolRequest(): QueryAuctionPoolRequest {
  return {};
}
export const QueryAuctionPoolRequest = {
  typeUrl: "/auction.v1.QueryAuctionPoolRequest",
  encode(_: QueryAuctionPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): QueryAuctionPoolRequest {
    return {};
  },
  toJSON(_: QueryAuctionPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryAuctionPoolRequest>): QueryAuctionPoolRequest {
    const message = createBaseQueryAuctionPoolRequest();
    return message;
  },
  fromAmino(_: QueryAuctionPoolRequestAmino): QueryAuctionPoolRequest {
    const message = createBaseQueryAuctionPoolRequest();
    return message;
  },
  toAmino(_: QueryAuctionPoolRequest): QueryAuctionPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuctionPoolRequestAminoMsg): QueryAuctionPoolRequest {
    return QueryAuctionPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionPoolRequestProtoMsg): QueryAuctionPoolRequest {
    return QueryAuctionPoolRequest.decode(message.value);
  },
  toProto(message: QueryAuctionPoolRequest): Uint8Array {
    return QueryAuctionPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionPoolRequest): QueryAuctionPoolRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionPoolRequest",
      value: QueryAuctionPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionPoolResponse(): QueryAuctionPoolResponse {
  return {
    account: "",
    balances: []
  };
}
export const QueryAuctionPoolResponse = {
  typeUrl: "/auction.v1.QueryAuctionPoolResponse",
  encode(message: QueryAuctionPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): QueryAuctionPoolResponse {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAuctionPoolResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAuctionPoolResponse>): QueryAuctionPoolResponse {
    const message = createBaseQueryAuctionPoolResponse();
    message.account = object.account ?? "";
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAuctionPoolResponseAmino): QueryAuctionPoolResponse {
    const message = createBaseQueryAuctionPoolResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAuctionPoolResponse): QueryAuctionPoolResponseAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAuctionPoolResponseAminoMsg): QueryAuctionPoolResponse {
    return QueryAuctionPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionPoolResponseProtoMsg): QueryAuctionPoolResponse {
    return QueryAuctionPoolResponse.decode(message.value);
  },
  toProto(message: QueryAuctionPoolResponse): Uint8Array {
    return QueryAuctionPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionPoolResponse): QueryAuctionPoolResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryAuctionPoolResponse",
      value: QueryAuctionPoolResponse.encode(message).finish()
    };
  }
};