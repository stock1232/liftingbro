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
 * Direct selector to the loginContainer state domain
 */
const selectLoginContainerDomain = (state) => state.get('loginContainer');

/**
 * Other specific selectors
 */
const selectLoginForm = () => (state) => ({
  syncErrors: getFormSyncErrors('login')(state),
  submitErrors: getFormSubmitErrors('login')(state),
  dirty: isDirty('login')(state),
  pristine: isPristine('login')(state),
  valid: isValid('login')(state),
  invalid: isInvalid('login')(state),
});

/**
 * Default selector used by LoginContainer
 */

const makeSelectLoginContainer = () => createSelector(
  selectLoginContainerDomain,
  (substate) => substate
);

const makeSelectLoginForm = () => createSelector(
  selectLoginForm(),
  (substateform) => substateform
);


export {
  makeSelectLoginContainer,
  makeSelectLoginForm,
};
