import './PlaylistModal.css';
import { useState } from 'react';
import { useAuth, usePlaylistModal, useVideosData } from '../../contexts';
import { handleAddToPlaylist, handleCreatePlaylist } from '../../services';
import { isAlreadyInPlaylist } from '../../utils';

export const PlaylistModal = () => {
  const [title, setTitle] = useState('');
  const { userData } = useAuth();
  const { isPlaylistModalActive, togglePlaylistModalState, videoDetails } =
    usePlaylistModal();
  const {
    videosDataState: { playlists },
    dispatchVideosData,
  } = useVideosData();

  const handlePlaylistModal = (e) => {
    const classList = e.target.classList;
    if (
      classList.contains('icon-close') ||
      classList.contains('playlist-modal-wrapper')
    ) {
      togglePlaylistModalState();
    }
  };

  const playlistCheckboxHandler = (e, playlist) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      handleAddToPlaylist({
        video: videoDetails,
        playlist,
        userData,
        dispatchVideosData,
      });
    } else {
      console.log('remove from playlist');
    }
  };

  return (
    <div
      onClick={handlePlaylistModal}
      className={`playlist-modal-wrapper playlist-modal-active-${isPlaylistModalActive} `}
    >
      <div className='playlist-modal'>
        <div className='playlist-modal-header m-sm-b'>
          <span className='material-icons icon-close'>close</span>
        </div>
        <ul role='list' className='playlist-modal-body m-sm-b list'>
          {playlists.map((playlist) => {
            const { _id, title } = playlist;
            const videoIsInPlaylist = isAlreadyInPlaylist(
              videoDetails,
              playlist
            );
            return (
              <li key={_id} className='list-item'>
                <label htmlFor={_id + title}>
                  <input
                    onChange={(e) => playlistCheckboxHandler(e, playlist)}
                    type='checkbox'
                    name='playlist'
                    id={_id + title}
                    checked={videoIsInPlaylist}
                  />
                  <span className='m-sm-l'>{title}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <div className='playlist-modal-footer m-sm-b'>
          <form
            onSubmit={(e) =>
              handleCreatePlaylist({
                e,
                title,
                setTitle,
                dispatchVideosData,
                userData,
              })
            }
          >
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className='input m-xs-r'
              type='text'
              placeholder='create new playlist'
              required
            />
            <button className='btn btn-fab'>
              <span className='material-icons'>add</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
