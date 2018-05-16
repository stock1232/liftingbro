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
import PropTypes from 'prop-types';
import Routes from '../Routes';
import { createSelector } from 'reselect';
import { makeSelectUser } from './selectors';


function App({ user }) {
  return (
    <div>
      <Routes props={user} />
    </div>
  );
}

App.propTypes = {
  user: React.PropTypes.object,
};

const mapStateToProps = createSelector(
  makeSelectUser(),
  (user) => ({ user })
);


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
