// @flow
import * as React from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" component={Link} to="/manage">Home</Button>
        <Button color="inherit" component={Link} to="/manage/login">Login</Button>
        <Button color="inherit" component={Link} to="/manage/register">Register</Button>
      </Toolbar>
    </AppBar>
  );
};