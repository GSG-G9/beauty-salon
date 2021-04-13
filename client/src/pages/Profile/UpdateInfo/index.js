import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';

import { InputField, ButtonComponent, Loading } from '../../../component';

import useStyles from './style';

function UpdateUser({ setUpdateUser, handleClickAlert, handleCloseAlert }) {
  const classes = useStyles('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState('');

  const handleClickDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const clear = () => {
    setFirstName('');
    setLastName('');
    setMobile('');
    setAddress('');
  };
  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      // case 'username':
      //   setUsername(value);
      //   break;
      case 'mobile':
        setMobile(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
    }
  };
  const handleSubmit = async () => {
    try {
      setError('');
      setOpenDialog(true);
      handleCloseAlert();
      setLoading(true);
      const userData = { firstName, lastName, mobile, address };
      setUpdateUser(false);
      await axios.patch('/api/v1/profile', userData);
      clear();
      setLoading(false);
      setUpdateUser(true);
      setOpenDialog(false);
      handleClickAlert();
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data.message : err.errors[0]);
    }
  };
  return (
    <div>
      <ButtonComponent
        variant="contained"
        className={classes.editBtn}
        onClick={handleClickDialog}
      >
        Update info
      </ButtonComponent>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-label="update-info"
      >
        <DialogTitle>Update information</DialogTitle>
        <DialogContent>
          <InputField
            autoFocus
            margin="dense"
            id="name"
            name="firstName"
            label="firstName"
            type="text"
            fullWidth
            value={firstName}
            onChange={handleChange}
          />
          <InputField
            autoFocus
            margin="dense"
            id="name"
            name="lastName"
            label="lastName"
            type="text"
            fullWidth
            value={lastName}
            onChange={handleChange}
          />
          <InputField
            autoFocus
            margin="dense"
            id="address"
            name="address"
            label="address"
            type="text"
            fullWidth
            value={address}
            onChange={handleChange}
          />
          <InputField
            autoFocus
            margin="dense"
            id="mobile"
            name="mobile"
            label="mobile"
            type="text"
            fullWidth
            value={mobile}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={handleCloseDialog} variant="outlined">
            Cancel
          </ButtonComponent>

          <ButtonComponent onClick={handleSubmit} variant="contained">
            {loading && <Loading />}
            Edit
          </ButtonComponent>

          {error && <Alert severity="error">{error}</Alert>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

const { func, string, number } = PropTypes;

UpdateUser.propTypes = {
  setUpdateUser: func.isRequired,
  handleClickAlert: func.isRequired,
  handleCloseAlert: func.isRequired,
  userData: PropTypes.shape({
    firstName: string,
    lastName: string,
    mobile: number,
    address: string,
  }).isRequired,
};

export default UpdateUser;
