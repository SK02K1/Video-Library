import { createContext, useReducer, useContext, useEffect } from 'react';
import { videosDataReducer } from '../reducers';
import { VIDEOS_ACTIONS } from '../utils';
import { useAuth } from './auth-context';

const VideosDataContext = createContext(null);

const videosDataInitialState = {
  videos: [],
  history: [],
};

const VideosDataProvider = ({ children }) => {
  const { userData } = useAuth();
  const [videosDataState, dispatchVideosData] = useReducer(
    videosDataReducer,
    videosDataInitialState
  );

  useEffect(() => {
    if (userData) {
      const { history } = userData;
      dispatchVideosData({
        type: VIDEOS_ACTIONS.INITIALIZE_VIDEOS_DATA,
        payload: { videosData: { history } },
      });
    }
  }, [userData]);

  return (
    <VideosDataContext.Provider value={{ videosDataState, dispatchVideosData }}>
      {children}
    </VideosDataContext.Provider>
  );
};

const useVideosData = () => useContext(VideosDataContext);

export { VideosDataProvider, useVideosData, videosDataInitialState };
