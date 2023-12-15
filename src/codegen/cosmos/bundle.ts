import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./base/abci/v1beta1/abci";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./crypto/ed25519/keys";
import * as _27 from "./crypto/hd/v1/hd";
import * as _28 from "./crypto/keyring/v1/record";
import * as _29 from "./crypto/multisig/keys";
import * as _30 from "./crypto/secp256k1/keys";
import * as _31 from "./crypto/secp256r1/keys";
import * as _32 from "./distribution/v1beta1/distribution";
import * as _33 from "./distribution/v1beta1/genesis";
import * as _34 from "./distribution/v1beta1/query";
import * as _35 from "./distribution/v1beta1/tx";
import * as _36 from "./feegrant/v1beta1/feegrant";
import * as _37 from "./feegrant/v1beta1/genesis";
import * as _38 from "./feegrant/v1beta1/query";
import * as _39 from "./feegrant/v1beta1/tx";
import * as _40 from "./gov/v1/genesis";
import * as _41 from "./gov/v1/gov";
import * as _42 from "./gov/v1/query";
import * as _43 from "./gov/v1/tx";
import * as _44 from "./gov/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/gov";
import * as _46 from "./gov/v1beta1/query";
import * as _47 from "./gov/v1beta1/tx";
import * as _48 from "./group/v1/events";
import * as _49 from "./group/v1/genesis";
import * as _50 from "./group/v1/query";
import * as _51 from "./group/v1/tx";
import * as _52 from "./group/v1/types";
import * as _53 from "./mint/v1beta1/genesis";
import * as _54 from "./mint/v1beta1/mint";
import * as _55 from "./mint/v1beta1/query";
import * as _56 from "./params/v1beta1/params";
import * as _57 from "./params/v1beta1/query";
import * as _58 from "./staking/v1beta1/authz";
import * as _59 from "./staking/v1beta1/genesis";
import * as _60 from "./staking/v1beta1/query";
import * as _61 from "./staking/v1beta1/staking";
import * as _62 from "./staking/v1beta1/tx";
import * as _63 from "./tx/signing/v1beta1/signing";
import * as _64 from "./tx/v1beta1/service";
import * as _65 from "./tx/v1beta1/tx";
import * as _66 from "./upgrade/v1beta1/query";
import * as _67 from "./upgrade/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/upgrade";
import * as _69 from "./vesting/v1beta1/tx";
import * as _70 from "./vesting/v1beta1/vesting";
import * as _122 from "./authz/v1beta1/tx.amino";
import * as _123 from "./bank/v1beta1/tx.amino";
import * as _124 from "./distribution/v1beta1/tx.amino";
import * as _125 from "./feegrant/v1beta1/tx.amino";
import * as _126 from "./gov/v1/tx.amino";
import * as _127 from "./gov/v1beta1/tx.amino";
import * as _128 from "./group/v1/tx.amino";
import * as _129 from "./staking/v1beta1/tx.amino";
import * as _130 from "./upgrade/v1beta1/tx.amino";
import * as _131 from "./vesting/v1beta1/tx.amino";
import * as _132 from "./authz/v1beta1/tx.registry";
import * as _133 from "./bank/v1beta1/tx.registry";
import * as _134 from "./distribution/v1beta1/tx.registry";
import * as _135 from "./feegrant/v1beta1/tx.registry";
import * as _136 from "./gov/v1/tx.registry";
import * as _137 from "./gov/v1beta1/tx.registry";
import * as _138 from "./group/v1/tx.registry";
import * as _139 from "./staking/v1beta1/tx.registry";
import * as _140 from "./upgrade/v1beta1/tx.registry";
import * as _141 from "./vesting/v1beta1/tx.registry";
import * as _142 from "./auth/v1beta1/query.rpc.Query";
import * as _143 from "./authz/v1beta1/query.rpc.Query";
import * as _144 from "./bank/v1beta1/query.rpc.Query";
import * as _145 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _146 from "./distribution/v1beta1/query.rpc.Query";
import * as _147 from "./feegrant/v1beta1/query.rpc.Query";
import * as _148 from "./gov/v1/query.rpc.Query";
import * as _149 from "./gov/v1beta1/query.rpc.Query";
import * as _150 from "./group/v1/query.rpc.Query";
import * as _151 from "./mint/v1beta1/query.rpc.Query";
import * as _152 from "./params/v1beta1/query.rpc.Query";
import * as _153 from "./staking/v1beta1/query.rpc.Query";
import * as _154 from "./tx/v1beta1/service.rpc.Service";
import * as _155 from "./upgrade/v1beta1/query.rpc.Query";
import * as _156 from "./authz/v1beta1/tx.rpc.msg";
import * as _157 from "./bank/v1beta1/tx.rpc.msg";
import * as _158 from "./distribution/v1beta1/tx.rpc.msg";
import * as _159 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _160 from "./gov/v1/tx.rpc.msg";
import * as _161 from "./gov/v1beta1/tx.rpc.msg";
import * as _162 from "./group/v1/tx.rpc.msg";
import * as _163 from "./staking/v1beta1/tx.rpc.msg";
import * as _164 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _165 from "./vesting/v1beta1/tx.rpc.msg";
import * as _188 from "./rpc.query";
import * as _189 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._142
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._122,
      ..._132,
      ..._143,
      ..._156
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._123,
      ..._133,
      ..._144,
      ..._157
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._24,
        ..._145
      };
    }
    export const v1beta1 = {
      ..._25
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._26
    };
    export namespace hd {
      export const v1 = {
        ..._27
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._28
      };
    }
    export const multisig = {
      ..._29
    };
    export const secp256k1 = {
      ..._30
    };
    export const secp256r1 = {
      ..._31
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._124,
      ..._134,
      ..._146,
      ..._158
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._125,
      ..._135,
      ..._147,
      ..._159
    };
  }
  export namespace gov {
    export const v1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._126,
      ..._136,
      ..._148,
      ..._160
    };
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._127,
      ..._137,
      ..._149,
      ..._161
    };
  }
  export namespace group {
    export const v1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._128,
      ..._138,
      ..._150,
      ..._162
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._151
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._152
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._129,
      ..._139,
      ..._153,
      ..._163
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._154
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._130,
      ..._140,
      ..._155,
      ..._164
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._131,
      ..._141,
      ..._165
    };
  }
  export const ClientFactory = {
    ..._188,
    ..._189
  };
}