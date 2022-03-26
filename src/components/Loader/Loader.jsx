import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.css';

export const Loader = () => {
  return (
    <div className='loader'>
      <ClipLoader color='#fff' size={20} speedMultiplier={2} />
    </div>
  );
};
