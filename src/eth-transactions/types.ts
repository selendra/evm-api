import { AccessListish, Transaction, UnsignedTransaction } from '@ethersproject/transactions';
import { BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';

export type ClaimPayload = {
  chainId: BigNumberish;
  salt: BytesLike;

  substrateAddress?: string | Uint8Array | null;
};

export type SelendraEvmTXPayload = {
  chainId: BigNumberish;
  salt?: BytesLike;

  action?: 'Create' | 'Call';
  to?: string;
  nonce: BigNumberish;
  tip?: BigNumberish;
  data: BytesLike;
  value?: BigNumberish;
  gasLimit?: BigNumberish;
  storageLimit?: BigNumberish;
  accessList?: AccessListish;
  validUntil?: BigNumberish;
};

export interface SelendraEvmTX extends Transaction {
  salt?: BytesLike;
  storageLimit?: BigNumberish;
  validUntil?: BigNumberish;
  tip?: BigNumberish;
}

export interface UnsignedSelendraEvmTX extends UnsignedTransaction {
  salt?: BytesLike;
  storageLimit?: BigNumberish;
  validUntil?: BigNumberish;
  tip?: BigNumberish;
}
