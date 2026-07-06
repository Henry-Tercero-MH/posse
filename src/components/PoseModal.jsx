import { useEffect } from 'react';

export const PoseModal = ({
  pose,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  canPrevious,
  canNext,
  isFavorite,
  onToggleFavorite,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && canPrevious) onPrevious();
      if (e.key === 'ArrowRight' && canNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, canPrevious, canNext, onClose, onPrevious, onNext]);

  if (!isOpen || !pose) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={onClose}
        aria-label="Cerrar modal"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-dark-surface border border-dark-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-lg-dark"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-dark-surface border-b border-dark-border flex items-center justify-between p-6 backdrop-blur-sm bg-opacity-95">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{pose.titulo}</h2>
              <p className="text-text-tertiary text-sm mt-1">Referencia fotográfica</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-dark-card transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-dark-bg shadow-md-dark">
              <img
                src={pose.archivo}
                alt={pose.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                <svg className="w-5 h-5 mx-auto text-accent-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11z" />
                </svg>
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-1">Categoría</p>
                <p className="text-accent-primary font-semibold">
                  {pose.categoria.charAt(0).toUpperCase() + pose.categoria.slice(1)}
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                <svg className="w-5 h-5 mx-auto text-accent-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-1">Ocasión</p>
                <p className="text-accent-primary font-semibold">
                  {pose.ocasion.charAt(0).toUpperCase() + pose.ocasion.slice(1)}
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                <svg className="w-5 h-5 mx-auto text-accent-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                </svg>
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-1">Dificultad</p>
                <p className="text-accent-primary font-semibold">
                  {pose.dificultad.charAt(0).toUpperCase() + pose.dificultad.slice(1)}
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <h3 className="font-semibold text-text-primary">Tips de postura</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm">{pose.tips}</p>
            </div>

            {/* Tags */}
            {pose.etiquetas && pose.etiquetas.length > 0 && (
              <div>
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-3">Etiquetas</p>
                <div className="flex flex-wrap gap-2">
                  {pose.etiquetas.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-dark-card border border-dark-border rounded-full text-xs text-text-primary hover:border-accent-primary transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Favorite Button */}
            <button
              onClick={() => onToggleFavorite(pose.id)}
              className={`w-full px-4 py-3 font-semibold rounded-lg transition-all duration-200 shadow-sm-dark hover:shadow-md-dark flex items-center justify-center gap-2 ${
                isFavorite
                  ? 'bg-accent-danger text-white hover:bg-red-500'
                  : 'bg-dark-card border border-dark-border text-text-primary hover:border-accent-primary hover:text-accent-primary'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isFavorite ? 0 : 2}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
            </button>
          </div>

          {/* Footer - Navigation */}
          <div className="sticky bottom-0 bg-dark-surface border-t border-dark-border flex items-center justify-between p-4 gap-3 backdrop-blur-sm bg-opacity-95">
            <button
              onClick={onPrevious}
              disabled={!canPrevious}
              className="flex items-center gap-2 px-4 py-2.5 bg-dark-card hover:bg-dark-border rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-text-primary font-medium"
              aria-label="Pose anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>
            <div className="text-text-tertiary text-sm font-medium">
              <span className="text-accent-primary">1</span> de <span className="text-accent-primary">N</span>
            </div>
            <button
              onClick={onNext}
              disabled={!canNext}
              className="flex items-center gap-2 px-4 py-2.5 bg-dark-card hover:bg-dark-border rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-text-primary font-medium"
              aria-label="Próxima pose"
            >
              Siguiente
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
