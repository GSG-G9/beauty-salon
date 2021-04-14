import React from 'react';
import { PropTypes } from 'prop-types';
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

const InputTime = ({ label, onChange, selectedTime }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardTimePicker
      margin="normal"
      id="time-picker"
      label={label}
      value={selectedTime}
      onChange={onChange}
      KeyboardButtonProps={{
        'aria-label': 'change time',
      }}
    />
  </MuiPickersUtilsProvider>
);
const { string, func } = PropTypes;

InputTime.propTypes = {
  label: string,
  onChange: func.isRequired,
  selectedTime: string.isRequired,
};

InputTime.defaultProps = {
  label: 'Time',
};

export default InputTime;
