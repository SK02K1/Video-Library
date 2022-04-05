import './Playlists.css';
import { useVideosData } from '../../contexts/videosData-context';
import { PlaylistCard } from '../../components';
import { useDocumentTitle } from '../../hooks';
import { usePlaylistModal } from '../../contexts';

export const Playlists = () => {
  useDocumentTitle('Playlists');
  const { togglePlaylistModalState } = usePlaylistModal();
  const {
    videosDataState: { playlists },
  } = useVideosData();
  return (
    <div className='content'>
      <header className='playlists-header'>
        <h1 className='text-xl'>Playlists ({playlists.length})</h1>
        <button onClick={togglePlaylistModalState} className='btn btn-primary'>
          Create
        </button>
      </header>
      <div className='grid-container auto m-md-tb'>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};
