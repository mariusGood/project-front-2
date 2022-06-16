import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(189, 189, 189);
  color: white;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  max-height: 100%;
  min-height: 19rem;
  position: relative;
  text-align: center;
  top: 10rem;
  width: 90%;

  input {
    height: 2rem;
  }

  @media screen and (max-width: 880px) {
    width: 60%;
    h1 {
      font-size: large;
    }
  }
`;

export const CartSum = styled.div``;
