import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import styled from 'styled-components';

const Container = styled.div`
  color: #ffffff;
  margin: 20rem auto;
  text-align: center;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>404 page not found</h1>
      <Link to={'/login'}>
        <Button type='button' color='secondary'>
          Go back
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
