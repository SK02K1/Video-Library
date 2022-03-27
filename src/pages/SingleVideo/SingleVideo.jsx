import './SingleVideo.css';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../hooks';
import { Loader } from '../../components';
import { useState, useEffect } from 'react';

export const SingleVideo = () => {
  const { videoID } = useParams();
  const { data, showLoader } = useAxios(`/api/video/${videoID}`);
  const [{ title, description }, setVideoData] = useState({});

  useEffect(() => {
    if (data?.video) {
      setVideoData(data.video);
    }
  }, [data]);

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
        <span className='material-icons'>thumb_up</span>
        <span className='material-icons'>thumb_down_alt</span>
        <span className='material-icons'>playlist_add</span>
        <span className='material-icons'>watch_later</span>
        <span className='material-icons'>share</span>
      </div>
      <div className='video-details'>
        <h1 className='video-title text-xl m-xs-t'>{title}</h1>
        <p className='video-description text-xs m-xs-t'>{description}</p>
      </div>
    </div>
  );
};
