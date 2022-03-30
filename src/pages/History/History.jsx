import { useVideosData } from '../../contexts';

export const History = () => {
  const {
    videosDataState: { history },
  } = useVideosData();

  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>History</h1>
      <p className='text-center m-xs-tb'>
        videos in watch history: {history.length}
      </p>
    </div>
  );
};
