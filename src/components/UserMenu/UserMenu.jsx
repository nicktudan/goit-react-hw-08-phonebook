import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

import { UserMenuContainer, UserMenuText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <UserMenuContainer>
      <UserMenuText>Welcome to Phonebook, {userName.name}!</UserMenuText>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuContainer>
  );
};
