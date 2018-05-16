/**
 *
 * Routes
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthRouter from '../../components/AuthRouter';
import UnAuthRouter from '../../components/UnAuthRouter';




import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoutes from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Routes extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <UnAuthRouter component={NotFoundPage} props={props} />
     </Switch>
    );
  }
}

Routes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  routes: makeSelectRoutes(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'routes', reducer });
const withSaga = injectSaga({ key: 'routes', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Routes);
