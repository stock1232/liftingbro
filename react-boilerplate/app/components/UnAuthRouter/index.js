/**
*
* UnAuthRouter
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import styled from 'styled-components';


export default ({ component: C, props: cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated
        ? <C {...props} {...cProps} />
        : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />}
  />;
