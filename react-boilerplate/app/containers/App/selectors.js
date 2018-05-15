import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectUser = (state) => state.get('user');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectUser = () => createSelector(
  selectUser,
  (User) => User.toJS()
);

export {
  makeSelectUser,
  makeSelectLocation,
};
