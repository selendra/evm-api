import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import { typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { signedExtensions as selendraSignedExtensions } from './signedExtensions';
import evm from './evm';

const SelendraDefs = {
  evm,
};

export const types = {
  ...typesFromDefs(SelendraDefs),
};

export const rpc = jsonrpcFromDefs(SelendraDefs, { ...ormlAlias });
export const typesAlias = typesAliasFromDefs(SelendraDefs, { ...ormlAlias });
export const signedExtensions = selendraSignedExtensions;
