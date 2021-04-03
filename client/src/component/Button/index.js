import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';

const ButtonComponent = ({ variant, color, children, ...rest }) => (
  <>
    <Button variant={variant} color={color} {...rest}>
      {children}
    </Button>
  </>
);
const { string, node } = PropTypes;

ButtonComponent.propTypes = {
  variant: string.isRequired,
  color: string.isRequired,
  children: node.isRequired,
};

export default ButtonComponent;
