import { homeSagas } from './ducks/home';
import { all } from 'redux-saga/effects';

// start all sagas in parallel
export function* rootSaga() {
  // yield all(allSagas.map((saga) => fork(saga)));
  yield all([
    homeSagas.watchIncrementCounterAsync()
  ])
}