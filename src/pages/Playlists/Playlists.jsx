import { useVideosData } from '../../contexts/videosData-context';
import { PlaylistCard } from '../../components';

export const Playlists = () => {
  const {
    videosDataState: { playlists },
  } = useVideosData();
  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>Playlists</h1>
      <p className='text-center m-xs-tb'>
        You have created {playlists.length} playlist
      </p>
      <div className='grid-container auto m-md-tb'>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};
