import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #8a8a8a;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem;

  ::placeholder {
    text-transform: uppercase;
    font-size: small;
  }
`;

export const Label = styled.label`
  width: 3rem;
  height: 1rem;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none solid #8a8a8a;
  text-transform: uppercase;
`;
