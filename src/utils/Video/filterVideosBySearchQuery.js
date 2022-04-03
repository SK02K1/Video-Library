export const filterVideosBySearchQuery = (videos, searchQuery) => {
  const query = searchQuery.toLowerCase();
  return videos.filter(({ title, tags, creator }) => {
    return (
      title.toLowerCase().includes(query) ||
      creator.toLowerCase().includes(query) ||
      tags.includes(searchQuery)
    );
  });
};
