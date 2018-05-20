/*
 *
 * Routes actions
 *
 */

import {
  CHECK_USER,
  SET_USER_SESSION,
  USER_SESSION_FAIL,
  SET_USER_AUTH,
} from './constants';


export function setUserAuth() {
  return {
    type: SET_USER_AUTH,
  };
}

export function checkUser() {
  return {
    type: CHECK_USER,
  };
}

export function setUserSession() {
  return {
    type: SET_USER_SESSION,
  };
}

export function userSessionFail(message) {
  return {
    type: USER_SESSION_FAIL,
    message,
  };
}
