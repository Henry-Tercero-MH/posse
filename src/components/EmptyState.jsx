export const EmptyState = ({ hasActiveFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center bg-dark-card border border-dark-border rounded-xl">
      {hasActiveFilters ? (
        <>
          <svg className="w-16 h-16 text-text-tertiary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Sin resultados</h2>
          <p className="text-text-secondary mb-4 max-w-sm">
            No encontramos poses que coincidan con tus filtros. Intenta cambiar los filtros o usa una búsqueda diferente.
          </p>
          <p className="text-sm text-text-tertiary">
            💡 Puedes ver todas las poses limpiando los filtros activos.
          </p>
        </>
      ) : (
        <>
          <svg className="w-16 h-16 text-text-tertiary mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Cargando poses...</h2>
          <p className="text-text-secondary">
            Aún no hay poses disponibles. Intenta recargar la página.
          </p>
        </>
      )}
    </div>
  );
};
