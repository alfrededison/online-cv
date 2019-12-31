// @flow
import * as React from 'react';
import axios from 'axios';
import {trackPromise} from "react-promise-tracker";

import {ResumeData} from "../../interface";
import {Pillar} from "./themes/Pillar";

import './Resume.scss';

type Props = {
  resumeId: string
};
type State = {
  resume?: ResumeData
};

export class Resume extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    trackPromise(
      this.getResumeData(props.resumeId).then(res => {
        this.setState({
          resume: res.data
        });
      }).catch(err => {
        console.error(err);
      })
    ).then();
  }

  getResumeData(resumeId: string) {
    return axios.get(`/resume/${resumeId}`)
  };

  getTheme(resumeId: string) {
    return Pillar;
  }

  render() {
    const Theme = this.getTheme(this.props.resumeId);
    return this.state.resume ? <Theme Resume={this.state.resume}/> : <div/>;
  }
}

