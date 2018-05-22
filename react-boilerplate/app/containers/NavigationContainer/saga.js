import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { SET_USER_LOGOUT } from '../App/constants';
import { userLogOutSuccess } from './actions';


function signOutUser() {
  return Auth.signOut();
}


function* logOutUser(action) {
  yield call(signOutUser);
  yield put(userLogOutSuccess(action.checked));
}


// Individual exports for testing
export default function* rootNavSaga() {
  yield all([
    takeLatest(SET_USER_LOGOUT, logOutUser),
  ]);
}
