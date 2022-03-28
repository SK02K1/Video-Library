import { profileControls } from '../../utils';
import { Link } from 'react-router-dom';
import './Profile.css';

export const Profile = () => {
  return (
    <div className='content'>
      <div className='profile-controls grid-container auto'>
        {profileControls.map(({ id, controlName, linkTo, iconName }) => {
          return (
            <Link to={linkTo} key={id} className='profile-control'>
              <span className='material-icons'>{iconName}</span>
              <span className='control-name'>{controlName}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
