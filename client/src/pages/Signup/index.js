import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { SIGNIN_PAGE } from '../../utils/router.constant';
import { InputField, Loading } from '../../component';
import useStyles from './style';
import {
  updateAndValidateInput,
  firstNameSchema,
  lastNameSchema,
  emailSchema,
  passwordSchema,
  confirmPasswordSchema,
} from '../../utils';

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordsMismatchError, setPasswordsMismatchError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState('');

  const clear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (password !== confirmPassword) {
        return setPasswordsMismatchError(true);
      }
      if (!firstName) {
        return setFirstNameError(true);
      }
      if (!lastName) {
        return setLastNameError(true);
      }
      if (!email) {
        return setEmailError(true);
      }
      if (!password) {
        return setPasswordError(true);
      }
      if (!confirmPassword) {
        return setConfirmPasswordError(true);
      }
      await axios.post('/api/v1/signup', {
        firstName,
        lastName,
        email,
        password,
      });
      clear();
      setLoading(false);
      return history.push('/');
    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
      return setLoading(false);
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5}>
        <div className={classes.paper}>
          <div className={classes.iconLock}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </div>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={updateAndValidateInput(
                    'firstName',
                    firstNameSchema,
                    setFirstName,
                    setFirstNameError
                  )}
                  error={firstNameError}
                  helperText={
                    firstNameError ? 'Please Enter A valid First Name' : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={updateAndValidateInput(
                    'lastName',
                    lastNameSchema,
                    setLastName,
                    setLastNameError
                  )}
                  error={lastNameError}
                  helperText={
                    lastNameError ? 'Please Enter A valid Last Name' : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={updateAndValidateInput(
                    'email',
                    emailSchema,
                    setEmail,
                    setEmailError
                  )}
                  error={emailError}
                  helperText={
                    emailError
                      ? 'Please Enter A valid Email like exmaple@test.com'
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={updateAndValidateInput(
                    'password',
                    passwordSchema,
                    setPassword,
                    setPasswordError
                  )}
                  error={passwordError}
                  helperText={
                    passwordError
                      ? 'Please Enter A valid Password which must contain 6 characters'
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  fullWidth
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={updateAndValidateInput(
                    'confirmPassword',
                    confirmPasswordSchema,
                    setConfirmPassword,
                    setConfirmPasswordError,
                    setPasswordsMismatchError
                  )}
                  error={confirmPasswordError || passwordsMismatchError}
                  helperText={
                    passwordsMismatchError
                      ? 'Passwords must match!'
                      : confirmPasswordError
                      ? 'Please Enter A valid Password which must contain 6 characters'
                      : null
                  }
                />
              </Grid>
            </Grid>
            {Error && <Alert severity="error">{Error}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            {loading && <Loading size={40} color="secondary" />}
            <Grid container justify="flex-start">
              <Grid item>
                <Link to={SIGNIN_PAGE} className={classes.link}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
