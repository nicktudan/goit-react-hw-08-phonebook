import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import { LoginForm, LoginLabel, LoginInput, LoginBtn } from './LogIn.styled';

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
          <LoginInput
            type="email"
            name="email"
            placeholder="enter your email"
          />
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginInput
            type="password"
            name="password"
            placeholder="enter your password"
          />
        </LoginLabel>
        <LoginBtn type="submit">Log In</LoginBtn>
      </LoginForm>
    </div>
  );
};

export default Login;
