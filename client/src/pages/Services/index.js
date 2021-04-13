import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';

import { Loading, ServiceCard } from '../../component';
import useStyles from './style';

const Services = () => {
  const classes = useStyles();
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let isCurrent = true;
    (async () => {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await Axios.get('/api/v1/services');
        if (isCurrent) {
          setLoading(false);
          setServices(data);
        }
      } catch (err) {
        setError(err.response.data.message);
        setLoading(false);
      }
    })();
    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <>
      <Typography
        variant="subtitle1"
        component="h3"
        align="center"
        color="primary"
      >
        Our Services
      </Typography>
      <Container className={classes.container}>
        <Typography variant="subtitle1" component="h3" color="primary">
          Hair Cut
        </Typography>
        {services ? (
          services.map((service) => {
            const category = service.category === 'Hair cuts';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        ) : (
          <Alert severity="info"> No Hair Cuts services available now </Alert>
        )}
        <Divider component="hr" variant="middle" className={classes.divider} />
        <Typography variant="subtitle1" component="h3" color="primary">
          Nails
        </Typography>
        {services ? (
          services.map((service) => {
            const category = service.category === 'nails';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        ) : (
          <Alert severity="info"> No Nails services available now </Alert>
        )}
        <Divider component="hr" variant="middle" className={classes.divider} />
        <Typography variant="subtitle1" component="h3" color="primary">
          Skin Care
        </Typography>
        {services ? (
          services.map((service) => {
            const category = service.category === 'Skin care';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        ) : (
          <Alert severity="info"> No Skin Care services available now </Alert>
        )}
        <Divider component="hr" variant="middle" className={classes.divider} />
        <Typography variant="subtitle1" component="h3" color="primary">
          Make up
        </Typography>
        {loading && <Loading size={40} />}
        {services ? (
          services.map((service) => {
            const category = service.category === 'Make up';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        ) : (
          <Alert severity="info"> No Make up services available now </Alert>
        )}

        {error && <Alert severity="error">{error}</Alert>}
      </Container>
    </>
  );
};
export default Services;
