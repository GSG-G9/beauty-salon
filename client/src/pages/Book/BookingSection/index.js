import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
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
  const [chosenTimeErrorMsg, setChosenTimeErrorMsg] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  const [categoryErrorMsg, setCategoryErrorMsg] = useState('');
  const [serviceErrorMsg, setServiceErrorMsg] = useState('');
  const [emptyTimeFieldErrorMsg, setEmptyTimeFieldErrorMsg] = useState('');

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

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  const handelSentData = () => {
    if (!categoryValue) {
      setCategoryErrorMsg('please select category');
    } else if (!selectedServiceId) {
      setServiceErrorMsg('please select service');
    } else if (!selectedTime) {
      setEmptyTimeFieldErrorMsg('please select time');
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
          setIsClicked(false);
        } catch (err) {
          setBookingMessage('');
          setChosenTimeErrorMsg(
            'chosen time in not available, select another time'
          );
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
        <Typography className={classes.errorMessage} color="secondary">
          {emptyTimeFieldErrorMsg}
        </Typography>
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
        <Typography className={classes.errorMessage}>
          {categoryErrorMsg}
        </Typography>
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
        <Typography className={classes.errorMessage}>
          {serviceErrorMsg}
        </Typography>
      )}
      <Button
        className={classes.submitBtn}
        variant="contained"
        onClick={handelSentData}
      >
        SEND
      </Button>
      {chosenTimeErrorMsg && (
        <Typography className={classes.errorMessage}>
          {chosenTimeErrorMsg}
        </Typography>
      )}
      {bookingMessage && (
        <Redirect
          to={{
            pathname: '/profile',
            state: { val: 1 },
          }}
        />
      )}
    </Grid>
  );
};

export default BookingSection;
