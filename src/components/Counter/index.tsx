import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCounter,
  increaseCounter,
  decreaseCounter,
  clearCounter,
} from 'store/counter';

import './Counter.scss';

type Props = {};

const Counter: React.FC<Props> = (props) => {
  const counter = useSelector((state) => getCounter(state));
  const dispatch = useDispatch();

  const decrease = () => {
    dispatch(decreaseCounter());
  };

  const increase = () => {
    dispatch(increaseCounter());
  };

  const clear = () => {
    dispatch(clearCounter());
  };

  return (
    <div className="counter-cntainer">
      <div className="counter-control">
        <button
          className="counter-button pointer"
          onClick={decrease}
        >
          -
        </button>
        <div className="counter-number">{ counter }</div>
        <button
          className="counter-button pointer"
          onClick={increase}
        >
          +
        </button>
      </div>
      <div className="counter-clear pointer" onClick={clear}>clear</div>
    </div>
  );
};

export default Counter;
