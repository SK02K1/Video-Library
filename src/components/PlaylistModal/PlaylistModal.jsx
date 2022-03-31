import './PlaylistModal.css';
import { useState } from 'react';
import { useAuth, usePlaylistModal, useVideosData } from '../../contexts';
import { handleCreatePlaylist } from '../../services';

export const PlaylistModal = () => {
  const [title, setTitle] = useState('');
  const { userData } = useAuth();
  const { isPlaylistModalActive, togglePlaylistModalState } =
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
          {playlists.map(({ _id, title }) => (
            <li key={_id} className='list-item'>
              <label htmlFor={_id + title}>
                <input type='checkbox' name='playlist' id={_id + title} />
                <span className='m-sm-l'>{title}</span>
              </label>
            </li>
          ))}
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
