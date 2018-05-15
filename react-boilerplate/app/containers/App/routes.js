import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthRouter from '../../components/AuthRouter';
import UnAuthRouter from '../../components/UnAuthRouter';


export default function Routes({ user }) {
  return (
     <Switch>
        <Route exact path="/" component={HomePage} />
        <UnAuthRouter component={NotFoundPage} props={user} />
     </Switch>
  );
}
