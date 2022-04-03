import { useEffect } from 'react';
import { useAxios, useDocumentTitle } from '../../hooks';
import { useCategories, useVideosData } from '../../contexts';
import { filterVideosByTag, VIDEOS_ACTIONS } from '../../utils';
import { FilterChipBar, Loader, VideoDetailsCard } from '../../components';

export const Videos = () => {
  useDocumentTitle('Videos');
  const { data, showLoader } = useAxios('/api/videos');
  const {
    videosDataState: { videos },
    dispatchVideosData,
  } = useVideosData();

  const {
    categoriesState: { selectedCategory },
  } = useCategories();

  useEffect(() => {
    if (data) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.INITIALIZE_VIDEOS,
        payload: { videos: data.videos },
      });
    }
  }, [data, dispatchVideosData]);

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
