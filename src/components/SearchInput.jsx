import { useEffect, useState } from 'react';

export const SearchInput = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="relative group">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary group-focus-within:text-accent-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Buscar por título, tips o etiquetas..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="input-field pl-11 pr-11"
        aria-label="Buscar poses"
      />
      {localValue && (
        <button
          onClick={() => setLocalValue('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-accent-primary transition-colors"
          aria-label="Limpiar búsqueda"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </div>
  );
};
