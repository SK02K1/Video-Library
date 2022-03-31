import './PlaylistCard.css';

export const PlaylistCard = ({ playlist }) => {
  const { title } = playlist;

  return (
    <div className='playlist-card'>
      <span className='material-icons-round icon-close'>delete</span>
      <h2 className='text-lg'>{title}</h2>
    </div>
  );
};
