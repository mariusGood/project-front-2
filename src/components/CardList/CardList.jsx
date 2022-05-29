import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import * as S from './CardList.style';

function CardList({ getData }) {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  async function renderData() {
    // setLoading(true);
    const token = localStorage.getItem('token');
    const resp = await getData('auth/items ', token);
    // setLoading(false);
    setData(resp.data);
  }

  useEffect(() => {
    renderData();
  }, []);

  console.log('data ===', data);
  return (
    <S.Grid>
      {data && data.map((items) => <Card key={items.id} items={items} />)}
    </S.Grid>
  );
}

CardList.propTypes = {
  getData: PropTypes.func,
};

export default CardList;

{
  /* <S.Grid>
      {data &&
        data.map((e) => (
          <li style={{ color: 'white' }} key={e.key}>
            {e.name}
          </li>
        ))}
    </S.Grid> */
}
