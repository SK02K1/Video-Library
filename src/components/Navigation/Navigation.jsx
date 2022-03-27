import './Navigation.css';
import { useLocation } from 'react-router-dom';
import { LargeScreenNavigation, SmallScreenNavigation } from './index';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      <LargeScreenNavigation currentPath={pathname} />
      <SmallScreenNavigation currentPath={pathname} />
    </>
  );
};
