import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Core from '../components/Core';
import Routes from './Routes';

const App = () => {
  return (
    <Container>
      <Core />
      <Routes />
      <ToastContainer position={'bottom-left'} />
    </Container>
  );
};

const Container = styled.div`

`

export default App;