import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userContext } from '../../utils/userProvider';

const GuestRoute = ({ component: Component, ...rest }) => {
  const [role] = useContext(userContext);
  return (
    <Route {...rest}>
      {role === 'guest' ? <Component /> : <Redirect to="/404" />}
    </Route>
  );
};

const { func } = PropTypes;
GuestRoute.propTypes = {
  component: func.isRequired,
};

export default GuestRoute;
