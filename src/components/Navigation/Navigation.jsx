import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { LinkNav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <LinkNav to="/">
        Home
      </LinkNav>
      {isLoggedIn && (
        <LinkNav to="/contacts">
          Contacts
        </LinkNav>
        )}
    </nav>
  );
};
