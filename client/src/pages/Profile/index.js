import React from 'react';

import { Container } from '@material-ui/core';

import SideBar from './SideBar';
import useStyles from './style';
import { Header, Footer } from '../../component';

function Profile() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.root}>
        <SideBar />
      </Container>
      <Footer />
    </>
  );
}

export default Profile;
