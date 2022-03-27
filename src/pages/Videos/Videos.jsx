import { useEffect } from 'react';
import { useAxios } from '../../hooks';
import { useVideos } from '../../contexts';
import { VIDEOS_ACTIONS } from '../../utils';
import { Loader, VideoDetailsCard } from '../../components';

export const Videos = () => {
  const { data, error, showLoader } = useAxios('/api/videos');
  const {
    videosState: { videos },
    dispatchVideos,
  } = useVideos();

  useEffect(() => {
    if (data) {
      dispatchVideos({
        type: VIDEOS_ACTIONS.INITIALIZE_VIDEOS,
        payload: { videos: data.videos },
      });
    }
  }, [data, dispatchVideos]);

  return (
    <div className='content'>
      {showLoader && <Loader />}
      <div className='grid-container auto videos'>
        {videos.map((videoDetails) => {
          return (
            <VideoDetailsCard
              key={videoDetails._id}
              videoDetails={videoDetails}
            />
          );
        })}
      </div>
    </div>
  );
};
