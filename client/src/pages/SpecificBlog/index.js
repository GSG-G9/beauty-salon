import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Axios from 'axios';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

function Blog() {
  const classes = useStyles();
  const [blog, setBlog] = useState({});
  const [, setErrorMsg] = useState('');
  const fakeImage =
    'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg';

  const { blogId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios.get(`api/v1/blog/${blogId}`);
        setBlog(data.data);
      } catch (error) {
        setErrorMsg(error.response.data);
      }
    })();
  }, [blogId]);

  return (
    <Card className={classes.root}>
      <img
        className={classes.image}
        src={blog.image || fakeImage}
        alt="service"
      />

      <div className={classes.right}>
        <Typography className={classes.title} variant="h5" color="primary">
          {blog.title}
        </Typography>
        <Typography className={classes.desc} variant="body2">
          {blog.content}
        </Typography>
      </div>
    </Card>
  );
}

export default Blog;
