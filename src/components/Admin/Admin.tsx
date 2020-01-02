// @flow
import './Admin.scss';
import * as React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
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
import {logoutUser} from "./redux/actions/userActions";
import {SET_AUTHENTICATED} from "./redux/types";

const theme = createMuiTheme(themeConfig);

const token = localStorage.getItem('token');
if (token) {
  const decodedToken: JSONData = JwtDecode(token);
  if (decodedToken.exp * 1000 > Date.now()) {
    store.dispatch({type: SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // @ts-ignore
    store.dispatch(logoutUser())
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
              <ProtectedRoute exact path="/manage" component={Home}/>
              <AuthRoute exact path="/manage/login" component={Login}/>
              <AuthRoute exact path="/manage/register" component={Register}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
};