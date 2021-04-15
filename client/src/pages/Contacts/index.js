import React, { useState } from 'react';
import {
  Divider,
  Typography,
  Container,
  TextareaAutosize,
} from '@material-ui/core';
import { Header, Footer, InputField, ButtonComponent } from '../../component';
import map from '../../assets/images/map.png';

const Contacts = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const handelChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
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
          Phone: 04 333 7772
        </Typography>
        <Divider />
        <img src={map} alt="map" />
        <Typography>Contact us</Typography>
        <form>
          <InputField label="Name *" value={username} onChange={handelChange} />
          <InputField label="Phone *" value={phone} onChange={handelChange} />
          <InputField label="Email *" value={email} onChange={handelChange} />
          <ButtonComponent>Submit</ButtonComponent>
          <TextareaAutosize rowsMax={4} defaultValue="Message *" />
        </form>
      </Container>
      <Footer />
    </>
  );
};
export default Contacts;
