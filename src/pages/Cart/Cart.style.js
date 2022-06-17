import styled from 'styled-components';
import background from '../../assets/background2.jpg';

export const StyledPage = styled.div`
  background: url(${background});
  background-size: 100vh;
  height: 110vh;
  padding: 0 4rem;

  button {
    position: relative;
    top: 7rem;
    left: 5.5rem;
  }

  h1 {
    margin-top: 7rem;
  }
  @media screen and (max-width: 2400px) {
    height: 200vh;
  }

  @media screen and (max-width: 880px) {
    button {
      left: 9rem;
    }
  }

  @media screen and (max-width: 865px) {
    height: 550vh;
  }

  @media screen and (max-width: 505px) {
    button {
      left: 0;
    }
  }
`;
