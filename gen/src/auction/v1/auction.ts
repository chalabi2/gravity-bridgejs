import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 */
export interface AuctionPeriod {
  /** Block height at which the AuctionPeriod starts. */
  startBlockHeight: Long;
  /** Block height at which the AuctionPeriod end. */
  endBlockHeight: Long;
}
/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 */
export interface AuctionPeriodSDKType {
  start_block_height: Long;
  end_block_height: Long;
}
/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 */
export interface Auction {
  /** Unique identifier for the Auction. */
  id: Long;
  /** Amount being auctioned. */
  amount?: Coin;
  /** Highest bid on the Auction. */
  highestBid?: Bid;
}
/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 */
export interface AuctionSDKType {
  id: Long;
  amount?: CoinSDKType;
  highest_bid?: BidSDKType;
}
/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 */
export interface Bid {
  /** Amount of the bid. */
  bidAmount: Long;
  /** Address of the bidder. */
  bidderAddress: string;
}
/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 */
export interface BidSDKType {
  bid_amount: Long;
  bidder_address: string;
}
/** AuctionId enables easy storage and retrieval of the most recently used AuctionId */
export interface AuctionId {
  id: Long;
}
/** AuctionId enables easy storage and retrieval of the most recently used AuctionId */
export interface AuctionIdSDKType {
  id: Long;
}
function createBaseAuctionPeriod(): AuctionPeriod {
  return {
    startBlockHeight: Long.UZERO,
    endBlockHeight: Long.UZERO
  };
}
export const AuctionPeriod = {
  encode(message: AuctionPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.startBlockHeight);
    }
    if (!message.endBlockHeight.isZero()) {
      writer.uint32(16).uint64(message.endBlockHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlockHeight = (reader.uint64() as Long);
          break;
        case 2:
          message.endBlockHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuctionPeriod>): AuctionPeriod {
    const message = createBaseAuctionPeriod();
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? Long.fromValue(object.startBlockHeight) : Long.UZERO;
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? Long.fromValue(object.endBlockHeight) : Long.UZERO;
    return message;
  }
};
function createBaseAuction(): Auction {
  return {
    id: Long.UZERO,
    amount: undefined,
    highestBid: undefined
  };
}
export const Auction = {
  encode(message: Auction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Auction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.highestBid = Bid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Auction>): Auction {
    const message = createBaseAuction();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    return message;
  }
};
function createBaseBid(): Bid {
  return {
    bidAmount: Long.UZERO,
    bidderAddress: ""
  };
}
export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bidAmount.isZero()) {
      writer.uint32(8).uint64(message.bidAmount);
    }
    if (message.bidderAddress !== "") {
      writer.uint32(18).string(message.bidderAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidAmount = (reader.uint64() as Long);
          break;
        case 2:
          message.bidderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? Long.fromValue(object.bidAmount) : Long.UZERO;
    message.bidderAddress = object.bidderAddress ?? "";
    return message;
  }
};
function createBaseAuctionId(): AuctionId {
  return {
    id: Long.UZERO
  };
}
export const AuctionId = {
  encode(message: AuctionId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuctionId>): AuctionId {
    const message = createBaseAuctionId();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};