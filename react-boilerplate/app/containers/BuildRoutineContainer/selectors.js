import { createSelector } from 'reselect';

/**
 * Direct selector to the buildRoutineContainer state domain
 */
const selectBuildRoutineContainerDomain = (state) => state.get('buildRoutineContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildRoutineContainer
 */

const makeSelectBuildRoutineContainer = () => createSelector(
  selectBuildRoutineContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectBuildRoutineContainer;
export {
  selectBuildRoutineContainerDomain,
};
