import React from 'react';
import * as S from '../Cart/Cart.style';
import CartList from '../../components/CartList/CartList';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Cart = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    return navigate('/');
  };

  return (
    <S.StyledPage>
      <>
        <Button type='button' color='primary' onClick={handleClick}>
          Go back
        </Button>
        <CartList />
      </>
    </S.StyledPage>
  );
};

export default Cart;
