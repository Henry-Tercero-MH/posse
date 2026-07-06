import { useState, useMemo, useCallback } from 'react';

export const usePoseFilters = (poses) => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedOcasiones, setSelectedOcasiones] = useState([]);
  const [selectedDificultades, setSelectedDificultades] = useState([]);

  const filteredPoses = useMemo(() => {
    return poses.filter((pose) => {
      // Text search
      if (search.trim()) {
        const searchLower = search.toLowerCase();
        const matchesSearch =
          pose.titulo.toLowerCase().includes(searchLower) ||
          pose.tips.toLowerCase().includes(searchLower) ||
          pose.etiquetas.some((tag) => tag.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(pose.categoria)) {
        return false;
      }

      // Ocasión filter
      if (selectedOcasiones.length > 0 && !selectedOcasiones.includes(pose.ocasion)) {
        return false;
      }

      // Dificultad filter
      if (
        selectedDificultades.length > 0 &&
        !selectedDificultades.includes(pose.dificultad)
      ) {
        return false;
      }

      return true;
    });
  }, [poses, search, selectedCategories, selectedOcasiones, selectedDificultades]);

  const toggleCategory = useCallback((cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }, []);

  const toggleOcasion = useCallback((ocasion) => {
    setSelectedOcasiones((prev) =>
      prev.includes(ocasion) ? prev.filter((o) => o !== ocasion) : [...prev, ocasion]
    );
  }, []);

  const toggleDificultad = useCallback((dif) => {
    setSelectedDificultades((prev) =>
      prev.includes(dif) ? prev.filter((d) => d !== dif) : [...prev, dif]
    );
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearch('');
    setSelectedCategories([]);
    setSelectedOcasiones([]);
    setSelectedDificultades([]);
  }, []);

  const hasActiveFilters =
    search.trim() !== '' ||
    selectedCategories.length > 0 ||
    selectedOcasiones.length > 0 ||
    selectedDificultades.length > 0;

  return {
    filteredPoses,
    search,
    setSearch,
    selectedCategories,
    toggleCategory,
    selectedOcasiones,
    toggleOcasion,
    selectedDificultades,
    toggleDificultad,
    clearAllFilters,
    hasActiveFilters,
  };
};
