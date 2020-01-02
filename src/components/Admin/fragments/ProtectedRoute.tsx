// @flow
import * as React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";

interface Props extends RouteProps {
  authenticated: boolean
}
export class ProtectedRoute extends Route<Props> {
  render() {
    if (this.props.authenticated) {
      return <Route {...this.props}/>;
    } else {
      return <Redirect to="/manage/login"/>;
    }
  }
}

