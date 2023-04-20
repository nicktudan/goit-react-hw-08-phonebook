import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import { LoginForm, LoginLabel } from './LogIn.styled';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <title>Login</title>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          Email
          <input type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          Password
          <input type="password" name="password" />
        </LoginLabel>
        <button type="submit">Log In</button>
      </LoginForm>
    </div>
  );
};

export default Login;
