import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 */
export interface AuctionPeriod {
  /** Block height at which the AuctionPeriod starts. */
  startBlockHeight: bigint;
  /** Block height at which the AuctionPeriod end. */
  endBlockHeight: bigint;
}
export interface AuctionPeriodProtoMsg {
  typeUrl: "/auction.v1.AuctionPeriod";
  value: Uint8Array;
}
/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 */
export interface AuctionPeriodAmino {
  /** Block height at which the AuctionPeriod starts. */
  start_block_height?: string;
  /** Block height at which the AuctionPeriod end. */
  end_block_height?: string;
}
export interface AuctionPeriodAminoMsg {
  type: "/auction.v1.AuctionPeriod";
  value: AuctionPeriodAmino;
}
/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 */
export interface AuctionPeriodSDKType {
  start_block_height: bigint;
  end_block_height: bigint;
}
/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 */
export interface Auction {
  /** Unique identifier for the Auction. */
  id: bigint;
  /** Amount being auctioned. */
  amount: Coin;
  /** Highest bid on the Auction. */
  highestBid?: Bid;
}
export interface AuctionProtoMsg {
  typeUrl: "/auction.v1.Auction";
  value: Uint8Array;
}
/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 */
export interface AuctionAmino {
  /** Unique identifier for the Auction. */
  id?: string;
  /** Amount being auctioned. */
  amount?: CoinAmino;
  /** Highest bid on the Auction. */
  highest_bid?: BidAmino;
}
export interface AuctionAminoMsg {
  type: "/auction.v1.Auction";
  value: AuctionAmino;
}
/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 */
export interface AuctionSDKType {
  id: bigint;
  amount: CoinSDKType;
  highest_bid?: BidSDKType;
}
/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 */
export interface Bid {
  /** Amount of the bid. */
  bidAmount: bigint;
  /** Address of the bidder. */
  bidderAddress: string;
}
export interface BidProtoMsg {
  typeUrl: "/auction.v1.Bid";
  value: Uint8Array;
}
/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 */
export interface BidAmino {
  /** Amount of the bid. */
  bid_amount?: string;
  /** Address of the bidder. */
  bidder_address?: string;
}
export interface BidAminoMsg {
  type: "/auction.v1.Bid";
  value: BidAmino;
}
/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 */
export interface BidSDKType {
  bid_amount: bigint;
  bidder_address: string;
}
/** AuctionId enables easy storage and retrieval of the most recently used AuctionId */
export interface AuctionId {
  id: bigint;
}
export interface AuctionIdProtoMsg {
  typeUrl: "/auction.v1.AuctionId";
  value: Uint8Array;
}
/** AuctionId enables easy storage and retrieval of the most recently used AuctionId */
export interface AuctionIdAmino {
  id?: string;
}
export interface AuctionIdAminoMsg {
  type: "/auction.v1.AuctionId";
  value: AuctionIdAmino;
}
/** AuctionId enables easy storage and retrieval of the most recently used AuctionId */
export interface AuctionIdSDKType {
  id: bigint;
}
function createBaseAuctionPeriod(): AuctionPeriod {
  return {
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0)
  };
}
export const AuctionPeriod = {
  typeUrl: "/auction.v1.AuctionPeriod",
  encode(message: AuctionPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.endBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuctionPeriod {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlockHeight = reader.uint64();
          break;
        case 2:
          message.endBlockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuctionPeriod {
    return {
      startBlockHeight: isSet(object.startBlockHeight) ? BigInt(object.startBlockHeight.toString()) : BigInt(0),
      endBlockHeight: isSet(object.endBlockHeight) ? BigInt(object.endBlockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: AuctionPeriod): unknown {
    const obj: any = {};
    message.startBlockHeight !== undefined && (obj.startBlockHeight = (message.startBlockHeight || BigInt(0)).toString());
    message.endBlockHeight !== undefined && (obj.endBlockHeight = (message.endBlockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<AuctionPeriod>): AuctionPeriod {
    const message = createBaseAuctionPeriod();
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AuctionPeriodAmino): AuctionPeriod {
    const message = createBaseAuctionPeriod();
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    return message;
  },
  toAmino(message: AuctionPeriod): AuctionPeriodAmino {
    const obj: any = {};
    obj.start_block_height = message.startBlockHeight ? message.startBlockHeight.toString() : undefined;
    obj.end_block_height = message.endBlockHeight ? message.endBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AuctionPeriodAminoMsg): AuctionPeriod {
    return AuctionPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionPeriodProtoMsg): AuctionPeriod {
    return AuctionPeriod.decode(message.value);
  },
  toProto(message: AuctionPeriod): Uint8Array {
    return AuctionPeriod.encode(message).finish();
  },
  toProtoMsg(message: AuctionPeriod): AuctionPeriodProtoMsg {
    return {
      typeUrl: "/auction.v1.AuctionPeriod",
      value: AuctionPeriod.encode(message).finish()
    };
  }
};
function createBaseAuction(): Auction {
  return {
    id: BigInt(0),
    amount: Coin.fromPartial({}),
    highestBid: undefined
  };
}
export const Auction = {
  typeUrl: "/auction.v1.Auction",
  encode(message: Auction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Auction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromJSON(object: any): Auction {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      highestBid: isSet(object.highestBid) ? Bid.fromJSON(object.highestBid) : undefined
    };
  },
  toJSON(message: Auction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.highestBid !== undefined && (obj.highestBid = message.highestBid ? Bid.toJSON(message.highestBid) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Auction>): Auction {
    const message = createBaseAuction();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    return message;
  },
  fromAmino(object: AuctionAmino): Auction {
    const message = createBaseAuction();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.highest_bid !== undefined && object.highest_bid !== null) {
      message.highestBid = Bid.fromAmino(object.highest_bid);
    }
    return message;
  },
  toAmino(message: Auction): AuctionAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.highest_bid = message.highestBid ? Bid.toAmino(message.highestBid) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuctionAminoMsg): Auction {
    return Auction.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionProtoMsg): Auction {
    return Auction.decode(message.value);
  },
  toProto(message: Auction): Uint8Array {
    return Auction.encode(message).finish();
  },
  toProtoMsg(message: Auction): AuctionProtoMsg {
    return {
      typeUrl: "/auction.v1.Auction",
      value: Auction.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    bidAmount: BigInt(0),
    bidderAddress: ""
  };
}
export const Bid = {
  typeUrl: "/auction.v1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidAmount !== BigInt(0)) {
      writer.uint32(8).uint64(message.bidAmount);
    }
    if (message.bidderAddress !== "") {
      writer.uint32(18).string(message.bidderAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidAmount = reader.uint64();
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
  fromJSON(object: any): Bid {
    return {
      bidAmount: isSet(object.bidAmount) ? BigInt(object.bidAmount.toString()) : BigInt(0),
      bidderAddress: isSet(object.bidderAddress) ? String(object.bidderAddress) : ""
    };
  },
  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.bidAmount !== undefined && (obj.bidAmount = (message.bidAmount || BigInt(0)).toString());
    message.bidderAddress !== undefined && (obj.bidderAddress = message.bidderAddress);
    return obj;
  },
  fromPartial(object: Partial<Bid>): Bid {
    const message = createBaseBid();
    message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? BigInt(object.bidAmount.toString()) : BigInt(0);
    message.bidderAddress = object.bidderAddress ?? "";
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.bid_amount !== undefined && object.bid_amount !== null) {
      message.bidAmount = BigInt(object.bid_amount);
    }
    if (object.bidder_address !== undefined && object.bidder_address !== null) {
      message.bidderAddress = object.bidder_address;
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bid_amount = message.bidAmount ? message.bidAmount.toString() : undefined;
    obj.bidder_address = message.bidderAddress;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/auction.v1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
function createBaseAuctionId(): AuctionId {
  return {
    id: BigInt(0)
  };
}
export const AuctionId = {
  typeUrl: "/auction.v1.AuctionId",
  encode(message: AuctionId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuctionId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuctionId {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: AuctionId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<AuctionId>): AuctionId {
    const message = createBaseAuctionId();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AuctionIdAmino): AuctionId {
    const message = createBaseAuctionId();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: AuctionId): AuctionIdAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AuctionIdAminoMsg): AuctionId {
    return AuctionId.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionIdProtoMsg): AuctionId {
    return AuctionId.decode(message.value);
  },
  toProto(message: AuctionId): Uint8Array {
    return AuctionId.encode(message).finish();
  },
  toProtoMsg(message: AuctionId): AuctionIdProtoMsg {
    return {
      typeUrl: "/auction.v1.AuctionId",
      value: AuctionId.encode(message).finish()
    };
  }
};