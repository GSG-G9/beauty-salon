import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { ButtonComponent, ServiceCardForHomePage } from '../../component';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstSec}>
        <div className={classes.intro}>
          <Typography color="primary" variant="h4" className={classes.text}>
            Endless looks. We are committed to creating the perfect style for
            each and every one of our clients.
          </Typography>
          <Typography variant="h6" className={classes.text2}>
            Best brands of products. we will deliver products to your house,
            Shopping is much easier now!!
          </Typography>
          <ButtonComponent
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            BookNow
          </ButtonComponent>
          <Button
            variant="outlined"
            color="contained"
            className={`${classes.button} ${classes.buyNowBtn}`}
          >
            Buy Product
          </Button>
        </div>
      </div>
      <div className={classes.servicesSec}>
        <Typography variant="h4" color="primary">
          Our Services
        </Typography>
        <div className={classes.services}>
          <ServiceCardForHomePage className={classes.service} />
          <ServiceCardForHomePage />
          <ServiceCardForHomePage />
          <ServiceCardForHomePage />
        </div>
      </div>
    </div>
  );
};

export default Home;
