import React from 'react';
import * as S from '../Cart/Cart.style';
import Header from '../../components/Header/Header';
import CartList from '../../components/CardList/CardList';

const Cart = () => {
  return (
    <S.StyledPage>
      <Header />
      <CartList />
    </S.StyledPage>
  );
};

export default Cart;
