export const Header = ({ onFavoritesClick, favoriteCount }) => {
  return (
    <header className="bg-dark-surface border-b border-dark-border sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-md-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-accent-primary to-amber-600 rounded-xl flex items-center justify-center shadow-sm-dark">
            <svg className="w-6 h-6 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-text-primary">PoseBook</h1>
            <p className="text-xs text-text-tertiary">Catálogo de poses fotográficas</p>
          </div>
        </div>
        <button
          onClick={onFavoritesClick}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-primary to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded-lg transition-all duration-200 text-dark-bg font-semibold shadow-sm-dark hover:shadow-md-dark group"
          aria-label="Ver favoritos"
        >
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-semibold">{favoriteCount}</span>
        </button>
      </div>
    </header>
  );
};
