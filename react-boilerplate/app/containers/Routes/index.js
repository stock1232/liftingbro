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
import LoginContainer from 'containers/LoginContainer/Loadable';
import NavigationContainer from 'containers/NavigationContainer/Loadable';
import AuthRouter from '../../components/AuthRouter';
import UnAuthRouter from '../../components/UnAuthRouter';




import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoutes from './selectors';
import reducer from './reducer';
import saga from './saga';
import { checkUser } from './actions';

export class Routes extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.checkUser();
  }
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login/" component={LoginContainer} />
        <Route component={NotFoundPage} props={user} />
     </Switch>
    );
  }
}

Routes.propTypes = {
  checkUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectRoutes(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => dispatch(checkUser()),
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
