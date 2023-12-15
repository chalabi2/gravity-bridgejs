import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the GravityBridge auction module. */
export interface Params {
  /** AuctionLength is the number of blocks that the AuctionPeriod will be active */
  auctionLength: bigint;
  /**
   * MinBidFee defines the required minimum fee that must be paid by bidders for their bid to be considered by the module.
   * This fee is paid out to the auction pool. This fee is separate from the standard Cosmos Tx spam protection fee.
   * This fee will not be charged unless a bid is successful.
   */
  minBidFee: bigint;
  /** NonAuctionableTokens is a list of token denomss which should never be auctioned from the auction pool */
  nonAuctionableTokens: string[];
  /** BurnWinningBids controls if we burn the tokens of the winning bidder instead of sending them to the auction pool */
  burnWinningBids: boolean;
  /**
   * Enabled controls whether auctions progress as usual, or are preserved in an inactive halted state.
   * When Enabled is false, bids will also fail to be processed.
   */
  enabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/auction.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the GravityBridge auction module. */
export interface ParamsAmino {
  /** AuctionLength is the number of blocks that the AuctionPeriod will be active */
  auction_length?: string;
  /**
   * MinBidFee defines the required minimum fee that must be paid by bidders for their bid to be considered by the module.
   * This fee is paid out to the auction pool. This fee is separate from the standard Cosmos Tx spam protection fee.
   * This fee will not be charged unless a bid is successful.
   */
  min_bid_fee?: string;
  /** NonAuctionableTokens is a list of token denomss which should never be auctioned from the auction pool */
  non_auctionable_tokens?: string[];
  /** BurnWinningBids controls if we burn the tokens of the winning bidder instead of sending them to the auction pool */
  burn_winning_bids?: boolean;
  /**
   * Enabled controls whether auctions progress as usual, or are preserved in an inactive halted state.
   * When Enabled is false, bids will also fail to be processed.
   */
  enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/auction.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the GravityBridge auction module. */
export interface ParamsSDKType {
  auction_length: bigint;
  min_bid_fee: bigint;
  non_auctionable_tokens: string[];
  burn_winning_bids: boolean;
  enabled: boolean;
}
function createBaseParams(): Params {
  return {
    auctionLength: BigInt(0),
    minBidFee: BigInt(0),
    nonAuctionableTokens: [],
    burnWinningBids: false,
    enabled: false
  };
}
export const Params = {
  typeUrl: "/auction.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionLength !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionLength);
    }
    if (message.minBidFee !== BigInt(0)) {
      writer.uint32(16).uint64(message.minBidFee);
    }
    for (const v of message.nonAuctionableTokens) {
      writer.uint32(26).string(v!);
    }
    if (message.burnWinningBids === true) {
      writer.uint32(32).bool(message.burnWinningBids);
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionLength = reader.uint64();
          break;
        case 2:
          message.minBidFee = reader.uint64();
          break;
        case 3:
          message.nonAuctionableTokens.push(reader.string());
          break;
        case 4:
          message.burnWinningBids = reader.bool();
          break;
        case 5:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      auctionLength: isSet(object.auctionLength) ? BigInt(object.auctionLength.toString()) : BigInt(0),
      minBidFee: isSet(object.minBidFee) ? BigInt(object.minBidFee.toString()) : BigInt(0),
      nonAuctionableTokens: Array.isArray(object?.nonAuctionableTokens) ? object.nonAuctionableTokens.map((e: any) => String(e)) : [],
      burnWinningBids: isSet(object.burnWinningBids) ? Boolean(object.burnWinningBids) : false,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.auctionLength !== undefined && (obj.auctionLength = (message.auctionLength || BigInt(0)).toString());
    message.minBidFee !== undefined && (obj.minBidFee = (message.minBidFee || BigInt(0)).toString());
    if (message.nonAuctionableTokens) {
      obj.nonAuctionableTokens = message.nonAuctionableTokens.map(e => e);
    } else {
      obj.nonAuctionableTokens = [];
    }
    message.burnWinningBids !== undefined && (obj.burnWinningBids = message.burnWinningBids);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.auctionLength = object.auctionLength !== undefined && object.auctionLength !== null ? BigInt(object.auctionLength.toString()) : BigInt(0);
    message.minBidFee = object.minBidFee !== undefined && object.minBidFee !== null ? BigInt(object.minBidFee.toString()) : BigInt(0);
    message.nonAuctionableTokens = object.nonAuctionableTokens?.map(e => e) || [];
    message.burnWinningBids = object.burnWinningBids ?? false;
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.auction_length !== undefined && object.auction_length !== null) {
      message.auctionLength = BigInt(object.auction_length);
    }
    if (object.min_bid_fee !== undefined && object.min_bid_fee !== null) {
      message.minBidFee = BigInt(object.min_bid_fee);
    }
    message.nonAuctionableTokens = object.non_auctionable_tokens?.map(e => e) || [];
    if (object.burn_winning_bids !== undefined && object.burn_winning_bids !== null) {
      message.burnWinningBids = object.burn_winning_bids;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.auction_length = message.auctionLength ? message.auctionLength.toString() : undefined;
    obj.min_bid_fee = message.minBidFee ? message.minBidFee.toString() : undefined;
    if (message.nonAuctionableTokens) {
      obj.non_auctionable_tokens = message.nonAuctionableTokens.map(e => e);
    } else {
      obj.non_auctionable_tokens = [];
    }
    obj.burn_winning_bids = message.burnWinningBids;
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/auction.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};