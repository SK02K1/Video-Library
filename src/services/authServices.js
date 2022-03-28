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
