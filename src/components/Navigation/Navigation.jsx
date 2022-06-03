import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

const Navigation = ({ links }) => {
  const [data, setData] = useState(false);

  const handleClick = () => {
    data !== false ? setData(false) : setData(true);
  };

  const categories = [
    { id: 1, name: 'Multi-player' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Survival' },
    { id: 4, name: 'Sport' },
    { id: 5, name: 'RPG' },
  ];

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
          categories.map((el) => (
            <S.DropList key={el.id}>{el.name}</S.DropList>
          ))}
      </S.DropNav>
    </S.StyledNav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
