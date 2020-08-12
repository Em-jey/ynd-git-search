import createStore from './create';
import counterStore, { initialState as counterInitialState } from './counter/reducer';

const reducers = {
  counterStore,
};

const initialState = {
  counterStore: counterInitialState,
};

const store = createStore(reducers, initialState);

export const create = (type: string, payload?: any) => ({ type, payload });
export type Store = typeof store;
export default store;
