import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  RegisterForm,
  RegisterLabel,
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
          <input type="text" name="name" />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <input type="email" name="email" />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <input type="password" name="password" />
        </RegisterLabel>
        <button type="submit">Register</button>
      </RegisterForm>
    </div>
  );
};

export default Register;