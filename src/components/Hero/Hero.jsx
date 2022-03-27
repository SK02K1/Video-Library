import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='hero-text text-center'>
        Watch content related to filmmaking and photography
      </h1>
      <Link to='/videos' className='btn btn-primary hero-cta'>
        Explore
      </Link>
    </div>
  );
};
