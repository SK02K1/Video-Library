import { profileControls } from '../../utils';
import { handleLogout } from '../../services';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import './Profile.css';

export const Profile = () => {
  const {
    userData: { firstName, lastName, email },
    removeUserData,
  } = useAuth();

  const navigate = useNavigate();

  return (
    <div className='content'>
      <div className='user-profile-card m-md-b'>
        <img className='user-avatar' src='/assets/avatar.svg' alt='avatar' />
        <div className='user-info m-lg-l'>
          <div className='username'>
            <span className='firstname m-xs-r'>{firstName}</span>
            <span className='lastname'>{lastName}</span>
          </div>
          <div className='email m-xs-t'>{email}</div>
          <button
            onClick={() => handleLogout({ removeUserData, navigate })}
            className='btn btn-danger m-sm-t'
          >
            Logout
          </button>
        </div>
      </div>
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
