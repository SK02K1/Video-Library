import './PlaylistCard.css';
import { useAuth, useVideosData } from '../../contexts';
import { handleDeletePlaylist } from '../../services';

export const PlaylistCard = ({ playlist }) => {
  const { _id, title, videos } = playlist;
  const { userData } = useAuth();
  const { dispatchVideosData } = useVideosData();

  const deleteBtnHandler = (e) => {
    e.stopPropagation();
    handleDeletePlaylist({ playlistID: _id, dispatchVideosData, userData });
  };

  return (
    <div className='playlist-card'>
      <span
        onClick={deleteBtnHandler}
        className='material-icons-round icon-close'
      >
        delete
      </span>
      <h2 className='text-lg'>
        {title} ({videos.length})
      </h2>
    </div>
  );
};
