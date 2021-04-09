import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';

import { InputField, ButtonComponent } from '../../component';
import { SIGNUP_PAGE } from '../../utils/router.constant';
import useStyles from './style';

const Signin = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <div className={classes.paper}>
            <div className={classes.iconLock}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </div>
            <form className={classes.form} noValidate>
              <InputField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <InputField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <ButtonComponent
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </ButtonComponent>
              <Grid container>
                <Grid item>
                  <Typography color="primary">
                    Don&#39;t have an account ?
                    <Link to={SIGNUP_PAGE} className={classes.link}>
                      sign up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signin;
