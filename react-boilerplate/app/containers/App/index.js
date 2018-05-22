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
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import Routes from '../Routes';
import { makeSelectCurrentUser } from './selectors';
import saga from './saga';
import { checkUser } from './actions';
import NavigationContainer from '../NavigationContainer/Loadable';


export class App extends React.PureComponent {

  componentDidMount() {
    this.props.checkUser();
  }
  render() {
    const { user } = this.props;
    return (
      !user.isAuthenticating &&
      <div>
        <NavigationContainer />
        <Routes user={user} />
      </div>
    );
  }
}
App.propTypes = {
  checkUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => dispatch(checkUser()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withSaga,
  withConnect,
)(App);
