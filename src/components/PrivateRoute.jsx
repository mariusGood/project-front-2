import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import PropTypes from 'prop-types';

function PrivateRoute({ children, ...rest }) {
  const { isLogedIn } = useContext(AuthContext);
  return (
    <div {...rest} exact>
      {isLogedIn ? children : <Navigate to='/login' />}
    </div>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
