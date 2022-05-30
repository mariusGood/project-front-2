import React from 'react';
import propTypes from 'prop-types';
import * as S from './CartItem.style';
import Button from '../Button/Button';

function CartItem({ items }) {
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
        <p>{items.category}</p> <p>{items.price + '$'}</p>
      </S.Div>
      <Button type='submit' color='delete' onClick={() => deleteItem(items.id)}>
        x
      </Button>
    </S.Card>
  );
}

CartItem.propTypes = {
  items: propTypes.oneOf([string, number]),
};

export default CartItem;
