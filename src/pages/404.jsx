import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import background from '../assets/background404.jpg';

const Styled404 = styled.div`
  display: flex;
  background-image: url(${background});
  background-repeat: repeat;
  background-size: 100vh auto;
  color: #ffffff;
  flex-direction: column;
  height: 130vh;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 auto;
`;

const NotFound = () => {
  return (
    <Styled404>
      <Title>404 page not found</Title>
      <Link to={'/login'}>
        <Button type='button' color='primary'>
          Go back
        </Button>
      </Link>
    </Styled404>
  );
};

export default NotFound;
