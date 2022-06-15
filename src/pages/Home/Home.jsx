import React, { useState } from 'react';
import * as S from '../Home/Home.style';
import Header from '../../components/Header/Header';
import CardList from '../../components/CardList/CardList';

const Home = () => {
  const [category, setCategory] = useState('');

  const foundCat = (id) => {
    setCategory(id);
  };

  return (
    <S.StyledPage>
      <Header find={foundCat} />
      <CardList category={category} />
    </S.StyledPage>
  );
};

export default Home;
