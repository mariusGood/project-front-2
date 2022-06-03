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
    return resp;
  }
  useEffect(() => {
    renderData();
  }, []);

  return (
    <S.List>
      {data &&
        data.map((items) => (
          <CartItem key={items.id} items={items} reload={renderData} />
        ))}
    </S.List>
  );
}

export default CartList;
