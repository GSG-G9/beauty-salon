import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userContext } from '../../utils/userProvider';
import { HeaderForAdmin } from '../index';

const AdminRoute = ({ component: Component, ...rest }) => {
  const [role] = useContext(userContext);
  return (
    <>
      <HeaderForAdmin />
      <Route {...rest}>
        {role ? (
          role === 'admin' ? (
            <Component />
          ) : (
            <Redirect to="/404" />
          )
        ) : null}
      </Route>
    </>
  );
};

const { func } = PropTypes;
AdminRoute.propTypes = {
  component: func.isRequired,
};

export default AdminRoute;
