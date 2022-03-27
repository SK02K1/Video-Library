import { useEffect } from 'react';
import { useAxios } from '../../hooks';
import { useCategories, useVideos } from '../../contexts';
import { filterVideosByTag, VIDEOS_ACTIONS } from '../../utils';
import { FilterChipBar, Loader, VideoDetailsCard } from '../../components';

export const Videos = () => {
  const { data, showLoader } = useAxios('/api/videos');
  const {
    videosState: { videos },
    dispatchVideos,
  } = useVideos();

  const {
    categoriesState: { selectedCategory },
  } = useCategories();

  useEffect(() => {
    if (data) {
      dispatchVideos({
        type: VIDEOS_ACTIONS.INITIALIZE_VIDEOS,
        payload: { videos: data.videos },
      });
    }
  }, [data, dispatchVideos]);

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : filterVideosByTag(videos, selectedCategory);

  return (
    <div className='content'>
      {showLoader && <Loader />}
      <FilterChipBar />
      <div className='grid-container auto videos'>
        {filteredVideos.map((videoDetails) => {
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
