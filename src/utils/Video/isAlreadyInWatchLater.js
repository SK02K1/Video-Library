export const isAlreadyInWatchLater = (videoID, watchlater) =>
  Boolean(watchlater.find(({ _id }) => _id === videoID));
