import React from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import Button from '../components/Button';

const Upload = () => {
  return (
    <Container>
      <Title>Upload Page</Title>
      <UploadContainer>
        <FileInput type="file" />
        <Button y={35} text={'UPLOADING'} />
        <ItemInfoContainer>
          <Input placeholder="Unique ID" />
          <Input placeholder="Data URI" />
          <Input placeholder="Unique ID" />
          <Input placeholder="Auction title" />
          <Input placeholder="Price" />
        </ItemInfoContainer>
      </UploadContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  padding: 20px;
  color: #6d4c41;
  font-size: 24px;
  font-weight: 650;
`;

const UploadContainer = styled.div`
  padding: 20px 0 0 0;
  display: flex;
`;

const FileInput = styled.input`
  height: 30px;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  background-color: rgb(239, 235, 233);
  width: 350px;
  margin-left: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgb(30, 40, 50);
  background-color: rgb(239, 235, 233);
  font-size: 18px;

  &:focus {
    outline: none;
  }

  & + & {
    margin-top: 20px;
  }
`;

export default Upload;