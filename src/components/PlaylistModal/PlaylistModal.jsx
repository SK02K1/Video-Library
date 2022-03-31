import { usePlaylistModal } from '../../contexts';
import './PlaylistModal.css';

const dummyPlaylistData = [
  { id: 1, title: 'playlist-1' },
  { id: 2, title: 'playlist-2' },
  { id: 3, title: 'playlist-3' },
  { id: 4, title: 'playlist-4' },
  { id: 5, title: 'playlist-5' },
];

export const PlaylistModal = () => {
  const { isPlaylistModalActive, togglePlaylistModalState } =
    usePlaylistModal();

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
          {dummyPlaylistData.map(({ id, title }) => (
            <li key={id} className='list-item'>
              <label htmlFor={title}>
                <input type='checkbox' name='playlist' id={title} />
                <span className='m-sm-l'>{title}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className='playlist-modal-footer m-sm-b'>
          <form>
            <input
              className='input m-xs-r'
              type='text'
              placeholder='create new playlist'
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
