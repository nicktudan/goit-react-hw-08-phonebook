import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 320px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 1px solid #d3d3d3;
  outline: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::placeholder {
    color: #708090;
    font-size: 16px;
  }

  :hover,
  :focus {
    border-radius: 2px;
    border: 2px solid #00bfff;
    box-shadow: rgba(30, 144, 255, 0.3) 1px 1px 2px 0px,
      rgba(30, 144, 255, 0.15) 2px 2px 6px 1px;
  }
`;

export const LoginBtn = styled.button`
  max-width: 120px;
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