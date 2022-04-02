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
    case VIDEOS_ACTIONS.TOGGLE_PLAYLIST_VIDEO:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload.playlist._id ? payload.playlist : playlist
        ),
      };
    case VIDEOS_ACTIONS.TOGGLE_LIKED_VIDEO:
      return { ...state, likes: payload.updatedLikedVideos };
    case VIDEOS_ACTIONS.RESET_VIDEOS_DATA:
      return {
        ...state,
        history: [],
        playlists: [],
        likes: [],
        watchlater: [],
      };
    default:
      return { ...state };
  }
};
