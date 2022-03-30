import axios from 'axios';
import { VIDEOS_ACTIONS } from '../utils';

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
