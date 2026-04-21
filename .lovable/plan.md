

## Fixes — Wireframes Hi-Fi (mobile-first)

### 1. Tratamientos — eliminar empty state "No hay tratamientos"
`public/diseno-web/tratamientos.html`
- Eliminar el bloque `<div class="th-empty" id="thEmpty" hidden>...</div>` y los estilos `.th-empty` asociados.
- Eliminar la lógica JS que muestra/oculta `thEmpty` cuando no hay matches (dejar simplemente que el grid se vacíe sin mensaje).

### 2. Sobre Nosotros — credenciales en mobile (texto en 1 palabra por línea)
`public/diseno-web/sobre-nosotros.html`

**Causa raíz:** el `.cred-card` tiene 3 hijos (icono, título, subtítulo) pero el grid mobile sólo declara 2 columnas (`48px 1fr`). El subtítulo cae en la columna del icono (48px) y rompe palabra por palabra.

**Fix:**
- Envolver `.cred-title` y `.cred-sub` en un `<div class="cred-text">` (en los 4 cards), o
- Cambiar el grid mobile a 2 filas explícitas: icono+título arriba, descripción abajo a todo el ancho usando `grid-template-areas: "icon title" "sub sub"`.

Resultado: la descripción ocupa todo el ancho del card y el texto fluye normalmente.

### 3. Navbar mobile (hamburguesa) — paleta clara consistente
`public/diseno-web/responsive.css` + `hifi.css`

Estado actual: fondo translúcido oscuro/blanco semitransparente, líneas blancas. Visualmente roto sobre fondos claros (ver imágenes 23, 24, 25).

**Nuevo estilo único (estados scrolled y no-scrolled):**
- `.nav-hamburger` background: `#E5DFD3` (beige claro de marca, opaco) en TODOS los estados
- spans (líneas): `#0C2E49` (negro/navy) siempre
- border: ninguno (eliminar `border-color`)
- Aplicar a `nav.nav` (blog, contacto, tratamiento individual) y `nav.nav-hifi` (home, tratamientos, sobre-nosotros, resultados) — unificar.

**Drawer mobile (hover de links):**
- En `hifi.css` `.mobile-drawer-nav a:hover/active`: quitar `padding-left:6px` y `background`; agregar sólo `border-bottom: 1px solid rgba(12,46,73,.4)` sutil.
- Confirmar background del panel: `linear-gradient(180deg, #F8F6F3 0%, #E5DFD3 100%)` (claro), texto navy.

### 4. Contacto — hero tapado por nav (imagen 24)
`public/diseno-web/contacto.html`

El nav blanco sticky está sobre el hero stone sin offset. Fix:
- Añadir `padding-top` adecuado a `.contact-hero` mobile (~80px) para compensar la altura del nav fijo (56px + breathing room).
- Verificar que el `.eyebrow-v2` "Primera consulta" no quede oculto detrás del nav.

### 5. Blog — hero tapado por nav + CTA "Agendar consulta" mal posicionado (imagen 25)
`public/diseno-web/blog.html`

El bloque `.btn-primary` "Agendar consulta" del nav se ve enorme y tapa el hero en mobile. Fix:
- En el `<nav class="nav">`, el `.btn-primary` debe ocultarse en mobile (ya hay regla para `.btn-nav-cta` pero blog usa `.btn-primary`). Añadir `nav.nav .btn-primary { display: none !important; }` en responsive.css mobile breakpoint.
- Añadir `padding-top` al primer `<section>` (hero stone) en mobile para compensar el nav: ~80px.

### 6. Página individual de tratamiento (`tratamiento.html`) — auditoría UI
- Confirmar que el nav incluye `.nav-hamburger` y el drawer mobile (verificar si está presente; si no, añadir el HTML del drawer y la función `toggleMobileMenu()`).
- Asegurar que `.btn-nav-cta` se oculta en mobile (ya cubierto por responsive.css).
- Revisar que `.benefit-grid`, `.who-grid`, `.faq-wrap`, `.related-grid`, `.overlap-card-3col` colapsan bien (el media query a 768px ya lo cubre).
- Aplicar mismo padding-top al hero para evitar nav overlay.

### Archivos a editar
- `public/diseno-web/tratamientos.html` — quitar empty state
- `public/diseno-web/sobre-nosotros.html` — fix grid credenciales mobile
- `public/diseno-web/contacto.html` — padding-top hero mobile
- `public/diseno-web/blog.html` — ocultar btn nav mobile + padding hero
- `public/diseno-web/tratamiento.html` — añadir drawer mobile si falta + padding hero
- `public/diseno-web/responsive.css` — unificar `.nav-hamburger` con paleta beige clara, ocultar `.btn-primary` en mobile, padding-top heroes
- `public/diseno-web/hifi.css` — drawer link hover (línea sutil en lugar de fondo)

### QA mobile (390px)
1. Navbar: hamburguesa beige con líneas navy, visible en cualquier fondo.
2. Drawer: abre, fondo claro, hover de links muestra línea sutil debajo.
3. Blog y Contacto: hero visible completo desde la primera carga, sin tapado por nav.
4. Sobre Nosotros: credenciales con texto fluido normal.
5. Tratamientos: sin mensaje de "No hay tratamientos" tras filtrar.
6. Tratamiento individual: nav funcional con drawer, secciones legibles.

