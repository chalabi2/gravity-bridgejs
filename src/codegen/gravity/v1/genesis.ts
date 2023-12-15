import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Valset, ValsetAmino, ValsetSDKType, ERC20ToDenom, ERC20ToDenomAmino, ERC20ToDenomSDKType, PendingIbcAutoForward, PendingIbcAutoForwardAmino, PendingIbcAutoForwardSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallAmino, MsgConfirmLogicCallSDKType, MsgSetOrchestratorAddress, MsgSetOrchestratorAddressAmino, MsgSetOrchestratorAddressSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallAmino, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 * 
 * unbond_slashing_valsets_window
 * 
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 * 
 * valset_reward
 * 
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 * 
 * bridge_active
 * 
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 * 
 * min_chain_fee_basis_points
 * 
 * The minimum SendToEth `chain_fee` amount, in terms of basis points. e.g. 10% fee = 1000, and 0.02% fee = 2
 * 
 * chain_fee_auction_pool_fraction
 * 
 * Specifies what fraction of the SendToEth `chain_fee` amount should go to the auction pool.
 * e.g. "0.5" gives a 50% auction pool / staker split while "0.9" would cause 90% of the fee to go to the pool
 */
export interface Params {
  gravityId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: bigint;
  signedValsetsWindow: bigint;
  signedBatchesWindow: bigint;
  signedLogicCallsWindow: bigint;
  targetBatchTimeout: bigint;
  averageBlockTime: bigint;
  averageEthereumBlockTime: bigint;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionLogicCall: Uint8Array;
  unbondSlashingValsetsWindow: bigint;
  slashFractionBadEthSignature: Uint8Array;
  valsetReward: Coin;
  bridgeActive: boolean;
  /**
   * addresses on this blacklist are forbidden from depositing or withdrawing
   * from Ethereum to the bridge
   */
  ethereumBlacklist: string[];
  minChainFeeBasisPoints: bigint;
  chainFeeAuctionPoolFraction: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/gravity.v1.Params";
  value: Uint8Array;
}
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 * 
 * unbond_slashing_valsets_window
 * 
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 * 
 * valset_reward
 * 
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 * 
 * bridge_active
 * 
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 * 
 * min_chain_fee_basis_points
 * 
 * The minimum SendToEth `chain_fee` amount, in terms of basis points. e.g. 10% fee = 1000, and 0.02% fee = 2
 * 
 * chain_fee_auction_pool_fraction
 * 
 * Specifies what fraction of the SendToEth `chain_fee` amount should go to the auction pool.
 * e.g. "0.5" gives a 50% auction pool / staker split while "0.9" would cause 90% of the fee to go to the pool
 */
export interface ParamsAmino {
  gravity_id?: string;
  contract_source_hash?: string;
  bridge_ethereum_address?: string;
  bridge_chain_id?: string;
  signed_valsets_window?: string;
  signed_batches_window?: string;
  signed_logic_calls_window?: string;
  target_batch_timeout?: string;
  average_block_time?: string;
  average_ethereum_block_time?: string;
  slash_fraction_valset?: string;
  slash_fraction_batch?: string;
  slash_fraction_logic_call?: string;
  unbond_slashing_valsets_window?: string;
  slash_fraction_bad_eth_signature?: string;
  valset_reward?: CoinAmino;
  bridge_active?: boolean;
  /**
   * addresses on this blacklist are forbidden from depositing or withdrawing
   * from Ethereum to the bridge
   */
  ethereum_blacklist?: string[];
  min_chain_fee_basis_points?: string;
  chain_fee_auction_pool_fraction?: string;
}
export interface ParamsAminoMsg {
  type: "/gravity.v1.Params";
  value: ParamsAmino;
}
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 * 
 * unbond_slashing_valsets_window
 * 
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 * 
 * valset_reward
 * 
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 * 
 * bridge_active
 * 
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 * 
 * min_chain_fee_basis_points
 * 
 * The minimum SendToEth `chain_fee` amount, in terms of basis points. e.g. 10% fee = 1000, and 0.02% fee = 2
 * 
 * chain_fee_auction_pool_fraction
 * 
 * Specifies what fraction of the SendToEth `chain_fee` amount should go to the auction pool.
 * e.g. "0.5" gives a 50% auction pool / staker split while "0.9" would cause 90% of the fee to go to the pool
 */
