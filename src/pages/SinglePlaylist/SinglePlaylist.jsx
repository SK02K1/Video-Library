import { useParams } from 'react-router-dom';

export const SinglePlaylist = () => {
  const { playlistID } = useParams();
  return (
    <div className='content'>
      <h1 className='text-center text-xl'>{playlistID}</h1>
    </div>
  );
};
