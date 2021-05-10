import {NativeModules} from 'react-native';
import {EncryptedStorage} from './encrypted-storage.store';

const {HBRNEncryptedStorage} = NativeModules

// @ts-ignore
export class EncryptedStorageImpl implements EncryptedStorage {
  /**
   * Key to identify data stored on encrypted storage
   */
  private readonly storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  /**
   * Delays execution by fixed number of seconds
   * @param seconds
   * @private
   */
  private async delay(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
  }

  protected async store<T>(data: T, key?: string): Promise<void> {
    try {
      await HBRNEncryptedStorage.setItem(
        key ?? this.storageKey,
        JSON.stringify(data),
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  protected async retrieve<T>(key?: string): Promise<T | null> {
    await this.delay(1);

    try {
      const data = await HBRNEncryptedStorage.getItem(key ?? this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async reset(key?: string): Promise<void> {
    try {
      await HBRNEncryptedStorage.removeItem(key ?? this.storageKey);
    } catch (error) {
      throw new Error(error);
    }
  }
}