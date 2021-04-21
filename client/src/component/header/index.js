import React, { useState, useContext } from 'react';

import Axios from 'axios';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import {
  HOME_PAGE,
  SERVICES,
  PRODUCTS,
  BLOGS,
  CONTACTS,
  PROFILE,
} from '../../utils/router.constant';

import { userContext } from '../../utils/userProvider';

import NavMobile from './NavMobile';
import useStyles from './style';

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [role, setRole] = useContext(userContext);
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
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div className={classes.header}>
            <div className={classes.headerLeftSide}>
              {isMobile ? (
                <NavMobile />
              ) : (
                <div>
                  <Link className={classes.options} to={SERVICES}>
                    Services
                  </Link>
                  <Link className={classes.options} to={PRODUCTS}>
                    Products
                  </Link>
                  <Link className={classes.options} to={BLOGS}>
                    Blogs
                  </Link>
                  <Link className={classes.options} to={CONTACTS}>
                    Contact
                  </Link>
                </div>
              )}
            </div>
            <Link className={classes.title} to={HOME_PAGE}>
              Beauty
            </Link>

            <div className={classes.headerRightSide}>
              {!isMobile &&
                (role === 'guest' ? (
                  <>
                    <Button
                      className={`${classes.logout} ${classes.rightBtn}`}
                      variant="outlined"
                      onClick={() => handleMenuClick('/signin')}
                    >
                      Log In
                    </Button>
                    <Button
                      className={`${classes.signup} ${classes.rightBtn}`}
                      variant="contained"
                      onClick={() => handleMenuClick('/signup')}
                    >
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <>
                    <IconButton
                      className={classes.icons}
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="secondary"
                      onClick={() => handleMenuClick('/cart')}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      className={classes.icons}
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="secondary"
                      onClick={() => handleMenuClick(PROFILE)}
                    >
                      <AccountCircle />
                    </IconButton>
                    <Button
                      className={classes.rightBtn}
                      variant="outlined"
                      onClick={() => logOutClick()}
                    >
                      Logout
                    </Button>
                  </>
                ))}
              {isMobile &&
                (role === 'guest' ? (
                  <Button
                    className={classes.logout}
                    variant="outlined"
                    onClick={() => handleMenuClick('/signin')}
                  >
                    Login
                  </Button>
                ) : (
                  <IconButton
                    className={classes.icons}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="secondary"
                    onClick={() => handleMenuClick(PROFILE)}
                  >
                    <AccountCircle />
                  </IconButton>
                ))}
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

export default Header;
