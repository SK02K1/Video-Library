import { createContext, useState, useContext } from 'react';

const PlaylistModalContext = createContext(null);

const PlaylistModalProvider = ({ children }) => {
  const [isPlaylistModalActive, setIsPlaylistModalActive] = useState(false);

  const togglePlaylistModalState = () =>
    setIsPlaylistModalActive((prevState) => !prevState);

  return (
    <PlaylistModalContext.Provider
      value={{ isPlaylistModalActive, togglePlaylistModalState }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
