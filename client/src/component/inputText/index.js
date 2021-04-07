import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import useStyles from './style';

function InputField({ onChange, ...rest }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      type="text"
      onChange={onChange}
      variant="outlined"
      {...rest}
    />
  );
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputField;
