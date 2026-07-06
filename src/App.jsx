import { useState, useEffect, useMemo } from 'react';
import poses from './data/poses.json';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { FilterBar } from './components/FilterBar';
import { PoseGrid } from './components/PoseGrid';
import { PoseModal } from './components/PoseModal';
import { FavoritesView } from './components/FavoritesView';
import { useFavorites } from './hooks/useFavorites';
import { usePoseFilters } from './hooks/usePoseFilters';
import './App.css';

export default function App() {
  const [view, setView] = useState('gallery'); // 'gallery' | 'favorites'
  const [selectedPose, setSelectedPose] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const {
    filteredPoses,
    search,
    setSearch,
    selectedCategories,
    toggleCategory,
    selectedOcasiones,
    toggleOcasion,
    selectedDificultades,
    toggleDificultad,
    clearAllFilters,
    hasActiveFilters,
  } = usePoseFilters(poses);

  const selectedPoseIndex = useMemo(() => {
    return filteredPoses.findIndex((p) => p.id === selectedPose?.id);
  }, [selectedPose, filteredPoses]);

  const canGoPrevious = selectedPoseIndex > 0;
  const canGoNext = selectedPoseIndex < filteredPoses.length - 1;

  const handlePreviousPose = () => {
    if (canGoPrevious) {
      setSelectedPose(filteredPoses[selectedPoseIndex - 1]);
    }
  };

  const handleNextPose = () => {
    if (canGoNext) {
      setSelectedPose(filteredPoses[selectedPoseIndex + 1]);
    }
  };

  const handleSelectPose = (pose) => {
    setSelectedPose(pose);
    setIsModalOpen(true);
  };

  const handleClosePose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPose(null), 200);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header
        onFavoritesClick={() => setView(view === 'gallery' ? 'favorites' : 'gallery')}
        favoriteCount={favorites.length}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'gallery' ? (
          <>
            <div className="space-y-6">
              <SearchInput value={search} onChange={setSearch} />

              <FilterBar
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                selectedOcasiones={selectedOcasiones}
                toggleOcasion={toggleOcasion}
                selectedDificultades={selectedDificultades}
                toggleDificultad={toggleDificultad}
                clearAllFilters={clearAllFilters}
                hasActiveFilters={hasActiveFilters}
              />

              <PoseGrid
                poses={filteredPoses}
                onSelectPose={handleSelectPose}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                resultsCount={filteredPoses.length}
                totalCount={poses.length}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </>
        ) : (
          <FavoritesView
            poses={poses}
            favorites={favorites}
            onSelectPose={handleSelectPose}
            onToggleFavorite={toggleFavorite}
            onBack={() => setView('gallery')}
          />
        )}
      </main>

      <PoseModal
        pose={selectedPose}
        isOpen={isModalOpen}
        onClose={handleClosePose}
        onPrevious={handlePreviousPose}
        onNext={handleNextPose}
        canPrevious={canGoPrevious}
        canNext={canGoNext}
        isFavorite={isFavorite(selectedPose?.id)}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
