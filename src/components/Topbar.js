import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Topbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <Bar>
        <Logo to="/">COUPANG CHAIN</Logo>
        <Menu>
          <MenuItem to="/menu/it">Fashion</MenuItem>
          <MenuItem to="/menu/it">IT</MenuItem>
          <MenuItem to="/menu/it">Health</MenuItem>
        </Menu>
        <AuthOption>
          {user.uid === '' ? (
            <>
              <AuthButton to="/signup">Sign Up</AuthButton>
              <AuthButton to="/signin">Log-in</AuthButton>
            </>
          ) : (
            <>
              <AuthButton to="/wallet">Wallet</AuthButton>
              <AuthButton to="/upload">Upload</AuthButton>
            </>
          )}
        </AuthOption>
      </Bar>
    </Container>
  );
}

const Container = styled.div``;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #e89923;
  box-shadow: 4px 5px 12px rgba(0, 0, 0, 0.1), 4px 5px 12px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;

const Logo = styled(Link)`
  color: #6d4c41;
  text-decoration: none;
  font-weight: 600;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;

  & + & {
    margin-left: 20px;
  }
`;

const AuthOption = styled.div`
`;

const AuthButton = styled(Link)`
  height: 100%;
  color: #6d4c41;
  text-decoration: none;
  font-weight: 600;

  & + & {
    margin-left: 20px;
  }
`;

export default Topbar;