/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
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
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


// import styled from 'styled-components';

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
class Navigation extends React.Component {   // eslint-disable-line react/prefer-stateless-function
  state = {
     anchorEl: null,
  }

  handleMenu = (event) => {
    this.setState({anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });

  }
  render() {
    const { user, classes, logout } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
      {user.get('isAutheniticated') ?
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={user.get('isAutheniticated')} onChange={logout} aria-label="LoginSwitch" />
            }
            label={user.get('isAutheniticated') && 'Logout'}
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
                  aria-owns={anchorEl ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  {!user.get('isAutheniticated') ?
                  <span>
                  <NavLink to="/login">
                  <MenuItem onClick={this.handleClose}>Log In</MenuItem>
                  </NavLink>
                  <NavLink to="/signup">
                  <MenuItem onClick={this.handleClose}>Sign Up</MenuItem>
                  </NavLink>
                  </span>
                  :
                  <span>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
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

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navigation);
