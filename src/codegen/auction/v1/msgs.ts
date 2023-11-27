import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  auctionId: Long;
  /** Address of the bidder */
  bidder: string;
  /** Amount of the bid */
  amount: Long;
  /** Fee amount */
  bidFee: Long;
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
  auction_id: Long;
  bidder: string;
  amount: Long;
  bid_fee: Long;
}
export interface MsgBidResponse {}
export interface MsgBidResponseSDKType {}
function createBaseMsgBid(): MsgBid {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    amount: Long.UZERO,
    bidFee: Long.UZERO
  };
}
export const MsgBid = {
  encode(message: MsgBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (!message.bidFee.isZero()) {
      writer.uint32(32).uint64(message.bidFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.amount = (reader.uint64() as Long);
          break;
        case 4:
          message.bidFee = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.bidFee = object.bidFee !== undefined && object.bidFee !== null ? Long.fromValue(object.bidFee) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}
export const MsgBidResponse = {
  encode(_: MsgBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  }
};