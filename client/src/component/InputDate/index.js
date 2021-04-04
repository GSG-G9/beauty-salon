import React from 'react';
import { PropTypes } from 'prop-types';
import { TextField } from '@material-ui/core';
import useStyles from './style';

const InputDate = ({ label, type, onChange, ...rest }) => {
  const classes = useStyles();
  return (
    <TextField
      onChange={onChange}
      label={label}
      type={type}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
};
const { string, node, func } = PropTypes;

InputDate.propTypes = {
  type: string.isRequired,
  label: node.isRequired,
  onChange: func,
};

InputDate.defaultProps = {
  onChange: (e) => e.target.value,
};
export default InputDate;
