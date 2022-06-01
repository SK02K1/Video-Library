import { useState, useEffect, useRef } from 'react';
import { SearchBar, Loader, VideoDetailsCard } from '../../components';
import { useVideosData } from '../../contexts';
import { useAxios, useDocumentTitle } from '../../hooks';
import { VIDEOS_ACTIONS } from '../../utils';
import { filterVideosBySearchQuery } from '../../utils';

export const Search = () => {
  useDocumentTitle('Search');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(null);
  const updateSearchQuery = (query) => setSearchQuery(query);
  const { data, showLoader } = useAxios('/api/videos');
  const timeoutID = useRef(null);

  const {
    videosDataState: { videos },
    dispatchVideosData,
  } = useVideosData();

  useEffect(() => {
    if (data) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.INITIALIZE_VIDEOS,
        payload: { videos: data.videos },
      });
    }
  }, [data, dispatchVideosData]);

  useEffect(() => {
    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
    }
    timeoutID.current = setTimeout(() => {
      setFilteredVideos(
        searchQuery ? filterVideosBySearchQuery(videos, searchQuery) : null
      );
    }, 600);
  }, [videos, searchQuery, timeoutID]);

  return (
    <div className='content'>
      {showLoader && <Loader />}
      <SearchBar query={searchQuery} handleQueryChange={updateSearchQuery} />
      <div className='grid-container auto m-md-tb'>
        {filteredVideos &&
          searchQuery &&
          filteredVideos.map((videoDetails) => (
            <VideoDetailsCard
              key={videoDetails._id}
              videoDetails={videoDetails}
            />
          ))}
      </div>
      {searchQuery && filteredVideos && !Boolean(filteredVideos?.length) && (
        <p className='text-center m-sm-tb'>no video found</p>
      )}
    </div>
  );
};
