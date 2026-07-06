import { PoseCard } from './PoseCard';
import { EmptyState } from './EmptyState';

export const PoseGrid = ({
  poses,
  onSelectPose,
  isFavorite,
  onToggleFavorite,
  resultsCount,
  totalCount,
  hasActiveFilters,
}) => {
  if (poses.length === 0) {
    return <EmptyState hasActiveFilters={hasActiveFilters} />;
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-text-tertiary text-sm font-medium">
          Mostrando <span className="text-accent-primary font-semibold">{resultsCount}</span> de{' '}
          <span className="text-accent-primary font-semibold">{totalCount}</span> poses
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-max">
        {poses.map((pose) => (
          <PoseCard
            key={pose.id}
            pose={pose}
            onClick={() => onSelectPose(pose)}
            isFavorite={isFavorite(pose.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};
