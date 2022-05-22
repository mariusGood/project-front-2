import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import InputField from '../components/InputField/InputField';
import Container from '../components/Container/Container';

const Register = () => {
  return (
    <>
      <Container title='Register' color='#000000a5'>
        <form>
          <InputField
            label='email:'
            name='email'
            type='email'
            placeholder='email'
          />
          <InputField
            label='Password:'
            name='pass'
            type='password'
            placeholder='password'
          />
          <Button type='submit' color='primary'>
            Register
          </Button>
        </form>
        Already have an account? <Link to='/login'>Login</Link>
      </Container>
    </>
  );
};

export default Register;
