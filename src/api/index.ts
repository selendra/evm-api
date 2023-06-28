import { rpc as selendraRpc, signedExtensions as selendraSignedExtensions, typesAlias as selendraTypeAlias, types as selendraTypes } from './type';
import type { ApiOptions } from '@polkadot/api/types';

import { runtime as selendraRuntime } from './runtime';

export const options = ({ rpc = {},
  runtime = {},
  signedExtensions,
  types = {},
  typesAlias = {},
  ...otherOptions }: ApiOptions = {}): ApiOptions => ({
  types: {
    ...selendraTypes,
    ...types,
  },
  rpc: {
    ...selendraRpc,
    ...rpc,
  },
  typesAlias: {
    ...selendraTypeAlias,
    ...typesAlias,
  },
  signedExtensions: {
    ...selendraSignedExtensions,
    ...signedExtensions,
  },
  runtime: {
    ...selendraRuntime,
    ...runtime,
  },
  ...otherOptions,
});
