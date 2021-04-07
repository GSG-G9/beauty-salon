import React, { useState } from 'react';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { FormHelperText, MenuItem } from '@material-ui/core';

import useStyles from './style';

function SelectInput() {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <FormControl
        className={classes.formControl}
        variant="outlined"
        classes={{ form: classes.form }}
        // focused
      >
        <InputLabel>choose</InputLabel>
        <Select
          labelId="SelectLabel"
          id="select"
          value={value}
          onChange={() => handleChange()}
          className={classes.root}
        >
          <MenuItem value="Hi">Hi</MenuItem>
          <MenuItem value="Hello">Hello</MenuItem>
          <MenuItem value="Hey">Hey</MenuItem>
          <MenuItem value="sup">sup</MenuItem>
          <MenuItem value="yoo yoo">Yoo Yoo</MenuItem>
        </Select>
        <FormHelperText>Select Greeting style</FormHelperText>
      </FormControl>
    </div>
  );
}

export default SelectInput;
