import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Loading } from '../../../component';
import Table from './Table';
import useStyles from './style';

const Reservations = () => {
  const classes = useStyles();

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await axios.get('/api/v1/booking');
        setLoading(false);
        setReservations(data);
        if (data.length === 0) {
          setError(`You don't have any appointments!`);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
    return () => source.cancel('Operation canceled');
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      setRefresh(false);
      await axios.delete(`/api/v1/booking/${id}`);
      setRefresh(true);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h2">Reservations</Typography>
      {loading && <Loading />}
      <Table reservations={reservations} handelDelete={handleDelete} />
      {error && <h3>{error}</h3>}
    </div>
  );
};
export default Reservations;
