import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import {
  ButtonComponent,
  ServiceCardForHomePage,
  BlogsCard,
  Footer,
  Header,
} from '../../component';

import { BLOGS, BOOK } from '../../utils/router.constant';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const { data } = await Axios.get('api/v1/blog');
    setBlogs(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.firstSec}>
          <div className={classes.intro}>
            <Typography color="primary" variant="h4" className={classes.text}>
              Endless looks. We are committed to create the perfect style for
              our clients.
            </Typography>
            <Typography variant="h6" className={classes.text2}>
              Best brands of products. we will deliver products to your house,
              Shopping is much easier now!!
            </Typography>
            <ButtonComponent
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={() => history.push(BOOK)}
            >
              BookNow
            </ButtonComponent>
            <Button
              variant="outlined"
              color="contained"
              className={`${classes.button} ${classes.buyNowBtn}`}
            >
              BuyProduct
            </Button>
          </div>
        </div>
        <div className={classes.servicesSec}>
          <Typography
            className={classes.servicesTitle}
            variant="h4"
            color="primary"
          >
            Our Services
          </Typography>
          <div className={classes.services}>
            <ServiceCardForHomePage
              serviceName="Hair"
              imageSrc="https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg"
            />
            <ServiceCardForHomePage
              serviceName="Nails"
              imageSrc="https://www.almarasimsalon.com/ressources/images/710362c84343.jpg"
            />
            <ServiceCardForHomePage
              serviceName="Skin"
              imageSrc="https://media.istockphoto.com/photos/happy-girl-applying-facial-cleanser-mask-young-woman-having-skin-care-picture-id1218410013"
            />
            <ServiceCardForHomePage
              serviceName="Makeup"
              imageSrc="https://www.almarasimsalon.com/ressources/images/5bb5a556bb25.jpg"
            />
          </div>
        </div>
        <div className={classes.blogsSec}>
          {blogs.map((blog) => (
            <BlogsCard
              title={blog.name}
              desc={
                !isMobile
                  ? `${blog.description
                      .split(' ')
                      .slice(0, 50)
                      .join(' ')} . . .`
                  : blog.description.split('').slice(0, 150).join('')
              }
              image={blog.image}
            />
          ))}
          <Button
            className={classes.moreBlogsBtn}
            onClick={() => history.push(BLOGS)}
          >
            MoreBlogs
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
