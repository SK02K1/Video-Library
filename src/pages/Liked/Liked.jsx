import { useVideosData } from '../../contexts';
import { VideoDetailsCard } from '../../components';
import { useDocumentTitle } from '../../hooks';

export const Liked = () => {
  useDocumentTitle('Liked videos');
  const {
    videosDataState: { likes },
  } = useVideosData();
  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>
        Liked videos ({likes.length})
      </h1>
      <div className='grid-container auto m-md-tb'>
        {likes.map((videoDetails) => (
          <VideoDetailsCard
            key={videoDetails._id}
            videoDetails={videoDetails}
          />
        ))}
      </div>
    </div>
  );
};
