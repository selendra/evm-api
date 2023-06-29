import type { Definitions } from '@polkadot/types/types';

import definitions from '@polkadot/types/interfaces/runtime/definitions';

export default {
  rpc: {},
  types: {
    ...definitions.types,
  },
} as Definitions;
