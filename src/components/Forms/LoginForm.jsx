import './Forms.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts';
import { handleLogin } from '../../services';

const testCredentials = {
  email: 'ksourabh458@gmail.com',
  password: '12345678',
  rememberMe: true,
};

const formInitialState = {
  email: '',
  password: '',
  rememberMe: false,
};

export const LoginForm = () => {
  const [formData, setFormData] = useState(formInitialState);
  const { email, password, rememberMe } = formData;
  const { saveUserData } = useAuth();

  const handleInput = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));

  const handleToggle = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.checked,
    }));

  return (
    <form
      onSubmit={(e) =>
        handleLogin({
          e,
          email,
          password,
          saveUserData,
        })
      }
      className='form'
    >
      <h1 className='text-xl text-center m-xs-tb'>Login</h1>
      <label className='m-sm-t' htmlFor='email'>
        Email address
      </label>
      <input
        onChange={handleInput}
        className='input m-xs-t'
        type='email'
        name='email'
        id='email'
        value={email}
        placeholder='Enter your email'
        required
      />
      <label className='m-sm-t' htmlFor='password'>
        Password
      </label>
      <input
        onChange={handleInput}
        className='input m-xs-t'
        type='password'
        name='password'
        id='password'
        value={password}
        placeholder='Enter your password'
        required
      />
      <label className='m-sm-t' htmlFor='remember-me'>
        <input
          onChange={handleToggle}
          type='checkbox'
          name='rememberMe'
          id='remember-me'
          checked={rememberMe}
        />
        <span className='text-sm m-xs-l'>Remember me</span>
      </label>
      <button className='btn btn-primary m-sm-t'>Login</button>
      <button
        type='button'
        onClick={() => setFormData(testCredentials)}
        className='btn btn-primary m-sm-tb'
      >
        Use test credentials
      </button>
      <Link className='form-link' to='/signup'>
        <span>Create New Account</span>
        <span className='material-icons-outlined'> chevron_right </span>
      </Link>
    </form>
  );
};
