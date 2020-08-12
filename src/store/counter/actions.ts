import { create } from 'store';
import * as TYPES from './constants';

export const increaseCounter = () => create(TYPES.INCREASE_COUNTER);
export const decreaseCounter = () => create(TYPES.DECREASE_COUNTER);
export const clearCounter = () => create(TYPES.CLEAR_COUNTER);
