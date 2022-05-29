import React from 'react';
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

export default Cart;
