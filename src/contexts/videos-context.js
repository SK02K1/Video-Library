import { createContext, useReducer, useContext } from 'react';
import { videosReducer } from '../reducers';

const VideosContext = createContext(null);

const videosInitialState = {
  videos: [],
};

const VideosProvider = ({ children }) => {
  const [videosState, dispatchVideos] = useReducer(
    videosReducer,
    videosInitialState
  );
  return (
    <VideosContext.Provider value={{ videosState, dispatchVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos, videosInitialState };
