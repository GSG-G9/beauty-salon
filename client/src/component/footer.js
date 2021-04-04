import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  iconsGrid: {
    width: '23%',
  },
  MuiBottomNavigationActionRoot: {
    color: 'white',
    minWidth: 0,
  },
});

const Footer = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root} {...rest}>
      {children}
      <Grid className={classes.iconsGrid} container>
        <BottomNavigationAction
          item
          className={classes.MuiBottomNavigationActionRoot}
          icon={<Twitter />}
        />
        <BottomNavigationAction
          item
          className={classes.MuiBottomNavigationActionRoot}
          icon={<Facebook />}
        />
        <BottomNavigationAction
          item
          className={classes.MuiBottomNavigationActionRoot}
          icon={<Instagram />}
        />
      </Grid>
    </BottomNavigation>
  );
};

const { node } = PropTypes;

Footer.propTypes = {
  children: node.isRequired,
};
export default Footer;
