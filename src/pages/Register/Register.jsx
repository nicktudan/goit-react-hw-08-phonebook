import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <title>Registration</title>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Username
          <RegisterInput
            type="text"
            name="name"
            placeholder="enter your name"
          />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterInput
            type="email"
            name="email"
            placeholder="enter your email"
          />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterInput
            type="password"
            name="password"
            placeholder="enter a password"
          />
        </RegisterLabel>
        <RegisterBtn type="submit">Register</RegisterBtn>
      </RegisterForm>
    </div>
  );
};

export default Register;