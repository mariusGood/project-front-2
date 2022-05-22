import React from 'react';
import PropTypes from 'prop-types';
import * as S from './InputField.style';

const InputField = ({ name, label, type, placeholder }) => {
  return (
    <div className='input-wrapper'>
      <S.Label className='label' htmlFor={name}>
        {label}
      </S.Label>
      <S.Input
        className='input'
        type={type}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'password', 'text']),
};

export default InputField;
