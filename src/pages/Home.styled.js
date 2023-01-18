import styled from '@emotion/styled';
import url from '../img/bg-phone.jpg';

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  height: 680px;
  text-align: center;
  width: 390px;
  background-image: url(${url});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid black;
  border-bottom: 80px solid black;
  border-radius: 30px;
  box-shadow: 8px 8px 8px 0px rgba(255, 255, 255, 0.5);
  padding: 100px 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  text-shadow: 1px 1px 2px #040404;
  color: #464240;

  & span {
    display: block;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const IconContainer = styled.span`
  margin-bottom: 10px;
`;
