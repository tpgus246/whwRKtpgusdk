import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { AuctionAPIs, web3Data } from '../contract/MyMixin';


const Default = () => {
  const handleClick = async () => {
    await AuctionAPIs.getAuctions().then(() => (res) => {
      console.log(res);
    });
  }
  return (
    <Container>
      <LogoContainer onClick={handleClick}>
        <LogoImage src={logo} />
      </LogoContainer>
      <WelcomeMessage>
        Welcome to Coupang Chain
      </WelcomeMessage>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 300px;
  margin-top: 30px;
`;

const LogoImage = styled.img`
  max-height: 100%;
`;

const WelcomeMessage = styled.div`
  color: #a1887f;
  font-size: 2em;
  font-weight: 700;
`;





export default Default;