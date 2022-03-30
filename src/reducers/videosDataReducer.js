import { VIDEOS_ACTIONS } from '../utils';

export const videosDataReducer = (state, { type, payload }) => {
  switch (type) {
    case VIDEOS_ACTIONS.INITIALIZE_VIDEOS:
      return { ...state, videos: payload.videos };
    default:
      return { ...state };
  }
};
