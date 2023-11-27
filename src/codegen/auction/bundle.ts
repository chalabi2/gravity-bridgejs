import * as _1 from "./v1/auction";
import * as _2 from "./v1/genesis";
import * as _3 from "./v1/msgs";
import * as _4 from "./v1/params";
import * as _5 from "./v1/query";
import * as _126 from "./v1/msgs.amino";
import * as _127 from "./v1/msgs.registry";
import * as _128 from "./v1/query.lcd";
import * as _129 from "./v1/query.rpc.Query";
import * as _130 from "./v1/msgs.rpc.msg";
import * as _213 from "./lcd";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace auction {
  export const v1 = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130
  };
  export const ClientFactory = {
    ..._213,
    ..._214,
    ..._215
  };
}