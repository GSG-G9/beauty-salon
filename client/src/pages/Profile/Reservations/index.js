import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { Loading } from '../../../component';
import Table from './Table';
import useStyles from './style';

const Reservations = () => {
  const classes = useStyles();

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/v1/booking');
        setLoading(false);
        setReservations(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
    return () => source.cancel('Operation canceled');
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/booking/${id}`);
      setOpen(true);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h2">Reservations</Typography>
      {loading && <Loading />}
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Table reservations={reservations} handelDeleteHouse={handleDelete} />
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Deleted successfully
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Reservations;
