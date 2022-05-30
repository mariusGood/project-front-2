import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid white;

  img {
    border: 1px solid white;
    height: 7rem;
    width: 7rem;
  }

  h3 {
    width: 10rem;
  }

  div button {
    margin: 0 0.5rem;
  }

  @media screen and (max-width: 1041px) {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;

  @media screen and (max-width: 1041px) {
    display: block;

    h3 {
      margin: 0 auto;
    }

    img {
      height: 20rem;
      width: auto;
      align-items: center;
    }

    @media screen and (max-width: 500px) {
      img {
        height: 10rem;
        width: auto;
      }
    }
  }
`;
