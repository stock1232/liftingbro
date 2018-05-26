

import {
  CHECK_USER,
  SET_USER_SESSION,
  USER_SESSION_FAIL,
  SET_USER_AUTH,
} from './constants';


export function setUserAuth() {
  return {
    type: SET_USER_AUTH,
    data: {
      isAuthenticating: false,
    },
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
    data: {
      isAuthenticated: true,
    },
  };
}

export function userSessionFail(message) {
  return {
    type: USER_SESSION_FAIL,
    message,
  };
}
