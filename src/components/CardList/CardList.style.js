import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  color: white;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  text-align: center;
  top: 20rem;

  h1 {
    position: relative;
    top: 5rem;
    left: 40rem;
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
