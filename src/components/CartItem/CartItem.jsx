import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as S from './CartItem.style';

function CartItem({ items, reload }) {
  const [value, setValue] = useState('1');

  const deleteItem = async (id) => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_URL}/auth/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      const respInJs = await resp.json();
      reload();
      return respInJs;
    } catch (error) {
      return error;
    }
  };

  return (
    <S.Card>
      <S.Div>
        <h3 key={items.id}>{items.name}</h3>
        <img src={items.image} alt={items.name} />
        <p>{items.price + '$'}</p>
      </S.Div>
      <input
        type='number'
        value={value}
        min='1'
        max='99'
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <i className='fa fa-trash' onClick={() => deleteItem(items.id)}></i>
    </S.Card>
  );
}

CartItem.propTypes = {
  items: propTypes.any,
  reload: propTypes.func,
};

export default CartItem;
