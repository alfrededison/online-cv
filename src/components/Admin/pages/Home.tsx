import React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import {connect, ConnectedProps} from "react-redux";
import {Fab, Typography} from "@material-ui/core";
import {CloudDownload, CloudUpload} from '@material-ui/icons';
import {RouteComponentProps} from 'react-router-dom';

import {AppState} from "../redux/store";
import {themeStyles} from "../utils/theme";
import {editResume, loadResume, updateResume} from "../redux/actions/resumeAction";
import {ResumeData} from "../../../interface";
import {TabData, VerticalRoutingTabs} from "../fragments/VerticalRoutingTabs";
import {ContactForm} from "../forms/ContactForm";
import {ProfileForm} from '../forms/ProfileForm';
import {SkillForm} from "../forms/SkillForm";
import {EducationForm} from "../forms/EducationForm";
import {InterestForm} from "../forms/InterestForm";

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends RouteComponentProps, PropsFromStyles, PropsFromRedux {
}

class home extends React.Component<Props> {

  handleDownloadResume = () => {
    if (window.confirm("Are you sure to RELOAD your resume?\nAll changes will be discard!")) {
      this.props.loadResume(this.props.user.user?.resume);
    }
  };

  handleUploadResume = () => {
    if (window.confirm("Are you sure to SUBMIT your resume?\nAll changes will be persist on the cloud!")) {
      this.props.updateResume(this.props.user.user?.resume, {
        ...this.props.resume,
      });
    }
  };

  handleResumeChange = (data: Partial<ResumeData>) => {
    this.props.editResume(data);
  };

  render() {
    const tabs: TabData[] = [
      {
        label: "Profile",
        route: this.props.match.url,
        children: (
          <>
            <Typography variant="h4">Profile &amp; About</Typography>
            <ProfileForm
              Profile={this.props.resume.Profile}
              About={this.props.resume.About}
              onSubmit={this.handleResumeChange}
            />
          </>
        )
      },
      {
        label: "Contacts",
        route: `${this.props.match.url}/contacts`,
        children: (
          <>
            <Typography variant="h4">Contacts</Typography>
            <ContactForm
              PrimaryContact={this.props.resume.PrimaryContact}
              SecondaryContacts={this.props.resume.SecondaryContacts}
              onSubmit={this.handleResumeChange}
            />
          </>
        )
      },
      {
        label: "Skills",
        route: `${this.props.match.url}/skills`,
        children: (
          <>
            <Typography variant="h4">Skills</Typography>
            <SkillForm
              Skills={this.props.resume.Skills}
              onSubmit={this.handleResumeChange}
            />
          </>
        )
      },
      {
        label: "Experiences",
        route: `${this.props.match.url}/experiences`,
        children: (
          <>
            <Typography variant="h4">Experiences</Typography>
          </>
        )
      },
      {
        label: "Education",
        route: `${this.props.match.url}/education`,
        children: (
          <>
            <Typography variant="h4">Education &amp; Languages</Typography>
            <EducationForm
              Education={this.props.resume.Education}
              Languages={this.props.resume.Languages}
              onSubmit={this.handleResumeChange}
            />
          </>
        )
      },
      {
        label: "Certificates",
        route: `${this.props.match.url}/certificates`,
        children: (
          <>
            <Typography variant="h4">Certificates</Typography>
          </>
        )
      },
      {
        label: "Interests",
        route: `${this.props.match.url}/interests`,
        children: (
          <>
            <Typography variant="h4">Interests</Typography>
            <InterestForm
              Interests={this.props.resume.Interests}
              onSubmit={this.handleResumeChange}
            />
          </>
        )
      }
    ];

    const {classes, ...others} = this.props;
    return (
      <div className={classes.root}>
        <VerticalRoutingTabs tabs={tabs} {...others} withTitle={true} titlePrefix="Resume Editior | "/>
        <div className={classes.floatButtons}>
          <Fab aria-label="Save permanently" color="primary" onClick={this.handleUploadResume}>
            <CloudUpload/>
          </Fab>
          <br/>
          <Fab aria-label="Reload" color="secondary" onClick={this.handleDownloadResume}>
            <CloudDownload/>
          </Fab>
        </div>
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    ...themeStyles,
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      minHeight: 'calc(100vh - 80px)',
      height: '100%',
      position: 'relative',
    },
    floatButtons: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  });

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  resume: state.resume,
  UI: state.UI
});

const mapActionsToProps = {
  loadResume,
  editResume,
  updateResume
};

const connector = connect(
  mapStateToProps,
  mapActionsToProps
);

export const Home = connector(withStyles(styles)(home));
