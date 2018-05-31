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
        firstname: values.get('firstName'),
        lastname: values.get('lastName'),
        usertype: values.get('userType'),
      },
    },
  };
}

export function signupSuccess(data) {
  return {
    type: SUBMIT_SIGNUP,
    data,
  };
}
