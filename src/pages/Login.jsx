import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import InputField from '../components/InputField/InputField';
import Container from '../components/Container/Container';

const Login = () => {
  return (
    <>
      <Container title='Login' color='#000000a5'>
        <form>
          <InputField
            label='email:'
            name='email'
            type='email'
            placeholder='email'
          />

          <InputField
            label='Password:'
            name='password'
            type='password'
            placeholder='password'
          />

          <Button type='submit' color='primary'>
            Login
          </Button>
        </form>
        Dont have an account? <Link to='/register'>Register</Link>
      </Container>
    </>
  );
};

export default Login;
