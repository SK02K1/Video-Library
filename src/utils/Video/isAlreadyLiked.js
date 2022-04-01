export const isAlreadyLiked = (videoID, likedVideos) =>
  Boolean(likedVideos.find(({ _id }) => _id === videoID));
