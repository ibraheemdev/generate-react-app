import * as types from "./types";

const incrementCounter = () => ({ type: types.INCREMENT_COUNTER });
const decrementCounter = () => ({ type: types.DECREMENT_COUNTER });
const incrementCounterAsync = () => ({ type: types.INCREMENT_COUNTER_ASYNC });

export { incrementCounter, decrementCounter, incrementCounterAsync };