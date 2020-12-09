import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UtilsAPI from '../backend/UtilsAPI';
import { EtherIcon, PBold, PBold2 } from './Items';
import ether from '../assets/ether.png';
import { toast } from 'react-toastify';

const History = () => {
  const user = useSelector(state => state.user);

  const [buyHistory, setBuyHistory] = useState(undefined);
  const [sellHistory, setSellHistory] = useState(undefined);
  const [gasPrice, setGasPrice] = useState();

  useEffect(() => {
    const getSellBuyInfo = async () => {
      if (user.ca) {
        const buy = await UtilsAPI.getAllBuyConduct(user.ca);
        const sell = await UtilsAPI.getAllSellConduct(user.ca);
        setBuyHistory(await Promise.all(buy.docs.map(async (elem) => {
          return {
            ...elem.data(),
            image: await UtilsAPI.getItemImage(elem.data().conductUid)
          }
        })));
        setSellHistory(await Promise.all(sell.docs.map(async (elem) => {
          return {
            ...elem.data(),
            image: await UtilsAPI.getItemImage(elem.data().conductUid)
          }
        })));
        setGasPrice(await UtilsAPI.getGasPrice());
        toast.success(`${await UtilsAPI.getEther(user?.ca)} Ether 가 남았습니다.`);
      }
    }
    getSellBuyInfo();
  }, [user]);

  return (
    <Container>
      {!!sellHistory?.length && (
        <HistoryContainer active>
          sell
          {sellHistory.map((elem, i) => (
            <Card key={i}>
              <CardImage src={elem.image} />
              <CardInfo>
                <PBold>구매자 : {elem.buyCA}</PBold>
                <PBold2>
                  가격 : {elem.price}
                  <EtherIcon src={ether} />
                </PBold2>
                <PBold>
                  수수료 : {gasPrice}
                  <EtherIcon src={ether} />
                </PBold>
              </CardInfo>
            </Card>
        ))}
      </HistoryContainer>
      )}
      
      {!!buyHistory?.length && (
        <HistoryContainer>
          buy
          {buyHistory.map((elem, i) => (
            <Card key={i}>
              <CardImage src={elem.image} />
              <CardInfo>
                <PBold>판매자 : {elem.sellCA}</PBold>
                <PBold2>
                  가격 : {elem.price}
                  <EtherIcon src={ether} />
                </PBold2>
                <PBold>
                  수수료 : {gasPrice}
                  <EtherIcon src={ether} />
                </PBold>
              </CardInfo>
          </Card>
        ))}
      </HistoryContainer>
      )}
    </Container>
  );
};

const Container = styled.div`

`;

const HistoryContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 750px;
  box-sizing: border-box;
  border: 1px solid ${props => props.active ? '#2784ff' : '#d6d6d6'};
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  height: 200px;
  
  & + & {
    border-top: 1px solid #d6d6d6;
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  word-break: break-all;
`;

export default History;