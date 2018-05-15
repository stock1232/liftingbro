/**
*
* AuthRouter
*
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import styled from 'styled-components';


function AuthRouter({ component: C, props: cProps, ...rest }) {
  return (
  <Route
    {...rest}
    render={(props) =>
        cProps.isAuthenticated
          ? <C {...props} {...cProps} />
          : <Redirect
                to={`/login?redirect=${props.location.pathname}${props.location
                   .search}`}
            />}
   />
  );
}

AuthRouter.propTypes = {

};

export default AuthRouter;
