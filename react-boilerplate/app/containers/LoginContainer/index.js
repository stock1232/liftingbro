/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from '../../components/Login/Loadable';
import { cancelLogin, signIn } from './actions';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    save: PropTypes.func.isRequired,
    submitErrors: PropTypes.object,
  }
  render() {
    return (
      <div>
        <Login onSubmit={this.props.save} submitErrors={this.props.submitErrors} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  logincontainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    cancelLogin: () => dispatch(cancelLogin()),
    save: (values) => dispatch(signIn(values)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
