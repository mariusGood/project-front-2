import styled from 'styled-components';
import background from '../assets/background2.jpg';

export const StyledPage = styled.div`
  background: url(${background});
  background-size: 100vh;
  height: 175vh;
  padding: 0 4rem;

  @media screen and (max-width: 1400px) {
    height: 230vh;
  }

  @media screen and (max-width: 1200px) {
    height: 280vh;
  }

  @media screen and (max-width: 1000px) {
    height: 550vh;
  }

  @media screen and (max-width: 865px) {
    height: 550vh;
  }
`;
