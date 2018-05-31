import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { SUBMIT_SIGNUP } from './constants';

function signup() {
  return Auth.signUp({})
}
function* userSignUp(action) {
  try {
    const data = yield call(signup, action.user);
  } catch {

  }
}
// Individual exports for testing
export default function* signRootSaga() {
  yield all([
    takeLatest(SUBMIT_SIGNUP, userSignUp),
    takeLatest(CANCEL_LOGIN, handleDone),
  ]);
}
