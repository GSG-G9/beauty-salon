import { Grid, Typography } from '@material-ui/core';
import useStyles from './style';
import BookingSection from '../BookingSection';

const WelcomeSection = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.wrapper}>
        <Grid container className={classes.welcomeContainer}>
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
        <BookingSection />
      </Grid>
    </>
  );
};

export default WelcomeSection;
