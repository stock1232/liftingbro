
import { fromJS } from 'immutable';
import routesReducer from '../reducer';

describe('routesReducer', () => {
  it('returns the initial state', () => {
    expect(routesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
