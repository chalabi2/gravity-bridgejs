import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * MsgBid is a message type for placing a bid on an auction with given `auction_id`
 * `bidder` is the signer of the Msg
 * `amount` is the native token amount locked by the auction module if the bid is accepted as the highest bid
 * `bid_fee` is the native token amount sent to the auction pool, and should be at least equal to the min bid fee param
 * 
 * Additionally, all bids must meet or exceed `min_bid_amount`
 */
export interface MsgBid {
  /** ID of the auction to bid on */
  auctionId: bigint;
  /** Address of the bidder */
  bidder: string;
  /** Amount of the bid */
  amount: bigint;
  /** Fee amount */
  bidFee: bigint;
}
export interface MsgBidProtoMsg {
  typeUrl: "/auction.v1.MsgBid";
  value: Uint8Array;
}
/**
 * MsgBid is a message type for placing a bid on an auction with given `auction_id`
 * `bidder` is the signer of the Msg
 * `amount` is the native token amount locked by the auction module if the bid is accepted as the highest bid
 * `bid_fee` is the native token amount sent to the auction pool, and should be at least equal to the min bid fee param
 * 
 * Additionally, all bids must meet or exceed `min_bid_amount`
 */
export interface MsgBidAmino {
  /** ID of the auction to bid on */
  auction_id?: string;
  /** Address of the bidder */
  bidder?: string;
  /** Amount of the bid */
  amount?: string;
  /** Fee amount */
  bid_fee?: string;
}
export interface MsgBidAminoMsg {
  type: "gravity/MsgBid";
  value: MsgBidAmino;
}
/**
 * MsgBid is a message type for placing a bid on an auction with given `auction_id`
 * `bidder` is the signer of the Msg
 * `amount` is the native token amount locked by the auction module if the bid is accepted as the highest bid
 * `bid_fee` is the native token amount sent to the auction pool, and should be at least equal to the min bid fee param
 * 
 * Additionally, all bids must meet or exceed `min_bid_amount`
 */
export interface MsgBidSDKType {
  auction_id: bigint;
  bidder: string;
  amount: bigint;
  bid_fee: bigint;
}
export interface MsgBidResponse {}
export interface MsgBidResponseProtoMsg {
  typeUrl: "/auction.v1.MsgBidResponse";
  value: Uint8Array;
}
export interface MsgBidResponseAmino {}
export interface MsgBidResponseAminoMsg {
  type: "/auction.v1.MsgBidResponse";
  value: MsgBidResponseAmino;
}
export interface MsgBidResponseSDKType {}
function createBaseMsgBid(): MsgBid {
  return {
    auctionId: BigInt(0),
    bidder: "",
    amount: BigInt(0),
    bidFee: BigInt(0)
  };
}
export const MsgBid = {
  typeUrl: "/auction.v1.MsgBid",
  encode(message: MsgBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.bidFee !== BigInt(0)) {
      writer.uint32(32).uint64(message.bidFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.bidFee = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBid {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0),
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      bidFee: isSet(object.bidFee) ? BigInt(object.bidFee.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgBid): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.bidFee !== undefined && (obj.bidFee = (message.bidFee || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    message.bidder = object.bidder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.bidFee = object.bidFee !== undefined && object.bidFee !== null ? BigInt(object.bidFee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBidAmino): MsgBid {
    const message = createBaseMsgBid();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.bid_fee !== undefined && object.bid_fee !== null) {
      message.bidFee = BigInt(object.bid_fee);
    }
    return message;
  },
  toAmino(message: MsgBid): MsgBidAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    obj.bidder = message.bidder;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.bid_fee = message.bidFee ? message.bidFee.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBidAminoMsg): MsgBid {
    return MsgBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBid): MsgBidAminoMsg {
    return {
      type: "gravity/MsgBid",
      value: MsgBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBidProtoMsg): MsgBid {
    return MsgBid.decode(message.value);
  },
  toProto(message: MsgBid): Uint8Array {
    return MsgBid.encode(message).finish();
  },
  toProtoMsg(message: MsgBid): MsgBidProtoMsg {
    return {
      typeUrl: "/auction.v1.MsgBid",
      value: MsgBid.encode(message).finish()
    };
  }
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}
export const MsgBidResponse = {
  typeUrl: "/auction.v1.MsgBidResponse",
  encode(_: MsgBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidResponse();
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
  fromJSON(_: any): MsgBidResponse {
    return {};
  },
  toJSON(_: MsgBidResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
  fromAmino(_: MsgBidResponseAmino): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
  toAmino(_: MsgBidResponse): MsgBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBidResponseAminoMsg): MsgBidResponse {
    return MsgBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBidResponseProtoMsg): MsgBidResponse {
    return MsgBidResponse.decode(message.value);
  },
  toProto(message: MsgBidResponse): Uint8Array {
    return MsgBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBidResponse): MsgBidResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.MsgBidResponse",
      value: MsgBidResponse.encode(message).finish()
    };
  }
};