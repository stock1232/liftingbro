/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigationContainer from './selectors';
import { makeSelectCurrentUser } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import { logout, handleClose, handleMenu } from './actions';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      anchorEl2: null,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl2: event.currentTarget });
  }

  render() {
    const { user, classes, navigation, handleMenu } = this.props;

    return (
    <div className={classes.root}>
      {user.isAuthenticated ?
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={user.isAuthenticated} onChange={this.props.logout} aria-label="LoginSwitch" />
            }
            label={user.isAuthenticated && 'Logout'}
          />
        </FormGroup>
        : null}
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Lifting Bro
            </Typography>

              <div>
                <IconButton
                  aria-owns={navigation.anchorEl ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={navigation.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(navigation.anchorEl)}
                  onClose={this.props.handleClose}
                >
                  {user.isAuthenticated ?
                  <MenuItem onClick={this.props.handleClose}>Log In</MenuItem>
                  :
                  <span>
                  <MenuItem onClick={this.props.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.props.handleClose}>My account</MenuItem>
                  </span>
                  }
                </Menu>
              </div>

            </Toolbar>
        </AppBar>
      </div>
  );
  }
}

NavigationContainer.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object,
  logout: PropTypes.func,
  handleClose: PropTypes.func,
  handleMenu: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  navigation: makeSelectNavigationContainer(),
  user: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: (event, checked) => dispatch(logout(checked)),
    handleMenu: (event) => dispatch(handleMenu(event)),
    handleClose: () => dispatch(handleClose()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navigationContainer', reducer });
const withSaga = injectSaga({ key: 'navigationContainer', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(NavigationContainer);
