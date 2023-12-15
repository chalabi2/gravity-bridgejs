import * as _1 from "./v1/auction";
import * as _2 from "./v1/genesis";
import * as _3 from "./v1/msgs";
import * as _4 from "./v1/params";
import * as _5 from "./v1/query";
import * as _118 from "./v1/msgs.amino";
import * as _119 from "./v1/msgs.registry";
import * as _120 from "./v1/query.rpc.Query";
import * as _121 from "./v1/msgs.rpc.msg";
import * as _186 from "./rpc.query";
import * as _187 from "./rpc.tx";
export namespace auction {
  export const v1 = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._118,
    ..._119,
    ..._120,
    ..._121
  };
  export const ClientFactory = {
    ..._186,
    ..._187
  };
}