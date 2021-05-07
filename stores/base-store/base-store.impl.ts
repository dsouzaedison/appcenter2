import {BaseStore} from './base-store';
import {action, computed, makeObservable} from 'mobx';

export class BaseStoreImpl implements BaseStore {
  private _isLoading: boolean;

  constructor() {
    this._isLoading = false;

    makeObservable(this, {
      isLoading: computed,
      setLoading: action,
    });
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  setLoading(loading: boolean): void {
    this._isLoading = loading;
  }
}
