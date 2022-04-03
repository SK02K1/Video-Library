import './SingleVideo.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useAxios, useDocumentTitle } from '../../hooks';
import { Loader } from '../../components';
import { useState, useEffect } from 'react';
import {
  isAlreadyInHistory,
  isAlreadyLiked,
  isAlreadyInWatchLater,
} from '../../utils';
import { useAuth, usePlaylistModal, useVideosData } from '../../contexts';
import {
  handleAddToHistory,
  handleAddToLikes,
  handleRemoveFromLikes,
  handleAddToWatchLater,
  handleRemoveFromWatchLater,
} from '../../services';

export const SingleVideo = () => {
  const { setDocumentTitle } = useDocumentTitle('Videos');
  const { videoID } = useParams();
  const { data, showLoader } = useAxios(`/api/video/${videoID}`);
  const [video, setVideo] = useState({});
  const { title, description } = video;
  const { userData } = useAuth();
  const navigate = useNavigate();
  const { togglePlaylistModalState, updateVideoDetails } = usePlaylistModal();
  const {
    videosDataState: { history, likes, watchlater },
    dispatchVideosData,
  } = useVideosData();
  const isInHistory = isAlreadyInHistory(videoID, history);
  const isLiked = isAlreadyLiked(videoID, likes);
  const isInWatchlater = isAlreadyInWatchLater(videoID, watchlater);

  const handleAddToPlaylist = () => {
    if (userData) {
      togglePlaylistModalState();
      updateVideoDetails(video);
    } else {
      navigate('/login');
    }
  };

  const handleToggleLiked = () => {
    if (userData) {
      isLiked
        ? handleRemoveFromLikes({ video, userData, dispatchVideosData })
        : handleAddToLikes({ video, userData, dispatchVideosData });
    } else {
      navigate('/login');
    }
  };

  const handleToggleWatchlater = () => {
    if (userData) {
      isInWatchlater
        ? handleRemoveFromWatchLater({ video, userData, dispatchVideosData })
        : handleAddToWatchLater({ video, userData, dispatchVideosData });
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (data?.video) {
      setVideo(data.video);
      setDocumentTitle(data.video.title);
    }
  }, [data, setDocumentTitle]);

  useEffect(() => {
    if (!isInHistory && userData && video?._id) {
      const { encodedToken } = userData;
      handleAddToHistory({ video, encodedToken, dispatchVideosData });
    }
  }, [isInHistory, dispatchVideosData, userData, video]);

  return (
    <div className='content'>
      {showLoader && <Loader />}
      <div className='video-player-container'>
        <iframe
          className='player'
          src={`https://www.youtube.com/embed/${videoID}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='video-controls m-md-tb'>
        <span
          onClick={handleToggleLiked}
          className={`material-icons active-${isLiked}`}
        >
          thumb_up
        </span>
        <span onClick={handleAddToPlaylist} className='material-icons'>
          playlist_add
        </span>
        <span
          onClick={handleToggleWatchlater}
          className={`material-icons active-${isInWatchlater}`}
        >
          watch_later
        </span>
        <span className='material-icons'>share</span>
      </div>
      <div className='video-details'>
        <h1 className='video-title text-xl m-xs-t'>{title}</h1>
        <p className='video-description text-xs m-xs-t'>{description}</p>
      </div>
    </div>
  );
};
