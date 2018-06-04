/*
 *
 * SignUpContainer reducer
 *
 */

import { fromJS } from 'immutable';

import {
  SIGNUP_SUCCESS,
} from './constants';

const initialState = fromJS({
  newUser: false,
  profileUser: false,
});

function signUpContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return state
        .set('newUser', action.newUser)
        .set('profileUser', action.profileUser);
    default:
      return state;
  }
}

export default signUpContainerReducer;
