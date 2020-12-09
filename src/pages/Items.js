import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getConducts } from '../stores/conduct';
import UtilsAPI from '../backend/UtilsAPI';
import ether from '../assets/ether.png';

const Items = () => {
  const params = useParams();
  const conducts = useSelector(state => state.conduct);

  const dispatch = useDispatch();
  useEffect(() => {
    const getItems = async () => {
      const products = (await UtilsAPI.getAllConduct(params.category));
      dispatch(getConducts(products));
    }
    getItems();
  }, [params.category]);

  const history = useHistory();

  return (
    <Container>
      <CardContainer>
        {conducts.map((elem, i) => (
          <Card key={i} onClick={() => {
            history.push(`/detail/${elem.uuid}`)
          }}>
            <CardImageContainer>
              <CardImage src={elem.image} />
            </CardImageContainer>
            <CardInfo>
              <PBold>
                {elem.title}
              </PBold>
              <br />
              <PBold2>
                {elem.content}
              </PBold2>
            </CardInfo>
            <CardPrice>
              {elem.price}
              <EtherIcon src={ether} />
            </CardPrice>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 20px;
  margin-top: 20px;
  transform: translate(0, 0);
  transition: transform .5s;

  &:hover {
    cursor: pointer;
    transform: translate(0, -10px);
    transition: transform .5s; 
  }
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  border-bottom: 1px solid #d6d6d6;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px 5px 0 0;
`;

const CardInfo = styled.div`
  padding: 0 10px;
`;

export const CardPrice = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  border-top: 1px solid #d6d6d6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 137.5%;
  letter-spacing: -0.05em;
  color: #3D3D3D;
`;

export const PBold = styled.div`
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 137.5%;
  letter-spacing: -0.05em;
  color: #3D3D3D;
`;

export const PBold2 = styled.div`
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 137.5%;
  letter-spacing: -0.05em;
  color: #3D3D3D;
`;

export const EtherIcon = styled.img`
  width: 16px;
  height: 16px;
`;


export default Items;