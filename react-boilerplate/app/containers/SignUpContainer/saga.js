import { all, call, select, put, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { stopSubmit } from 'redux-form';
import { SUBMIT_SIGNUP, CONFIRM_SIGNUP } from './constants';
import { signupSuccess } from './actions';
import { makeSelectCurrentUser } from '../App/selectors';

function signup(user) {
  return Auth.signUp({ ...user, attributes: { ...user.attributes } });
}
function* userSignUp(action) {
  try {
    const newUser = yield call(signup, action.user);
    yield put(signupSuccess(newUser));
  } catch (e) {
    yield put(stopSubmit('signup', e));
  }
}

function code(username, confirmcode) {
  return Auth.confirmSignUp(username, confirmcode);
}
function* confirmCode(action) {
  try {
    const { newUser } = yield select(makeSelectCurrentUser());
    const confirmuser = yield call(code, newUser.get('username'), action.confirmCode);
    console.log(confirmuser);
  } catch (e) {
    yield put(stopSubmit('confirm', e));
  }
}
// Individual exports for testing
export default function* signRootSaga() {
  yield all([
    takeLatest(SUBMIT_SIGNUP, userSignUp),
    takeLatest(CONFIRM_SIGNUP, confirmCode),
  ]);
}
