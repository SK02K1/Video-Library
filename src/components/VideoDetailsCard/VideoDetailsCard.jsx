import { useLocation, useNavigate } from 'react-router-dom';
import './VideoDetailsCard.css';

export const VideoDetailsCard = ({ videoDetails }) => {
  const { _id, title, creator, creatorAvatar } = videoDetails;
  const navigate = useNavigate();

  const showSingleVideo = (videoID) => navigate(`/videos/${videoID}`);

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
        <div className='video-details-card-controls'>
          <span className='material-icons-outlined'>more_vert</span>
        </div>
      </div>
    </div>
  );
};
