import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Spinner} from "../Spinner/Spinner";
import {Resume} from "../Resume/Resume";
import {Admin} from "../Admin/Admin";
import NotFound from "../NotFound/NotFound";

axios.defaults.baseURL = process.env.REACT_APP_FUNCTION_URL;

const App: React.FC = () => {
  const resumeId = process.env.REACT_APP_USER_ID || '';
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Resume resumeId={resumeId}/>}/>
      <Route path="/view/:resumeId" render={(props) => <Resume resumeId={props.match.params.resumeId}/>}/>
      <Route path="/manage" component={Admin}/>
      <Route component={NotFound}/>
    </Switch>
    <Spinner/>
  </BrowserRouter>;
};

export default App;
