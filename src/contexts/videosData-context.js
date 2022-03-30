import { createContext, useReducer, useContext } from 'react';
import { videosDataReducer } from '../reducers';

const VideosDataContext = createContext(null);

const videosDataInitialState = {
  videos: [],
};

const VideosDataProvider = ({ children }) => {
  const [videosDataState, dispatchVideosData] = useReducer(
    videosDataReducer,
    videosDataInitialState
  );
  return (
    <VideosDataContext.Provider value={{ videosDataState, dispatchVideosData }}>
      {children}
    </VideosDataContext.Provider>
  );
};

const useVideosData = () => useContext(VideosDataContext);

export { VideosDataProvider, useVideosData, videosDataInitialState };
