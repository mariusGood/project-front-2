import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../Login/Login.styles';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Container from '../../components/Container/Container';
import { postData } from '../../utils/helper';
import AuthContext from '../../AuthContext';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState();
  const [loading, setloading] = useState(false);
  const { login } = useContext(AuthContext);
  let navigate = useNavigate();

  async function formHandler(e) {
    setloading(true);
    setError(false);
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (Object.values(userData).includes(undefined)) {
      setloading(false);
      setError(true);
      return setErrorText('Please fill in all fields.');
    }

    if (password.length < 5) {
      setloading(false);
      setError(true);
      return setErrorText('Password too, is too short');
    }

    const resp = await postData('login', userData);

    if (resp.msg === 'Login successful') {
      localStorage.setItem('token', resp.token);
      login();
      navigate('/');
    }
    if (resp.err) {
      setloading(false);
      setError(true);
      return setErrorText(resp.err);
    }
  }

  return (
    <S.Login>
      <Container title='Login' color='#000000a5'>
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
            label='Password:'
            name='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type='submit' color='primary'>
            Login
          </Button>
        </form>
        <p>Dont have an account?</p> <Link to='/register'>Register</Link>
      </Container>
    </S.Login>
  );
};

export default Login;
