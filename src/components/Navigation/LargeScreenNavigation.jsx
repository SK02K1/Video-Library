import { Link } from 'react-router-dom';
import { desktopNavLinks } from '../../utils';

export const LargeScreenNavigation = ({ activeLink, handleLinkChange }) => {
  return (
    <aside className='navigation large-screen-navigation'>
      {desktopNavLinks.map(({ id, linkTo, icon }) => {
        return (
          <Link
            onClick={() => handleLinkChange(linkTo)}
            className={`navigation-link nav-link-active-${
              activeLink === linkTo
            }`}
            key={id}
            to={linkTo}
          >
            <span className='material-icons'>{icon}</span>
          </Link>
        );
      })}
    </aside>
  );
};
