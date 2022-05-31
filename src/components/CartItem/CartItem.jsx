import React from 'react';
import propTypes from 'prop-types';
import * as S from './CartItem.style';
import Button from '../Button/Button';

function CartItem({ items, reload }) {
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
        <p>{items.category}</p> <p>{items.price + '$'}</p>
      </S.Div>
      <div>
        <Button
          type='submit'
          color='primary'
          onClick={() => deleteItem(items.id)}
        >
          buy
        </Button>
        <Button
          type='submit'
          color='delete'
          onClick={() => deleteItem(items.id)}
        >
          x
        </Button>
      </div>
    </S.Card>
  );
}

CartItem.propTypes = {
  items: propTypes.any,
  reload: propTypes.func,
};

export default CartItem;
