import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Oops</Typography>
      <div className={classes.box1}>
        <Typography className={classes.text1} variant="h4">
          Looks like you lost, let us take you home
        </Typography>
      </div>
      {/* <img
        className={classes.box}
        alt="notFound"
        src="https://images.unsplash.com/photo-1514242533568-1f7403c532b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGxvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
      /> */}
    </div>
  );
};

export default NotFound;
