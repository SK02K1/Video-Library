import axios from 'axios';
import { VIDEOS_ACTIONS } from '../utils';
import toast from 'react-hot-toast';

export const handleAddToHistory = async ({
  video,
  encodedToken,
  dispatchVideosData,
}) => {
  try {
    const {
      data: { history },
      status,
    } = await axios.post(
      '/api/user/history',
      { video },
      { headers: { authorization: encodedToken } }
    );
    if (status === 201) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.UPDATE_HISTORY,
        payload: { updatedHistory: history },
      });
    }
  } catch (error) {
    console.error(error.response);
  }
};

export const handleClearHistory = async ({
  encodedToken,
  dispatchVideosData,
}) => {
  try {
    const { status } = await axios.delete('/api/user/history/all', {
      headers: { authorization: encodedToken },
    });
    if (status === 200) {
      dispatchVideosData({ type: VIDEOS_ACTIONS.CLEAR_HISTORY });
    }
  } catch (error) {
    console.error(error.response);
  }
};

export const handleRemoveFromHistory = async ({
  videoID,
  userData: { encodedToken },
  dispatchVideosData,
}) => {
  try {
    const {
      data: { history },
      status,
    } = await axios.delete(`/api/user/history/${videoID}`, {
      headers: { authorization: encodedToken },
    });

    if (status === 200) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.UPDATE_HISTORY,
        payload: { updatedHistory: history },
      });
      toast.success('Successfully removed from history');
    }
  } catch (error) {
    console.error(error.response);
  }
};

export const handleCreatePlaylist = async ({
  e,
  title,
  dispatchVideosData,
  setTitle,
  userData,
}) => {
  e.preventDefault();
  try {
    const {
      data: { playlists },
      status,
    } = await axios.post(
      '/api/user/playlists',
      { playlist: { title } },
      { headers: { authorization: userData.encodedToken } }
    );
    if (status === 201) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.UPDATE_PLAYLISTS,
        payload: { updatedPlaylists: playlists },
      });
      toast.success('Playlist successfully created');
      setTitle('');
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const handleDeletePlaylist = async ({
  playlistID,
  dispatchVideosData,
  userData,
}) => {
  try {
    const {
      data: { playlists },
      status,
    } = await axios.delete(`/api/user/playlists/${playlistID}`, {
      headers: { authorization: userData.encodedToken },
    });
    if (status === 200) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.UPDATE_PLAYLISTS,
        payload: { updatedPlaylists: playlists },
      });
      toast.success('Playlist successfully deleted');
    }
  } catch (error) {
    console.error(error.response);
    toast.error('Error in deleting playlist');
  }
};

export const handleAddToPlaylist = async ({
  video,
  playlist: { _id },
  userData,
  dispatchVideosData,
}) => {
  try {
    const {
      data: { playlist },
      status,
    } = await axios.post(
      `/api/user/playlists/${_id}`,
      { video },
      { headers: { authorization: userData.encodedToken } }
    );
    if (status === 201) {
      dispatchVideosData({
        type: VIDEOS_ACTIONS.TOGGLE_PLAYLIST_VIDEO,
        payload: { playlist },
      });
      toast.success('Video successfully added');
    }
  } catch (error) {
    console.error(error);
    toast.error('Failed to add video in the playlist');
  }
};
