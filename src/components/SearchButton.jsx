import React from 'react';

// Search button
function SearchButton({ onSearch }) {
  return (
    <button
      onClick={onSearch}
      style={{
        padding: '10px 20px',
        marginTop: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Search
    </button>
  );
}

export default SearchButton;
