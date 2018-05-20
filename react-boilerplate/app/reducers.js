/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as formReducer } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SET_USER_SESSION, SET_USER_AUTH } from 'containers/Routes/constants';
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
const routeInitialState = fromJS({
  location: null,
});

const userInitialState = fromJS({
  isAuthenticated: false,
  isAuthenticating: true,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case SET_USER_SESSION:
      return state.set('isAuthenticated', true);
    case SET_USER_AUTH:
      return state.set('isAuthenticating', false);
    case CHECK_USER_SUCCEEDED:
      return state.set('ID', action.user);
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
    user: userReducer,
    form: formReducer,
    ...injectedReducers,
  });
}
