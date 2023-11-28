import { Params, ParamsSDKType } from "./params";
import { AuctionPeriod, AuctionPeriodSDKType, Auction, AuctionSDKType } from "./auction";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  params?: Params;
  activePeriod?: AuctionPeriod;
  activeAuctions: Auction[];
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  active_period?: AuctionPeriodSDKType;
  active_auctions: AuctionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    activePeriod: undefined,
    activeAuctions: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.activePeriod !== undefined) {
      AuctionPeriod.encode(message.activePeriod, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.activeAuctions) {
      Auction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.activePeriod = AuctionPeriod.decode(reader, reader.uint32());
          break;
        case 3:
          message.activeAuctions.push(Auction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.activePeriod = object.activePeriod !== undefined && object.activePeriod !== null ? AuctionPeriod.fromPartial(object.activePeriod) : undefined;
    message.activeAuctions = object.activeAuctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  }
};