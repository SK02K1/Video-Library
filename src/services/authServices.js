import axios from 'axios';
import toast from 'react-hot-toast';

export const handleLogin = async ({
  e,
  email,
  password,
  saveUserData,
  navigate,
  from,
}) => {
  e.preventDefault();
  try {
    const { data, status } = await axios.post('/api/auth/login', {
      email,
      password,
    });
    if (status === 200) {
      const { encodedToken, foundUser } = data;
      saveUserData({ encodedToken, ...foundUser });
      navigate(from, { replace: true });
      toast.success('Successfully logged in');
    } else if (status === 201) {
      toast.error('Wrong Credentials');
    }
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      toast.error('User not found');
    }
  }
};

export const handleSignup = async ({ e, navigate, formData, saveUserData }) => {
  e.preventDefault();
  try {
    const { data, status } = await axios.post('/api/auth/signup', formData);
    if (status === 201) {
      const { encodedToken, createdUser } = data;
      saveUserData({ encodedToken, ...createdUser });
      toast.success('Successfully signed in');
      navigate('/');
    }
  } catch (error) {
    const { status } = error.response;
    if (status === 422) {
      toast.error('Email already registered');
    }
  }
};

export const handleLogout = ({ removeUserData, navigate }) => {
  const logoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Successfully logged out');
    }, 1200);
  });

  logoutPromise.then(() => {
    navigate('/');
    removeUserData();
  });

  toast.promise(logoutPromise, {
    loading: 'Logging out',
    success: (msg) => msg,
  });
};
