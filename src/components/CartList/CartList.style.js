import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(189, 189, 189);
  color: white;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  position: relative;
  text-align: center;
  top: 15rem;
  width: 90%;
  min-height: 19rem;
  max-height: 100%;

  h1 {
    color: white;
    position: relative;
    top: 7rem;
    right: 2rem;
  }
`;
