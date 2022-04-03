import './SearchBar.css';

export const SearchBar = ({ query, handleQueryChange }) => {
  return (
    <div className='search-bar'>
      <input
        onChange={(e) => handleQueryChange(e.target.value)}
        className='input'
        type='text'
        value={query}
        name='search-query'
        id='search-query'
        placeholder='Search videos'
      />
      {query && (
        <span
          onClick={() => handleQueryChange('')}
          className='material-icons-outlined icon-clear'
        >
          clear
        </span>
      )}
    </div>
  );
};
