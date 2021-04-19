import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const userContext = createContext();

function UserProvider({ children }) {
  const [role, setRole] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get('/api/v1/isAuth', {
          cancelToken: source.token,
        });

        setUserData(data);
        return data.role === 'admin' ? setRole('admin') : setRole('user');
      } catch (err) {
        return setRole('guest');
      }
    })();

    return () => source.cancel('operation canceled');
  }, [role]);
  return (
    <userContext.Provider value={[role, setRole, userData]}>
      {children}
    </userContext.Provider>
  );
}

const { node } = PropTypes;

UserProvider.propTypes = {
  children: node.isRequired,
};

export { userContext, UserProvider };
