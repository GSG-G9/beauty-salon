import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

const InputTime = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    // eslint-disable-next-line no-unused-vars
    const timePicker = date.toString().substr(16, 5);
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

const { string } = PropTypes;

InputTime.propTypes = {
  label: string,
};

InputTime.defaultProps = {
  label: 'Time',
};

export default InputTime;
