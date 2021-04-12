import React, { useState, useEffect } from 'react';
import { Typography, Paper, Avatar, Grid } from '@material-ui/core';
import axios from 'axios';
import useStyles from './style';
import UpdateUser from './UpdateInfo';

const UserInfo = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [, setError] = useState('');

  // const [loading, setLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/v1/profile`);
        setUserData(data);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.errors[0]);
      }
    })();
    return () => source.cancel('Operation canceled');
  }, [isUpdate]);

  return (
    <>
      <Paper className={classes.userData}>
        <Typography variant="h5">User Information</Typography>
        <Grid>
          <Avatar className={classes.avatar} />
        </Grid>
        <div className={classes.userDataField}>
          <Typography className={classes.userDataFieldLabel}>
            Username:
          </Typography>
          <Typography className={classes.userDataFieldValue}>
            {userData.first_name} {userData.last_name}
          </Typography>
        </div>
        <div className={classes.userDataField}>
          <Typography className={classes.userDataFieldLabel}>
            Email:{' '}
          </Typography>
          <Typography className={classes.userDataFieldValue}>
            {userData.email}
          </Typography>
        </div>
        <div className={classes.userDataField}>
          <Typography className={classes.userDataFieldLabel}>
            Mobile:{' '}
          </Typography>
          <Typography className={classes.userDataFieldValue}>
            {userData.mobile ? userData.mobile : '--'}
          </Typography>
        </div>
        <div className={classes.userDataField}>
          <Typography className={classes.userDataFieldLabel}>
            Address:
          </Typography>
          <Typography className={classes.userDataFieldValue}>
            {userData.address ? userData.address : '--'}
          </Typography>
        </div>
      </Paper>
      <div className={classes.btnsBox}>
        <UpdateUser
          handleClickAlert={handleClick}
          handleCloseAlert={handleClose}
          setUpdateUser={setIsUpdate}
          userData={{
            username: userData.first_name,
            address: userData.address,
            mobile: userData.mobile,
          }}
        />
      </div>
    </>
  );
};

export default UserInfo;
