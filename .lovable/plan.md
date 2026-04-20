

## Plan: Elevar la sección "Tratamientos" como hero secundario de conversión

### Diagnóstico
La sección actual es muy plana: 5 cards uniformes en un grid simétrico, header sobrio, fondo `stone` que la hace pasar desapercibida frente a Filosofía (white) y Resultados (white). No comunica jerarquía ni invita al clic — el "Ver todos →" es la única CTA visible y está en gris claro.

### Estrategia visual (basada en el design system existente)
Reforzar la sección con cuatro palancas del propio sistema: **fondo navy contrastante**, **layout asimétrico con card destacada**, **CTAs explícitas por tarjeta** y **microcopy con beneficio + intent**.

### Cambios propuestos

**1. Fondo y atmósfera — diferenciación inmediata**
- Cambiar `class="stone"` por **fondo navy `#0C2E49`** con un overlay sutil de gradient hacia `#0a2540`.
- Texto en blanco/steel para alto contraste.
- Eyebrow en `--steel` (#A1B2C6), título "¿Qué estás buscando?" en blanco con peso 800.
- Añadir un **sub-headline** debajo del H2: *"Cinco rutas hacia tu mejor versión. Cada tratamiento, diseñado por la Dra. Liliana."* — da contexto y empuja a explorar.

**2. Layout asimétrico — destacar la categoría "ancla"**
- Reemplazar el grid `repeat(5,1fr)` por:
  ```text
  ┌──────────────────┬──────────┬──────────┐
  │                  │  Card 2  │  Card 3  │
  │   CARD 1         ├──────────┼──────────┤
  │   (destacada)    │  Card 4  │  Card 5  │
  └──────────────────┴──────────┴──────────┘
  ```
- **Card 1 = Medicina Regenerativa** ocupa 2 columnas y 2 filas (la especialidad insignia de la doctora). Imagen grande, badge "Especialidad" en beige, copy más amplio.
- Cards 2-5 mantienen tamaño actual pero sobre fondo navy con cards en blanco → mayor contraste por inversión cromática.

**3. Cards rediseñadas — más persuasivas**
Cada card pasa de "imagen + número + título + lista" a:
- Imagen (mantener altura 220px, 320px en la destacada)
- **Badge de duración / ideal para** (ej: "Desde 45 min" / "Ideal: 30+")
- Título del tratamiento (sin cambios)
- Tagline corto orientado a beneficio (ej: *"Estimula tu colágeno natural"* en lugar de solo "PRP · Células madre · Exosomas")
- **Mini-CTA inline**: `Conocer más →` en navy, visible siempre (no solo en hover) — reduce fricción cognitiva.
- Hover actual (border reveal + lift) se mantiene, pero invertimos colores: borde en **beige `#E5DFD3`** sobre navy.

**4. Header rediseñado**
- Eyebrow "Tratamientos" + número total: *"05 categorías · más de 30 tratamientos"* — añade densidad de oferta.
- Título principal con un **subrayado decorativo en beige** debajo de "buscando" (acento visual).
- "Ver todos" se transforma en **botón outline blanco** (`Ver catálogo completo →`) en vez de link gris — más prominente.

**5. CTA de cierre de sección — nuevo**
Debajo del grid, una franja con:
> *"¿No sabes por dónde empezar?"* + botón **"Agenda valoración gratuita"** (botón sólido beige sobre navy).

Esto convierte la sección en un funnel cerrado: ver opciones → o directamente agendar.

### Archivos a editar
- `public/diseno-web/home.html` — sección 6 (líneas 255-318): nuevo markup con layout asimétrico, fondo navy, sub-headline, CTAs por card, franja de cierre.
- `public/diseno-web/hifi.css` — añadir variantes `.treatment-card--featured` (card grande), `.treatment-card--on-dark` (cards blancas sobre navy con hover invertido en beige), y estilos para la franja CTA de cierre.

### Resultado esperado
La sección "Tratamientos" pasa de ser un grid plano a un **hero secundario** con:
- Contraste cromático (única sección navy entre Filosofía blanca y Resultados blanca → ojo se ancla aquí).
- Jerarquía clara (1 card grande + 4 secundarias).
- Múltiples puntos de entrada al clic (5 cards + 5 mini-CTAs + botón "Ver catálogo" + CTA "Agenda valoración") en vez de los 6 actuales casi invisibles.
- Storytelling: oferta → beneficio → acción.

