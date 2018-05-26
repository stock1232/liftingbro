
import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { setUserSession, userSessionFail, setUserAuth } from './actions';
import { CHECK_USER } from './constants';


function checkUserSession() {
  return Auth.currentSession();
}
export function* getSession() {
  try {
    if (yield call(checkUserSession)) {
      yield put(setUserSession());
    }
  } catch (e) {
    yield put(userSessionFail(e));
  }
  yield put(setUserAuth());
}

export function* checkUser() {
  yield takeLatest(CHECK_USER, getSession);
}
export default function* rootSaga() {
  yield all([
    checkUser(),
    getSession(),
  ]);
}
