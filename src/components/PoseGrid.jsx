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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-text-secondary text-sm">
          Mostrando <span className="font-semibold text-accent-primary">{resultsCount}</span> de{' '}
          <span className="font-semibold text-accent-primary">{totalCount}</span> poses
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
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
