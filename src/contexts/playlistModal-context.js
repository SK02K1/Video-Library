import { createContext, useState, useContext } from 'react';

const PlaylistModalContext = createContext(null);

const PlaylistModalProvider = ({ children }) => {
  const [isPlaylistModalActive, setIsPlaylistModalActive] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);

  const togglePlaylistModalState = () =>
    setIsPlaylistModalActive((prevState) => !prevState);

  const updateVideoDetails = (details) => setVideoDetails(details);

  return (
    <PlaylistModalContext.Provider
      value={{
        isPlaylistModalActive,
        togglePlaylistModalState,
        videoDetails,
        updateVideoDetails,
      }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
