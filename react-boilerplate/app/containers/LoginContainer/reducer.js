/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHECK_USER_SUCCEEDED,
  SIGN_IN,
} from './constants';

const initialState = fromJS({
  submitting: false,
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_USER_SUCCEEDED:
      return state.set('submitting', !state.get('submitting'));
    case SIGN_IN:
      return state.set('submitting', !state.get('submitting'));
    default:
      return state;
  }
}

export default loginContainerReducer;
