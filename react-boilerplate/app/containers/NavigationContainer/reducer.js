/*
 *
 * NavigationContainer reducer
 *
 */

import { Map } from 'immutable';
import {
  HANDLE_CLOSE,
  HANDLE_MENU,
} from './constants';

const initialState = Map({
  anchorEl: null,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_CLOSE:
      return state.set('anchorEl', null);
    case HANDLE_MENU:
      return state.set('anchorEl', action.anchorEl);
    default:
      return state;
  }
}

export default navigationContainerReducer;
