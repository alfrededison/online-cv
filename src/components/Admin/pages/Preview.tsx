// @flow
import * as React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Pillar} from "../../Resume/themes/Pillar";
import {AppState} from "../redux/store";
import '../../Resume/Resume.scss';

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

type Props = PropsFromRedux & {};

export class preview extends React.Component<Props> {

  getTheme(resumeId: string) {
    return Pillar;
  }

  render() {
    const Theme = this.getTheme(this.props.user.user?.resume);
    return <Theme Resume={this.props.resume}/>;
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  resume: state.resume
});

const connector = connect(
  mapStateToProps
);

export const Preview = connector(preview);