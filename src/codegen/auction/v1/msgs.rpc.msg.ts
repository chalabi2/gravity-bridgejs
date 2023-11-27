import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgBid, MsgBidResponse } from "./msgs";
/** Msg defines the state transitions possible within auction */
export interface Msg {
  bid(request: MsgBid): Promise<MsgBidResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bid = this.bid.bind(this);
  }
  bid(request: MsgBid): Promise<MsgBidResponse> {
    const data = MsgBid.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Msg", "Bid", data);
    return promise.then(data => MsgBidResponse.decode(new _m0.Reader(data)));
  }
}