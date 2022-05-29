import React from 'react';
import styled from 'styled-components';
import background from '../assets/background2.jpg';
import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import { getData, getItems } from '../utils/helper';

const StyledHome = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  background-size: 100vh auto;
  height: 200vh;
  padding: 0 4rem;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header getData={getData} />
      <CardList getData={getItems} />
    </StyledHome>
  );
};

export default Home;
