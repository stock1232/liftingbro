import { createSelector } from 'reselect';
import {
  getFormSyncErrors,
  getFormSubmitErrors,
  isDirty,
  isPristine,
  isValid,
  isInvalid,
} from 'redux-form/immutable';

/**
 * Direct selector to the signUpContainer state domain
 */
const selectSignUpContainerDomain = (state) => state.get('signUpContainer');

const selectSignupForm = () => (state) => ({
  syncErrors: getFormSyncErrors('signup')(state),
  submitErrors: getFormSubmitErrors('signup')(state),
  dirty: isDirty('signup')(state),
  pristine: isPristine('signup')(state),
  valid: isValid('signup')(state),
  invalid: isInvalid('signup')(state),
});

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUpContainer
 */

const makeSelectSignUpContainer = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate
);

const makeSelectSignupForm = () => createSelector(
  selectSignupForm(),
  (substatesignupform) => substatesignupform
);


export {
  makeSelectSignUpContainer,
  makeSelectSignupForm,
};
