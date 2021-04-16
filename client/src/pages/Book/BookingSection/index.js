import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button, Grid, Typography } from '@material-ui/core';
import { InputDate, SelectInput } from '../../../component';
import { userContext } from '../../../utils';
import useStyles from './style';

const BookingSection = () => {
  const classes = useStyles();

  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [convertedDate, setConvertedDate] = useState(new Date());
  const [catagoryValue, setCatagoryValue] = useState('');
  const [services, setServices] = useState([]);
  const [freeTimes, setFreeTimes] = useState([]);
  const [role, userData] = useContext(userContext);
  const [chosenTimeErrorMsg, setChosenTimeErrorMsg] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  const [catagoryErrorMsg, setCatagoryErrorMsg] = useState('');
  const [serviceErrorMsg, setServiceErrorMsg] = useState('');
  const [emptyTimeFieldErrorMsg, setEmptyTimeFieldErrorMsg] = useState('');

  const userId = userData.id;
  // eslint-disable-next-line no-console
  console.log(role);

  const handleChange = (event) => {
    setCatagoryValue(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedServiceId(event.target.value);
  };

  const handleDateChange = (date) => {
    const datePicker = date.toISOString().substr(0, 10);
    setSelectedDate(datePicker);
    setConvertedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  const handelSentData = () => {
    if (!catagoryValue) {
      setCatagoryErrorMsg('please select catagory');
    } else if (!selectedServiceId) {
      setServiceErrorMsg('please select service');
    } else if (!selectedTime) {
      setEmptyTimeFieldErrorMsg('please select time');
    } else {
      setIsClicked(true);
      setCatagoryErrorMsg('');
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
        const servicesFilteredByCatagory = data
          .filter((el) => el.category === catagoryValue)
          .map(({ name, id }) => ({ name, val: id.toString() }));

        setServices(servicesFilteredByCatagory);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
    return () => source.cancel();
  }, [catagoryValue]);

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
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
    return () => source.cancel();
  }, [selectedDate]);

  return (
    <Grid container className={classes.bookingSectionContainer}>
      <InputDate onChange={handleDateChange} selectedDate={selectedDate} />
      {freeTimes && (
        <SelectInput
          handleChange={handleTimeChange}
          value={selectedTime}
          label="Select Time"
          menu={freeTimes}
        />
      )}
      {emptyTimeFieldErrorMsg && (
        <Typography className={classes.errorMessage}>
          {emptyTimeFieldErrorMsg}
        </Typography>
      )}

      <SelectInput
        handleChange={handleChange}
        value={catagoryValue}
        label="Select Catagory"
        menu={[
          { name: 'Hair', val: 'Hair cuts' },
          { name: 'Makeup', val: 'Make up' },
          { name: 'Nails', val: 'nails' },
          { name: 'Skin Care', val: 'Skin care' },
        ]}
      />
      {catagoryErrorMsg && (
        <Typography className={classes.errorMessage}>
          {catagoryErrorMsg}
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

      <Button className={classes.submitBtn} onClick={handelSentData}>
        SEND
      </Button>
      {bookingMessage && (
        <Typography className={classes.successfulMessage}>
          {bookingMessage}
        </Typography>
      )}
      {chosenTimeErrorMsg && (
        <Typography className={classes.errorMessage}>
          {chosenTimeErrorMsg}
        </Typography>
      )}
    </Grid>
  );
};

export default BookingSection;
