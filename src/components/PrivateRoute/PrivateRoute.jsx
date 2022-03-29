import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts';

export const PrivateRoute = () => {
  const { userData } = useAuth();
  const location = useLocation();

  return userData ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};
