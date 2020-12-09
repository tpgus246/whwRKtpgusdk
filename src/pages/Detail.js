import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import UtilsAPI from '../backend/UtilsAPI';
import firebase from '../backend/config';
import { PBold, PBold2, EtherIcon, CardPrice } from './Items';
import ether from '../assets/ether.png';
import { toast } from 'react-toastify';
import HistoryAPI from '../backend/HistoryAPI';

const Detail = () => {
  const items = useSelector(state => state.conduct);
  const user = useSelector(state => state.user);
  const { uid } = useParams();
  const [target, setTarget] = useState(null);
  const [privateKey, setPrivateKey] = useState('');


  useEffect(() => {
    const getItem = async () => {
      const id = items.findIndex(elem => elem.uuid === uid);
      if (id === -1) {
        const data = await UtilsAPI.getItem(uid);
        setTarget({
          ...data.data(),
          image: await firebase.storage().refFromURL(data.data().image).getDownloadURL()
        });
        return;
      }
      setTarget(items[id]);
    }
    getItem();
  }, []);

  const handleClickTransaction = async () => {
    if (user.ca === target?.sellCA) {
      toast.error('자신의 물품은 살 수 없습니다');
      return;
    }
    try {
      await HistoryAPI.buyConduct({
        buyCA: user.ca,
        sellCA: target?.sellCA,
        conductUid: uid,
        privateKey: privateKey
      });
      toast.success('구매에 성공했습니다.');
    } catch(e) {
      console.log(e);
    }
    
  }

  return (
    <Container>
      <Card>
        <ImageBox>
          <Image src={target?.image} />
        </ImageBox>
        <PBold>{target?.title}</PBold>
        <PBold2>{target?.content}</PBold2>
        <PBold2>{target?.sellCA}</PBold2>
        <CardPrice>
          {target?.price}
          <EtherIcon src={ether} />
        </CardPrice>
        <input 
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />
        <Button onClick={handleClickTransaction}>Transaction</Button>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
`;

const ImageBox = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid #d6d6d6;
`;

const Image = styled.img`
  max-height: 100%;
`;

const Button = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2784ff;
`;




export default Detail;