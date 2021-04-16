import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import useStyles from './style';
import UpdateUser from '../UpdateInfo';
import { Loading } from '../../../component';

const UserInfo = ({ getUserName }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [, setOpen] = useState(false);

  const handleClose = (reason) => {
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
        setLoading(true);
        const {
          data: { data },
        } = await axios.get(`/api/v1/profile`);
        setUserData(data);
        getUserName(data.first_name);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.response ? err.response.data.message : err.errors[0]);
      }
    })();
    return () => source.cancel('Operation canceled');
  }, [isUpdate, getUserName]);

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        User Information
      </Typography>
      {loading ? (
        <Loading />
      ) : (
        <Grid>
          {error ? (
            <Alert variant="error">{error}</Alert>
          ) : (
            <Paper className={classes.userData}>
              <div className={classes.userDataField}>
                <Typography className={classes.userDataFieldLabel}>
                  First Name:
                </Typography>
                <Typography className={classes.userDataFieldValue}>
                  {userData.first_name}
                </Typography>
              </div>
              <div className={classes.userDataField}>
                <Typography className={classes.userDataFieldLabel}>
                  last Name:
                </Typography>
                <Typography className={classes.userDataFieldValue}>
                  {userData.last_name}
                </Typography>
              </div>
              <div className={classes.userDataField}>
                <Typography className={classes.userDataFieldLabel}>
                  Email:
                </Typography>
                <Typography className={classes.userDataFieldValue}>
                  {userData.email}
                </Typography>
              </div>
              <div className={classes.userDataField}>
                <Typography className={classes.userDataFieldLabel}>
                  Mobile:
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
          )}
        </Grid>
      )}

      <div className={classes.btnsBox}>
        <UpdateUser
          handleClickAlert={handleClick}
          handleCloseAlert={handleClose}
          setUpdateUser={setIsUpdate}
          userData={{
            firstName: userData.first_name,
            lastName: userData.last_name,
            address: userData.address,
            mobile: userData.mobile,
          }}
        />
      </div>
    </div>
  );
};
const { func } = PropTypes;
UserInfo.propTypes = {
  getUserName: func.isRequired,
};

export default UserInfo;
