export interface EncryptedStorage {
  /**
   * Key to identify data stored on encrypted storage
   */
  storageKey: string;

  /**
   * Stores data to encrypted storage
   * @param data
   * @param key
   * @protected
   */
  store<T>(data: T, key?: string): Promise<void>;

  /**
   * Retrieves data from encrypted storage
   * @param key
   * @protected
   */
  retrieve<T>(key?: string): Promise<T | null>;

  /**
   * Deletes data permanently from encrypted storage
   * @param key
   */
  reset(key?: string): Promise<void>;
}
