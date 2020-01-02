// @flow
import './Admin.scss';
import * as React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import JwtDecode from 'jwt-decode';
import {Provider} from 'react-redux';

import {themeConfig} from './utils/theme';

import {NavBar} from "./fragments/NavBar";

import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {AuthRoute} from "./fragments/AuthRoute";
import {ProtectedRoute} from "./fragments/ProtectedRoute";

import store from "./redux/store";

const theme = createMuiTheme(themeConfig);

let authenticated = false;
const token = localStorage.getItem('token');
if (token) {
  const decodedToken: { [key: string]: any } = JwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 > Date.now()) {
    authenticated = true;
  }
}

export const Admin = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <div className="container">
            <Switch>
              <ProtectedRoute exact path="/manage" component={Home} authenticated={authenticated}/>
              <AuthRoute exact path="/manage/login" component={Login} authenticated={authenticated}/>
              <AuthRoute exact path="/manage/register" component={Register} authenticated={authenticated}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
};