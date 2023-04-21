import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserMenuText = styled.p`
  font-weight: 700;
`;

export const UserMenuBtn = styled.button`
  margin-right: 12px;
  padding: 4px 16px 4px 16px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.2;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #b0e0e6;
  }
`;

export const TextStyled = styled.span`
  color: #00bfff;
  text-transform: capitalize;
`;