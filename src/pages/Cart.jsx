import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './pages.style';
import Header from '../components/Header/Header';
import { getData } from '../utils/helper';

const Cart = () => {
  return (
    <S.StyledPage>
      <Header getData={getData} />
    </S.StyledPage>
  );
};

// Cart.propTypes = {
//   getCart: PropTypes.func,
// };

export default Cart;
