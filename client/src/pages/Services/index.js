import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';

import { Loading, ServiceCard } from '../../component';

const Services = () => {
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
    <Container>
      <Typography variant="subtitle1" component="h3">
        Our Services
      </Typography>
      <Typography variant="subtitle1" component="h3">
        Hair Cut
      </Typography>
      {services
        ? services.map((service) => {
            const category = service.category === 'Hair cuts';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        : 'No Hair cut services available now '}
      <Divider />
      <Typography variant="subtitle1" component="h3">
        Nails
      </Typography>
      {services
        ? services.map((service) => {
            const category = service.category === 'nails';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        : 'No nail services available now '}
      <Divider />
      <Typography variant="subtitle1" component="h3">
        Skin Care
      </Typography>
      {services
        ? services.map((service) => {
            const category = service.category === 'Skin care';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        : 'No Skin care services available now '}
      <Divider />
      <Typography variant="subtitle1" component="h3">
        Make up
      </Typography>
      {loading && <Loading size={40} />}
      {services
        ? services.map((service) => {
            const category = service.category === 'Make up';
            return (
              category && <ServiceCard service={service} key={service.id} />
            );
          })
        : 'No Make up services available now '}

      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
};
export default Services;
