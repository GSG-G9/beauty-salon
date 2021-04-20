import React, { useState, useContext } from 'react';
import Axios from 'axios';

import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import ButtonComponent from '../Button';

import { userContext } from '../../utils/userProvider';

import NavMobile from './NavMobile';
import useStyles from './style';

const HeaderForAdmin = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const history = useHistory();
  const [, setRole] = useContext(userContext);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const logOutClick = async () => {
    try {
      await Axios.post('api/v1/logout');
      setRole('guest');
      setOpen(true);
      history.push('/');
    } catch (err) {
      setError(
        err.response ? err.response.data.message : 'Internal Server Error'
      );
    }
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div className={classes.header}>
            <div className={classes.headerLeftSide}>
              {isMobile ? (
                <NavMobile />
              ) : (
                <div>
                  <Link className={classes.options} to="/dashboard">
                    Services
                  </Link>
                  <Link className={classes.options} to="/dashboard">
                    Products
                  </Link>
                  <Link className={classes.options} to="/dashboard">
                    Blogs
                  </Link>
                </div>
              )}
            </div>
            <Link className={classes.title} to="/dashboard">
              Beauty
            </Link>

            <div className={classes.headerRightSide}>
              {!isMobile && (
                <>
                  <IconButton
                    className={classes.icons}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="secondary"
                    onClick={() => handleMenuClick()}
                  >
                    <AccountCircle />
                  </IconButton>
                  <ButtonComponent
                    className={classes.logout}
                    variant="outlined"
                    onClick={() => logOutClick()}
                  >
                    Logout
                  </ButtonComponent>
                </>
              )}
              {isMobile && (
                <IconButton
                  className={classes.icons}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="secondary"
                  onClick={() => handleMenuClick()}
                >
                  <AccountCircle />
                </IconButton>
              )}
            </div>
          </div>
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
              {error || 'LogOut Successfully!'}
            </Alert>
          </Snackbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderForAdmin;
