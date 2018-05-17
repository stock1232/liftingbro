import { createSelector } from 'reselect';

/**
 * Direct selector to the user state domain
 */
const selectRoutesDomain = (state) => state.get('user');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Routes
 */

const makeSelectRoutes = () => createSelector(
  selectRoutesDomain,
  (substate) => substate.toJS()
);

export default makeSelectRoutes;
export {
  selectRoutesDomain,
};
