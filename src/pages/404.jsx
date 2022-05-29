import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import background from '../assets/background404.jpg';

const Styled404 = styled.div`
  display: flex;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    left: 40rem;
    position: absolute;
    top: 12rem;
  }
`;

const Title = styled.h1`
  margin: 1rem auto;
`;

const NotFound = () => {
  return (
    <Styled404>
      <div>
        <Title>404 page not found</Title>
        <Link to={'/login'}>
          <Button type='button' color='primary'>
            Go back
          </Button>
        </Link>
      </div>
    </Styled404>
  );
};

export default NotFound;
