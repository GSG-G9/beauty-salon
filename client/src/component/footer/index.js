import React from 'react';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';
import logo from '../../assets/images/logo192.png';
import useStyles from './style';

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <div className={classes.imgContainer}>
        <img alt="girl" src={logo} className={classes.img} />
      </div>

      <Typography className={classes.typo}>
        @2021 All Rights Reserved
      </Typography>

      <Grid className={classes.iconsGrid} container>
        <Twitter className={classes.MuiSvgIconRoot} />

        <Facebook className={classes.MuiSvgIconRoot} />

        <Instagram className={classes.MuiSvgIconRoot} />
      </Grid>
    </Grid>
  );
};

export default Footer;
