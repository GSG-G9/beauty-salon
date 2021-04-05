import React from 'react';

import { CircularProgress } from '@material-ui/core';

import { number } from 'prop-types';
import useStyles from './style';

const Loading = ({ size }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={size} thickness={4} />
    </div>
  );
};

Loading.propTypes = {
  size: number,
};
Loading.defaultProps = {
  size: 80,
};

export default Loading;
