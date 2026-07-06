import { PoseCard } from './PoseCard';

export const FavoritesView = ({ poses, favorites, onSelectPose, onToggleFavorite, onBack }) => {
  const favoritePoses = poses.filter((p) => favorites.includes(p.id));

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-dark-card hover:bg-dark-border transition-all duration-200 text-text-secondary hover:text-text-primary font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-2">Mis Favoritos</h2>
        <p className="text-text-tertiary">
          Tienes <span className="text-accent-primary font-semibold">{favoritePoses.length}</span> pose{favoritePoses.length !== 1 ? 's' : ''} guardada{favoritePoses.length !== 1 ? 's' : ''}
        </p>
      </div>

      {favoritePoses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-dark-card border border-dark-border rounded-xl">
          <svg className="w-16 h-16 text-text-tertiary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <h3 className="text-xl font-semibold text-text-primary mb-2">Sin favoritos aún</h3>
          <p className="text-text-secondary">
            Haz clic en el corazón en cualquier pose para agregarla a favoritos.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
          {favoritePoses.map((pose) => (
            <PoseCard
              key={pose.id}
              pose={pose}
              onClick={() => onSelectPose(pose)}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};
