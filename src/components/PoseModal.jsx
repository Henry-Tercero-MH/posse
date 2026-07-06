import { useEffect } from 'react';
import { HiXMark, HiUser, HiCalendar, HiStar, HiInformationCircle, HiHeart, HiOutlineHeart, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

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
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Image */}
            <div className="aspect-[2/3] overflow-hidden rounded-xl bg-dark-bg shadow-md-dark">
              <img
                src={pose.archivo}
                alt={pose.titulo}
                className="w-full h-full object-cover"
                style={{
                  objectPosition:
                    pose.enfoque === 'left' ? 'left center' :
                    pose.enfoque === 'right' ? 'right center' :
                    'center center'
                }}
              />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                <HiUser className="w-5 h-5 mx-auto text-accent-primary mb-2" />
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-1">Categoría</p>
                <p className="text-accent-primary font-semibold">
                  {pose.categoria.charAt(0).toUpperCase() + pose.categoria.slice(1)}
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                <HiCalendar className="w-5 h-5 mx-auto text-accent-primary mb-2" />
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-1">Ocasión</p>
                <p className="text-accent-primary font-semibold">
                  {pose.ocasion.charAt(0).toUpperCase() + pose.ocasion.slice(1)}
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                <HiStar className="w-5 h-5 mx-auto text-accent-primary mb-2" />
                <p className="text-text-tertiary text-xs uppercase font-semibold mb-1">Dificultad</p>
                <p className="text-accent-primary font-semibold">
                  {pose.dificultad.charAt(0).toUpperCase() + pose.dificultad.slice(1)}
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <HiInformationCircle className="w-5 h-5 text-accent-primary" />
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
              {isFavorite ? (
                <HiHeart className="w-5 h-5 fill-current" />
              ) : (
                <HiOutlineHeart className="w-5 h-5" />
              )}
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
              <HiChevronLeft className="w-4 h-4" />
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
              <HiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
