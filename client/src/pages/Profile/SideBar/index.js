import React, { useState } from 'react';

import { Tabs, Typography, Tab, Avatar } from '@material-ui/core';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Loading } from '../../../component';
import TabPanel from './tabPanel';
import UserInfo from '../UserInfo';
import Reservations from '../Reservations';

import useStyles from './style';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const SideBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [userName, setUserName] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.sideBarContainer}>
        <div className={classes.userAvatar}>
          <Avatar className={classes.avatar} />
          <Typography variant="h3">{userName || <Loading />}</Typography>
        </div>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            label="BIO"
            icon={<PersonPinIcon />}
            className={classes.tab}
            {...a11yProps(0)}
          />
          <Tab
            label="Reservations"
            icon={<LibraryBooksOutlinedIcon />}
            className={classes.tab}
            {...a11yProps(1)}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0} className={classes.mainContent}>
        <UserInfo getUserName={setUserName} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mainContent}>
        <Reservations />
      </TabPanel>
    </div>
  );
};

export default SideBar;
