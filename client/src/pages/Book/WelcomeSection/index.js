import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';

const WeclomeSection = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.WeclomeContainer}>
      <Typography
        className={`${classes.typo} ${classes.heading}`}
        component="h1"
      >
        Welcome to Beauty Center
      </Typography>
      <Typography
        className={`${classes.typo} ${classes.caption}`}
        component="p"
      >
        WE ARE PASSIONATE ABOUT HELPING YOU LOOK AND FEEL YOUR BEST
      </Typography>
    </Grid>
  );
};

export default WeclomeSection;
