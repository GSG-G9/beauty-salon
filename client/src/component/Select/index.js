import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import useStyles from './style';

const SelectInput = ({ label, textHelper, menu }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
  label: PropTypes.string.isRequired,
  textHelper: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      val: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectInput;
