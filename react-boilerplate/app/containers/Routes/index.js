/**
 *
 * Routes
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import LoginContainer from '../LoginContainer/Loadable';
import SignUpContainer from '../SignUpContainer/Loadable';
import AuthRouter from '../../components/AuthRouter';
import UnAuthRouter from '../../components/UnAuthRouter';






function Routes({ user }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <UnAuthRouter path="/login" props={user} component={LoginContainer} />
      <UnAuthRouter path="/signup" props={user} component={SignUpContainer} />
      <UnAuthRouter path="" component={NotFoundPage} props={user} />
    </Switch>
  );
}


Routes.propTypes = {
  user: PropTypes.object,
};
export default Routes;
