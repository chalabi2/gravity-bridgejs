import * as _85 from "./applications/transfer/v1/genesis";
import * as _86 from "./applications/transfer/v1/query";
import * as _87 from "./applications/transfer/v1/transfer";
import * as _88 from "./applications/transfer/v1/tx";
import * as _89 from "./applications/transfer/v2/packet";
import * as _90 from "./core/channel/v1/channel";
import * as _91 from "./core/channel/v1/genesis";
import * as _92 from "./core/channel/v1/query";
import * as _93 from "./core/channel/v1/tx";
import * as _94 from "./core/client/v1/client";
import * as _95 from "./core/client/v1/genesis";
import * as _96 from "./core/client/v1/query";
import * as _97 from "./core/client/v1/tx";
import * as _98 from "./core/commitment/v1/commitment";
import * as _99 from "./core/connection/v1/connection";
import * as _100 from "./core/connection/v1/genesis";
import * as _101 from "./core/connection/v1/query";
import * as _102 from "./core/connection/v1/tx";
import * as _103 from "./lightclients/localhost/v1/localhost";
import * as _104 from "./lightclients/solomachine/v1/solomachine";
import * as _105 from "./lightclients/solomachine/v2/solomachine";
import * as _106 from "./lightclients/tendermint/v1/tendermint";
import * as _170 from "./applications/transfer/v1/tx.amino";
import * as _171 from "./core/channel/v1/tx.amino";
import * as _172 from "./core/client/v1/tx.amino";
import * as _173 from "./core/connection/v1/tx.amino";
import * as _174 from "./applications/transfer/v1/tx.registry";
import * as _175 from "./core/channel/v1/tx.registry";
import * as _176 from "./core/client/v1/tx.registry";
import * as _177 from "./core/connection/v1/tx.registry";
import * as _178 from "./applications/transfer/v1/query.rpc.Query";
import * as _179 from "./core/channel/v1/query.rpc.Query";
import * as _180 from "./core/client/v1/query.rpc.Query";
import * as _181 from "./core/connection/v1/query.rpc.Query";
import * as _182 from "./applications/transfer/v1/tx.rpc.msg";
import * as _183 from "./core/channel/v1/tx.rpc.msg";
import * as _184 from "./core/client/v1/tx.rpc.msg";
import * as _185 from "./core/connection/v1/tx.rpc.msg";
import * as _192 from "./rpc.query";
import * as _193 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._170,
        ..._174,
        ..._178,
        ..._182
      };
      export const v2 = {
        ..._89
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._90,
        ..._91,
        ..._92,
        ..._93,
        ..._171,
        ..._175,
        ..._179,
        ..._183
      };
    }
    export namespace client {
      export const v1 = {
        ..._94,
        ..._95,
        ..._96,
        ..._97,
        ..._172,
        ..._176,
        ..._180,
        ..._184
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._98
      };
    }
    export namespace connection {
      export const v1 = {
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._173,
        ..._177,
        ..._181,
        ..._185
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._103
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._104
      };
      export const v2 = {
        ..._105
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._106
      };
    }
  }
  export const ClientFactory = {
    ..._192,
    ..._193
  };
}