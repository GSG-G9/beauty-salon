import React, { useState } from 'react';

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

import NavMobile from './NavMobile';
import useStyles from './style';

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [isAuth, setIsAuth] = useState(true);

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };
  const logOutClick = () => {
    setIsAuth(false);
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
                (isAuth ? (
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
                      className={classes.logout}
                      variant="outlined"
                      onClick={() => logOutClick()}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className={classes.logout}
                      variant="outlined"
                      onClick={() => handleMenuClick('/signin')}
                    >
                      Log In
                    </Button>
                    <Button
                      className={classes.signup}
                      variant="contained"
                      onClick={() => handleMenuClick('/signup')}
                    >
                      Sign Up
                    </Button>
                  </>
                ))}
              {isMobile &&
                (!isAuth ? (
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
