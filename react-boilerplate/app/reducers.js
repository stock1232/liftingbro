/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as formReducer } from 'redux-form/immutable';
import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SET_USER_SESSION, SET_USER_AUTH, SET_USER_LOGOUT, USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import { CHECK_USER_SUCCEEDED } from 'containers/LoginContainer/constants';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state

const userInitialState = Map({
  isAutheniticated: false,
  isAutheniticating: true,
  ID: null,
});

/**
 * Merge route into the global application state
 */
export function location(state = null, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

const routeReducer = combineReducers({ location });
export function user(state = userInitialState, action) {
  switch (action.type) {
    case SET_USER_SESSION:
      return state.set('isAutheniticated', true);
    case SET_USER_AUTH:
      return state.set('isAutheniticating', false);
    case CHECK_USER_SUCCEEDED:
      return state.set('ID', action.user);
    case USER_LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
}




/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    user,
    form: formReducer,
    ...injectedReducers,
  });
}
