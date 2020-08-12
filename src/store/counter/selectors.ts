import { CounterState } from './reducer';
import { createSelector } from 'reselect';

const getState = (state: any): CounterState => state.counterStore || {};

export const getCounter = createSelector(
  [getState],
  (state) => state.counter,
);
