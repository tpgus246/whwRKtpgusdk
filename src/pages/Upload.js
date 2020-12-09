import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UploadAPI from '../backend/UploadAPI';
import Button from '../components/Button';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0); // ether
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [conductCategory, setconductCategory] = useState('');
  const user = useSelector(state => state.user);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }
  const history = useHistory();
  const handleClick = async () => {
    try {
      const uuid = await UploadAPI.uploadImageWithInfo({
        image: file,
        sellCA: user.ca,
        userUid: user.uid,
        price: price,
        content: content,
        title: title,
        conductCategory: conductCategory
      });
      setFile(null);
      setPrice(0);
      setContent('');
      setTitle('');
      toast.success('업로드에 성공했습니다!');
      setTimeout(() => {
        history.push(`/detail/${uuid}`);
      }, 1000);
    } catch (e) {
      toast.error('업로드에 실패했습니다');
    }
  }

  return (
    <Container>
      <Title>Upload Page</Title>
      <UploadContainer>
        <FileInput type="file" onChange={handleFile} />
        <Button y={35} text={'UPLOADING'} handleClick={handleClick} />
        <ItemInfoContainer> 
          <span>price</span>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
          <span>title</span>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <span>content</span>
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <span style={{
            marginBottom: 10
          }}>category</span>
          <select onChange={(e) => {
            setconductCategory(e.currentTarget.value);
          }} style={{
            height: 40,
            fontSize: '20px'
          }}>
            <option value="fashion">Fashion</option>
            <option value="it">IT</option>
            <option value="health">Health</option>
          </select>
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

  margin-bottom: 25px;
`;

export default Upload;