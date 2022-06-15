import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import * as S from './CardList.style';
import { getData } from '../../utils/helper';

function CardList({ category }) {
  const [data, setData] = useState([]);

  async function renderData() {
    const token = localStorage.getItem('token');
    const resp = await getData('auth/items ', token);
    setData(resp.data);
  }

  useEffect(() => {
    renderData();
  }, []);

  const fileterData = data.filter((items) => {
    if (category === 'All') {
      return items;
    }
    return items.category === category;
  });

  return (
    <S.Grid>
      {data ? (
        category ? (
          fileterData.map((items) => (
            <Card key={items.id} items={items} category={category} />
          ))
        ) : (
          data.map((items) => (
            <Card key={items.id} items={items} category={category} />
          ))
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </S.Grid>
  );
}

CardList.propTypes = {
  category: PropTypes.any,
};

export default CardList;
