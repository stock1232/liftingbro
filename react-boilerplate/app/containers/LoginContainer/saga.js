import { takeLatest, call, put, all } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import { CANCEL_LOGIN, SIGN_IN } from './constants';
import { Auth } from 'aws-amplify';
import { stopSubmit } from 'redux-form';
// Individual exports for testing
import { checkUserSucceeded } from './actions';

function* handleDone() {
  yield put(goBack());
}

function fetchUser(email, password) {
  return Auth.signIn(email, password);
}
function* checkUserSignIn(action) {
  try {
    const user = yield call(fetchUser, action.email, action.password);
    yield put(checkUserSucceeded(user));
    yield put(goBack());
  } catch (e) {
    yield put(stopSubmit('login', e));
    }
    //yield put(checkUserFailed(e.message));
  }

export default function* rootLoginSaga() {
  yield all([
    takeLatest(SIGN_IN, checkUserSignIn),
    takeLatest(CANCEL_LOGIN, handleDone),
  ]);
}
