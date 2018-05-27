/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';



import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigationContainer from './selectors';
import { makeSelectCurrentUser } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import { logout } from './actions';
import Navigation from '../../components/Navigation';




class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { user, logout } = this.props;

    return (
      <Navigation user={user} logout={logout} />
  );
  }
}

NavigationContainer.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  navigation: makeSelectNavigationContainer(),
  user: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: (event, checked) => dispatch(logout(checked)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navigationContainer', reducer });
const withSaga = injectSaga({ key: 'navigationContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavigationContainer);
