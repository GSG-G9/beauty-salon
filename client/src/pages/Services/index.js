import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';

import { Loading, ServiceCard, Header, Footer } from '../../component';
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
      <Header />
      <Typography
        variant="h5"
        component="h3"
        align="center"
        color="primary"
        className={classes.title}
      >
        Our Services
      </Typography>
      <Container className={classes.root}>
        <Typography
          variant="h6"
          component="h3"
          color="primary"
          className={classes.typo}
        >
          Hair Cut
        </Typography>
        <Container className={classes.container}>
          {services ? (
            services.map((service) => {
              const category = service.category === 'Hair cuts';
              return (
                category && <ServiceCard service={service} key={service.id} />
              );
            })
          ) : (
            <Alert severity="info" className={classes.alert}>
              No Hair Cuts services available now
            </Alert>
          )}
        </Container>
        <Divider component="hr" variant="middle" className={classes.divider} />
        <Typography
          variant="h6"
          component="h3"
          color="primary"
          className={classes.typo}
        >
          Nails
        </Typography>
        <Container className={classes.container}>
          {services ? (
            services.map((service) => {
              const category = service.category === 'nails';
              return (
                category && <ServiceCard service={service} key={service.id} />
              );
            })
          ) : (
            <Alert severity="info" className={classes.alert}>
              No Nails services available now
            </Alert>
          )}
        </Container>
        <Divider component="hr" variant="middle" className={classes.divider} />
        <Typography
          variant="h6"
          component="h3"
          color="primary"
          className={classes.typo}
        >
          Skin Care
        </Typography>
        <Container className={classes.container}>
          {services ? (
            services.map((service) => {
              const category = service.category === 'Skin care';
              return (
                category && <ServiceCard service={service} key={service.id} />
              );
            })
          ) : (
            <Alert severity="info" className={classes.alert}>
              No Skin Care services available now
            </Alert>
          )}
        </Container>
        <Divider component="hr" variant="middle" className={classes.divider} />

        <Typography
          variant="h6"
          component="h2"
          color="primary"
          className={classes.typo}
        >
          Make up
        </Typography>
        <Container className={classes.container}>
          {loading && <Loading size={40} />}
          {services ? (
            services.map((service) => {
              const category = service.category === 'Make up';
              return (
                category && <ServiceCard service={service} key={service.id} />
              );
            })
          ) : (
            <Alert severity="info" className={classes.alert}>
              No Make up services available now
            </Alert>
          )}
        </Container>

        {error && <Alert severity="error">{error}</Alert>}
      </Container>
      <Footer />
    </>
  );
};
export default Services;
