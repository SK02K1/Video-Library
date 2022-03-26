import { Link } from 'react-router-dom';
import { mobileNavLinks } from '../../utils';
export const SmallScreenNavigation = ({ activeLink, handleLinkChange }) => {
  return (
    <div className='navigation small-screen-navigation'>
      {mobileNavLinks.map(({ id, linkTo, icon }) => {
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
    </div>
  );
};
