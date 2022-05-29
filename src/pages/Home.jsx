import React from 'react';
import * as S from './pages.style';
import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import { getData, getItems } from '../utils/helper';

const Home = () => {
  return (
    <S.StyledPage>
      <Header getData={getData} />
      <CardList getData={getItems} />
    </S.StyledPage>
  );
};

export default Home;
