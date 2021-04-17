import React, { useState } from 'react';
import Axios from 'axios';

import { Divider, Typography, Container, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Alert from '@material-ui/lab/Alert';

import {
  Header,
  Footer,
  InputField,
  ButtonComponent,
  Loading,
} from '../../component';
import { contactValidationSchema } from '../../utils';
import map from '../../assets/images/map.png';
import useStyles from './style';

const Contacts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const clear = () => {
    setMessage('');
    setEmail('');
    setMobile('');
    setName('');
    setError(null);
  };

  const handelChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'username':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const contactInfo = { username, email, message, mobile };
      await contactValidationSchema.isValid(contactInfo, { abortEarly: false });
      await Axios.post('/api/v1/contact-us', contactInfo);
      clear();
      setLoading(false);
      setOpen(true);
    } catch (err) {
      setError(
        err.response.data.message
          ? err.response.data.message
          : 'something went wrong, please try again later'
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container className={classes.root}>
        <Typography> The Beauty - Gaza Beauty</Typography>
        <Divider component="hr" variant="middle" className={classes.divider} />
        <Typography>
          Villa 1043, Al Wasl Road, Umm Suqeim 2, Near J3 Mall, palestine Gaza
          mobile: 04 333 7772
        </Typography>
        <Divider component="hr" variant="middle" className={classes.divider} />
        <img src={map} alt="map" className={classes.img} />
        <Typography className={classes.title} component="h3" variant="h5">
          Contact us
        </Typography>
        <form className={classes.form}>
          <Container className={classes.container}>
            <InputField
              label="Name *"
              value={username}
              onChange={handelChange}
              name="username"
              margin="dense"
            />
            <InputField
              label="mobile *"
              name="mobile"
              value={mobile}
              onChange={handelChange}
              margin="dense"
            />
            <InputField
              label="Email *"
              name="email"
              type="email"
              value={email}
              onChange={handelChange}
              margin="dense"
            />
            {loading && <Loading size={40} color="primary" />}
            {isMobile && (
              <TextField
                multiline
                rows={3}
                value={message}
                name="message"
                placeholder="Message *"
                onChange={handelChange}
                variant="outlined"
                className={classes.message}
              />
            )}
            <ButtonComponent onClick={handleSubmit} className={classes.button}>
              Submit
            </ButtonComponent>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Message sent successfully
              </Alert>
            </Snackbar>
          </Container>
          {isMobile ? (
            ''
          ) : (
            <TextField
              value={message}
              multiline
              rows={6}
              name="message"
              label="Message *"
              onChange={handelChange}
              className={classes.message}
              variant="outlined"
            />
          )}
        </form>
        {error && (
          <Alert severity="error" className={classes.alert}>
            {error}
          </Alert>
        )}
      </Container>
      <Footer />
    </>
  );
};
export default Contacts;
