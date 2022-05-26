import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import AuthContext from '../../AuthContext';

const links = [
  { id: 1, title: 'Home', to: '/' },
  { id: 2, title: 'Top Games', to: '/' },
  { id: 3, title: 'Categories', to: '/' },
  { id: 4, title: 'Cart', to: '/' },
];

const Header = () => {
  const { logout } = useContext(AuthContext);

  return (
    <S.Header>
      <Navigation links={links} />
      <Button type='button' color='primary' onClick={logout}>
        Logout
      </Button>
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
