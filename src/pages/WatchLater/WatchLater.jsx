import { useVideosData } from '../../contexts';

export const WatchLater = () => {
  const {
    videosDataState: { watchlater },
  } = useVideosData();
  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>
        Watch Later ({watchlater.length})
      </h1>
    </div>
  );
};
