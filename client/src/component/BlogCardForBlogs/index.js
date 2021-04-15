import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { string } from 'prop-types';
import useStyles from './style';

function BlogsCardForBlogs({ title, image, desc }) {
  const classes = useStyles();
  const fakeImage =
    'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg';
  return (
    <Card className={classes.root}>
      <img className={classes.image} src={image || fakeImage} alt="service" />

      <div className={classes.right}>
        <Typography className={classes.title} variant="h5" color="primary">
          {title}
        </Typography>
        <Typography className={classes.desc} variant="body2">
          {desc}
        </Typography>
      </div>
    </Card>
  );
}

BlogsCardForBlogs.propTypes = {
  image: string.isRequired,
  title: string,
  desc: string,
};
BlogsCardForBlogs.defaultProps = {
  title: 'five advices for dry hair',
  desc:
    'Healthy hair is something that everyone wants. This can be hard to achieve at times, however, since so many of us use styling tools, don’t get haircuts as often as we should, and expose our hair to harmful products.',
};

export default BlogsCardForBlogs;
