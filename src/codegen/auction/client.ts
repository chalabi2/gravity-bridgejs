import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as auctionV1MsgsRegistry from "./v1/msgs.registry";
import * as auctionV1MsgsAmino from "./v1/msgs.amino";
export const auctionAminoConverters = {
  ...auctionV1MsgsAmino.AminoConverter
};
export const auctionProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...auctionV1MsgsRegistry.registry];
export const getSigningAuctionClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...auctionProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...auctionAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAuctionClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAuctionClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};