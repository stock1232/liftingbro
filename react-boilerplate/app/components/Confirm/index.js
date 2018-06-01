/**
*
* Confirm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

function Confirm({ handleSubmit, submitting, cancelLogin, submitErrors, dirty, pristine, valid, invalid }) {
  return (
    <div>
      <form>
        <Field name="confirmcode" component={renderTextField} label="Confirmation Code" />
      </form>
      <div>
        <Button variant="raised" color="primary" type="submit" onClick={handleSubmit} disabled={submitting}>Submit</Button>
      </div>
    </div>
  );
}

Confirm.propTypes = {

};

export default reduxForm({
  form: 'confirm',
})(Confirm);
