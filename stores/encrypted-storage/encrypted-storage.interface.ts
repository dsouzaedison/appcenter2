export interface IEncryptedStorage {
  /**
   * Retrieves data from encrypted storage and initialised this store
   */
  hydrate(): void;

  /**
   * Deletes store data from encrypted store
   */
  reset(): void;
}
