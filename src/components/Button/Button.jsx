import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, type, onClick, color }) => {
  return (
    <S.Button type={type} onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
