import React, { useContext } from 'react';

import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userContext } from '../../utils/userProvider';

const UserRoute = ({ component: Component, ...rest }) => {
  const [role] = useContext(userContext);
  return (
    <Route {...rest}>
      {role && (role === 'user' ? <Component /> : <Redirect to="/signin" />)}
    </Route>
  );
};
const { func } = PropTypes;

UserRoute.propTypes = {
  component: func.isRequired,
};

export default UserRoute;
