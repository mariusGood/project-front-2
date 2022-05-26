import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: large;

  &:hover {
    box-shadow: 0px 0px 10px 10px #6c11b7;
    background-color: #6c11b7;
  }
  &:focus {
    box-shadow: 0px 0px 10px 10px #6c11b7;
    background-color: #6c11b7;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: '#6C11B7';
`;
