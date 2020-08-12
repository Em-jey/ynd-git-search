import { compose, createStore, applyMiddleware, combineReducers, Store, ReducersMapObject } from 'redux';
import thunk from 'redux-thunk';

export default (reducers: ReducersMapObject, initialState: any): Store => {
  const reducer = combineReducers(reducers);
  const middlewares = [
    thunk,
  ];

  const composedStore = compose(
    applyMiddleware(...middlewares),
  );

  return composedStore(createStore)(
    reducer,
    initialState,
  );
};
