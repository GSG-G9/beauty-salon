import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
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
  // SIGNIN_PAGE,
  // SIGNUP_PAGE,
} from '../../utils/router.constant';

import useStyles from './style';

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [isAuth, setIsAuth] = useState(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
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
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="secondary"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    classes={{ paper: classes.menuPaper }}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleMenuClick('/services')}>
                      Services
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/products')}>
                      Products
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/blogs')}>
                      Blogs
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/contact')}>
                      Contact
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/cart')}>
                      Cart
                    </MenuItem>
                    {isAuth ? (
                      <MenuItem
                        classes={{ root: 'logoutMobile' }}
                        className={classes.logoutMobile}
                        onClick={() => logOutClick()}
                      >
                        Logout
                      </MenuItem>
                    ) : null}
                  </Menu>
                </>
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
              {!isMobile ? (
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
              ) : null}
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

              {!isMobile ? (
                <Button
                  className={classes.logout}
                  variant="outlined"
                  onClick={() => handleMenuClick('/signin')}
                >
                  Login
                </Button>
              ) : null}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
