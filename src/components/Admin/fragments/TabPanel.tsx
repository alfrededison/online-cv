import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number|string;
  value: any;
}

export const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

export const a11yProps = (index: number|string) => ({
  id: `admin-tab-${index}`,
  'aria-controls': `admin-tabpanel-${index}`,
});
