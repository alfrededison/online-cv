// @flow
import * as React from 'react';
import {Fragment} from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";
import {AppState} from "../redux/store";

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends PropsFromRedux {
  rootUrl: string
}

class navBar extends React.Component<Props> {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {this.props.authenticated ? (
            <Fragment>
              <Button color="inherit" component={Link} to={this.props.rootUrl}>Home</Button>
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

const connector = connect(
  mapStateToProps
);

export const NavBar = connector(navBar);