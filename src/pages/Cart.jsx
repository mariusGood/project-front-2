import React from 'react';
import * as S from './Pages.style';
import Header from '../components/Header/Header';
import CartList from '../components/CartList/CartList';

const Cart = () => {
  return (
    <S.StyledPage>
      <Header />
      <CartList />
    </S.StyledPage>
  );
};

export default Cart;
