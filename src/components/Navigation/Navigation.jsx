import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

const Navigation = ({ links, getData }) => {
  const [data, setData] = useState();

  useEffect(() => {}, [data]);

  const handleClick = async () => {
    const resp = await getData('products');
    data ? setData() : setData(resp);
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
            <S.DropList key={el.category}>{el.category}</S.DropList>
          ))}
      </S.DropNav>
    </S.StyledNav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
  getData: PropTypes.func,
};

export default Navigation;
