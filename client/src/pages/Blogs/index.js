import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';

import { BlogsCardForBlogs, Header, Footer } from '../../component';
import useStyles from './style';

const Blogs = () => {
  const classes = useStyles();

  const [blogs, setBlogs] = useState([]);

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
          <BlogsCardForBlogs
            className={classes.blog}
            key={blog.id}
            title={blog.name}
            image={blog.image}
            desc={blog.description}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
