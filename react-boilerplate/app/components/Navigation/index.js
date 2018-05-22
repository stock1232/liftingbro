/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
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
function Navigation({ user, classes, logout  }) {
  return (
    <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              user.isAuthenticated && <Switch checked={user.isAuthenticated} onChange={logout} aria-label="LoginSwitch" />
            }
            label={user.isAuthenticated && 'Logout'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            </Toolbar>
        </AppBar>
      </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navigation);
