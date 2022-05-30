import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import * as S from './CardList.style';
import { getData } from '../../utils/helper';

function CardList() {
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

  return (
    <S.Grid>
      {data && data.map((items) => <Card key={items.id} items={items} />)}
    </S.Grid>
  );
}

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
