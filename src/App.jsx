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
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Header
        onFavoritesClick={() => setView(view === 'gallery' ? 'favorites' : 'gallery')}
        favoriteCount={favorites.length}
      />

      <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-7xl">
        {view === 'gallery' ? (
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Search */}
            <div className="w-full">
              <SearchInput value={search} onChange={setSearch} />
            </div>

            {/* Filters and Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Filter Sidebar - Responsive */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
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
                </div>
              </aside>

              {/* Grid - Main Content */}
              <div className="lg:col-span-3">
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
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <FavoritesView
              poses={poses}
              favorites={favorites}
              onSelectPose={handleSelectPose}
              onToggleFavorite={toggleFavorite}
              onBack={() => setView('gallery')}
            />
          </div>
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
