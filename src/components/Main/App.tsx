import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Spinner} from "../Spinner/Spinner";
import {Resume} from "../Resume/Resume";
import {Admin} from "../Admin/Admin";
import NotFound from "../NotFound/NotFound";
import Home from './Home';

axios.defaults.baseURL = process.env.REACT_APP_FUNCTION_URL;

const App: React.FC = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Home/>}/>
      <Route path="/view/:resumeId" render={(props) => <Resume resumeId={props.match.params.resumeId}/>}/>
      <Route path="/manage" component={Admin}/>
      <Route component={NotFound}/>
    </Switch>
    <Spinner/>
  </BrowserRouter>;
};

export default App;
