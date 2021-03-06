/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


import injectSaga from 'utils/injectSaga';
import Routes from '../Routes';
import saga from './saga';
import { checkUser } from './actions';
import { makeSelectCurrentUser, makeSelectLocation } from './selectors';
import NavigationContainer from '../NavigationContainer/Loadable';

class App extends React.Component {

  componentDidMount() {
    checkUser();
  }
  render() {
    const { user } = this.props;
    return (
      !user.get('isAutheniticating') &&
      <div>
        <NavigationContainer />
        <Routes user={user} />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  checkUser: PropTypes.func,

};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => dispatch(checkUser()),
  };
}


const withSaga = injectSaga({ key: 'app', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withRouter,
  withSaga,
  withConnect,
)(App);