export interface ParamsSDKType {
  gravity_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: bigint;
  signed_valsets_window: bigint;
  signed_batches_window: bigint;
  signed_logic_calls_window: bigint;
  target_batch_timeout: bigint;
  average_block_time: bigint;
  average_ethereum_block_time: bigint;
  slash_fraction_valset: Uint8Array;
  slash_fraction_batch: Uint8Array;
  slash_fraction_logic_call: Uint8Array;
  unbond_slashing_valsets_window: bigint;
  slash_fraction_bad_eth_signature: Uint8Array;
  valset_reward: CoinSDKType;
  bridge_active: boolean;
  ethereum_blacklist: string[];
  min_chain_fee_basis_points: bigint;
  chain_fee_auction_pool_fraction: string;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisState {
  params?: Params;
  gravityNonces: GravityNonces;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  logicCalls: OutgoingLogicCall[];
  logicCallConfirms: MsgConfirmLogicCall[];
  attestations: Attestation[];
  delegateKeys: MsgSetOrchestratorAddress[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/gravity.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  gravity_nonces?: GravityNoncesAmino;
  valsets?: ValsetAmino[];
  valset_confirms?: MsgValsetConfirmAmino[];
  batches?: OutgoingTxBatchAmino[];
  batch_confirms?: MsgConfirmBatchAmino[];
  logic_calls?: OutgoingLogicCallAmino[];
  logic_call_confirms?: MsgConfirmLogicCallAmino[];
  attestations?: AttestationAmino[];
  delegate_keys?: MsgSetOrchestratorAddressAmino[];
  erc20_to_denoms?: ERC20ToDenomAmino[];
  unbatched_transfers?: OutgoingTransferTxAmino[];
  pending_ibc_auto_forwards?: PendingIbcAutoForwardAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/gravity.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  gravity_nonces: GravityNoncesSDKType;
  valsets: ValsetSDKType[];
  valset_confirms: MsgValsetConfirmSDKType[];
  batches: OutgoingTxBatchSDKType[];
  batch_confirms: MsgConfirmBatchSDKType[];
  logic_calls: OutgoingLogicCallSDKType[];
  logic_call_confirms: MsgConfirmLogicCallSDKType[];
  attestations: AttestationSDKType[];
  delegate_keys: MsgSetOrchestratorAddressSDKType[];
  erc20_to_denoms: ERC20ToDenomSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
  pending_ibc_auto_forwards: PendingIbcAutoForwardSDKType[];
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNonces {
  /** the nonce of the last generated validator set */
  latestValsetNonce: bigint;
  /** the last observed Gravity.sol contract event nonce */
  lastObservedNonce: bigint;
  /** the last valset nonce we have slashed, to prevent double slashing */
  lastSlashedValsetNonce: bigint;
  /**
   * the last batch Cosmos chain block that batch slashing has completed for
   * there is an individual batch nonce for each token type so this removes
   * the need to store them all
   */
  lastSlashedBatchBlock: bigint;
  /** the last cosmos block that logic call slashing has completed for */
  lastSlashedLogicCallBlock: bigint;
  /**
   * the last transaction id from the Gravity TX pool, this prevents ID
   * duplication during chain upgrades
   */
  lastTxPoolId: bigint;
  /**
   * the last batch id from the Gravity batch pool, this prevents ID duplication
   * during chain upgrades
   */
  lastBatchId: bigint;
}
export interface GravityNoncesProtoMsg {
  typeUrl: "/gravity.v1.GravityNonces";
  value: Uint8Array;
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNoncesAmino {
  /** the nonce of the last generated validator set */
  latest_valset_nonce?: string;
  /** the last observed Gravity.sol contract event nonce */
  last_observed_nonce?: string;
  /** the last valset nonce we have slashed, to prevent double slashing */
  last_slashed_valset_nonce?: string;
  /**
   * the last batch Cosmos chain block that batch slashing has completed for
   * there is an individual batch nonce for each token type so this removes
   * the need to store them all
   */
  last_slashed_batch_block?: string;
  /** the last cosmos block that logic call slashing has completed for */
  last_slashed_logic_call_block?: string;
  /**
   * the last transaction id from the Gravity TX pool, this prevents ID
   * duplication during chain upgrades
   */
  last_tx_pool_id?: string;
  /**
   * the last batch id from the Gravity batch pool, this prevents ID duplication
   * during chain upgrades
   */
  last_batch_id?: string;
}
export interface GravityNoncesAminoMsg {
  type: "/gravity.v1.GravityNonces";
  value: GravityNoncesAmino;
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNoncesSDKType {
  latest_valset_nonce: bigint;
  last_observed_nonce: bigint;
  last_slashed_valset_nonce: bigint;
  last_slashed_batch_block: bigint;
  last_slashed_logic_call_block: bigint;
  last_tx_pool_id: bigint;
  last_batch_id: bigint;
}
function createBaseParams(): Params {
  return {
    gravityId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: BigInt(0),
    signedValsetsWindow: BigInt(0),
    signedBatchesWindow: BigInt(0),
    signedLogicCallsWindow: BigInt(0),
    targetBatchTimeout: BigInt(0),
    averageBlockTime: BigInt(0),
    averageEthereumBlockTime: BigInt(0),
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionLogicCall: new Uint8Array(),
    unbondSlashingValsetsWindow: BigInt(0),
    slashFractionBadEthSignature: new Uint8Array(),
    valsetReward: Coin.fromPartial({}),
    bridgeActive: false,
    ethereumBlacklist: [],
    minChainFeeBasisPoints: BigInt(0),
    chainFeeAuctionPoolFraction: ""
  };
}
export const Params = {
  typeUrl: "/gravity.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gravityId !== "") {
      writer.uint32(10).string(message.gravityId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(34).string(message.bridgeEthereumAddress);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(40).uint64(message.bridgeChainId);
    }
    if (message.signedValsetsWindow !== BigInt(0)) {
      writer.uint32(48).uint64(message.signedValsetsWindow);
    }
    if (message.signedBatchesWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.signedBatchesWindow);
    }
    if (message.signedLogicCallsWindow !== BigInt(0)) {
      writer.uint32(64).uint64(message.signedLogicCallsWindow);
    }
    if (message.targetBatchTimeout !== BigInt(0)) {
      writer.uint32(72).uint64(message.targetBatchTimeout);
    }
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(80).uint64(message.averageBlockTime);
    }
    if (message.averageEthereumBlockTime !== BigInt(0)) {
      writer.uint32(88).uint64(message.averageEthereumBlockTime);
    }
    if (message.slashFractionValset.length !== 0) {
      writer.uint32(98).bytes(message.slashFractionValset);
    }
    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionBatch);
    }
    if (message.slashFractionLogicCall.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionLogicCall);
    }
    if (message.unbondSlashingValsetsWindow !== BigInt(0)) {
      writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
    }
    if (message.slashFractionBadEthSignature.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionBadEthSignature);
    }
    if (message.valsetReward !== undefined) {
      Coin.encode(message.valsetReward, writer.uint32(138).fork()).ldelim();
    }
    if (message.bridgeActive === true) {
      writer.uint32(144).bool(message.bridgeActive);
    }
    for (const v of message.ethereumBlacklist) {
      writer.uint32(154).string(v!);
    }
    if (message.minChainFeeBasisPoints !== BigInt(0)) {
      writer.uint32(160).uint64(message.minChainFeeBasisPoints);
    }
    if (message.chainFeeAuctionPoolFraction !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.chainFeeAuctionPoolFraction, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gravityId = reader.string();
          break;
        case 2:
          message.contractSourceHash = reader.string();
          break;
        case 4:
          message.bridgeEthereumAddress = reader.string();
          break;
        case 5:
          message.bridgeChainId = reader.uint64();
          break;
        case 6:
          message.signedValsetsWindow = reader.uint64();
          break;
        case 7:
          message.signedBatchesWindow = reader.uint64();
          break;
        case 8:
          message.signedLogicCallsWindow = reader.uint64();
          break;
        case 9:
          message.targetBatchTimeout = reader.uint64();
          break;
        case 10:
          message.averageBlockTime = reader.uint64();
          break;
        case 11:
          message.averageEthereumBlockTime = reader.uint64();
          break;
        case 12:
          message.slashFractionValset = reader.bytes();
          break;
        case 13:
          message.slashFractionBatch = reader.bytes();
          break;
        case 14:
          message.slashFractionLogicCall = reader.bytes();
          break;
        case 15:
          message.unbondSlashingValsetsWindow = reader.uint64();
          break;
        case 16:
          message.slashFractionBadEthSignature = reader.bytes();
          break;
        case 17:
          message.valsetReward = Coin.decode(reader, reader.uint32());
          break;
        case 18:
          message.bridgeActive = reader.bool();
          break;
        case 19:
          message.ethereumBlacklist.push(reader.string());
          break;
        case 20:
          message.minChainFeeBasisPoints = reader.uint64();
          break;
        case 21:
          message.chainFeeAuctionPoolFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      gravityId: isSet(object.gravityId) ? String(object.gravityId) : "",
      contractSourceHash: isSet(object.contractSourceHash) ? String(object.contractSourceHash) : "",
      bridgeEthereumAddress: isSet(object.bridgeEthereumAddress) ? String(object.bridgeEthereumAddress) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? BigInt(object.bridgeChainId.toString()) : BigInt(0),
      signedValsetsWindow: isSet(object.signedValsetsWindow) ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0),
      signedBatchesWindow: isSet(object.signedBatchesWindow) ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0),
      signedLogicCallsWindow: isSet(object.signedLogicCallsWindow) ? BigInt(object.signedLogicCallsWindow.toString()) : BigInt(0),
      targetBatchTimeout: isSet(object.targetBatchTimeout) ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0),
      averageBlockTime: isSet(object.averageBlockTime) ? BigInt(object.averageBlockTime.toString()) : BigInt(0),
      averageEthereumBlockTime: isSet(object.averageEthereumBlockTime) ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0),
      slashFractionValset: isSet(object.slashFractionValset) ? bytesFromBase64(object.slashFractionValset) : new Uint8Array(),
      slashFractionBatch: isSet(object.slashFractionBatch) ? bytesFromBase64(object.slashFractionBatch) : new Uint8Array(),
      slashFractionLogicCall: isSet(object.slashFractionLogicCall) ? bytesFromBase64(object.slashFractionLogicCall) : new Uint8Array(),
      unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow) ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0),
      slashFractionBadEthSignature: isSet(object.slashFractionBadEthSignature) ? bytesFromBase64(object.slashFractionBadEthSignature) : new Uint8Array(),
      valsetReward: isSet(object.valsetReward) ? Coin.fromJSON(object.valsetReward) : undefined,
      bridgeActive: isSet(object.bridgeActive) ? Boolean(object.bridgeActive) : false,
      ethereumBlacklist: Array.isArray(object?.ethereumBlacklist) ? object.ethereumBlacklist.map((e: any) => String(e)) : [],
      minChainFeeBasisPoints: isSet(object.minChainFeeBasisPoints) ? BigInt(object.minChainFeeBasisPoints.toString()) : BigInt(0),
      chainFeeAuctionPoolFraction: isSet(object.chainFeeAuctionPoolFraction) ? String(object.chainFeeAuctionPoolFraction) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gravityId !== undefined && (obj.gravityId = message.gravityId);
    message.contractSourceHash !== undefined && (obj.contractSourceHash = message.contractSourceHash);
    message.bridgeEthereumAddress !== undefined && (obj.bridgeEthereumAddress = message.bridgeEthereumAddress);
    message.bridgeChainId !== undefined && (obj.bridgeChainId = (message.bridgeChainId || BigInt(0)).toString());
    message.signedValsetsWindow !== undefined && (obj.signedValsetsWindow = (message.signedValsetsWindow || BigInt(0)).toString());
    message.signedBatchesWindow !== undefined && (obj.signedBatchesWindow = (message.signedBatchesWindow || BigInt(0)).toString());
    message.signedLogicCallsWindow !== undefined && (obj.signedLogicCallsWindow = (message.signedLogicCallsWindow || BigInt(0)).toString());
    message.targetBatchTimeout !== undefined && (obj.targetBatchTimeout = (message.targetBatchTimeout || BigInt(0)).toString());
    message.averageBlockTime !== undefined && (obj.averageBlockTime = (message.averageBlockTime || BigInt(0)).toString());
    message.averageEthereumBlockTime !== undefined && (obj.averageEthereumBlockTime = (message.averageEthereumBlockTime || BigInt(0)).toString());
    message.slashFractionValset !== undefined && (obj.slashFractionValset = base64FromBytes(message.slashFractionValset !== undefined ? message.slashFractionValset : new Uint8Array()));
    message.slashFractionBatch !== undefined && (obj.slashFractionBatch = base64FromBytes(message.slashFractionBatch !== undefined ? message.slashFractionBatch : new Uint8Array()));
    message.slashFractionLogicCall !== undefined && (obj.slashFractionLogicCall = base64FromBytes(message.slashFractionLogicCall !== undefined ? message.slashFractionLogicCall : new Uint8Array()));
    message.unbondSlashingValsetsWindow !== undefined && (obj.unbondSlashingValsetsWindow = (message.unbondSlashingValsetsWindow || BigInt(0)).toString());
    message.slashFractionBadEthSignature !== undefined && (obj.slashFractionBadEthSignature = base64FromBytes(message.slashFractionBadEthSignature !== undefined ? message.slashFractionBadEthSignature : new Uint8Array()));
    message.valsetReward !== undefined && (obj.valsetReward = message.valsetReward ? Coin.toJSON(message.valsetReward) : undefined);
    message.bridgeActive !== undefined && (obj.bridgeActive = message.bridgeActive);
    if (message.ethereumBlacklist) {
      obj.ethereumBlacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereumBlacklist = [];
    }
    message.minChainFeeBasisPoints !== undefined && (obj.minChainFeeBasisPoints = (message.minChainFeeBasisPoints || BigInt(0)).toString());
    message.chainFeeAuctionPoolFraction !== undefined && (obj.chainFeeAuctionPoolFraction = message.chainFeeAuctionPoolFraction);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.gravityId = object.gravityId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0);
    message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0);
    message.signedLogicCallsWindow = object.signedLogicCallsWindow !== undefined && object.signedLogicCallsWindow !== null ? BigInt(object.signedLogicCallsWindow.toString()) : BigInt(0);
    message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0);
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0);
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionLogicCall = object.slashFractionLogicCall ?? new Uint8Array();
    message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0);
    message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
    message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
    message.bridgeActive = object.bridgeActive ?? false;
    message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
    message.minChainFeeBasisPoints = object.minChainFeeBasisPoints !== undefined && object.minChainFeeBasisPoints !== null ? BigInt(object.minChainFeeBasisPoints.toString()) : BigInt(0);
    message.chainFeeAuctionPoolFraction = object.chainFeeAuctionPoolFraction ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.gravity_id !== undefined && object.gravity_id !== null) {
      message.gravityId = object.gravity_id;
    }
    if (object.contract_source_hash !== undefined && object.contract_source_hash !== null) {
      message.contractSourceHash = object.contract_source_hash;
    }
    if (object.bridge_ethereum_address !== undefined && object.bridge_ethereum_address !== null) {
      message.bridgeEthereumAddress = object.bridge_ethereum_address;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = BigInt(object.bridge_chain_id);
    }
    if (object.signed_valsets_window !== undefined && object.signed_valsets_window !== null) {
      message.signedValsetsWindow = BigInt(object.signed_valsets_window);
    }
    if (object.signed_batches_window !== undefined && object.signed_batches_window !== null) {
      message.signedBatchesWindow = BigInt(object.signed_batches_window);
    }
    if (object.signed_logic_calls_window !== undefined && object.signed_logic_calls_window !== null) {
      message.signedLogicCallsWindow = BigInt(object.signed_logic_calls_window);
    }
    if (object.target_batch_timeout !== undefined && object.target_batch_timeout !== null) {
      message.targetBatchTimeout = BigInt(object.target_batch_timeout);
    }
    if (object.average_block_time !== undefined && object.average_block_time !== null) {
      message.averageBlockTime = BigInt(object.average_block_time);
    }
    if (object.average_ethereum_block_time !== undefined && object.average_ethereum_block_time !== null) {
      message.averageEthereumBlockTime = BigInt(object.average_ethereum_block_time);
    }
    if (object.slash_fraction_valset !== undefined && object.slash_fraction_valset !== null) {
      message.slashFractionValset = bytesFromBase64(object.slash_fraction_valset);
    }
    if (object.slash_fraction_batch !== undefined && object.slash_fraction_batch !== null) {
      message.slashFractionBatch = bytesFromBase64(object.slash_fraction_batch);
    }
    if (object.slash_fraction_logic_call !== undefined && object.slash_fraction_logic_call !== null) {
      message.slashFractionLogicCall = bytesFromBase64(object.slash_fraction_logic_call);
    }
    if (object.unbond_slashing_valsets_window !== undefined && object.unbond_slashing_valsets_window !== null) {
      message.unbondSlashingValsetsWindow = BigInt(object.unbond_slashing_valsets_window);
    }
    if (object.slash_fraction_bad_eth_signature !== undefined && object.slash_fraction_bad_eth_signature !== null) {
      message.slashFractionBadEthSignature = bytesFromBase64(object.slash_fraction_bad_eth_signature);
    }
    if (object.valset_reward !== undefined && object.valset_reward !== null) {
      message.valsetReward = Coin.fromAmino(object.valset_reward);
    }
    if (object.bridge_active !== undefined && object.bridge_active !== null) {
      message.bridgeActive = object.bridge_active;
    }
    message.ethereumBlacklist = object.ethereum_blacklist?.map(e => e) || [];
    if (object.min_chain_fee_basis_points !== undefined && object.min_chain_fee_basis_points !== null) {
      message.minChainFeeBasisPoints = BigInt(object.min_chain_fee_basis_points);
    }
    if (object.chain_fee_auction_pool_fraction !== undefined && object.chain_fee_auction_pool_fraction !== null) {
      message.chainFeeAuctionPoolFraction = object.chain_fee_auction_pool_fraction;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.gravity_id = message.gravityId;
    obj.contract_source_hash = message.contractSourceHash;
    obj.bridge_ethereum_address = message.bridgeEthereumAddress;
    obj.bridge_chain_id = message.bridgeChainId ? message.bridgeChainId.toString() : undefined;
    obj.signed_valsets_window = message.signedValsetsWindow ? message.signedValsetsWindow.toString() : undefined;
    obj.signed_batches_window = message.signedBatchesWindow ? message.signedBatchesWindow.toString() : undefined;
    obj.signed_logic_calls_window = message.signedLogicCallsWindow ? message.signedLogicCallsWindow.toString() : undefined;
    obj.target_batch_timeout = message.targetBatchTimeout ? message.targetBatchTimeout.toString() : undefined;
    obj.average_block_time = message.averageBlockTime ? message.averageBlockTime.toString() : undefined;
    obj.average_ethereum_block_time = message.averageEthereumBlockTime ? message.averageEthereumBlockTime.toString() : undefined;
    obj.slash_fraction_valset = message.slashFractionValset ? base64FromBytes(message.slashFractionValset) : undefined;
    obj.slash_fraction_batch = message.slashFractionBatch ? base64FromBytes(message.slashFractionBatch) : undefined;
    obj.slash_fraction_logic_call = message.slashFractionLogicCall ? base64FromBytes(message.slashFractionLogicCall) : undefined;
    obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow ? message.unbondSlashingValsetsWindow.toString() : undefined;
    obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature ? base64FromBytes(message.slashFractionBadEthSignature) : undefined;
    obj.valset_reward = message.valsetReward ? Coin.toAmino(message.valsetReward) : undefined;
    obj.bridge_active = message.bridgeActive;
    if (message.ethereumBlacklist) {
      obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereum_blacklist = [];
    }
    obj.min_chain_fee_basis_points = message.minChainFeeBasisPoints ? message.minChainFeeBasisPoints.toString() : undefined;
    obj.chain_fee_auction_pool_fraction = message.chainFeeAuctionPoolFraction;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/gravity.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    gravityNonces: GravityNonces.fromPartial({}),
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    logicCalls: [],
    logicCallConfirms: [],
    attestations: [],
    delegateKeys: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    pendingIbcAutoForwards: []
  };
}
export const GenesisState = {
  typeUrl: "/gravity.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.gravityNonces !== undefined) {
      GravityNonces.encode(message.gravityNonces, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.logicCalls) {
      OutgoingLogicCall.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.logicCallConfirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.delegateKeys) {
      MsgSetOrchestratorAddress.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.pendingIbcAutoForwards) {
      PendingIbcAutoForward.encode(v!, writer.uint32(106).fork()).ldelim();
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
          message.gravityNonces = GravityNonces.decode(reader, reader.uint32());
          break;
        case 3:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.valsetConfirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        case 5:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        case 6:
          message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        case 7:
          message.logicCalls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
          break;
        case 8:
          message.logicCallConfirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
          break;
        case 9:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        case 10:
          message.delegateKeys.push(MsgSetOrchestratorAddress.decode(reader, reader.uint32()));
          break;
        case 11:
          message.erc20ToDenoms.push(ERC20ToDenom.decode(reader, reader.uint32()));
          break;
        case 12:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 13:
          message.pendingIbcAutoForwards.push(PendingIbcAutoForward.decode(reader, reader.uint32()));
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
      gravityNonces: isSet(object.gravityNonces) ? GravityNonces.fromJSON(object.gravityNonces) : undefined,
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
      valsetConfirms: Array.isArray(object?.valsetConfirms) ? object.valsetConfirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : [],
      batchConfirms: Array.isArray(object?.batchConfirms) ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : [],
      logicCalls: Array.isArray(object?.logicCalls) ? object.logicCalls.map((e: any) => OutgoingLogicCall.fromJSON(e)) : [],
      logicCallConfirms: Array.isArray(object?.logicCallConfirms) ? object.logicCallConfirms.map((e: any) => MsgConfirmLogicCall.fromJSON(e)) : [],
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromJSON(e)) : [],
      delegateKeys: Array.isArray(object?.delegateKeys) ? object.delegateKeys.map((e: any) => MsgSetOrchestratorAddress.fromJSON(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20ToDenoms) ? object.erc20ToDenoms.map((e: any) => ERC20ToDenom.fromJSON(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers) ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      pendingIbcAutoForwards: Array.isArray(object?.pendingIbcAutoForwards) ? object.pendingIbcAutoForwards.map((e: any) => PendingIbcAutoForward.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.gravityNonces !== undefined && (obj.gravityNonces = message.gravityNonces ? GravityNonces.toJSON(message.gravityNonces) : undefined);
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toJSON(e) : undefined);
    } else {
      obj.valsets = [];
    }
    if (message.valsetConfirms) {
      obj.valsetConfirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toJSON(e) : undefined);
    } else {
      obj.valsetConfirms = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batchConfirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toJSON(e) : undefined);
    } else {
      obj.batchConfirms = [];
    }
    if (message.logicCalls) {
      obj.logicCalls = message.logicCalls.map(e => e ? OutgoingLogicCall.toJSON(e) : undefined);
    } else {
      obj.logicCalls = [];
    }
    if (message.logicCallConfirms) {
      obj.logicCallConfirms = message.logicCallConfirms.map(e => e ? MsgConfirmLogicCall.toJSON(e) : undefined);
    } else {
      obj.logicCallConfirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    if (message.delegateKeys) {
      obj.delegateKeys = message.delegateKeys.map(e => e ? MsgSetOrchestratorAddress.toJSON(e) : undefined);
    } else {
      obj.delegateKeys = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20ToDenoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toJSON(e) : undefined);
    } else {
      obj.erc20ToDenoms = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.unbatchedTransfers = [];
    }
    if (message.pendingIbcAutoForwards) {
      obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map(e => e ? PendingIbcAutoForward.toJSON(e) : undefined);
    } else {
      obj.pendingIbcAutoForwards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gravityNonces = object.gravityNonces !== undefined && object.gravityNonces !== null ? GravityNonces.fromPartial(object.gravityNonces) : undefined;
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    message.logicCalls = object.logicCalls?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
    message.logicCallConfirms = object.logicCallConfirms?.map(e => MsgConfirmLogicCall.fromPartial(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    message.delegateKeys = object.delegateKeys?.map(e => MsgSetOrchestratorAddress.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.pendingIbcAutoForwards = object.pendingIbcAutoForwards?.map(e => PendingIbcAutoForward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.gravity_nonces !== undefined && object.gravity_nonces !== null) {
      message.gravityNonces = GravityNonces.fromAmino(object.gravity_nonces);
    }
    message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
    message.valsetConfirms = object.valset_confirms?.map(e => MsgValsetConfirm.fromAmino(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromAmino(e)) || [];
    message.batchConfirms = object.batch_confirms?.map(e => MsgConfirmBatch.fromAmino(e)) || [];
    message.logicCalls = object.logic_calls?.map(e => OutgoingLogicCall.fromAmino(e)) || [];
    message.logicCallConfirms = object.logic_call_confirms?.map(e => MsgConfirmLogicCall.fromAmino(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromAmino(e)) || [];
    message.delegateKeys = object.delegate_keys?.map(e => MsgSetOrchestratorAddress.fromAmino(e)) || [];
    message.erc20ToDenoms = object.erc20_to_denoms?.map(e => ERC20ToDenom.fromAmino(e)) || [];
    message.unbatchedTransfers = object.unbatched_transfers?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
    message.pendingIbcAutoForwards = object.pending_ibc_auto_forwards?.map(e => PendingIbcAutoForward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.gravity_nonces = message.gravityNonces ? GravityNonces.toAmino(message.gravityNonces) : undefined;
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = [];
    }
    if (message.valsetConfirms) {
      obj.valset_confirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.valset_confirms = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batch_confirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.batch_confirms = [];
    }
    if (message.logicCalls) {
      obj.logic_calls = message.logicCalls.map(e => e ? OutgoingLogicCall.toAmino(e) : undefined);
    } else {
      obj.logic_calls = [];
    }
    if (message.logicCallConfirms) {
      obj.logic_call_confirms = message.logicCallConfirms.map(e => e ? MsgConfirmLogicCall.toAmino(e) : undefined);
    } else {
      obj.logic_call_confirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
    } else {
      obj.attestations = [];
    }
    if (message.delegateKeys) {
      obj.delegate_keys = message.delegateKeys.map(e => e ? MsgSetOrchestratorAddress.toAmino(e) : undefined);
    } else {
      obj.delegate_keys = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toAmino(e) : undefined);
    } else {
      obj.erc20_to_denoms = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = [];
    }
    if (message.pendingIbcAutoForwards) {
      obj.pending_ibc_auto_forwards = message.pendingIbcAutoForwards.map(e => e ? PendingIbcAutoForward.toAmino(e) : undefined);
    } else {
      obj.pending_ibc_auto_forwards = [];
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
      typeUrl: "/gravity.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGravityNonces(): GravityNonces {
  return {
    latestValsetNonce: BigInt(0),
    lastObservedNonce: BigInt(0),
    lastSlashedValsetNonce: BigInt(0),
    lastSlashedBatchBlock: BigInt(0),
    lastSlashedLogicCallBlock: BigInt(0),
    lastTxPoolId: BigInt(0),
    lastBatchId: BigInt(0)
  };
}
export const GravityNonces = {
  typeUrl: "/gravity.v1.GravityNonces",
  encode(message: GravityNonces, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latestValsetNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.latestValsetNonce);
    }
    if (message.lastObservedNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }
    if (message.lastSlashedValsetNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastSlashedValsetNonce);
    }
    if (message.lastSlashedBatchBlock !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastSlashedBatchBlock);
    }
    if (message.lastSlashedLogicCallBlock !== BigInt(0)) {
      writer.uint32(40).uint64(message.lastSlashedLogicCallBlock);
    }
    if (message.lastTxPoolId !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastTxPoolId);
    }
    if (message.lastBatchId !== BigInt(0)) {
      writer.uint32(56).uint64(message.lastBatchId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GravityNonces {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGravityNonces();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestValsetNonce = reader.uint64();
          break;
        case 2:
          message.lastObservedNonce = reader.uint64();
          break;
        case 3:
          message.lastSlashedValsetNonce = reader.uint64();
          break;
        case 4:
          message.lastSlashedBatchBlock = reader.uint64();
          break;
        case 5:
          message.lastSlashedLogicCallBlock = reader.uint64();
          break;
        case 6:
          message.lastTxPoolId = reader.uint64();
          break;
        case 7:
          message.lastBatchId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GravityNonces {
    return {
      latestValsetNonce: isSet(object.latestValsetNonce) ? BigInt(object.latestValsetNonce.toString()) : BigInt(0),
      lastObservedNonce: isSet(object.lastObservedNonce) ? BigInt(object.lastObservedNonce.toString()) : BigInt(0),
      lastSlashedValsetNonce: isSet(object.lastSlashedValsetNonce) ? BigInt(object.lastSlashedValsetNonce.toString()) : BigInt(0),
      lastSlashedBatchBlock: isSet(object.lastSlashedBatchBlock) ? BigInt(object.lastSlashedBatchBlock.toString()) : BigInt(0),
      lastSlashedLogicCallBlock: isSet(object.lastSlashedLogicCallBlock) ? BigInt(object.lastSlashedLogicCallBlock.toString()) : BigInt(0),
      lastTxPoolId: isSet(object.lastTxPoolId) ? BigInt(object.lastTxPoolId.toString()) : BigInt(0),
      lastBatchId: isSet(object.lastBatchId) ? BigInt(object.lastBatchId.toString()) : BigInt(0)
    };
  },
  toJSON(message: GravityNonces): unknown {
    const obj: any = {};
    message.latestValsetNonce !== undefined && (obj.latestValsetNonce = (message.latestValsetNonce || BigInt(0)).toString());
    message.lastObservedNonce !== undefined && (obj.lastObservedNonce = (message.lastObservedNonce || BigInt(0)).toString());
    message.lastSlashedValsetNonce !== undefined && (obj.lastSlashedValsetNonce = (message.lastSlashedValsetNonce || BigInt(0)).toString());
    message.lastSlashedBatchBlock !== undefined && (obj.lastSlashedBatchBlock = (message.lastSlashedBatchBlock || BigInt(0)).toString());
    message.lastSlashedLogicCallBlock !== undefined && (obj.lastSlashedLogicCallBlock = (message.lastSlashedLogicCallBlock || BigInt(0)).toString());
    message.lastTxPoolId !== undefined && (obj.lastTxPoolId = (message.lastTxPoolId || BigInt(0)).toString());
    message.lastBatchId !== undefined && (obj.lastBatchId = (message.lastBatchId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GravityNonces>): GravityNonces {
    const message = createBaseGravityNonces();
    message.latestValsetNonce = object.latestValsetNonce !== undefined && object.latestValsetNonce !== null ? BigInt(object.latestValsetNonce.toString()) : BigInt(0);
    message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? BigInt(object.lastObservedNonce.toString()) : BigInt(0);
    message.lastSlashedValsetNonce = object.lastSlashedValsetNonce !== undefined && object.lastSlashedValsetNonce !== null ? BigInt(object.lastSlashedValsetNonce.toString()) : BigInt(0);
    message.lastSlashedBatchBlock = object.lastSlashedBatchBlock !== undefined && object.lastSlashedBatchBlock !== null ? BigInt(object.lastSlashedBatchBlock.toString()) : BigInt(0);
    message.lastSlashedLogicCallBlock = object.lastSlashedLogicCallBlock !== undefined && object.lastSlashedLogicCallBlock !== null ? BigInt(object.lastSlashedLogicCallBlock.toString()) : BigInt(0);
    message.lastTxPoolId = object.lastTxPoolId !== undefined && object.lastTxPoolId !== null ? BigInt(object.lastTxPoolId.toString()) : BigInt(0);
    message.lastBatchId = object.lastBatchId !== undefined && object.lastBatchId !== null ? BigInt(object.lastBatchId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GravityNoncesAmino): GravityNonces {
    const message = createBaseGravityNonces();
    if (object.latest_valset_nonce !== undefined && object.latest_valset_nonce !== null) {
      message.latestValsetNonce = BigInt(object.latest_valset_nonce);
    }
    if (object.last_observed_nonce !== undefined && object.last_observed_nonce !== null) {
      message.lastObservedNonce = BigInt(object.last_observed_nonce);
    }
    if (object.last_slashed_valset_nonce !== undefined && object.last_slashed_valset_nonce !== null) {
      message.lastSlashedValsetNonce = BigInt(object.last_slashed_valset_nonce);
    }
    if (object.last_slashed_batch_block !== undefined && object.last_slashed_batch_block !== null) {
      message.lastSlashedBatchBlock = BigInt(object.last_slashed_batch_block);
    }
    if (object.last_slashed_logic_call_block !== undefined && object.last_slashed_logic_call_block !== null) {
      message.lastSlashedLogicCallBlock = BigInt(object.last_slashed_logic_call_block);
    }
    if (object.last_tx_pool_id !== undefined && object.last_tx_pool_id !== null) {
      message.lastTxPoolId = BigInt(object.last_tx_pool_id);
    }
    if (object.last_batch_id !== undefined && object.last_batch_id !== null) {
      message.lastBatchId = BigInt(object.last_batch_id);
    }
    return message;
  },
  toAmino(message: GravityNonces): GravityNoncesAmino {
    const obj: any = {};
    obj.latest_valset_nonce = message.latestValsetNonce ? message.latestValsetNonce.toString() : undefined;
    obj.last_observed_nonce = message.lastObservedNonce ? message.lastObservedNonce.toString() : undefined;
    obj.last_slashed_valset_nonce = message.lastSlashedValsetNonce ? message.lastSlashedValsetNonce.toString() : undefined;
    obj.last_slashed_batch_block = message.lastSlashedBatchBlock ? message.lastSlashedBatchBlock.toString() : undefined;
    obj.last_slashed_logic_call_block = message.lastSlashedLogicCallBlock ? message.lastSlashedLogicCallBlock.toString() : undefined;
    obj.last_tx_pool_id = message.lastTxPoolId ? message.lastTxPoolId.toString() : undefined;
    obj.last_batch_id = message.lastBatchId ? message.lastBatchId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GravityNoncesAminoMsg): GravityNonces {
    return GravityNonces.fromAmino(object.value);
  },
  fromProtoMsg(message: GravityNoncesProtoMsg): GravityNonces {
    return GravityNonces.decode(message.value);
  },
  toProto(message: GravityNonces): Uint8Array {
    return GravityNonces.encode(message).finish();
  },
  toProtoMsg(message: GravityNonces): GravityNoncesProtoMsg {
    return {
      typeUrl: "/gravity.v1.GravityNonces",
      value: GravityNonces.encode(message).finish()
    };
  }
};