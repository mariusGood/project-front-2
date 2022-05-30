import React from 'react';
import * as S from './Pages.style';
import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';

const Home = () => {
  return (
    <S.StyledPage>
      <Header />
      <CardList />
    </S.StyledPage>
  );
};

export default Home;
