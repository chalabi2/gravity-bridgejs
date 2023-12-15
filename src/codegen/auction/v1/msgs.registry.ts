//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBid } from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/auction.v1.MsgBid", MsgBid]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/auction.v1.MsgBid",
        value: MsgBid.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/auction.v1.MsgBid",
        value
      };
    }
  },
  toJSON: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/auction.v1.MsgBid",
        value: MsgBid.toJSON(value)
      };
    }
  },
  fromJSON: {
    bid(value: any) {
      return {
        typeUrl: "/auction.v1.MsgBid",
        value: MsgBid.fromJSON(value)
      };
    }
  },
  fromPartial: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/auction.v1.MsgBid",
        value: MsgBid.fromPartial(value)
      };
    }
  }
};