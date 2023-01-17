import styled from '@emotion/styled';
import url from '../img/bg-phone.jpg';

export const Container = styled.div`
  min-height: calc(100vh - 50px);

  text-align: center;
  width: 410px;
  background-image: url(${url});
  background-color: #cccccc;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid black;
  border-bottom: 80px solid black;
  border-radius: 30px;
  padding: 100px 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 8px 8px 8px 0px rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  text-shadow: 1px 1px 2px #602603;
`;

export const IconContainer = styled.span`
  margin-bottom: 10px;
`;
