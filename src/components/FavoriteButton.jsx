import React, { useState } from 'react';

function FavoriteButton({ onFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false); // State to manage favorite status

   // Toggle the favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        padding: '10px 20px',
        backgroundColor: isFavorite ? '#dc3545' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
}

export default FavoriteButton;
