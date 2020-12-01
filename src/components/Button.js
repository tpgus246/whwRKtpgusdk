import React from 'react';
import styled from 'styled-components';

const Button = ({ text, y }) => {
  return <Btn y={y}>{text}</Btn>
}

const Btn = styled.button`
  border-radius: 5px;
  background-color: #e89923;
  border: none;
  color: #6d4c41;
  padding: 5px 10px;
  line-height: 20px;
  font-weight: 650;
  ${props => props.y === undefined ? '' : `height: ${props.y}px;`}
`;

export default Button;