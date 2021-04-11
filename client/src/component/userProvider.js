import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const userContext = createContext();

function UserProvider({ children }) {
  const [isAuth, setIsAuth] = useState(null);
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
        return setIsAuth(true);
      } catch (err) {
        return setIsAuth(false);
      }
    })();

    return () => source.cancel('operation canceled');
  }, []);
  return (
    <userContext.Provider value={[isAuth, userData]}>
      {children}
    </userContext.Provider>
  );
}

const { node } = PropTypes;

UserProvider.propTypes = {
  children: node.isRequired,
};

export default UserProvider;
