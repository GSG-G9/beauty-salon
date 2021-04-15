import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import { InputField, ButtonComponent, Loading } from '../../component';
import { SIGNUP_PAGE, HOME_PAGE } from '../../utils/router.constant';
import {
  updateAndValidateInput,
  emailSchemaValid,
  passwordSchemaValid,
} from '../../utils';

import useStyles from './style';

const Signin = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState();

  const clear = () => {
    setEmail('');
    setPassword('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      if (!email) {
        setEmailError(false);
      }
      if (!password) {
        setPasswordError(false);
      }
      const user = { email, password };
      await Axios.post('/api/v1/signin', user);
      clear();
      setIsLoading(false);
      history.push(HOME_PAGE);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
      setIsLoading(false);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} elevation={6} square="true">
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
              type="email"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={updateAndValidateInput(
                'email',
                emailSchemaValid,
                setEmail,
                setEmailError
              )}
              error={emailError}
              helperText={emailError && 'Enter a valid Email address'}
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
              value={password}
              onChange={updateAndValidateInput(
                'password',
                passwordSchemaValid,
                setPassword,
                setPasswordError
              )}
              error={passwordError}
              helperText={
                passwordError && 'Password must be at least 6 characters'
              }
            />
            {error && <Alert severity="error">{error}</Alert>}
            <ButtonComponent
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              sign in
            </ButtonComponent>
            {isLoading && <Loading color="primary" size={40} />}
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
  );
};

export default Signin;
