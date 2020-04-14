import React from "react";
import { homeActions } from "./../../redux/ducks/home";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.home.counter);
  return (
    <div>
      <div className="text-3xl text-blue-500 font-bold my-4">
        Counter: <span>{counter}</span>
      </div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
        onClick={() => dispatch(homeActions.incrementCounterAsync())}
      >
        Increment Async
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
        onClick={() => dispatch(homeActions.decrementCounter())}
      >
        Decrement
      </button>
      <div className="text-lg text-blue-500 font-semibold my-4">
        Increment Async increments the counter asynchronously through redux-saga
        with a delay of 1000ms
      </div>
    </div>
  );
};

export default Counter;
