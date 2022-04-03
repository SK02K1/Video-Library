import { LoginForm } from '../../components';
import { useDocumentTitle } from '../../hooks';

export const Login = () => {
  useDocumentTitle('Login');
  return (
    <div className='content'>
      <LoginForm />
    </div>
  );
};
