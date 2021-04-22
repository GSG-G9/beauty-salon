import React from 'react';

import { Container } from '@material-ui/core';

import SideBar from './SideBar';
import useStyles from './style';
import { Header, Footer } from '../../component';

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="lg" className={classes.sideBar}>
        <SideBar />
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
