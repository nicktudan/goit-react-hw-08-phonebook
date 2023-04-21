import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

import {
  UserMenuContainer,
  UserMenuText,
  UserMenuBtn,
  TextStyled,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <UserMenuContainer>
      <UserMenuText>
        Welcome to Phonebook, <TextStyled>{userName}</TextStyled>
      </UserMenuText>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </UserMenuBtn>
    </UserMenuContainer>
  );
};
