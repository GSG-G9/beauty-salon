import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, Container } from '@material-ui/core';
import useStyles from './style';
import { BOOK } from '../../utils/router.constant';

const ServiceCard = ({ service }) => {
  const { image, name, description } = service;
  const classes = useStyles();
  const fakeImage =
    'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg';
  return (
    <Container>
      <Card className={classes.card}>
        <CardActionArea className={classes.root}>
          <CardMedia>
            <img
              className={classes.image}
              src={image || fakeImage}
              alt="service"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description.split(' ').splice(0, 10).join(' ')}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`${BOOK}`} className={classes.link}>
              Book Now !
            </Link>
          </CardActions>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: shape({
    img: string,
    name: string.isRequired,
    description: string.isRequired,
  }).isRequired,
};
