export interface BaseStore {
  /**
   * Determines if a store is awaiting some data to be updated
   * Useful during API calls
   */
  isLoading: boolean;

  setLoading(loading: boolean): void;
}
