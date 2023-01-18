import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserMenuTitle = styled.p`
  font-weight: 700;
  color: #21282b;
`;

export const Button = styled.button`
  font-family: inherit;
  display: flex;
  gap: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: #e7dada;
  font-weight: 700;
  font-size: 14px;

  &:hover,
  &:focus {
    background-color: #a1a1a1;
  }
`;
