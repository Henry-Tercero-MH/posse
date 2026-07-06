# 📸 PoseBook

Un catálogo de poses fotográficas de referencia para personas que no saben cómo posar frente a la cámara.

## Tecnología

- **Vite + React 18** (JavaScript)
- **Tailwind CSS** para estilos
- **Almacenamiento local** (`localStorage`) para favoritos
- Sin backend ni base de datos

## Instalación y ejecución

### Requisitos
- Node.js 16+ (recomendado 18+)
- npm o yarn

### Pasos

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos se generarán en la carpeta `dist/`.

4. **Previsualizar producción:**
   ```bash
   npm run preview
   ```

## Estructura del proyecto

```
posebook/
├── public/
│   └── poses/              # Imágenes de poses
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SearchInput.jsx
│   │   ├── PoseGrid.jsx
│   │   ├── PoseCard.jsx
│   │   ├── PoseModal.jsx
│   │   ├── FavoritesView.jsx
│   │   └── EmptyState.jsx
│   ├── hooks/              # Custom hooks
│   │   ├── useFavorites.js
│   │   └── usePoseFilters.js
│   ├── data/
│   │   └── poses.json      # Catálogo de poses
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Cómo agregar nuevas poses

### Paso 1: Agregar la imagen

1. Coloca la imagen en la carpeta `public/poses/`
2. Usa un nombre descriptivo (ej: `mujer-playa-02.jpg`)

### Paso 2: Actualizar el catálogo

Abre `src/data/poses.json` y agrega una entrada con esta estructura:

```json
{
  "id": "pose-021",
  "archivo": "/poses/mujer-playa-02.jpg",
  "titulo": "Título descriptivo de la pose",
  "categoria": "mujer",
  "ocasion": "playa",
  "dificultad": "media",
  "tips": "Descripción detallada de cómo lograr la pose. Incluye posición de brazos, piernas, cabeza, expresión, etc.",
  "etiquetas": ["etiqueta1", "etiqueta2", "etiqueta3"]
}
```

### Opciones disponibles

**Categorías de persona:**
- `hombre`, `mujer`, `niño`, `niña`, `pareja`, `grupo`, `familia`

**Ocasiones:**
- `playa`, `graduacion`, `cumpleaños`, `boda`, `casual`, `formal`, `embarazo`, `deportiva`, `urbana`, `navidad`

**Dificultad:**
- `facil`, `media`, `avanzada`

### Ejemplo completo

```json
{
  "id": "pose-021",
  "archivo": "/poses/hombre-urbano-01.jpg",
  "titulo": "Sentado casual en banco",
  "categoria": "hombre",
  "ocasion": "urbana",
  "dificultad": "facil",
  "tips": "Sentarse relajadamente, un codo apoyado en el respaldo, pierna cruzada, mirada hacia la cámara o ligeramente alejada.",
  "etiquetas": ["sentado", "casual", "urbano", "relaxed"]
}
```

## Características

✅ **Galería masonry** - Layout tipo Pinterest con columnas de altura variable
✅ **Filtros combinables** - Filtra por categoría, ocasión y dificultad simultáneamente
✅ **Búsqueda de texto** - Busca en título, tips y etiquetas con debounce de 300ms
✅ **Vista detalle** - Modal interactivo con navegación anterior/siguiente
✅ **Favoritos** - Guarda poses favoritas en localStorage
✅ **Contador de resultados** - Muestra cuántas poses coinciden con los filtros
✅ **Estado vacío** - Interfaz amigable cuando no hay resultados
✅ **Lazy loading** - Carga de imágenes optimizada
✅ **Responsive** - 1 columna en móvil, 2-3 en tablet, 4-5 en desktop
✅ **Accesibilidad** - Navegación por teclado, aria-labels, contraste AA

## Diseño

**Paleta oscura tipo estudio fotográfico:**
- Fondo principal: `#0D0D0F`
- Tarjetas: `#1A1A1E`
- Acento (dorado): `#F5A623`
- Acento secundario (rojo): `#E63946`
- Texto principal: `#F4F4F5`
- Texto secundario: `#A1A1AA`

**Tipografía:**
- Títulos: Poppins (sans-serif geométrica)
- Cuerpo: Inter (sans-serif legible)

## Navegación por teclado

En el modal:
- **ESC** - Cierra el modal
- **Flecha izquierda** - Pose anterior
- **Flecha derecha** - Próxima pose

## Almacenamiento

Los favoritos se guardan automáticamente en `localStorage` bajo la clave `posebook_favorites` como un array de IDs de poses.

## Scripts disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Previsualiza build de producción
- `npm run lint` (si está configurado) - Valida el código

## Licencia

Proyecto libre para uso personal.
