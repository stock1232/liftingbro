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
import AuthRouter from '../../components/AuthRouter';
import UnAuthRouter from '../../components/UnAuthRouter';






function Routes({ user }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginContainer} />
      <UnAuthRouter path="" component={NotFoundPage} props={user} />
    </Switch>
  );
}


Routes.propTypes = {
  user: PropTypes.object,
};
export default Routes;
