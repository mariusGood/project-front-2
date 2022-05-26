import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import PropTypes from 'prop-types';

function PrivateRoute({ children, ...rest }) {
  const { isLogedIn, login } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      login();
    }
  });

  return <div {...rest}>{isLogedIn ? children : <Navigate to='/login' />}</div>;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
