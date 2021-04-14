import React from 'react';
import { PropTypes } from 'prop-types';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const InputDate = ({ label, onChange, selectedDate }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="yyyy/MM/dd"
      margin="normal"
      id="date-picker-inline"
      label={label}
      value={selectedDate}
      onChange={onChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  </MuiPickersUtilsProvider>
);
const { string, func } = PropTypes;

InputDate.propTypes = {
  label: string,
  onChange: func.isRequired,
  selectedDate: string.isRequired,
};

InputDate.defaultProps = {
  label: 'Date',
};

export default InputDate;
