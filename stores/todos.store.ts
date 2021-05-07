import {action, makeObservable, observable, runInAction} from 'mobx';
import {IEncryptedStorage} from './encrypted-storage/encrypted-storage.interface';
import {BaseStore} from './base-store/base-store';
import {BaseEncryptedStorageStoreImpl} from './encrypted-storage/base-encrypted-storage/base-encrypted-storage.store.impl';

export class TodosStore
  extends BaseEncryptedStorageStoreImpl
  implements BaseStore, IEncryptedStorage {
  static STORAGE_KEY = 'todoStore';
  hydrated: boolean;
  todos: string[];

  constructor() {
    super(TodosStore.STORAGE_KEY);
    this.hydrated = false;
    this.todos = [];

    makeObservable(this, {
      hydrated: observable,
      todos: observable,
      hydrate: action,
      addTodo: action,
      reset: action,
    });

    this.hydrate();
    // intercept(this.hydrated, undefined, () => console.log('Hydrated prop changed'));
  }

  async hydrate() {
    const data = await this.retrieve<TodosStore>();

    runInAction(() => {
      this.todos = data?.todos ?? [];
      this.hydrated = true;
      console.log('Todo store hydrated!');
    });
  }

  async reset(): Promise<void> {
    try {
      await super.reset();

      runInAction(() => {
        this.todos = [];
      });
    } catch (e) {
      console.log('Something went wrong', e);
    }
  }

  addTodo(todo: string) {
    this.todos.push(todo);
    this.store<TodosStore>(this);
  }

  isEmpty(): boolean {
    return !this.todos.length;
  }
}
