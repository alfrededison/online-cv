// @flow
import * as React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import {connect, ConnectedProps} from 'react-redux';
import {AppState} from "../redux/store";

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends RouteProps, PropsFromRedux {
}

class protectedRoute extends Route<Props> {
  render() {
    if (this.props.authenticated) {
      return <Route {...this.props}/>;
    } else {
      return <Redirect to="/manage/login"/>;
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

export const ProtectedRoute = connector(protectedRoute);