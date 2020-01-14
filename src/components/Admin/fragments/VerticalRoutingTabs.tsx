import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Box, createStyles, Tab, Tabs, Theme, Typography, withStyles, WithStyles} from "@material-ui/core";
import {themeStyles} from "../utils/theme";
import Helmet from "react-helmet";

export type TabData = {
  label: string
  route: string
  children: React.ReactNode
}

interface PropsFromStyles extends WithStyles<typeof styles> {
  withTitle?: boolean
  titlePrefix?: string
}

interface Props extends RouteComponentProps, PropsFromStyles {
  tabs: TabData[]
}

class tabs extends Component<Props> {
  getValue = () => {
    return this.props.history.location.pathname;
  };

  handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    this.props.history.push(newValue);
  };

  render() {
    const {classes} = this.props;
    return (
      <>
        <Tabs
          value={this.getValue()}
          onChange={this.handleChangeTab}
          orientation="vertical"
          variant="scrollable"
          className={classes.tabs}
        >
          {this.props.tabs.map(tab => (
            <Tab label={tab.label} {...a11yProps(tab.route)} value={tab.route} key={tab.route}/>
          ))}
        </Tabs>
        {this.props.tabs.map(tab => (
          <TabPanel value={this.getValue()} index={tab.route} key={tab.route}>
            {this.props.withTitle && (
              <Helmet>
                <title>{this.props.titlePrefix + tab.label}</title>
              </Helmet>
            )}
            {tab.children}
          </TabPanel>
        ))}
      </>
    );
  }
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tab-panel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};


const a11yProps = (index: string) => ({
  id: `admin-tab-${index}`,
  'aria-controls': `admin-tab-panel-${index}`,
});

const styles = (theme: Theme) =>
  createStyles({
    ...themeStyles,
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  });

export const VerticalRoutingTabs = withStyles(styles)(tabs);