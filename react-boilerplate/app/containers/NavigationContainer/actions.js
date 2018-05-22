/*
 *
 * NavigationContainer actions
 *
 */


import { SET_USER_LOGOUT,
         USER_LOGOUT_SUCCESS,
} from '../App/constants';
import {
         HANDLE_MENU,
         HANDLE_CLOSE,
} from './constants';

export function logout(checked) {
  return {
    type: SET_USER_LOGOUT,
    checked,
  };
}

export function userLogOutSuccess(checked) {
  return {
    type: USER_LOGOUT_SUCCESS,
    checked,
  };
}

export function handleMenu(event) {
  return {
    type: HANDLE_MENU,
    anchorEl: event.currentTarget,
  };
}

export function handleClose() {
  return {
    type: HANDLE_CLOSE,
  }
}
