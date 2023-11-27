import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAuctionPeriodRequest, QueryAuctionPeriodResponseSDKType, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryAuctionByIdRequest, QueryAuctionByIdResponseSDKType, QueryAuctionByDenomRequest, QueryAuctionByDenomResponseSDKType, QueryAllAuctionsByBidderRequest, QueryAllAuctionsByBidderResponseSDKType, QueryAuctionPoolRequest, QueryAuctionPoolResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.auctionPeriod = this.auctionPeriod.bind(this);
    this.auctions = this.auctions.bind(this);
    this.auctionById = this.auctionById.bind(this);
    this.auctionByDenom = this.auctionByDenom.bind(this);
    this.allAuctionsByBidder = this.allAuctionsByBidder.bind(this);
    this.auctionPool = this.auctionPool.bind(this);
  }
  /* Params returns the current module parameters (decided by governance) */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `auction/v1beta/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AuctionPeriod returns the current active auction period, or a future one if no period is active */
  async auctionPeriod(_params: QueryAuctionPeriodRequest = {}): Promise<QueryAuctionPeriodResponseSDKType> {
    const endpoint = `auction/v1beta/period`;
    return await this.req.get<QueryAuctionPeriodResponseSDKType>(endpoint);
  }
  /* Auctions returns all current active auctions */
  async auctions(_params: QueryAuctionsRequest = {}): Promise<QueryAuctionsResponseSDKType> {
    const endpoint = `auction/v1beta/auctions`;
    return await this.req.get<QueryAuctionsResponseSDKType>(endpoint);
  }
  /* AuctionById returns an open auction given by its `id` */
  async auctionById(params: QueryAuctionByIdRequest): Promise<QueryAuctionByIdResponseSDKType> {
    const endpoint = `auction/v1beta/auction-id/${params.auctionId}`;
    return await this.req.get<QueryAuctionByIdResponseSDKType>(endpoint);
  }
  /* AuctionByDenom returns an open auction given by its `denom` */
  async auctionByDenom(params: QueryAuctionByDenomRequest): Promise<QueryAuctionByDenomResponseSDKType> {
    const endpoint = `auction/v1beta/auction-denom/${params.auctionDenom}`;
    return await this.req.get<QueryAuctionByDenomResponseSDKType>(endpoint);
  }
  /* AllAuctionsByBidder returns all open auctions with the given highest bidder address */
  async allAuctionsByBidder(params: QueryAllAuctionsByBidderRequest): Promise<QueryAllAuctionsByBidderResponseSDKType> {
    const endpoint = `auction/v1beta/auctions-bidder/${params.address}`;
    return await this.req.get<QueryAllAuctionsByBidderResponseSDKType>(endpoint);
  }
  /* AuctionPool returns the auction pool account address and the tokens which will be up for auction next,
   (but does not return any amounts from auctions with no bidder) */
  async auctionPool(_params: QueryAuctionPoolRequest = {}): Promise<QueryAuctionPoolResponseSDKType> {
    const endpoint = `auction/v1beta/auction-pool`;
    return await this.req.get<QueryAuctionPoolResponseSDKType>(endpoint);
  }
}