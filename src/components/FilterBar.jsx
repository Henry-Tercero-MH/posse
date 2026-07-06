const CATEGORIAS = ['hombre', 'mujer', 'niño', 'niña', 'pareja', 'grupo', 'familia'];
const OCASIONES = ['playa', 'graduacion', 'cumpleaños', 'boda', 'casual', 'formal', 'embarazo', 'deportiva', 'urbana', 'navidad'];
const DIFICULTADES = ['facil', 'media', 'avanzada'];

export const FilterBar = ({
  selectedCategories,
  toggleCategory,
  selectedOcasiones,
  toggleOcasion,
  selectedDificultades,
  toggleDificultad,
  clearAllFilters,
  hasActiveFilters,
}) => {
  return (
    <div className="card p-6 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11z" />
          </svg>
          <h3 className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Categoría</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`chip ${
                selectedCategories.includes(cat) ? 'chip-active' : 'chip-inactive'
              }`}
              aria-label={`Filtrar por ${cat}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-dark-border pt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Ocasión</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {OCASIONES.map((ocasion) => (
            <button
              key={ocasion}
              onClick={() => toggleOcasion(ocasion)}
              className={`chip ${
                selectedOcasiones.includes(ocasion) ? 'chip-active' : 'chip-inactive'
              }`}
              aria-label={`Filtrar por ${ocasion}`}
            >
              {ocasion.charAt(0).toUpperCase() + ocasion.slice(1).replace('ó', 'o')}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-dark-border pt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
          </svg>
          <h3 className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Dificultad</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {DIFICULTADES.map((dif) => (
            <button
              key={dif}
              onClick={() => toggleDificultad(dif)}
              className={`chip ${
                selectedDificultades.includes(dif) ? 'chip-active' : 'chip-inactive'
              }`}
              aria-label={`Filtrar por dificultad ${dif}`}
            >
              {dif.charAt(0).toUpperCase() + dif.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="border-t border-dark-border pt-6">
          <button
            onClick={clearAllFilters}
            className="w-full px-4 py-2.5 bg-accent-danger hover:bg-red-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm-dark hover:shadow-md-dark"
            aria-label="Limpiar todos los filtros"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};
