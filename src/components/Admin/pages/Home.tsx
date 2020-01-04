import React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {themeStyles} from "../utils/theme";
import {a11yProps, TabPanel} from "../fragments/TabPanel";

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends PropsFromStyles {
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
      height: '100%',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  });

export const Home = withStyles(styles)(home);