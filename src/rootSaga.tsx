import { all } from 'redux-saga/effects';
import { mySaga } from './sagas/productsaga';
export default function* rootSaga() {
  yield all([mySaga()]);
}
