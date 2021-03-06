/**
*
* SignIn
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// import styled from 'styled-components';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['email', 'password', 'firstName', 'lastName', 'userType'];

  requiredFields.forEach((field) => {
    if (!values.get(field)) {
      errors[field] = 'Required';
    }
  });

  if (values.get('email') && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  warning,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <TextField
      label={label}
      {...input}
      {...custom}
    />
    <div>
      {touched &&
        ((error && <span style={{fontSize: '12px'}} >{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderSelectField = ({ input, label, warning, meta: { touched, error }, children, ...custom }) => (
<div>
  <TextField
    select
    label={label}
    {...input}

    onChange={(value) => input.onChange(value)}
    helperText="Please select the type of user that best describes you"
    children={children}
    margin="normal"
    {...custom}
  />
  <div>
  {touched &&
    ((error && <span style={{fontSize: '12px'}} >{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
</div>
);


function SignIn({ handleSubmit, submitting, cancelLogin, submitErrors, dirty, pristine, valid, invalid }) {
  return (
    <div>
      <h1> Test </h1>
      <form>
        <Field name="email" component={renderTextField} label="Email" />
        <Field name="password" component={renderTextField} label="Password" type="password" />
        <Field name="firstName" component={renderTextField} label="First Name"  />
        <Field name="lastName" component={renderTextField} label="Last Name"  />
        <Field name="userType" component={renderSelectField} label="User Type">
          <MenuItem value="Trainer" primarytext="Trainer">Trainer</MenuItem>
          <MenuItem value="Client" primarytext="Client">Client</MenuItem>
          <MenuItem value="Advanced Lifter" primarytext="Advanced Lifter">Advanced Lifter</MenuItem>
        </Field>
        {submitErrors.get('message')}
      </form>
      <div>
        <Button variant="raised" color="primary" type="submit" onClick={handleSubmit} disabled={submitting}>Submit</Button>
      </div>
      <div>
        <Button variant="raised" color="secondary" onClick={cancelLogin} type="text" disabled={submitting}>Cancel</Button>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  cancelLogin: PropTypes.func,
  submitErrors: PropTypes.object,
  dirty: PropTypes.bool,
  pristine: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'signup',
  validate,
})(SignIn);
