/*
 *
 * SignUpContainer actions
 *
 */

import {
  SUBMIT_SIGNUP,
  SIGNUP_SUCCESS,
  CONFIRM_SIGNUP,
} from './constants';

export function submitSignUp(values) {
  return {
    type: SUBMIT_SIGNUP,
    user: {
      username: values.get('email'),
      password: values.get('password'),
      attributes: {
        'custom:firstname': values.get('firstName'),
        'custom:lastname': values.get('lastName'),
        'custom:usertype': values.get('userType'),
      },
    },
  };
}

export function signupSuccess(newUser) {
  return {
    type: SIGNUP_SUCCESS,
    newUser,
  };
}

export function confirmSignUp(value) {
  return {
    type: CONFIRM_SIGNUP,
    confirmcode: value,
  };
}
