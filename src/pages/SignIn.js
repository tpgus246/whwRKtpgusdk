import React, { useState } from 'react';
import styled from 'styled-components';
import AuthAPI from '../backend/AuthAPI';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const data = await AuthAPI.signIn(email, password);
    console.log(data);
  }

  return (
    <Container>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input password={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick}>submit</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Login;