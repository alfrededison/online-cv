// @flow
import * as React from 'react';
import {Fragment} from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";
import {AppState} from "../redux/store";
import {logoutUser} from "../redux/actions/userActions";

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends PropsFromRedux {
  rootUrl: string
}

class navBar extends React.Component<Props> {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {this.props.authenticated ? (
            <Fragment>
              <Button color="inherit" component={Link} to={this.props.rootUrl}>Home</Button>
              <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to={`${this.props.rootUrl}/login`}>Login</Button>
              <Button color="inherit" component={Link} to={`${this.props.rootUrl}/register`}>Register</Button>
            </Fragment>
          )}
          <Button color="inherit" component={Link} to={`${this.props.rootUrl}/about`}>About</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    authenticated: state.user.authenticated
  };
}

const mapActionsToProps = {
  logoutUser
};

const connector = connect(
  mapStateToProps,
  mapActionsToProps
);

export const NavBar = connector(navBar);