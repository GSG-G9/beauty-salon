import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '@material-ui/core';

import SideBar from './SideBar';
import useStyles from './style';
import { Header, Footer } from '../../component';

function Profile() {
  const classes = useStyles();
  let val;
  const { state } = useLocation();

  if (state) {
    val = state.val;
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.root}>
        <SideBar val={val} />
      </Container>
      <Footer />
    </>
  );
}

export default Profile;
