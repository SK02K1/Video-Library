import './History.css';
import { useAuth, useVideosData } from '../../contexts';
import { VideoDetailsCard } from '../../components';
import { Link } from 'react-router-dom';
import { handleClearHistory } from '../../services';
import { useDocumentTitle } from '../../hooks';

export const History = () => {
  useDocumentTitle('History');
  const {
    videosDataState: { history },
    dispatchVideosData,
  } = useVideosData();

  const {
    userData: { encodedToken },
  } = useAuth();

  return (
    <div className='content'>
      <header className='history-header'>
        <h1 className='text-xl'>History</h1>
        <button
          onClick={() =>
            handleClearHistory({ encodedToken, dispatchVideosData })
          }
          className='btn btn-danger'
        >
          Clear history
        </button>
      </header>
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
