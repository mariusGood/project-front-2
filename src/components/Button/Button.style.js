import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === 'primary' ? '#6C11B7' : 'black'};
  border-radius: 5px;

  border: 1px solid white;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
  color: ${(props) => (props.color === 'primary' ? 'white' : 'red')};
  cursor: pointer;
  font-weight: bold;
  padding: 0.75rem 2rem;
  text-transform: capitalize;
  margin: 0.5rem 0;

  :hover {
    background: ${(props) => (props.color === 'primary' ? 'white' : 'red  ')};
    color: ${(props) => (props.color === 'primary' ? '#6C11B7' : 'black')};
    transition: ease 0.2s;
  }
`;
