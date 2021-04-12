import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userContext } from '../../utils/userProvider';

const AdminRoute = ({ component: Component, ...rest }) => {
  const [role] = useContext(userContext);
  return (
    <Route {...rest}>
      {role === 'admin' ? <Component /> : <Redirect to="/404" />}
    </Route>
  );
};

const { func } = PropTypes;
AdminRoute.propTypes = {
  component: func.isRequired,
};

export default AdminRoute;
