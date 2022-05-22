import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

const Container = ({ children, title, color }) => {
  return (
    <S.Container color={color}>
      <h2>{title}</h2>
      {children}
    </S.Container>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Container;
