import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Register.styles';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Container from '../../components/Container/Container';
import { postData } from '../../utils/helper';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState();
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();

  async function formHandler(e) {
    setloading(true);
    setError(false);
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (!userData.email) {
      setloading(false);
      setError(true);
      return setErrorText('Email is required');
    }

    if (password !== rePassword) {
      setloading(false);
      setError(true);
      return setErrorText('Passwords do not match');
    }

    if (Object.values(userData).includes(undefined)) {
      setloading(false);
      setError(true);
      return setErrorText('Please fill in all fields.');
    }

    if (userData.password.length < 5) {
      setloading(false);
      setError(true);
      return setErrorText('Password too, is too short');
    }

    const resp = await postData('register', userData);

    if (resp.err.includes('Duplicate')) {
      setloading(false);
      setError(true);
      return setErrorText('Email address already in use');
    }

    if (resp.err[0].field === 'email') {
      setloading(false);
      setError(true);
      return setErrorText(resp.err[0].message);
    }

    if (resp.err[0].field === 'password') {
      setloading(false);
      setError(true);
      return setErrorText('Password is required');
    }

    if (resp.msg.includes('Registration successful')) {
      return navigate('/login');
    }
  }

  return (
    <S.Register>
      <Container title='Register' color='#000000a5'>
        {loading && (
          <h2 style={{ color: 'white', size: 'large' }}>Loading...</h2>
        )}
        {error && <span style={{ color: 'red' }}>{errorText}</span>}
        <form onSubmit={formHandler}>
          <InputField
            label='email:'
            name='email'
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label='password:'
            name='pass'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label='Re-enter password:'
            name='reapeat-password'
            type='password'
            placeholder='re-enter password'
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <Button type='submit' color='primary'>
            Register
          </Button>
        </form>
        Already have an account? <Link to='/login'>Login</Link>
      </Container>
    </S.Register>
  );
};

export default Register;
