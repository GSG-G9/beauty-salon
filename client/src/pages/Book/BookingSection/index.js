import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { InputDate, InputTime, SelectInput } from '../../../component';
import { userContext } from '../../../utils';

const BookingSection = () => {
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [time, setConvertedTime] = useState(new Date());
  const [convertedDate, setConvertedDate] = useState(new Date());
  const [catagoryValue, setCatagoryValue] = useState('');
  const [services, setServices] = useState([]);
  const [userData] = useContext(userContext);
  const [bookingMessage, setBookingMessage] = useState('');

  console.log(bookingMessage);

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
          .map((el) => ({ name: el.name, val: el.id.toString() }));

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

    (async () => {
      try {
        const {
          data: { message },
        } = await axios.post(
          '/api/v1/booking',
          {
            userId: Number(userData.id),
            serviceId: Number(selectedServiceId),
            appointmentDate: convertedDate.toISOString().substr(0, 10),
            appointmentTime: time,
          },
          { CancelToken: source.token }
        );
        setBookingMessage(message);
      } catch (err) {
        setBookingMessage('chosen time in not available');
        console.log(err);
      }
    })();
    return () => source.cancel();
  }, [convertedDate, userData.id, time, selectedServiceId]);

  return (
    <>
      <InputDate onChange={handleDateChange} selectedDate={selectedDate} />
      <InputTime onChange={handleTimeChange} selectedTime={selectedTime} />

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
      {services && (
        <SelectInput
          handleChange={handleServiceChange}
          value={selectedServiceId}
          label="Select Service"
          menu={services}
        />
      )}
    </>
  );
};

export default BookingSection;
