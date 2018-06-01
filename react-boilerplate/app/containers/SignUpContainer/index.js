/**
 *
 * SignUpContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSignUpContainer, makeSelectSignupForm } from './selectors';
import { makeSelectCurrentUser } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import SignIn from '../../components/SignIn';
import { submitSignUp, confirmSignUp } from './actions';
import Confirm from '../../components/Confirm';

export class SignUpContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { user } = this.props;
    return (
      <div>
        {user.newUser ? <Confirm onSubmit={this.props.confirmSignUp} />
          : <SignIn onSubmit={this.props.submitSignUp} submitErrors={this.props.signup.submitErrors} />}

      </div>
    );
  }
}

SignUpContainer.propTypes = {
  submitSignUp: PropTypes.func.isRequired,
  signup: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  signupcontainer: makeSelectSignUpContainer(),
  signup: makeSelectSignupForm(),
  user: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitSignUp: (values) => dispatch(submitSignUp(values)),
    confirmSignUp: (value) => dispatch(confirmSignUp(value)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUpContainer', reducer });
const withSaga = injectSaga({ key: 'signUpContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpContainer);
