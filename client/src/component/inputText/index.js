import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import useStyles from './style';

function InputField({ variant, onChange, ...rest }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      variant={variant}
      type="text"
      onChange={onChange}
      {...rest}
    />
  );
}

InputField.propTypes = {
  variant: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
