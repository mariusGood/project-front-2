import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';
import { getData } from '../../utils/helper';

const Navigation = ({ links }) => {
  const [data, setData] = useState();

  const handleClick = async () => {
    const token = localStorage.getItem('token');
    const resp = await getData('auth/categories', token);
    return data ? setData() : setData(resp);
  };

  return (
    <S.StyledNav>
      {links &&
        links.map((e) => (
          <li key={e.id}>
            {e.title === 'Categories' ? (
              <S.StyledLink to={e.to} onClick={handleClick}>
                {e.title}
              </S.StyledLink>
            ) : (
              <S.StyledLink to={e.to}>{e.title}</S.StyledLink>
            )}
          </li>
        ))}
      <S.DropNav>
        {data &&
          data.data.map((el) => (
            <S.DropList key={el.id}>{el.category}</S.DropList>
          ))}
      </S.DropNav>
    </S.StyledNav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
