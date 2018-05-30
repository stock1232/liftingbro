import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpContainer state domain
 */
const selectSignUpContainerDomain = (state) => state.get('signUpContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUpContainer
 */

const makeSelectSignUpContainer = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectSignUpContainer;
export {
  selectSignUpContainerDomain,
};
