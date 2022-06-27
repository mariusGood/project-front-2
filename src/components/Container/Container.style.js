import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.color};
  color: #ffffff;
  border-radius: 0.5rem;
  padding: 6vh;
  margin: 0 auto;
  font-size: 2vh;
  width: 75vh;

  h2 {
    font-size: 4vh;

    @media screen and (max-width: 426px) {
      font-size: 5vh;
    }
  }

  @media screen and (max-width: 758px) {
    width: 50vw;
  }

  @media screen and (max-width: 426px) {
    width: 65vw;
    background-color: inherit;
    text-align: center;
    font-size: 2.5vh;

    a {
      color: #ffffff;
      text-decoration: none;
      border-bottom: 1px solid #ffffff;
    }
  }
`;
