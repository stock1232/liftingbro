/*
 *
 * SignUpContainer actions
 *
 */

import {
  SUBMIT_SIGNUP,
  SIGNUP_SUCCESS,
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

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
}
