import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAuctionPeriodRequest, QueryAuctionPeriodResponse, QueryAuctionsRequest, QueryAuctionsResponse, QueryAuctionByIdRequest, QueryAuctionByIdResponse, QueryAuctionByDenomRequest, QueryAuctionByDenomResponse, QueryAllAuctionsByBidderRequest, QueryAllAuctionsByBidderResponse, QueryAuctionPoolRequest, QueryAuctionPoolResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the current module parameters (decided by governance) */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** AuctionPeriod returns the current active auction period, or a future one if no period is active */
  auctionPeriod(request?: QueryAuctionPeriodRequest): Promise<QueryAuctionPeriodResponse>;
  /** Auctions returns all current active auctions */
  auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  /** AuctionById returns an open auction given by its `id` */
  auctionById(request: QueryAuctionByIdRequest): Promise<QueryAuctionByIdResponse>;
  /** AuctionByDenom returns an open auction given by its `denom` */
  auctionByDenom(request: QueryAuctionByDenomRequest): Promise<QueryAuctionByDenomResponse>;
  /** AllAuctionsByBidder returns all open auctions with the given highest bidder address */
  allAuctionsByBidder(request: QueryAllAuctionsByBidderRequest): Promise<QueryAllAuctionsByBidderResponse>;
  /**
   * AuctionPool returns the auction pool account address and the tokens which will be up for auction next,
   * (but does not return any amounts from auctions with no bidder)
   */
  auctionPool(request?: QueryAuctionPoolRequest): Promise<QueryAuctionPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.auctionPeriod = this.auctionPeriod.bind(this);
    this.auctions = this.auctions.bind(this);
    this.auctionById = this.auctionById.bind(this);
    this.auctionByDenom = this.auctionByDenom.bind(this);
    this.allAuctionsByBidder = this.allAuctionsByBidder.bind(this);
    this.auctionPool = this.auctionPool.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  auctionPeriod(request: QueryAuctionPeriodRequest = {}): Promise<QueryAuctionPeriodResponse> {
    const data = QueryAuctionPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionPeriod", data);
    return promise.then(data => QueryAuctionPeriodResponse.decode(new BinaryReader(data)));
  }
  auctions(request: QueryAuctionsRequest = {}): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "Auctions", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  auctionById(request: QueryAuctionByIdRequest): Promise<QueryAuctionByIdResponse> {
    const data = QueryAuctionByIdRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionById", data);
    return promise.then(data => QueryAuctionByIdResponse.decode(new BinaryReader(data)));
  }
  auctionByDenom(request: QueryAuctionByDenomRequest): Promise<QueryAuctionByDenomResponse> {
    const data = QueryAuctionByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionByDenom", data);
    return promise.then(data => QueryAuctionByDenomResponse.decode(new BinaryReader(data)));
  }
  allAuctionsByBidder(request: QueryAllAuctionsByBidderRequest): Promise<QueryAllAuctionsByBidderResponse> {
    const data = QueryAllAuctionsByBidderRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AllAuctionsByBidder", data);
    return promise.then(data => QueryAllAuctionsByBidderResponse.decode(new BinaryReader(data)));
  }
  auctionPool(request: QueryAuctionPoolRequest = {}): Promise<QueryAuctionPoolResponse> {
    const data = QueryAuctionPoolRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionPool", data);
    return promise.then(data => QueryAuctionPoolResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    auctionPeriod(request?: QueryAuctionPeriodRequest): Promise<QueryAuctionPeriodResponse> {
      return queryService.auctionPeriod(request);
    },
    auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctions(request);
    },
    auctionById(request: QueryAuctionByIdRequest): Promise<QueryAuctionByIdResponse> {
      return queryService.auctionById(request);
    },
    auctionByDenom(request: QueryAuctionByDenomRequest): Promise<QueryAuctionByDenomResponse> {
      return queryService.auctionByDenom(request);
    },
    allAuctionsByBidder(request: QueryAllAuctionsByBidderRequest): Promise<QueryAllAuctionsByBidderResponse> {
      return queryService.allAuctionsByBidder(request);
    },
    auctionPool(request?: QueryAuctionPoolRequest): Promise<QueryAuctionPoolResponse> {
      return queryService.auctionPool(request);
    }
  };
};