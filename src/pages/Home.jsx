import React, { useContext } from 'react';
// import propTypes from 'prop-types';
import { Button } from '../components/Button/Button.style';
import AuthContext from '../AuthContext';

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Button type='button' color='primary' onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
