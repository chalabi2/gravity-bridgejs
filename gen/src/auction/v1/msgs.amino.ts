import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgBid } from "./msgs";
export interface MsgBidAminoType extends AminoMsg {
  type: "/auction.v1.MsgBid";
  value: {
    auction_id: string;
    bidder: string;
    amount: string;
    bid_fee: string;
  };
}
export const AminoConverter = {
  "/auction.v1.MsgBid": {
    aminoType: "/auction.v1.MsgBid",
    toAmino: ({
      auctionId,
      bidder,
      amount,
      bidFee
    }: MsgBid): MsgBidAminoType["value"] => {
      return {
        auction_id: auctionId.toString(),
        bidder,
        amount: amount.toString(),
        bid_fee: bidFee.toString()
      };
    },
    fromAmino: ({
      auction_id,
      bidder,
      amount,
      bid_fee
    }: MsgBidAminoType["value"]): MsgBid => {
      return {
        auctionId: Long.fromString(auction_id),
        bidder,
        amount: Long.fromString(amount),
        bidFee: Long.fromString(bid_fee)
      };
    }
  }
};