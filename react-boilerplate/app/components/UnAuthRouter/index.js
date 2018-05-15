/**
*
* UnAuthRouter
*
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import styled from 'styled-components';


function UnAuthRouter({ component: C, props: cProps, ...rest }) {
  <Route
    {...rest}
    render={(props) =>
      !cProps.isAuthenticated
        ? <C {...props} {...cProps} />
        : <Redirect to="/" />}
  />;
}

UnAuthRouter.PropTypes = {

};

export default UnAuthRouter;
