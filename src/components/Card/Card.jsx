import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as S from './Card.style';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';

function Card({ items }) {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  if (!items) {
    setloading(true);
  }

  const handleClick = async () => {
    navigate('/cart');
  };

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
          <Link to={`/cart?${items.id}`}>
            <Button type='submit' color='primary' onClick={handleClick}>
              buy
            </Button>
          </Link>
        </>
      )}
    </S.Card>
  );
}

Card.propTypes = {
  items: propTypes.any,
};

export default Card;
