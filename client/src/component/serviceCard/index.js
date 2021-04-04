import React from 'react';
import { shape, string } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

const ServiceCard = ({ service }) => {
  const { img, name, description } = service;
  const classes = useStyles();
  const fakeImage =
    'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg';
  return (
    <Card>
      <CardActionArea className={classes.root}>
        <CardMedia>
          <img className={classes.image} src={img || fakeImage} alt="service" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.action}>
          <Button className={classes.button} size="medium" color="primary">
            Book Now !
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
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
