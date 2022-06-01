import './Forms.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleSignup } from '../../services/authServices';
import { useAuth } from '../../contexts';

const formInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsAndConditions: false,
};

export const SignupForm = () => {
  const [formData, setFormData] = useState(formInitialState);
  const { firstName, lastName, email, password, termsAndConditions } = formData;
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
        handleSignup({
          e,
          formData,
          saveUserData,
        })
      }
      className='form'
    >
      <h1 className='text-xl text-center m-xs-tb'>Signup</h1>
      <label className='m-sm-t' htmlFor='firstName'>
        firstname
      </label>
      <input
        onChange={handleInput}
        className='input m-xs-t'
        type='text'
        name='firstName'
        id='firstName'
        value={firstName}
        placeholder='Enter your firstname'
        required
      />
      <label className='m-sm-t' htmlFor='lastName'>
        lastname
      </label>
      <input
        onChange={handleInput}
        className='input m-xs-t'
        type='lastName'
        name='lastName'
        id='lastName'
        value={lastName}
        placeholder='Enter your lastname'
        required
      />
      <label className='m-sm-t' htmlFor='email'>
        Email
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
      <label className='m-sm-t' htmlFor='termsAndConditions'>
        <input
          onChange={handleToggle}
          type='checkbox'
          name='termsAndConditions'
          id='termsAndConditions'
          checked={termsAndConditions}
        />
        <span className='text-sm m-xs-l'>I accept all Terms & Conditions</span>
      </label>
      <button
        className='btn btn-primary m-sm-tb'
        disabled={!termsAndConditions}
      >
        Signup
      </button>
      <Link className='form-link' to='/login'>
        <span>Already have account</span>
        <span className='material-icons-outlined'> chevron_right </span>
      </Link>
    </form>
  );
};
