// @flow
import './Admin.scss';
import * as React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import JwtDecode from 'jwt-decode';
import {Provider} from 'react-redux';
import store from "./redux/store";
import axios from 'axios';

import {themeConfig} from './utils/theme';

import {NavBar} from "./fragments/NavBar";
import {AuthRoute} from "./fragments/AuthRoute";
import {ProtectedRoute} from "./fragments/ProtectedRoute";

import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";

import {JSONData} from "./interface";
import {getUserData, logoutUser} from "./redux/actions/userActions";
import {ActionTypes} from "./redux/types";
import About from "./pages/About";
import NotFound from "../NotFound/NotFound";

const theme = createMuiTheme(themeConfig);

export class Admin extends React.Component<RouteComponentProps> {
  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: JSONData = JwtDecode(token);
      if (decodedToken.exp * 1000 > Date.now()) {
        store.dispatch({type: ActionTypes.SET_AUTHENTICATED});
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // @ts-ignore
        store.dispatch(getUserData());
      } else {
        // @ts-ignore
        store.dispatch(logoutUser())
      }
    }
  }

  render() {
    const {match} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar rootUrl={match.url}/>
            <div className="container">
              <Switch>
                <ProtectedRoute exact path={match.url} component={Home}/>
                <AuthRoute path={`${match.url}/login`} component={Login}/>
                <AuthRoute path={`${match.url}/register`} component={Register}/>
                <Route path={`${match.url}/about`} component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}