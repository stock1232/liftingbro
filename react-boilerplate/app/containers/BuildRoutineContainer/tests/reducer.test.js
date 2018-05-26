
import { fromJS } from 'immutable';
import buildRoutineContainerReducer from '../reducer';

describe('buildRoutineContainerReducer', () => {
  it('returns the initial state', () => {
    expect(buildRoutineContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
