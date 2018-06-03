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
import { submitSignUp, confirmSignUp } from './actions';
import Confirm from '../../components/Confirm';

export class SignUpContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <div>
        {this.props.newUser.get('newUser') ? <Confirm onSubmit={this.props.confirmSignUp} />
          : <SignIn onSubmit={this.props.submitSignUp} submitErrors={this.props.signup.submitErrors} /> }

      </div>
    );
  }
}

SignUpContainer.propTypes = {
  submitSignUp: PropTypes.func.isRequired,
  confirmSignUp: PropTypes.func.isRequired,
  signup: PropTypes.object,
  newUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  newUser: makeSelectSignUpContainer(),
  signup: makeSelectSignupForm(),
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
