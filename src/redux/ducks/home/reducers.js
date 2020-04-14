import * as types from "./types";

const reducer = (state = {counter: 10}, action) => {
  const newState = {...state};
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      newState.counter += 1
      return newState
    case types.DECREMENT_COUNTER:
      newState.counter -= 1
      return newState
    default:
      return state;
  }
};

export default reducer;