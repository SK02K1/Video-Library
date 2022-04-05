import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';
import './NotFound.css';

export const NotFound = () => {
  useDocumentTitle('Not found');
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  return (
    <div className='content not-found'>
      <img className='img-404' src='/assets/404.svg' alt='404' />
      <button onClick={handleClick} class='btn btn-primary'>
        <span class='material-icons-outlined m-sm-r'>arrow_back</span>
        Back to home
      </button>
    </div>
  );
};
