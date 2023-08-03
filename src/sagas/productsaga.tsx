import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../action/action-type';
import { allProduct } from '../appapi';
function* fetchUser() {
  try {
    const productAll = yield call(allProduct);
    console.log('final' + JSON.stringify(productAll));
    yield put({ type: ActionTypes.FETCH_PRODUCT_SUCESS, payload: productAll });
  } catch (e) {
    console.log('error msg is' + e);
    //yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}
export function* mySaga() {
  yield takeEvery(ActionTypes.FETCH_PRODUCT_REQUESTED, fetchUser);
}
