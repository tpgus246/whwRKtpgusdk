import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import AuthAPI from '../backend/AuthAPI';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ca, setCa] = useState('');

  const history = useHistory();
  return (
    <Container>
      <FormBox>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Email'} />
        <Input password={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'} />
        <Input value={ca} onChange={(e) => setCa(e.target.value)} placeholder={'CA'} />
        <Button onClick={async () => {
          await AuthAPI.signUp(email, password, ca);
          toast.success('회원가입에 성공헀습니다.');
          history.push('/signin');
        }}>submit</Button>
      </FormBox>
    </Container>
  )
}

const Container = styled.div`
`;

const FormBox = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  padding: 30px 30px 0 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #d6d6d6;
  font-size: 24px;

  & + & {
    margin-top: 20px;
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #2784ff;
  color: white;
  padding: 10px;
  font-size: 24px;
  margin-top: 30px;
`;


export default SignUp;