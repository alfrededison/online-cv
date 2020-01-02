// @flow
import * as React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import {connect, ConnectedProps} from 'react-redux';
import {AppState} from "../redux/store";

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends RouteProps, PropsFromRedux {
}

class authRoute extends Route<Props> {
  render() {
    if (this.props.authenticated) {
      return <Redirect to="/manage"/>;
    } else {
      return <Route {...this.props}/>;
    }
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

export const AuthRoute = connector(authRoute);