import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import * as S from './CartList.style';
import { getData } from '../../utils/helper';

function CartList() {
  const [data, setData] = useState([]);
  async function renderData() {
    const token = localStorage.getItem('token');
    const resp = await getData('auth/cart ', token);
    setData(resp.data);
  }
  useEffect(() => {
    renderData();
  }, [data]);
  return (
    <S.List>
      {data && data.map((items) => <CartItem key={items.id} items={items} />)}
    </S.List>
  );
}

export default CartList;
