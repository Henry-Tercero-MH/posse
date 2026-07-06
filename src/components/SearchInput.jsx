import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';

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
      <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary group-focus-within:text-accent-primary transition-colors" />
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
          <HiXMark className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
