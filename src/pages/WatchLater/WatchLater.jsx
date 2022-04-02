import { useVideosData } from '../../contexts';
import { VideoDetailsCard } from '../../components';

export const WatchLater = () => {
  const {
    videosDataState: { watchlater },
  } = useVideosData();
  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>
        Watch Later ({watchlater.length})
      </h1>
      <div className='grid-container auto m-md-tb'>
        {watchlater.map((videoDetails) => (
          <VideoDetailsCard
            key={videoDetails._id}
            videoDetails={videoDetails}
          />
        ))}
      </div>
    </div>
  );
};
