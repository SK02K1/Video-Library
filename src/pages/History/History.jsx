import { useVideosData } from '../../contexts';
import { VideoDetailsCard } from '../../components';
import { Link } from 'react-router-dom';

export const History = () => {
  const {
    videosDataState: { history },
  } = useVideosData();

  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>History</h1>
      <div className='grid-container auto m-sm-tb'>
        {history.length ? (
          history.map((videoDetails) => (
            <VideoDetailsCard
              key={videoDetails._id}
              videoDetails={videoDetails}
            />
          ))
        ) : (
          <div className='text-center'>
            <p className='m-xs-tb'>Nothing in the watch history</p>
            <Link className='btn btn-primary m-xs-tb' to='/videos'>
              Watch now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
