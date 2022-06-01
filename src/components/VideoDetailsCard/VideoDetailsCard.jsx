import './VideoDetailsCard.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth, usePlaylistModal, useVideosData } from '../../contexts';
import {
  isAlreadyInHistory,
  isAlreadyLiked,
  isAlreadyInWatchLater,
} from '../../utils';
import {
  handleRemoveFromHistory,
  handleRemoveFromLikes,
  handleRemoveFromWatchLater,
  handleAddToWatchLater,
  handleRemoveFromPlaylist,
} from '../../services';

export const VideoDetailsCard = ({ videoDetails, playlistDetails }) => {
  const { _id, title, creator, creatorAvatar } = videoDetails;
  const [showCardControls, setShowCardControls] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userData } = useAuth();
  const { togglePlaylistModalState, updateVideoDetails } = usePlaylistModal();
  const {
    videosDataState: { history, likes, watchlater },
    dispatchVideosData,
  } = useVideosData();

  const showSingleVideo = (videoID) => navigate(`/videos/${videoID}`);
  const isInHistory = isAlreadyInHistory(_id, history);
  const isLiked = isAlreadyLiked(_id, likes);
  const isInWatchLater = isAlreadyInWatchLater(_id, watchlater);
  const isPlaylistPage = pathname.split('/')[1] === 'playlists';

  const handleAddToPlaylist = () => {
    if (userData) {
      updateVideoDetails(videoDetails);
      togglePlaylistModalState();
    } else {
      navigate('/login');
    }
  };

  const handleToggleWatchlater = () => {
    if (userData) {
      isInWatchLater
        ? handleRemoveFromWatchLater({
            video: videoDetails,
            userData,
            dispatchVideosData,
          })
        : handleAddToWatchLater({
            video: videoDetails,
            userData,
            dispatchVideosData,
          });
    } else {
      navigate('/login');
    }
  };

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
              {isInWatchLater ? (
                <div
                  onClick={handleToggleWatchlater}
                  className='video-card-control m-xs-tb'
                >
                  <span className='material-icons'>delete</span>
                  Remove from watch later
                </div>
              ) : (
                <div
                  onClick={handleToggleWatchlater}
                  className='video-card-control m-xs-tb'
                >
                  <span className='material-icons'>watch_later</span>
                  add to watch later
                </div>
              )}
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
              {isLiked && (
                <div
                  onClick={() =>
                    handleRemoveFromLikes({
                      video: videoDetails,
                      userData,
                      dispatchVideosData,
                    })
                  }
                  className='video-card-control m-xs-tb'
                >
                  <span className='material-icons'>delete</span>
                  Remove from liked videos
                </div>
              )}
              {isPlaylistPage && (
                <div
                  onClick={() =>
                    handleRemoveFromPlaylist({
                      video: videoDetails,
                      playlist: playlistDetails,
                      userData,
                      dispatchVideosData,
                    })
                  }
                  className='video-card-control m-xs-tb'
                >
                  <span className='material-icons'>delete</span>
                  Remove from this playlist
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
