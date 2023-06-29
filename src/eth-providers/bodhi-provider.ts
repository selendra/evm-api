import { ApiPromise } from '@polkadot/api';
import { BaseProvider } from './base-provider';
import { options } from '../type';
import type { ApiOptions } from '@polkadot/api/types';

export class BodhiProvider extends BaseProvider {
  constructor(apiOptions: ApiOptions) {
    super();
    const api = new ApiPromise(options(apiOptions));
    this.setApi(api);
  }

  static from(apiOptions: ApiOptions): BodhiProvider {
    return new BodhiProvider(apiOptions);
  }
}
