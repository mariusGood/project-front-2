import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

const Navigation = ({ links, find }) => {
  const [data, setData] = useState(false);
  const [category, setCategory] = useState('');

  const handleClick = () => {
    data !== false ? setData(false) : setData(true);
  };

  const categories = [
    { id: 1, name: 'Multi-player' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Survival' },
    { id: 4, name: 'Sport' },
    { id: 5, name: 'RPG' },
    { id: 6, name: 'All' },
  ];
  find(category);
  return (
    <S.StyledNav>
      {links.map((el) => (
        <li key={el.id}>
          {el.title === 'Categories' ? (
            <S.StyledLink to={el.to} onClick={handleClick}>
              {el.title}
            </S.StyledLink>
          ) : (
            <S.StyledLink to={el.to}>{el.title}</S.StyledLink>
          )}
        </li>
      ))}
      <S.DropNav>
        {data &&
          categories.map((el) => (
            <S.DropList
              onClick={(e) => setCategory(e.currentTarget.innerText)}
              key={el.id}
            >
              {el.name}
            </S.DropList>
          ))}
      </S.DropNav>
    </S.StyledNav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
  find: PropTypes.any,
};

export default Navigation;
