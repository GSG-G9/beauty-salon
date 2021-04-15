import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { Button, Grid } from '@material-ui/core';

import { InputDate, InputTime, SelectInput } from '../../../component';
import { userContext } from '../../../utils';
import useStyles from './style';

const BookingSection = () => {
  const classes = useStyles();

  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [time, setConvertedTime] = useState(new Date());
  const [convertedDate, setConvertedDate] = useState(new Date());
  const [catagoryValue, setCatagoryValue] = useState('');
  const [services, setServices] = useState([]);
  const [role, userData] = useContext(userContext);
  const [dateErrorMsg, setDateErrorMsg] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  const [catagoryErrorMsg, setCatagoryErrorMsg] = useState('');
  const [serviceErrorMsg, setServiceErrorMsg] = useState('');

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

  const handleTimeChange = (date) => {
    // eslint-disable-next-line no-unused-vars
    const timePicker = date.toString().substr(16, 5);
    setSelectedTime(date);
    setConvertedTime(timePicker);
  };
  const handelSentData = () => {
    if (!catagoryValue) {
      setCatagoryErrorMsg('please select catagory');
    } else if (!selectedServiceId) {
      setServiceErrorMsg('please select service');
    } else {
      setIsClicked(true);
      setCatagoryErrorMsg('');
      setServiceErrorMsg('');
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
        setServices(data);
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
              appointmentTime: time,
            },
            { CancelToken: source.token }
          );
          console.log(message);
          setBookingMessage(message);
          setDateErrorMsg('');
          setIsClicked(false);
        } catch (err) {
          setBookingMessage('');
          setDateErrorMsg('chosen date in not available, select another date');
          setIsClicked(false);
        }
      })();
    }

    return () => source.cancel();
  }, [selectedServiceId, convertedDate, time, userId, isClicked]);

  return (
    <>
      <Grid container className={classes.bookingSectionContainer}>
        <Grid container className={classes.dateTimeContainer}>
          <InputDate onChange={handleDateChange} selectedDate={selectedDate} />
          {dateErrorMsg && <div> {dateErrorMsg}</div>}
          <InputTime onChange={handleTimeChange} selectedTime={selectedTime} />
        </Grid>
        <Grid container className={classes.selectInputsContainer}>
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
          {catagoryErrorMsg && <div>{catagoryErrorMsg}</div>}

          {services && (
            <SelectInput
              handleChange={handleServiceChange}
              value={selectedServiceId}
              label="Select Service"
              menu={services}
            />
          )}
          {serviceErrorMsg && <div>{serviceErrorMsg}</div>}
        </Grid>
      </Grid>
      <Button className={classes.sendBtn} onClick={handelSentData}>
        SEND
      </Button>
      {bookingMessage && <div>{bookingMessage}</div>}
    </>
  );
};

export default BookingSection;
