import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the GravityBridge auction module. */
export interface Params {
  /** AuctionLength is the number of blocks that the AuctionPeriod will be active */
  auctionLength: Long;
  /**
   * MinBidFee defines the required minimum fee that must be paid by bidders for their bid to be considered by the module.
   * This fee is paid out to the auction pool. This fee is separate from the standard Cosmos Tx spam protection fee.
   * This fee will not be charged unless a bid is successful.
   */
  minBidFee: Long;
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
/** Params defines the parameters for the GravityBridge auction module. */
export interface ParamsSDKType {
  auction_length: Long;
  min_bid_fee: Long;
  non_auctionable_tokens: string[];
  burn_winning_bids: boolean;
  enabled: boolean;
}
function createBaseParams(): Params {
  return {
    auctionLength: Long.UZERO,
    minBidFee: Long.UZERO,
    nonAuctionableTokens: [],
    burnWinningBids: false,
    enabled: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionLength.isZero()) {
      writer.uint32(8).uint64(message.auctionLength);
    }
    if (!message.minBidFee.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionLength = (reader.uint64() as Long);
          break;
        case 2:
          message.minBidFee = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.auctionLength = object.auctionLength !== undefined && object.auctionLength !== null ? Long.fromValue(object.auctionLength) : Long.UZERO;
    message.minBidFee = object.minBidFee !== undefined && object.minBidFee !== null ? Long.fromValue(object.minBidFee) : Long.UZERO;
    message.nonAuctionableTokens = object.nonAuctionableTokens?.map(e => e) || [];
    message.burnWinningBids = object.burnWinningBids ?? false;
    message.enabled = object.enabled ?? false;
    return message;
  }
};