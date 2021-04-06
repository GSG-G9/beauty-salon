import React from 'react';

import { CircularProgress, Typography } from '@material-ui/core';

import { number, string } from 'prop-types';
import useStyles from './style';

const Loading = ({ size, message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={size} thickness={4} />
      <Typography className={classes.message}>{message}</Typography>
    </div>
  );
};

Loading.propTypes = {
  size: number,
  message: string,
};
Loading.defaultProps = {
  size: 80,
  message: '',
};

export default Loading;
