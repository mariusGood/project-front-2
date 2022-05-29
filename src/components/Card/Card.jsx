import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as S from './Card.style';
import Button from '../Button/Button';

function Card({ items }) {
  const [loading, setloading] = useState(false);

  if (!items) {
    setloading(true);
  }

  return (
    <S.Card>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3 key={items.id}>{items.name}</h3>
          <img src={items.img} alt={items.name} />
          <p>{items.category}</p>
          <p>{items.price + '$'}</p>
          <Button type='button' color='primary'>
            buy
          </Button>
        </>
      )}
    </S.Card>
  );
}

Card.propTypes = {
  items: propTypes.any,
};

export default Card;
