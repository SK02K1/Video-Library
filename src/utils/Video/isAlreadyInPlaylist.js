export const isAlreadyInPlaylist = (video, playlist) => {
  return Boolean(playlist.videos.find(({ _id }) => _id === video._id));
};
