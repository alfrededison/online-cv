// @flow
import './Admin.scss';
import * as React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {NavBar} from "./fragments/NavBar";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";

export const Admin = () => {
  return (
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
  );
};