import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.color};
  color: #ffffff;
  border-radius: 0.5rem;
  width: 35%;
  padding: 2rem;
  margin: 12rem auto;

  @media screen and (max-width: 504px) {
    background-color: inherit;
    text-align: center;
    margin: 10rem auto;

    h2 {
      font-size: 2rem;
    }

    a {
      color: black;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 992px) {
    /* font-size: 0.75rem; */
    width: 60%;
  }
`;
