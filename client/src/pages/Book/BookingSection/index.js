import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button, Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { InputDate, SelectInput } from '../../../component';
import { userContext } from '../../../utils';
import useStyles from './style';

const BookingSection = () => {
  const classes = useStyles();

  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [selectedTime, setSelectedTime] = useState('');
  const [convertedDate, setConvertedDate] = useState(new Date());
  const [categoryValue, setCategoryValue] = useState('');
  const [services, setServices] = useState([]);
  const [freeTimes, setFreeTimes] = useState([]);
  const [, , userData] = useContext(userContext);
  const [isClicked, setIsClicked] = useState(false);
  const [chosenTimeErrorMsg, setChosenTimeErrorMsg] = useState('');
  const [openTimeAlert, setOpenTimeAlert] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  const [openBookingAlert, setOpenBookingAlert] = useState(false);
  const [categoryErrorMsg, setCategoryErrorMsg] = useState('');
  const [openCategoryAlert, setOpenCategoryAlert] = useState(false);
  const [serviceErrorMsg, setServiceErrorMsg] = useState('');
  const [openServiceAlert, setOpenServiceAlert] = useState(false);
  const [emptyTimeFieldErrorMsg, setEmptyTimeFieldErrorMsg] = useState('');
  const [openEmptyTimeAlert, setOpenEmptyTimeAlert] = useState(false);

  const userId = userData.id;

  const handleChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedServiceId(event.target.value);
  };

  const handleDateChange = (date) => {
    const datePicker = date.toISOString().substr(0, 10);
    setChosenTimeErrorMsg('');
    setSelectedDate(datePicker);
    setConvertedDate(date);
  };

  const handleCloseEmptyTimeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    setOpenEmptyTimeAlert(false);
  };
  const handleCloseCategoryAlert = (event, reason) => {
    if (reason === 'clickaway') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    setOpenCategoryAlert(false);
  };

  const handleCloseServiceAlert = (event, reason) => {
    if (reason === 'clickaway') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    setOpenServiceAlert(false);
  };

  const handleCloseBookingMessage = (event, reason) => {
    if (reason === 'clickaway') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    setOpenBookingAlert(false);
  };

  const handleCloseTimeErrAlert = (event, reason) => {
    if (reason === 'clickaway') {
      // eslint-disable-next-line no-useless-return
      return;
    }

    setOpenTimeAlert(false);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handelSentData = () => {
    if (!categoryValue) {
      setCategoryErrorMsg('please select category');
      setOpenCategoryAlert(true);
    } else if (!selectedServiceId) {
      setServiceErrorMsg('please select service');
      setOpenServiceAlert(true);
    } else if (!selectedTime) {
      setEmptyTimeFieldErrorMsg('please select time');
      setOpenEmptyTimeAlert(true);
    } else {
      setIsClicked(true);
      setCategoryErrorMsg('');
      setServiceErrorMsg('');
      setEmptyTimeFieldErrorMsg('');
    }
  };

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get('/api/v1/services', {
          CancelToken: source.token,
        });
        const servicesFilteredByCategory = data
          .filter((el) => el.category === categoryValue)
          .map(({ name, id }) => ({ name, val: id.toString() }));

        setServices(servicesFilteredByCategory);
      } catch (err) {
        setServiceErrorMsg(err);
      }
    })();
    return () => source.cancel();
  }, [categoryValue]);

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    if (isClicked) {
      (async () => {
        try {
          const {
            data: { message },
          } = await axios.post(
            '/api/v1/booking',
            {
              userId,
              serviceId: Number(selectedServiceId),
              appointmentDate: convertedDate.toISOString().substr(0, 10),
              appointmentTime: selectedTime,
            },
            { CancelToken: source.token }
          );
          setBookingMessage(message);
          setChosenTimeErrorMsg('');
          setOpenBookingAlert(true);
          setIsClicked(false);
        } catch (err) {
          setBookingMessage('');
          setChosenTimeErrorMsg(
            'chosen time in not available, select another time'
          );
          setOpenTimeAlert(true);
          setIsClicked(false);
        }
      })();
    }

    return () => source.cancel();
  }, [selectedServiceId, convertedDate, selectedTime, userId, isClicked]);

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/v1/bookings/${selectedDate}`, {
          CancelToken: source.token,
        });
        const busyTimes = data.map((el) => el.appointment_time);

        const workTimes = [
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
        ];

        const newArr = busyTimes.concat(workTimes);
        const freeTimesInCertainDate = newArr.filter(
          (el) => newArr.indexOf(el) === newArr.lastIndexOf(el)
        );
        setFreeTimes(
          freeTimesInCertainDate.map((el) => ({
            name: el,
            val: el,
          }))
        );
      } catch (err) {
        setChosenTimeErrorMsg('something went wrong, try again');
      }
    })();
    return () => source.cancel();
  }, [freeTimes.length, selectedDate]);

  return (
    <Grid container className={classes.bookingSectionContainer}>
      <div className={classes.inputDate}>
        <InputDate onChange={handleDateChange} selectedDate={selectedDate} />
      </div>
      {freeTimes && (
        <SelectInput
          handleChange={handleTimeChange}
          value={selectedTime}
          label="Select Time"
          menu={freeTimes}
        />
      )}
      {emptyTimeFieldErrorMsg && (
        <Snackbar
          open={openEmptyTimeAlert}
          autoHideDuration={3000}
          onClose={handleCloseEmptyTimeAlert}
        >
          <Alert severity="warning" onClose={handleCloseEmptyTimeAlert}>
            {emptyTimeFieldErrorMsg}
          </Alert>
        </Snackbar>
      )}
      <SelectInput
        handleChange={handleChange}
        value={categoryValue}
        label="Select Category"
        menu={[
          { name: 'Hair', val: 'Hair cuts' },
          { name: 'Makeup', val: 'Make up' },
          { name: 'Nails', val: 'nails' },
          { name: 'Skin Care', val: 'Skin care' },
        ]}
      />
      {categoryErrorMsg && (
        <Snackbar
          open={openCategoryAlert}
          autoHideDuration={3000}
          onClose={handleCloseCategoryAlert}
        >
          <Alert severity="warning" onClose={handleCloseCategoryAlert}>
            {categoryErrorMsg}
          </Alert>
        </Snackbar>
      )}
      {services && (
        <SelectInput
          handleChange={handleServiceChange}
          value={selectedServiceId}
          label="Select Service"
          menu={services}
        />
      )}
      {serviceErrorMsg && (
        <Snackbar
          open={openServiceAlert}
          autoHideDuration={3000}
          onClose={handleCloseServiceAlert}
        >
          <Alert severity="warning" onClose={handleCloseServiceAlert}>
            {serviceErrorMsg}
          </Alert>
        </Snackbar>
      )}
      <Button
        className={classes.submitBtn}
        variant="contained"
        onClick={handelSentData}
      >
        SEND
      </Button>
      {bookingMessage && (
        <Snackbar
          open={openBookingAlert}
          autoHideDuration={3000}
          onClose={handleCloseBookingMessage}
        >
          <Alert severity="success" onClose={handleCloseBookingMessage}>
            {bookingMessage}
          </Alert>
        </Snackbar>
      )}
      {chosenTimeErrorMsg && (
        <Snackbar
          open={openTimeAlert}
          autoHideDuration={3000}
          onClose={handleCloseTimeErrAlert}
        >
          <Alert severity="error" onClose={handleCloseTimeErrAlert}>
            {chosenTimeErrorMsg}
          </Alert>
        </Snackbar>
      )}
    </Grid>
  );
};

export default BookingSection;
