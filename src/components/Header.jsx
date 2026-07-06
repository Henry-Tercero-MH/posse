import { HiHeart } from 'react-icons/hi2';
import { HiCamera } from 'react-icons/hi2';

export const Header = ({ onFavoritesClick, favoriteCount }) => {
  return (
    <header className="sticky top-0 z-40 shadow-md-dark" style={{
      background: 'rgba(26, 26, 31, 0.7)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(232, 178, 79, 0.1)'
    }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-primary via-yellow-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm-dark flex-shrink-0">
            <HiCamera className="w-5 h-5 sm:w-6 sm:h-6 text-dark-bg" />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-text-primary truncate">PoseBook</h1>
            <p className="text-xs sm:text-sm text-text-tertiary hidden sm:block">Catálogo de poses</p>
          </div>
        </div>

        {/* Favorites Button */}
        <button
          onClick={onFavoritesClick}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-accent-primary to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-lg sm:rounded-lg transition-all duration-200 text-dark-bg font-semibold shadow-sm-dark hover:shadow-md-dark group flex-shrink-0"
          aria-label={`Ver ${favoriteCount} favoritos`}
          title={`${favoriteCount} poses guardadas`}
        >
          <HiHeart className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 fill-current" />
          <span className="font-semibold text-sm sm:text-base">{favoriteCount}</span>
        </button>
      </div>
    </header>
  );
};
