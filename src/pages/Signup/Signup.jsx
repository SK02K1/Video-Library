import { Navigate, useLocation } from 'react-router-dom';
import { SignupForm } from '../../components';
import { useAuth } from '../../contexts';
import { useDocumentTitle } from '../../hooks';

export const Signup = () => {
  useDocumentTitle('Signup');
  const { userData } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || -1;
  return (
    <div className='content'>
      {userData && <Navigate to={from} replace />}
      <SignupForm />
    </div>
  );
};
