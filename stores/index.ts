import {TodosStore} from './todos.store';
import {computed, makeAutoObservable} from 'mobx';

class Stores {
  todosStore: TodosStore;

  constructor() {
    this.todosStore = new TodosStore();
    makeAutoObservable(this, {ready: computed});
  }

  /**
   * @method Returns true if store is hydrated
   */
  get ready() {
    return this.todosStore.hydrated;
  }
}

export const stores = new Stores();
