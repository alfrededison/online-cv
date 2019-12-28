import './App.scss';

import React from 'react';
import axios from 'axios';

import {ResumeData} from "../../interface";
import {trackPromise} from "react-promise-tracker";
import {Resume} from "../Resume/Resume";
import {Spinner} from "../Spinner/Spinner";

axios.defaults.baseURL = process.env.REACT_APP_FUNCTION_URL;

const getResumeData = (resumeId: string) => {
  return axios.get(`/resume/${resumeId}`)
};

type Props = {}
type State = {
  resume?: ResumeData
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    const resumeId = process.env.REACT_APP_USER_ID || '';
    trackPromise(
      getResumeData(resumeId).then(res => {
        this.setState({
          resume: res.data
        });
      }).catch(err => {
        console.error(err);
      })
    ).then();
  }

  render() {
    return <>
      {this.state.resume ? <Resume Resume={this.state.resume}/> : null}
      <Spinner/>
    </>;
  };
}

export default App;
