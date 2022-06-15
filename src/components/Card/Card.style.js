import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.75);
  padding: 1rem;
  text-align: center;
  color: white;
  position: relative;

  h3 {
    margin: 1rem auto;
    max-width: 20rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

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
    width: 80vw;
  }

  @media screen and (max-width: 865px) {
    display: grid;
    justify-content: center;

    img {
      height: 15rem;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 0;
  }

  @media screen and (max-width: 580px) {
    left: -1rem;
  }
`;
