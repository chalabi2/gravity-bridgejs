import { ERC20Token, ERC20TokenAmino, ERC20TokenSDKType } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
  batchNonce: bigint;
  batchTimeout: bigint;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  cosmosBlockCreated: bigint;
}
export interface OutgoingTxBatchProtoMsg {
  typeUrl: "/gravity.v1.OutgoingTxBatch";
  value: Uint8Array;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchAmino {
  batch_nonce?: string;
  batch_timeout?: string;
  transactions?: OutgoingTransferTxAmino[];
  token_contract?: string;
  cosmos_block_created?: string;
}
export interface OutgoingTxBatchAminoMsg {
  type: "/gravity.v1.OutgoingTxBatch";
  value: OutgoingTxBatchAmino;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchSDKType {
  batch_nonce: bigint;
  batch_timeout: bigint;
  transactions: OutgoingTransferTxSDKType[];
  token_contract: string;
  cosmos_block_created: bigint;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
  id: bigint;
  sender: string;
  destAddress: string;
  erc20Token: ERC20Token;
  erc20Fee: ERC20Token;
}
export interface OutgoingTransferTxProtoMsg {
  typeUrl: "/gravity.v1.OutgoingTransferTx";
  value: Uint8Array;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxAmino {
  id?: string;
  sender?: string;
  dest_address?: string;
  erc20_token?: ERC20TokenAmino;
  erc20_fee?: ERC20TokenAmino;
}
export interface OutgoingTransferTxAminoMsg {
  type: "/gravity.v1.OutgoingTransferTx";
  value: OutgoingTransferTxAmino;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxSDKType {
  id: bigint;
  sender: string;
  dest_address: string;
  erc20_token: ERC20TokenSDKType;
  erc20_fee: ERC20TokenSDKType;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
  transfers: ERC20Token[];
  fees: ERC20Token[];
  logicContractAddress: string;
  payload: Uint8Array;
  timeout: bigint;
  invalidationId: Uint8Array;
  invalidationNonce: bigint;
  cosmosBlockCreated: bigint;
}
export interface OutgoingLogicCallProtoMsg {
  typeUrl: "/gravity.v1.OutgoingLogicCall";
  value: Uint8Array;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallAmino {
  transfers?: ERC20TokenAmino[];
  fees?: ERC20TokenAmino[];
  logic_contract_address?: string;
  payload?: string;
  timeout?: string;
  invalidation_id?: string;
  invalidation_nonce?: string;
  cosmos_block_created?: string;
}
export interface OutgoingLogicCallAminoMsg {
  type: "/gravity.v1.OutgoingLogicCall";
  value: OutgoingLogicCallAmino;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallSDKType {
  transfers: ERC20TokenSDKType[];
  fees: ERC20TokenSDKType[];
  logic_contract_address: string;
  payload: Uint8Array;
  timeout: bigint;
  invalidation_id: Uint8Array;
  invalidation_nonce: bigint;
  cosmos_block_created: bigint;
}
export interface EventOutgoingBatchCanceled {
  bridgeContract: string;
  bridgeChainId: string;
  batchId: string;
  nonce: string;
}
export interface EventOutgoingBatchCanceledProtoMsg {
  typeUrl: "/gravity.v1.EventOutgoingBatchCanceled";
  value: Uint8Array;
}
export interface EventOutgoingBatchCanceledAmino {
  bridge_contract?: string;
  bridge_chain_id?: string;
  batch_id?: string;
  nonce?: string;
}
export interface EventOutgoingBatchCanceledAminoMsg {
  type: "/gravity.v1.EventOutgoingBatchCanceled";
  value: EventOutgoingBatchCanceledAmino;
}
export interface EventOutgoingBatchCanceledSDKType {
  bridge_contract: string;
  bridge_chain_id: string;
  batch_id: string;
  nonce: string;
}
export interface EventOutgoingBatch {
  bridgeContract: string;
  bridgeChainId: string;
  batchId: string;
  nonce: string;
}
export interface EventOutgoingBatchProtoMsg {
  typeUrl: "/gravity.v1.EventOutgoingBatch";
  value: Uint8Array;
}
export interface EventOutgoingBatchAmino {
  bridge_contract?: string;
  bridge_chain_id?: string;
  batch_id?: string;
  nonce?: string;
}
export interface EventOutgoingBatchAminoMsg {
  type: "/gravity.v1.EventOutgoingBatch";
  value: EventOutgoingBatchAmino;
}
export interface EventOutgoingBatchSDKType {
  bridge_contract: string;
  bridge_chain_id: string;
  batch_id: string;
  nonce: string;
}
function createBaseOutgoingTxBatch(): OutgoingTxBatch {
  return {
    batchNonce: BigInt(0),
    batchTimeout: BigInt(0),
    transactions: [],
    tokenContract: "",
    cosmosBlockCreated: BigInt(0)
  };
}
export const OutgoingTxBatch = {
  typeUrl: "/gravity.v1.OutgoingTxBatch",
  encode(message: OutgoingTxBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (message.batchTimeout !== BigInt(0)) {
      writer.uint32(16).uint64(message.batchTimeout);
    }
    for (const v of message.transactions) {
      OutgoingTransferTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.cosmosBlockCreated !== BigInt(0)) {
      writer.uint32(40).uint64(message.cosmosBlockCreated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTxBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTxBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64();
          break;
        case 2:
          message.batchTimeout = reader.uint64();
          break;
        case 3:
          message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.cosmosBlockCreated = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OutgoingTxBatch {
    return {
      batchNonce: isSet(object.batchNonce) ? BigInt(object.batchNonce.toString()) : BigInt(0),
      batchTimeout: isSet(object.batchTimeout) ? BigInt(object.batchTimeout.toString()) : BigInt(0),
      transactions: Array.isArray(object?.transactions) ? object.transactions.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      cosmosBlockCreated: isSet(object.cosmosBlockCreated) ? BigInt(object.cosmosBlockCreated.toString()) : BigInt(0)
    };
  },
  toJSON(message: OutgoingTxBatch): unknown {
    const obj: any = {};
    message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
    message.batchTimeout !== undefined && (obj.batchTimeout = (message.batchTimeout || BigInt(0)).toString());
    if (message.transactions) {
      obj.transactions = message.transactions.map(e => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.transactions = [];
    }
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.cosmosBlockCreated !== undefined && (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout.toString()) : BigInt(0);
    message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.cosmosBlockCreated = object.cosmosBlockCreated !== undefined && object.cosmosBlockCreated !== null ? BigInt(object.cosmosBlockCreated.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OutgoingTxBatchAmino): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
      message.batchNonce = BigInt(object.batch_nonce);
    }
    if (object.batch_timeout !== undefined && object.batch_timeout !== null) {
      message.batchTimeout = BigInt(object.batch_timeout);
    }
    message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.cosmos_block_created !== undefined && object.cosmos_block_created !== null) {
      message.cosmosBlockCreated = BigInt(object.cosmos_block_created);
    }
    return message;
  },
  toAmino(message: OutgoingTxBatch): OutgoingTxBatchAmino {
    const obj: any = {};
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.batch_timeout = message.batchTimeout ? message.batchTimeout.toString() : undefined;
    if (message.transactions) {
      obj.transactions = message.transactions.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.transactions = [];
    }
    obj.token_contract = message.tokenContract;
    obj.cosmos_block_created = message.cosmosBlockCreated ? message.cosmosBlockCreated.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OutgoingTxBatchAminoMsg): OutgoingTxBatch {
    return OutgoingTxBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: OutgoingTxBatchProtoMsg): OutgoingTxBatch {
    return OutgoingTxBatch.decode(message.value);
  },
  toProto(message: OutgoingTxBatch): Uint8Array {
    return OutgoingTxBatch.encode(message).finish();
  },
  toProtoMsg(message: OutgoingTxBatch): OutgoingTxBatchProtoMsg {
    return {
      typeUrl: "/gravity.v1.OutgoingTxBatch",
      value: OutgoingTxBatch.encode(message).finish()
    };
  }
};
function createBaseOutgoingTransferTx(): OutgoingTransferTx {
  return {
    id: BigInt(0),
    sender: "",
    destAddress: "",
    erc20Token: ERC20Token.fromPartial({}),
    erc20Fee: ERC20Token.fromPartial({})
  };
}
export const OutgoingTransferTx = {
  typeUrl: "/gravity.v1.OutgoingTransferTx",
  encode(message: OutgoingTransferTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }
    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTransferTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTransferTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.destAddress = reader.string();
          break;
        case 4:
          message.erc20Token = ERC20Token.decode(reader, reader.uint32());
          break;
        case 5:
          message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OutgoingTransferTx {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      erc20Token: isSet(object.erc20Token) ? ERC20Token.fromJSON(object.erc20Token) : undefined,
      erc20Fee: isSet(object.erc20Fee) ? ERC20Token.fromJSON(object.erc20Fee) : undefined
    };
  },
  toJSON(message: OutgoingTransferTx): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.erc20Token !== undefined && (obj.erc20Token = message.erc20Token ? ERC20Token.toJSON(message.erc20Token) : undefined);
    message.erc20Fee !== undefined && (obj.erc20Fee = message.erc20Fee ? ERC20Token.toJSON(message.erc20Fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
    message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
    return message;
  },
  fromAmino(object: OutgoingTransferTxAmino): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.dest_address !== undefined && object.dest_address !== null) {
      message.destAddress = object.dest_address;
    }
    if (object.erc20_token !== undefined && object.erc20_token !== null) {
      message.erc20Token = ERC20Token.fromAmino(object.erc20_token);
    }
    if (object.erc20_fee !== undefined && object.erc20_fee !== null) {
      message.erc20Fee = ERC20Token.fromAmino(object.erc20_fee);
    }
    return message;
  },
  toAmino(message: OutgoingTransferTx): OutgoingTransferTxAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.sender = message.sender;
    obj.dest_address = message.destAddress;
    obj.erc20_token = message.erc20Token ? ERC20Token.toAmino(message.erc20Token) : undefined;
    obj.erc20_fee = message.erc20Fee ? ERC20Token.toAmino(message.erc20Fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: OutgoingTransferTxAminoMsg): OutgoingTransferTx {
    return OutgoingTransferTx.fromAmino(object.value);
  },
  fromProtoMsg(message: OutgoingTransferTxProtoMsg): OutgoingTransferTx {
    return OutgoingTransferTx.decode(message.value);
  },
  toProto(message: OutgoingTransferTx): Uint8Array {
    return OutgoingTransferTx.encode(message).finish();
  },
  toProtoMsg(message: OutgoingTransferTx): OutgoingTransferTxProtoMsg {
    return {
      typeUrl: "/gravity.v1.OutgoingTransferTx",
      value: OutgoingTransferTx.encode(message).finish()
    };
  }
};
function createBaseOutgoingLogicCall(): OutgoingLogicCall {
  return {
    transfers: [],
    fees: [],
    logicContractAddress: "",
    payload: new Uint8Array(),
    timeout: BigInt(0),
    invalidationId: new Uint8Array(),
    invalidationNonce: BigInt(0),
    cosmosBlockCreated: BigInt(0)
  };
}
export const OutgoingLogicCall = {
  typeUrl: "/gravity.v1.OutgoingLogicCall",
  encode(message: OutgoingLogicCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.transfers) {
      ERC20Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fees) {
      ERC20Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.logicContractAddress !== "") {
      writer.uint32(26).string(message.logicContractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeout);
    }
    if (message.invalidationId.length !== 0) {
      writer.uint32(50).bytes(message.invalidationId);
    }
    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(56).uint64(message.invalidationNonce);
    }
    if (message.cosmosBlockCreated !== BigInt(0)) {
      writer.uint32(64).uint64(message.cosmosBlockCreated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingLogicCall {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingLogicCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfers.push(ERC20Token.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fees.push(ERC20Token.decode(reader, reader.uint32()));
          break;
        case 3:
          message.logicContractAddress = reader.string();
          break;
        case 4:
          message.payload = reader.bytes();
          break;
        case 5:
          message.timeout = reader.uint64();
          break;
        case 6:
          message.invalidationId = reader.bytes();
          break;
        case 7:
          message.invalidationNonce = reader.uint64();
          break;
        case 8:
          message.cosmosBlockCreated = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OutgoingLogicCall {
    return {
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => ERC20Token.fromJSON(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => ERC20Token.fromJSON(e)) : [],
      logicContractAddress: isSet(object.logicContractAddress) ? String(object.logicContractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      timeout: isSet(object.timeout) ? BigInt(object.timeout.toString()) : BigInt(0),
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce.toString()) : BigInt(0),
      cosmosBlockCreated: isSet(object.cosmosBlockCreated) ? BigInt(object.cosmosBlockCreated.toString()) : BigInt(0)
    };
  },
  toJSON(message: OutgoingLogicCall): unknown {
    const obj: any = {};
    if (message.transfers) {
      obj.transfers = message.transfers.map(e => e ? ERC20Token.toJSON(e) : undefined);
    } else {
      obj.transfers = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? ERC20Token.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.logicContractAddress !== undefined && (obj.logicContractAddress = message.logicContractAddress);
    message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.timeout !== undefined && (obj.timeout = (message.timeout || BigInt(0)).toString());
    message.invalidationId !== undefined && (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
    message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
    message.cosmosBlockCreated !== undefined && (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OutgoingLogicCall>): OutgoingLogicCall {
    const message = createBaseOutgoingLogicCall();
    message.transfers = object.transfers?.map(e => ERC20Token.fromPartial(e)) || [];
    message.fees = object.fees?.map(e => ERC20Token.fromPartial(e)) || [];
    message.logicContractAddress = object.logicContractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce.toString()) : BigInt(0);
    message.cosmosBlockCreated = object.cosmosBlockCreated !== undefined && object.cosmosBlockCreated !== null ? BigInt(object.cosmosBlockCreated.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OutgoingLogicCallAmino): OutgoingLogicCall {
    const message = createBaseOutgoingLogicCall();
    message.transfers = object.transfers?.map(e => ERC20Token.fromAmino(e)) || [];
    message.fees = object.fees?.map(e => ERC20Token.fromAmino(e)) || [];
    if (object.logic_contract_address !== undefined && object.logic_contract_address !== null) {
      message.logicContractAddress = object.logic_contract_address;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout);
    }
    if (object.invalidation_id !== undefined && object.invalidation_id !== null) {
      message.invalidationId = bytesFromBase64(object.invalidation_id);
    }
    if (object.invalidation_nonce !== undefined && object.invalidation_nonce !== null) {
      message.invalidationNonce = BigInt(object.invalidation_nonce);
    }
    if (object.cosmos_block_created !== undefined && object.cosmos_block_created !== null) {
      message.cosmosBlockCreated = BigInt(object.cosmos_block_created);
    }
    return message;
  },
  toAmino(message: OutgoingLogicCall): OutgoingLogicCallAmino {
    const obj: any = {};
    if (message.transfers) {
      obj.transfers = message.transfers.map(e => e ? ERC20Token.toAmino(e) : undefined);
    } else {
      obj.transfers = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? ERC20Token.toAmino(e) : undefined);
    } else {
      obj.fees = [];
    }
    obj.logic_contract_address = message.logicContractAddress;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.timeout = message.timeout ? message.timeout.toString() : undefined;
    obj.invalidation_id = message.invalidationId ? base64FromBytes(message.invalidationId) : undefined;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    obj.cosmos_block_created = message.cosmosBlockCreated ? message.cosmosBlockCreated.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OutgoingLogicCallAminoMsg): OutgoingLogicCall {
    return OutgoingLogicCall.fromAmino(object.value);
  },
  fromProtoMsg(message: OutgoingLogicCallProtoMsg): OutgoingLogicCall {
    return OutgoingLogicCall.decode(message.value);
  },
  toProto(message: OutgoingLogicCall): Uint8Array {
    return OutgoingLogicCall.encode(message).finish();
  },
  toProtoMsg(message: OutgoingLogicCall): OutgoingLogicCallProtoMsg {
    return {
      typeUrl: "/gravity.v1.OutgoingLogicCall",
      value: OutgoingLogicCall.encode(message).finish()
    };
  }
};
function createBaseEventOutgoingBatchCanceled(): EventOutgoingBatchCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    batchId: "",
    nonce: ""
  };
}
export const EventOutgoingBatchCanceled = {
  typeUrl: "/gravity.v1.EventOutgoingBatchCanceled",
  encode(message: EventOutgoingBatchCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }
    if (message.batchId !== "") {
      writer.uint32(26).string(message.batchId);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatchCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatchCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.string();
          break;
        case 3:
          message.batchId = reader.string();
          break;
        case 4:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventOutgoingBatchCanceled {
    return {
      bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
      batchId: isSet(object.batchId) ? String(object.batchId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  toJSON(message: EventOutgoingBatchCanceled): unknown {
    const obj: any = {};
    message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },
  fromPartial(object: Partial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.batchId = object.batchId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventOutgoingBatchCanceledAmino): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
      message.bridgeContract = object.bridge_contract;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = object.bridge_chain_id;
    }
    if (object.batch_id !== undefined && object.batch_id !== null) {
      message.batchId = object.batch_id;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
  toAmino(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId;
    obj.batch_id = message.batchId;
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventOutgoingBatchCanceledAminoMsg): EventOutgoingBatchCanceled {
    return EventOutgoingBatchCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingBatchCanceledProtoMsg): EventOutgoingBatchCanceled {
    return EventOutgoingBatchCanceled.decode(message.value);
  },
  toProto(message: EventOutgoingBatchCanceled): Uint8Array {
    return EventOutgoingBatchCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventOutgoingBatchCanceled",
      value: EventOutgoingBatchCanceled.encode(message).finish()
    };
  }
};
function createBaseEventOutgoingBatch(): EventOutgoingBatch {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    batchId: "",
    nonce: ""
  };
}
export const EventOutgoingBatch = {
  typeUrl: "/gravity.v1.EventOutgoingBatch",
  encode(message: EventOutgoingBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }
    if (message.batchId !== "") {
      writer.uint32(26).string(message.batchId);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.string();
          break;
        case 3:
          message.batchId = reader.string();
          break;
        case 4:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventOutgoingBatch {
    return {
      bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
      batchId: isSet(object.batchId) ? String(object.batchId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  toJSON(message: EventOutgoingBatch): unknown {
    const obj: any = {};
    message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },
  fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.batchId = object.batchId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventOutgoingBatchAmino): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
      message.bridgeContract = object.bridge_contract;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = object.bridge_chain_id;
    }
    if (object.batch_id !== undefined && object.batch_id !== null) {
      message.batchId = object.batch_id;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
  toAmino(message: EventOutgoingBatch): EventOutgoingBatchAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId;
    obj.batch_id = message.batchId;
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventOutgoingBatchAminoMsg): EventOutgoingBatch {
    return EventOutgoingBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingBatchProtoMsg): EventOutgoingBatch {
    return EventOutgoingBatch.decode(message.value);
  },
  toProto(message: EventOutgoingBatch): Uint8Array {
    return EventOutgoingBatch.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingBatch): EventOutgoingBatchProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventOutgoingBatch",
      value: EventOutgoingBatch.encode(message).finish()
    };
  }
};