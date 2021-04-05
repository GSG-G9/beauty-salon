import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import useStyles from './style';

const ServiceCardForHomePage = ({ imageSrc, serviceName }) => {
  const classes = useStyles();

  return (
    <CardMedia className={classes.media} image={imageSrc} title="service">
      <Link className={classes.service_name} to="/services">
        {serviceName}
      </Link>
    </CardMedia>
  );
};

const { string } = PropTypes;
ServiceCardForHomePage.propTypes = {
  imageSrc: string.isRequired,
  serviceName: string.isRequired,
};

export default ServiceCardForHomePage;
