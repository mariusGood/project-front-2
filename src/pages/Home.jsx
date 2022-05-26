import React from 'react';
// import propTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import background from '../assets/background2.jpg';

const StyledHome = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  background-size: 100vh auto;
  height: 200vh;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

export default Home;
