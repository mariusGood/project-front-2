import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

const Navigation = ({ links }) => {
  return (
    <S.StyledNav>
      {links &&
        links.map((e) => (
          <S.StyledLink key={e.id} to={e.to}>
            {e.title}
          </S.StyledLink>
        ))}
    </S.StyledNav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
