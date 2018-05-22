/**
*
* Login
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import styles from './styles.css';


// import styled from 'styled-components';
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
const validate = (values) => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Required';
  }
  return errors;
};

function Login({ handleSubmit, submitting, cancelLogin, submitErrors, dirty, pristine, valid, invalid }) {
  return (
    <div className={styles.login}>
      <div className={styles.heading}>
        <form>
          <Field name="email" component={renderTextField} label="Email" />
          <Field name="password" component={renderTextField} label="Password" type="password" />

        </form>
        <div className={styles.actionContainer}>
             <div>
                <Button variant="raised" color="primary" className={styles.button} type="submit" onClick={handleSubmit} disabled={submitting}>Submit</Button>
             </div>
             <div>
                <Button variant="raised" color="secondary"className={styles.button} onClick={cancelLogin} type="text" disabled={submitting}>Cancel</Button>
             </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  cancelLogin: PropTypes.func.isRequired,
  submitErrors: PropTypes.object,
  dirty: PropTypes.bool,
  pristine: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};



export default reduxForm({
  form: 'login',
  validate,
})(Login);
