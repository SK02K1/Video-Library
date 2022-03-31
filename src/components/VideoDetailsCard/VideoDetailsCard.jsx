import './VideoDetailsCard.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, usePlaylistModal, useVideosData } from '../../contexts';
import { isAlreadyInHistory } from '../../utils';
import { handleRemoveFromHistory } from '../../services';

export const VideoDetailsCard = ({ videoDetails }) => {
  const { _id, title, creator, creatorAvatar } = videoDetails;
  const [showCardControls, setShowCardControls] = useState(false);
  const navigate = useNavigate();
  const { userData } = useAuth();
  const { togglePlaylistModalState } = usePlaylistModal();
  const {
    videosDataState: { history },
    dispatchVideosData,
  } = useVideosData();

  const handleAddToPlaylist = () => {
    if (userData) {
      togglePlaylistModalState();
    } else {
      navigate('/login');
    }
  };

  const showSingleVideo = (videoID) => navigate(`/videos/${videoID}`);
  const isInHistory = isAlreadyInHistory(_id, history);

  return (
    <div className='video-details-card'>
      <div
        onClick={() => showSingleVideo(_id)}
        className='video-details-card-header'
      >
        <img
          className='thumbnail'
          src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
          alt='thumbnail'
        />
      </div>
      <div className='video-details-card-body'>
        <h2 className='text-sm'>{title}</h2>
      </div>
      <div className='video-details-card-footer'>
        <div className='creator-details'>
          <img
            className='avatar avatar-md creator-avatar'
            src={creatorAvatar}
            alt={`${creator}-avatar`}
          />
          <span className='creator-name m-xs-l text-sm'>{creator}</span>
        </div>
        <div
          onClick={() => setShowCardControls((prev) => !prev)}
          className='video-details-card-controls text-sm'
        >
          {showCardControls && (
            <div className='video-card-controls'>
              <div className='video-card-control m-xs-tb'>
                <span className='material-icons'>watch_later</span>
                add to watch later
              </div>
              <div
                onClick={handleAddToPlaylist}
                className='video-card-control m-xs-tb'
              >
                <span className='material-icons'>playlist_add</span>
                add to playlist
              </div>
              {isInHistory && (
                <div
                  onClick={() =>
                    handleRemoveFromHistory({
                      videoID: _id,
                      userData,
                      dispatchVideosData,
                    })
                  }
                  className='video-card-control m-xs-tb'
                >
                  <span className='material-icons'>delete</span>
                  Remove from history
                </div>
              )}
            </div>
          )}
          <span className='material-icons-outlined'>more_vert</span>
        </div>
      </div>
    </div>
  );
};
