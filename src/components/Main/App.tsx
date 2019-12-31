import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Spinner} from "../Spinner/Spinner";
import {Resume} from "../Resume/Resume";
import {Admin} from "../Admin/Admin";

axios.defaults.baseURL = process.env.REACT_APP_FUNCTION_URL;

const App: React.FC = () => {
  const resumeId = process.env.REACT_APP_USER_ID || '';
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Resume resumeId={resumeId}/>
      </Route>
      <Route exact path="/manage">
        <Admin/>
      </Route>
    </Switch>
    <Spinner/>
  </BrowserRouter>;
};

export default App;
