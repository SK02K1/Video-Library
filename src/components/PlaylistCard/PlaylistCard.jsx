import './PlaylistCard.css';
import { useAuth, useVideosData } from '../../contexts';
import { handleDeletePlaylist } from '../../services';
import { useNavigate } from 'react-router-dom';

export const PlaylistCard = ({ playlist }) => {
  const { _id, title, videos } = playlist;
  const { userData } = useAuth();
  const { dispatchVideosData } = useVideosData();
  const navigate = useNavigate();

  const deleteBtnHandler = (e) => {
    e.stopPropagation();
    handleDeletePlaylist({ playlistID: _id, dispatchVideosData, userData });
  };

  const showSinglePlaylist = () => navigate(`/playlists/${_id}`);

  return (
    <div onClick={showSinglePlaylist} className='playlist-card'>
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
