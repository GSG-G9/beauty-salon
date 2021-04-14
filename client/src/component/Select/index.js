import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { string, shape, arrayOf, func } from 'prop-types';

import useStyles from './style';

const SelectInput = ({ label, textHelper, menu, handleChange, value }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select value={value} onChange={handleChange} label={label}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menu.map(({ name, val }) => (
            <MenuItem key={name} value={val}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{textHelper}</FormHelperText>
      </FormControl>
    </div>
  );
};

SelectInput.propTypes = {
  label: string,
  textHelper: string,
  menu: arrayOf(
    shape({
      name: string,
      val: string,
    })
  ),
  handleChange: func.isRequired,
  value: string.isRequired,
};
SelectInput.defaultProps = {
  textHelper: '',
  label: 'label',
  menu: [
    { name: 'name1', val: 'val1' },
    { name: 'name2', val: 'val2' },
    { name: 'name3', val: 'val3' },
  ],
};

export default SelectInput;
