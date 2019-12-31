// @flow
import './Admin.scss';
import * as React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

import {themeConfig} from './utils/theme';

import {NavBar} from "./fragments/NavBar";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";

const theme = createMuiTheme(themeConfig);

export const Admin = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <NavBar/>
          <div className="container">
            <Switch>
              <Route exact path="/manage" component={Home}/>
              <Route exact path="/manage/login" component={Login}/>
              <Route exact path="/manage/register" component={Register}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
};