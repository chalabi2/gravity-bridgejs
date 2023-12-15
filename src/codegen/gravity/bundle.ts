import * as _77 from "./v1/attestation";
import * as _78 from "./v1/batch";
import * as _79 from "./v1/ethereum_signer";
import * as _80 from "./v1/genesis";
import * as _81 from "./v1/msgs";
import * as _82 from "./v1/pool";
import * as _83 from "./v1/query";
import * as _84 from "./v1/types";
import * as _166 from "./v1/msgs.amino";
import * as _167 from "./v1/msgs.registry";
import * as _168 from "./v1/query.rpc.Query";
import * as _169 from "./v1/msgs.rpc.msg";
import * as _190 from "./rpc.query";
import * as _191 from "./rpc.tx";
export namespace gravity {
  export const v1 = {
    ..._77,
    ..._78,
    ..._79,
    ..._80,
    ..._81,
    ..._82,
    ..._83,
    ..._84,
    ..._166,
    ..._167,
    ..._168,
    ..._169
  };
  export const ClientFactory = {
    ..._190,
    ..._191
  };
}