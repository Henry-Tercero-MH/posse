import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('posebook_favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing favorites:', e);
      }
    }
  }, []);

  const toggleFavorite = (poseId) => {
    setFavorites((prev) => {
      const updated = prev.includes(poseId)
        ? prev.filter((id) => id !== poseId)
        : [...prev, poseId];
      localStorage.setItem('posebook_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (poseId) => favorites.includes(poseId);

  return { favorites, toggleFavorite, isFavorite };
};
