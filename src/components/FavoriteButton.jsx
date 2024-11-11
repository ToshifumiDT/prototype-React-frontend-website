import "../styles/Buttons.css";
import { useState } from "react";

function FavoriteButton({ onFavorite = () => {} }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite();
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
}

export default FavoriteButton;
