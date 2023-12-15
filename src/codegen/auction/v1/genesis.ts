import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AuctionPeriod, AuctionPeriodAmino, AuctionPeriodSDKType, Auction, AuctionAmino, AuctionSDKType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  params: Params;
  activePeriod?: AuctionPeriod;
  activeAuctions: Auction[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/auction.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  active_period?: AuctionPeriodAmino;
  active_auctions?: AuctionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/auction.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  active_period?: AuctionPeriodSDKType;
  active_auctions: AuctionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    activePeriod: undefined,
    activeAuctions: []
  };
}
export const GenesisState = {
  typeUrl: "/auction.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      activePeriod: isSet(object.activePeriod) ? AuctionPeriod.fromJSON(object.activePeriod) : undefined,
      activeAuctions: Array.isArray(object?.activeAuctions) ? object.activeAuctions.map((e: any) => Auction.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.activePeriod !== undefined && (obj.activePeriod = message.activePeriod ? AuctionPeriod.toJSON(message.activePeriod) : undefined);
    if (message.activeAuctions) {
      obj.activeAuctions = message.activeAuctions.map(e => e ? Auction.toJSON(e) : undefined);
    } else {
      obj.activeAuctions = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.activePeriod = object.activePeriod !== undefined && object.activePeriod !== null ? AuctionPeriod.fromPartial(object.activePeriod) : undefined;
    message.activeAuctions = object.activeAuctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.active_period !== undefined && object.active_period !== null) {
      message.activePeriod = AuctionPeriod.fromAmino(object.active_period);
    }
    message.activeAuctions = object.active_auctions?.map(e => Auction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.active_period = message.activePeriod ? AuctionPeriod.toAmino(message.activePeriod) : undefined;
    if (message.activeAuctions) {
      obj.active_auctions = message.activeAuctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.active_auctions = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/auction.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};