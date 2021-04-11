import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {
  ButtonComponent,
  ServiceCardForHomePage,
  BlogsCard,
  Footer,
} from '../../component';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  // const history = useHistory();
  const [blog, setBlogs] = useState([]);

  const fetchBlog = async () => {
    const { data } = await Axios.get('api/v1/blog');
    setBlogs(data.data[0]);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.firstSec}>
        <div className={classes.intro}>
          <Typography color="primary" variant="h4" className={classes.text}>
            Endless looks. We are committed to create the perfect style for each
            and every one of our clients.
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
          <ServiceCardForHomePage />
          <ServiceCardForHomePage />
          <ServiceCardForHomePage />
          <ServiceCardForHomePage />
        </div>
      </div>
      <div className={classes.blogsSec}>
        <BlogsCard />
        <Button className={classes.moreBlogsBtn}>More Blogs</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
