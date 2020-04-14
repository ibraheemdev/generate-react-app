import { put, takeEvery, delay } from "redux-saga/effects";
import * as actions from './actions';
import * as types from './types';

export function* incrementCounterAsync(action) {
  try {
    yield delay(1000)
    yield put(actions.incrementCounter());
  } catch(err) {
    console.log("Error in incrementCounterAsync():" + err);
  }
}

export function* watchIncrementCounterAsync() {
  yield takeEvery(types.INCREMENT_COUNTER_ASYNC, incrementCounterAsync);
}

export const sagas = {
  watchIncrementCounterAsync
}