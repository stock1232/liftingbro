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
import reducer from './reducer';
import saga from './saga';
import SignIn from '../../components/SignIn';
import { submitSignUp } from './actions';

export class SignUpContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SignIn onSubmit={this.props.submitSignUp} submitErrors={this.props.submitErrors} />
      </div>
    );
  }
}

SignUpContainer.propTypes = {
  submitSignUp: PropTypes.func.isRequired,
  submitErrors: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  signupcontainer: makeSelectSignUpContainer(),
  signup: makeSelectSignupForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitSignUp: (values) => dispatch(submitSignUp(values)),
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
