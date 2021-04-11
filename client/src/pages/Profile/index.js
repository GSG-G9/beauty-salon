import React, { useState, useEffect } from 'react';
import { Typography, Paper } from '@material-ui/core';
import axios from 'axios';
import useStyles from './style';

const UserInfo = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [, setError] = useState('');
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
  }, []);

  return (
    <Paper className={classes.userData}>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>
          Username:{' '}
        </Typography>
        <Typography className={classes.userDataFieldValue}>
          {userData.first_name} {userData.last_name}
        </Typography>
      </div>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>Email: </Typography>
        <Typography className={classes.userDataFieldValue}>
          {userData.email}
        </Typography>
      </div>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>Mobile: </Typography>
        <Typography className={classes.userDataFieldValue}>
          {userData.mobile ? userData.mobile : '--'}
        </Typography>
      </div>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>
          Address:{' '}
        </Typography>
        <Typography className={classes.userDataFieldValue}>
          {userData.address ? userData.address : '--'}
        </Typography>
      </div>
    </Paper>
  );
};

export default UserInfo;
