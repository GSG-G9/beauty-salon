import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

import useStyles from './style';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    // eslint-disable-next-line react/prop-types
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    // eslint-disable-next-line react/prop-types
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.header}>
            <div className={classes.headerLeftSide}>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
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
                  </Menu>
                </>
              ) : (
                <div>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick('/services')}
                  >
                    Services
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick('/products')}
                  >
                    Products
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick('/blogs')}
                  >
                    Blogs
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick('/contact')}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Typography variant="h5" className={classes.title}>
                Beauty
              </Typography>
            </IconButton>

            <div className={classes.headerRightSide}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Button variant="contained">Login</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
