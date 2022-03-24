import './Navigation.css';
import { LargeScreenNavigation, SmallScreenNavigation } from './index';
import { useState } from 'react';

export const Navigation = () => {
  const [activeNavLink, setActiveNavLink] = useState('/');

  const updateActiveNavLink = (selectedNavLink) =>
    setActiveNavLink(selectedNavLink);

  return (
    <>
      <LargeScreenNavigation
        activeLink={activeNavLink}
        handleLinkChange={updateActiveNavLink}
      />
      <SmallScreenNavigation />
    </>
  );
};
