import React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {connect, ConnectedProps} from "react-redux";
import {AppState} from "../redux/store";
import {themeStyles} from "../utils/theme";
import {ProfileForm} from "../forms/ProfileForm";
import {a11yProps, TabPanel} from "../fragments/TabPanel";
import {editResume, loadResume, updateResume} from "../redux/actions/resumeAction";
import {ResumeData} from "../../../interface";
import {Fab} from "@material-ui/core";
import {CloudDownload, CloudUpload} from '@material-ui/icons';

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends PropsFromStyles, PropsFromRedux {
}

type State = {
  value: number
}

class home extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({
      value: newValue
    });
  };

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
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          orientation="vertical"
          variant="scrollable"
          aria-label="resume section tabs"
          className={classes.tabs}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Contact" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
          <Tab label="Experiences" {...a11yProps(3)} />
          <Tab label="Education" {...a11yProps(4)} />
          <Tab label="Certificates" {...a11yProps(5)} />
          <Tab label="Interests" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <Typography variant="h4">Profile & About</Typography>
          <ProfileForm
            Profile={this.props.resume.Profile}
            About={this.props.resume.About}
            onSubmit={this.handleResumeChange}
          />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Typography variant="h4">Contact Primary & Secondary</Typography>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <Typography variant="h4">Skills & Languages</Typography>
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <Typography variant="h4">Experiences</Typography>
        </TabPanel>
        <TabPanel value={this.state.value} index={4}>
          <Typography variant="h4">Education</Typography>
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          <Typography variant="h4">Certificates</Typography>
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          <Typography variant="h4">Interests</Typography>
        </TabPanel>
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
      height: 'calc(100vh - 80px);',
      position: 'relative',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
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
