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
import { makeSelectLoginContainer, makeSelectLoginForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from '../../components/Login';
import { cancelLogin, signIn } from './actions';

class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    save: PropTypes.func.isRequired,
    login: PropTypes.object,
  }

  render() {
    const { login } = this.props;
    return (
      <div>
        <Login onSubmit={this.props.save} submitting={this.props.logincontainer.get('submitting')} submitErrors={login.submitErrors} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  logincontainer: makeSelectLoginContainer(),
  login: makeSelectLoginForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    cancelLogin: () => dispatch(cancelLogin()),
    save: (values) => {dispatch(signIn(values));
    },
  };
}

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
