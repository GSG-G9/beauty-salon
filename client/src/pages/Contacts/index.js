import React, { useState } from 'react';
import Axios from 'axios';

import {
  Divider,
  Typography,
  Container,
  TextareaAutosize,
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
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

const Contacts = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
          : 'Internal server error'
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Typography> The Beauty - Gaza Beauty</Typography>
        <Divider />
        <Typography>
          Villa 1043, Al Wasl Road, Umm Suqeim 2, Near J3 Mall, palestine Gaza
          mobile: 04 333 7772
        </Typography>
        <Divider />
        <img src={map} alt="map" />
        <Typography>Contact us</Typography>
        <form>
          <InputField
            label="Name *"
            value={username}
            onChange={handelChange}
            name="username"
          />
          <InputField
            label="mobile *"
            name="mobile"
            value={mobile}
            onChange={handelChange}
          />
          <InputField
            label="Email *"
            name="email"
            type="email"
            value={email}
            onChange={handelChange}
          />
          {loading && <Loading size={40} color="primary" />}
          <ButtonComponent onClick={handleSubmit}>Submit</ButtonComponent>
          <TextareaAutosize
            rowsMax={4}
            value={message}
            name="message"
            placeholder="Message *"
            onChange={handelChange}
          />
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Message sent successfully
            </Alert>
          </Snackbar>
        </form>
        {error && <Alert severity="error">{error}</Alert>}
      </Container>
      <Footer />
    </>
  );
};
export default Contacts;
