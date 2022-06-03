import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import * as S from './CardList.style';
import { getData } from '../../utils/helper';

function CardList() {
  const [data, setData] = useState();

  async function renderData() {
    const token = localStorage.getItem('token');
    const resp = await getData('auth/items ', token);
    setData(resp.data);
    return resp;
  }

  useEffect(() => {
    renderData();
  }, []);

  return (
    <>
      <S.Grid>
        {data ? (
          data.map((items) => <Card key={items.id} items={items} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </S.Grid>
    </>
  );
}

export default CardList;
