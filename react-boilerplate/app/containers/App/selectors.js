import { createSelector } from 'reselect';

/**
 * Direct selector to the user state domain
 */
const selectUser = (state) => state.get('user');
const selectRoute = (state) => state.get('route');
/**
 * Other specific selectors
 */


/**
 * Default selector used by Routes
 */

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectCurrentUser = () => createSelector(
  selectUser,
  (substate) => substate
);

export default makeSelectLocation;
export {
  makeSelectCurrentUser,
  makeSelectLocation,
};
