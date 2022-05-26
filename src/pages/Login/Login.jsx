import { Navigate, useLocation } from 'react-router-dom';
import { LoginForm } from '../../components';
import { useAuth } from '../../contexts';
import { useDocumentTitle } from '../../hooks';

export const Login = () => {
  useDocumentTitle('Login');
  const { userData } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || -1;

  return (
    <div className='content'>
      {userData && <Navigate to={from} replace />}
      <LoginForm />
    </div>
  );
};
