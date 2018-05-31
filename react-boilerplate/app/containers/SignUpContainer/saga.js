import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { stopSubmit } from 'redux-form';
import { SUBMIT_SIGNUP } from './constants';

function signup(user) {
  return Auth.signUp({...user, attributes: {...user.attributes}});
}
function* userSignUp(action) {
  try {
    const data = yield call(signup, action.user);
    yield put(signupsuccess(data));
  } catch (e) {
    yield put(stopSubmit('signup', e));
  }
}
// Individual exports for testing
export default function* signRootSaga() {
  yield all([
    takeLatest(SUBMIT_SIGNUP, userSignUp),
    takeLatest(CANCEL_LOGIN, handleDone),
  ]);
}
