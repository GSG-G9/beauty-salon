import React, { useContext } from 'react';

import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userContext } from '../../utils/userProvider';

const UserRoute = ({ component: Component, ...rest }) => {
  const [role] = useContext(userContext);

  return <Route {...rest}>{role === 'user' && <Component />}</Route>;
};
const { func } = PropTypes;

UserRoute.propTypes = {
  component: func.isRequired,
};

export default UserRoute;
