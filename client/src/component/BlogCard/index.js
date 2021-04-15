import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { string } from 'prop-types';
import useStyles from './style';

function BlogsCard({ title, image, desc }) {
  const classes = useStyles();
  const fakeImage =
    'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg';
  return (
    <Card className={classes.root}>
      <div className={classes.left}>
        <img className={classes.image} src={image || fakeImage} alt="service" />
      </div>

      <div className={classes.right}>
        <Typography className={classes.title} variant="h5" color="primary">
          {title}
        </Typography>
        <Typography className={classes.desc} variant="body1">
          {desc}
        </Typography>
        <Link className={classes.readMore} to="/blogs">
          Read more
        </Link>
      </div>
    </Card>
  );
}

BlogsCard.propTypes = {
  image: string.isRequired,
  title: string,
  desc: string,
};
BlogsCard.defaultProps = {
  title: 'five advices for dry hair',
  desc:
    'Healthy hair is something that everyone wants. This can be hard to achieve at times, however, since so many of us use styling tools, don’t get haircuts as often as we should, and expose our hair to harmful products.',
};

export default BlogsCard;
