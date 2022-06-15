import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import AuthContext from '../../AuthContext';

const links = [
  { id: 1, title: 'Home', to: '/' },
  { id: 2, title: 'Categories', to: '' },
  { id: 3, title: 'Cart', to: '/auth/cart' },
];

const Header = ({ find }) => {
  const [block, setBlock] = useState(false);

  const handleClick = () => {
    block === false ? setBlock(true) : setBlock(false);
  };

  const { logout } = useContext(AuthContext);

  return (
    <S.Header>
      <Navigation links={links} find={find} />
      <Button className='logout' type='button' color='primary' onClick={logout}>
        Logout
      </Button>
      {block && (
        <S.MenuDiv className='myLinks'>
          {links.map((e) => (
            <S.MenuLink key={e.id} to={e.to}>
              {e.title}
            </S.MenuLink>
          ))}
          <S.Button type='button' onClick={logout}>
            logout
          </S.Button>
        </S.MenuDiv>
      )}
      <S.Menu className='menu' onClick={handleClick}>
        <i className='fa fa-bars'></i>
      </S.Menu>
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.any,
  find: PropTypes.func,
};

export default Header;
