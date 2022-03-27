export const filterVideosByTag = (videos, selectedTag) => {
  return videos.filter(({ tags }) => tags.includes(selectedTag.toLowerCase()));
};
