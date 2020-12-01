import React, { useState } from 'react';
import styled from 'styled-components';
import AuthAPI from '../backend/AuthAPI';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <Container>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input password={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={async () => {
        await AuthAPI.signUp(email, password);
        console.log('register');
      }}>submit</button>
    </Container>
  )
}

const Container = styled.div`

`;

export default SignUp;