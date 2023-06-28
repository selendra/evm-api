
import { rpc as selendraRpc, signedExtensions as selendraSignedExtensions, typesAlias as selendraTypeAlias, types as selendraTypes } from '../type-definitions/index';
import type { DefinitionRpc, DefinitionRpcSub, OverrideModuleType, RegistryTypes } from '@polkadot/types/types';

export const types: RegistryTypes = selendraTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = selendraRpc;

export const typesAlias: Record<string, OverrideModuleType> = selendraTypeAlias;

export const signedExtensions = selendraSignedExtensions;
