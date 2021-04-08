import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { InputField, ButtonComponent } from '../../component';
import useStyles from './style';

const Signin = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <form className={classes.form}>
        <InputField label="Email" />
        <InputField label="password" />
        <ButtonComponent> Login </ButtonComponent>
        <Typography color="primary">
          Don&#39;t have an account ? sign up
        </Typography>
      </form>
    </Container>
  );
};

export default Signin;
