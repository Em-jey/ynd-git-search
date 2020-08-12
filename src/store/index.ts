import createStore from './create';
import counterStore, { initialState as counterInitialState } from './counter/reducer';
import gitUsersStore, { initialState as gitUsersInitialState } from './gitUsers/reducer';

const reducers = {
  counterStore,
  gitUsersStore,
};

const initialState = {
  counterStore: counterInitialState,
  gitUsersStore: gitUsersInitialState,
};

const store = createStore(reducers, initialState);

export const create = (type: string, payload?: any) => ({ type, payload });
export type Store = typeof store;
export default store;
