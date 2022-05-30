import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid rgb(189, 189, 189);
  background: rgba(0, 0, 0, 0.75);
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
  color: white;
  position: relative;

  img {
    border: 1px solid white;
    height: 12rem;
    width: 17rem;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 865px) {
    display: grid;
    justify-self: center;
    padding: 0 6rem;

    img {
      height: auto;
    }
  }

  @media screen and (max-width: 560px) {
    rigth: 2rem;
    padding: 0 4rem;
  }

  @media screen and (max-width: 510px) {
    padding: 0;
  }
`;
