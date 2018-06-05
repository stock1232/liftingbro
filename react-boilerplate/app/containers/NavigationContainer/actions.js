/*
 *
 * NavigationContainer actions
 *
 */


import { SET_USER_LOGOUT,
         USER_LOGOUT_SUCCESS,
} from '../App/constants';


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


