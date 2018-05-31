/*
 *
 * SignUpContainer actions
 *
 */

import {
  SUBMIT_SIGNUP,
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
