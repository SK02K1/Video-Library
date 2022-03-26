import { useEffect } from 'react';
import { useAxios } from '../../hooks';
import { useVideos } from '../../contexts';
import { VIDEOS_ACTIONS } from '../../utils';
import { Loader } from '../../components';

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

  return <div className='content'>{showLoader && <Loader />}</div>;
};
