
import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { setUserSession, userSessionFail, setUserAuth } from './actions';
import { CHECK_USER } from './constants';


function sessionInfo() {
  return Auth.currentAuthenticatedUser();
}
function checkUserSession() {
  return Auth.currentSession();
}
export function* getSession() {
  try {
    if (yield call(checkUserSession)) {
      const user = yield call(sessionInfo);
      yield put(setUserSession(user));
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
