import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { BlogsCard, Header, Footer } from '../../component';
import useStyles from './style';

const Blogs = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [blogs, setBlogs] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const fetchBlogs = async () => {
    const { data } = await Axios.get('api/v1/blog');
    setBlogs(data.data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Our Beauty Salon Blog
        </Typography>
        {blogs.map((blog) => (
          <BlogsCard
            className={classes.blog}
            key={blog.id}
            title={blog.name}
            image={blog.image}
            desc={
              !isMobile
                ? `${blog.description.split(' ').slice(0, 50).join(' ')} . . .`
                : `${blog.description.split(' ').slice(0, 30).join(' ')} . . .`
            }
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
