import { CHECK_USER } from 'constants';
import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { setUserSession, userSessionFail } from './actions';

function* getSession() {
  try {
    if (yield Auth.currentSession()) {
      yield put(setUserSession());
    }
  } catch (e) {
    yield put(userSessionFail(e));
  }
}

export function* checkUser() {
  yield* takeLatest(CHECK_USER, getSession);
}

export default function* rootSaga() {
  yield all([
    checkUser(),
    getSession(),
  ]);
}
