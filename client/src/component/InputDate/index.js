import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const InputDate = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    const datePicker = date.toISOString().substr(0, 10);
    setSelectedDate(datePicker);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy/MM/dd"
        margin="normal"
        id="date-picker-inline"
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

const { string } = PropTypes;

InputDate.propTypes = {
  label: string,
};

InputDate.defaultProps = {
  label: 'Date',
};

export default InputDate;
