import { Action } from 'types/store';
import * as TYPES from './constants';

export type CounterState = Readonly<{
  counter: number,
}>;

export const initialState: CounterState = {
  counter: 0,
};

export default function counterReducer(
    state = initialState,
    action: Action,
  ): CounterState {
  const {
    type = '',
    payload = null,
  } = action;

  switch (type) {
    case TYPES.INCREASE_COUNTER: {
      const count = state.counter;
      return {
        ...state,
        counter: count + 1,
      };
    }

    case TYPES.DECREASE_COUNTER: {
      const count = state.counter;
      return {
        ...state,
        counter: count - 1,
      };
    }

    case TYPES.CLEAR_COUNTER: {
      return {
        ...state,
        counter: 0,
      };
    }

    default: {
      return state;
    }
  }
}
