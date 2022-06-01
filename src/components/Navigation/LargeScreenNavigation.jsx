import { Link } from 'react-router-dom';
import { desktopNavLinks } from '../../utils';

export const LargeScreenNavigation = ({ currentPath }) => {
  return (
    <aside className='navigation large-screen-navigation'>
      {desktopNavLinks.map(({ id, linkTo, icon, label }) => {
        return (
          <Link
            className={`navigation-link nav-link-active-${
              currentPath === linkTo
            }`}
            key={id}
            to={linkTo}
          >
            <span className='material-icons'>{icon}</span>
            <span className='m-md-l'>{label}</span>
          </Link>
        );
      })}
    </aside>
  );
};
