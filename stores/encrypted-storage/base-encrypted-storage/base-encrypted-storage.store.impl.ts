import {BaseEncryptedStorage} from './base-encrypted-storage.store';
import {EncryptedStorageImpl} from '../encrypted-storage.store.impl';

export class BaseEncryptedStorageStoreImpl
  extends EncryptedStorageImpl
  implements BaseEncryptedStorage {
  private _isLoading: boolean;

  constructor(storageKey: string) {
    super(storageKey);
    this._isLoading = false;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  setLoading(loading: boolean): void {
    this._isLoading = loading;
  }
}
