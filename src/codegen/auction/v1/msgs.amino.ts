//@ts-nocheck
import { MsgBid } from "./msgs";
export const AminoConverter = {
  "/auction.v1.MsgBid": {
    aminoType: "gravity/MsgBid",
    toAmino: MsgBid.toAmino,
    fromAmino: MsgBid.fromAmino
  }
};