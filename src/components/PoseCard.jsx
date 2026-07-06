export const PoseCard = ({ pose, onClick, isFavorite, onToggleFavorite }) => {
  return (
    <div
      onClick={onClick}
      className="group relative card overflow-hidden cursor-pointer card-hover"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-dark-bg">
        <img
          src={pose.archivo}
          alt={pose.titulo}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="gradient-overlay" />

        {/* Info overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-accent-primary text-dark-bg rounded-md font-semibold">
              {pose.categoria.charAt(0).toUpperCase() + pose.categoria.slice(1)}
            </span>
            <span className="text-xs px-2 py-1 bg-dark-card text-text-secondary rounded-md border border-dark-border">
              {pose.dificultad}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-text-primary text-sm line-clamp-2 group-hover:text-accent-primary transition-colors">
          {pose.titulo}
        </h3>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(pose.id);
        }}
        className="absolute top-3 right-3 p-2 rounded-lg bg-dark-bg/70 backdrop-blur-sm hover:bg-accent-danger transition-all duration-200 shadow-sm-dark"
        aria-label={isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
      >
        <svg className={`w-5 h-5 transition-all ${isFavorite ? 'text-accent-danger fill-current' : 'text-text-secondary'}`} viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </div>
  );
};
