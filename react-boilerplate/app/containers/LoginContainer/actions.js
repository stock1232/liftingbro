/*
 *
 * LoginContainer actions
 *
 */

import {
  CANCEL_LOGIN,
  CHECK_USER_SUCCEEDED,
  CHECK_USER_FAILED,
  SIGN_IN,
} from './constants';

export function cancelLogin() {
  return {
    type: CANCEL_LOGIN,
  };
}

export function checkUserSucceeded(user) {
  return {
    type: CHECK_USER_SUCCEEDED,
    user,
  };
}

export function checkUserFailed(message) {
  return {
    type: CHECK_USER_FAILED,
    message,
  };
}

export function signIn(values) {
  return {
    type: SIGN_IN,
    email: values.get('email'),
    password: values.get('password'),
  };
}
