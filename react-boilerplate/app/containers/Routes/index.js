/**
 *
 * Routes
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginContainer from 'containers/LoginContainer/Loadable';
import NavigationContainer from 'containers/NavigationContainer/Loadable';
import AuthRouter from '../../components/AuthRouter';
import UnAuthRouter from '../../components/UnAuthRouter';






function Routes({ user }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginContainer} />
      <UnAuthRouter path="/nav" component={NavigationContainer} props={user} />
      <Route component={NotFoundPage} props={user} />
    </Switch>
  );
}


Routes.propTypes = {
  user: PropTypes.object,
};
export default Routes;
