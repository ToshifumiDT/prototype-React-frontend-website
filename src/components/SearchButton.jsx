import React from 'react';

function SearchButton({ onSearch }) {
  return (
    <button onClick={onSearch}>
      Search
    </button>
  );
}

export default SearchButton;
