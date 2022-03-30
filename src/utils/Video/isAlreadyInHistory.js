export const isAlreadyInHistory = (videoID, history) =>
  history.find(({ _id }) => _id === videoID);
