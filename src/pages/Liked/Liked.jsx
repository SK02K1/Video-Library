import { useVideosData } from '../../contexts';

export const Liked = () => {
  const {
    videosDataState: { likes },
  } = useVideosData();
  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>
        Liked videos ({likes.length})
      </h1>
    </div>
  );
};
