import React from 'react';
import styled from 'styled-components';
import Core from '../components/Core';
import Routes from './Routes';

const App = () => {
  return (
    <Container>
      <Core />
      <Routes />
    </Container>
  );
};

const Container = styled.div`

`

export default App;