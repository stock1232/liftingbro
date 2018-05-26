/**
 *
 * BuildRoutineContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBuildRoutineContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class BuildRoutineContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Test Page</h1>
      </div>
    );
  }
}

BuildRoutineContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  buildroutinecontainer: makeSelectBuildRoutineContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'buildRoutineContainer', reducer });
const withSaga = injectSaga({ key: 'buildRoutineContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BuildRoutineContainer);
