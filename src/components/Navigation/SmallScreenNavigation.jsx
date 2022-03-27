import { Link } from 'react-router-dom';
import { mobileNavLinks } from '../../utils';
export const SmallScreenNavigation = ({ currentPath }) => {
  return (
    <div className='navigation small-screen-navigation'>
      {mobileNavLinks.map(({ id, linkTo, icon }) => {
        return (
          <Link
            className={`navigation-link nav-link-active-${
              currentPath === linkTo
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
