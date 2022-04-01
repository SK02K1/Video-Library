import { VIDEOS_ACTIONS } from '../utils';

export const videosDataReducer = (state, { type, payload }) => {
  switch (type) {
    case VIDEOS_ACTIONS.INITIALIZE_VIDEOS:
      return { ...state, videos: payload.videos };
    case VIDEOS_ACTIONS.INITIALIZE_VIDEOS_DATA:
      return { ...state, ...payload.videosData };
    case VIDEOS_ACTIONS.UPDATE_HISTORY:
      return { ...state, history: payload.updatedHistory };
    case VIDEOS_ACTIONS.CLEAR_HISTORY:
      return { ...state, history: [] };
    case VIDEOS_ACTIONS.UPDATE_PLAYLISTS:
      return { ...state, playlists: payload.updatedPlaylists };
    case VIDEOS_ACTIONS.ADD_TO_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload.playlist._id ? payload.playlist : playlist
        ),
      };
    case VIDEOS_ACTIONS.RESET_VIDEOS_DATA:
      return { ...state, history: [], playlists: [] };
    default:
      return { ...state };
  }
};
