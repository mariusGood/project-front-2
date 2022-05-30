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
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
`;
