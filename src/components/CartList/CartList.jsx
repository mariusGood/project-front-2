import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import * as S from './CartList.style';
import { getData } from '../../utils/helper';

function CartList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function renderData() {
    setLoading(true);
    const token = localStorage.getItem('token');
    const resp = await getData('auth/cart ', token);
    setLoading(false);
    setData(resp.data);
    return resp;
  }
  useEffect(() => {
    renderData();
  }, []);

  return (
    <S.List>
      {data.length > 0 ? (
        loading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((items) => (
            <CartItem key={items.id} items={items} reload={renderData} />
          ))
        )
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </S.List>
  );
}

export default CartList;
