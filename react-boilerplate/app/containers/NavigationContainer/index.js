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
import reducer from './reducer';
import saga from './saga';
import Navigation from '../../components/Navigation/Loadable'

export class NavigationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

NavigationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigationcontainer: makeSelectNavigationContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
