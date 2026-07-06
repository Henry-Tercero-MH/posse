import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { HiUser, HiStar, HiCalendar } from 'react-icons/hi2';

export const PoseCard = ({ pose, onClick, isFavorite, onToggleFavorite }) => {
  return (
    <div
      onClick={onClick}
      className="group relative card overflow-hidden cursor-pointer card-hover flex flex-col"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[2/3] bg-dark-bg flex-shrink-0">
        <img
          src={pose.archivo}
          alt={pose.titulo}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          style={{
            objectPosition:
              pose.enfoque === 'left' ? 'left center' :
              pose.enfoque === 'right' ? 'right center' :
              'center center'
          }}
        />
        <div className="gradient-overlay" />

        {/* Favorite Button - Always Visible */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(pose.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-lg bg-dark-bg/70 backdrop-blur-sm hover:bg-accent-danger transition-all duration-200 shadow-sm-dark"
          aria-label={isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? (
            <HiHeart className="w-5 h-5 text-accent-danger transition-all" />
          ) : (
            <HiOutlineHeart className="w-5 h-5 text-text-secondary transition-all" />
          )}
        </button>
      </div>

      {/* Title */}
      <div className="p-3 flex-grow">
        <h3 className="font-semibold text-text-primary text-sm line-clamp-2 group-hover:text-accent-primary transition-colors">
          {pose.titulo}
        </h3>
      </div>

      {/* Badges - Always Visible */}
      <div className="px-3 pb-3 flex flex-wrap gap-2">
        <span
          className="text-xs px-2.5 py-1.5 bg-accent-primary text-dark-bg rounded-full font-semibold inline-flex items-center gap-1.5"
          title={`Categoría: ${pose.categoria}`}
        >
          <HiUser className="w-3.5 h-3.5" />
          {pose.categoria.charAt(0).toUpperCase() + pose.categoria.slice(1)}
        </span>
        <span
          className="text-xs px-2.5 py-1.5 bg-dark-card text-text-primary rounded-full border border-dark-border font-medium inline-flex items-center gap-1.5"
          title={`Dificultad: ${pose.dificultad}`}
        >
          <HiStar className="w-3.5 h-3.5" />
          {pose.dificultad}
        </span>
        {pose.ocasion && (
          <span
            className="text-xs px-2.5 py-1.5 bg-dark-card text-text-secondary rounded-full border border-dark-border font-medium inline-flex items-center gap-1.5"
            title={`Ocasión: ${pose.ocasion}`}
          >
            <HiCalendar className="w-3.5 h-3.5" />
            {pose.ocasion.charAt(0).toUpperCase() + pose.ocasion.slice(1)}
          </span>
        )}
      </div>
    </div>
  );
};
