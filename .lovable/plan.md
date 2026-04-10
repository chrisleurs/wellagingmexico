

# Plan: Página "Control" — Hub de navegación Well Aging

## Resumen

Crear una página central `/control` con tres cards elegantes que lleven a tres sub-páginas: Design System, Sitemap y Wireframes. Cada sub-página renderizará el contenido de los documentos adjuntos con formato visual. La estética seguirá el design system de Well Aging (navy #0C2E49, beige #E5DFD3, steel #A1B2C6, Montserrat).

## Alcance

### 1. Actualizar design system (CSS + Tailwind)
- Reemplazar los colores por defecto con la paleta Well Aging:
  - Primary: navy `#0C2E49`
  - Secondary: steel `#A1B2C6`
  - Accent: beige `#E5DFD3`
  - Background: `#FFFFFF`
  - Body text: `#3D5669`
- Agregar Montserrat desde Google Fonts (headings Bold, body Regular)
- Ajustar border-radius a 8-12px, shadows según design system

### 2. Página Control `/control` (Index)
- Tres cards grandes con hover elegante
- Cada card: icono, título, descripción corta, link
  - **Design System** → `/design-system`
  - **Sitemap** → `/sitemap`
  - **Wireframes** → `/wireframes`
- Header con nombre "Well Aging Mexico" y subtítulo "Panel de Control del Proyecto"
- Estética spa/clínica premium

### 3. Página Design System `/design-system`
- Renderizado visual del documento `design-system.md`
- Secciones: Colores (swatches visuales), Tipografía (ejemplos vivos), Botones (demo interactiva), Espaciado, Componentes clave
- Botón de regreso a Control

### 4. Página Sitemap `/sitemap`
- Renderizado visual del árbol de URLs con estructura jerárquica
- Detalle de cada página con H1, keywords, meta
- Vista de árbol colapsable o visual
- Botón de regreso

### 5. Página Wireframes `/wireframes`
- Renderizado del contenido ASCII wireframes en bloques con tipografía monoespaciada estilizada
- Separación clara por página (Home, Servicio, Dra. Liliana, Resultados, Contacto, Blog)
- Botón de regreso

### 6. Routing
- Actualizar `App.tsx` con las 4 rutas: `/`, `/design-system`, `/sitemap`, `/wireframes`
- Redirigir `/` a la página Control

## Archivos a crear/modificar

| Archivo | Acción |
|---------|--------|
| `src/index.css` | Modificar - paleta Well Aging + Montserrat |
| `tailwind.config.ts` | Modificar - colores custom |
| `index.html` | Modificar - agregar Google Fonts |
| `src/pages/Index.tsx` | Reemplazar - página Control |
| `src/pages/DesignSystemPage.tsx` | Crear |
| `src/pages/SitemapPage.tsx` | Crear |
| `src/pages/WireframesPage.tsx` | Crear |
| `src/App.tsx` | Modificar - agregar rutas |

## Detalles Técnicos

- Contenido de los documentos se embebe directamente en los componentes (no se leen archivos en runtime)
- Las cards de Control tendrán efecto hover con elevación y transición suave
- Cada sub-página tendrá un layout consistente con header navy, contenido en fondo blanco/beige alterno, y navegación de regreso
- Responsive: las cards se apilarán en móvil

