import createStore from './create';
import gitUsersStore, { initialState as gitUsersInitialState } from './gitUsers/reducer';

const reducers = {
  gitUsersStore,
};

const initialState = {
  gitUsersStore: gitUsersInitialState,
};

const store = createStore(reducers, initialState);

export const create = (type: string, payload?: any) => ({ type, payload });
export type Store = typeof store;
export default store;
