import { VIDEOS_ACTIONS } from '../utils';

export const videosDataReducer = (state, { type, payload }) => {
  switch (type) {
    case VIDEOS_ACTIONS.INITIALIZE_VIDEOS:
      return { ...state, videos: payload.videos };
    case VIDEOS_ACTIONS.INITIALIZE_VIDEOS_DATA:
      return { ...state, ...payload.videosData };
    case VIDEOS_ACTIONS.UPDATE_HISTORY:
      return { ...state, history: payload.updatedHistory };
    case VIDEOS_ACTIONS.RESET_VIDEOS_DATA:
      return { ...state, history: [] };
    default:
      return { ...state };
  }
};
