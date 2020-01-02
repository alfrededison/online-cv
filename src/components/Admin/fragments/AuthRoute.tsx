// @flow
import * as React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";

interface Props extends RouteProps {
  authenticated: boolean
}
export class AuthRoute extends Route<Props> {
  render() {
    if (this.props.authenticated) {
      return <Redirect to="/manage"/>;
    } else {
      return <Route {...this.props}/>;
    }
  }
}

