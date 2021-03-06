/**
*
* AuthRouter
*
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import styled from 'styled-components';


export default ({ component: C, props: cProps, ...rest }) =>
<Route
  {...rest}
  render={props =>
    cProps.isAutheniticated
      ? <C {...props} {...cProps} />
      : <Redirect
          to={`/login?redirect=${props.location.pathname}${props.location
            .search}`}
        />}
/>;
