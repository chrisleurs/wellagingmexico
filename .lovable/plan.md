

## Plan: Tratamientos page — testimonials strip + premium category cards + filtros (categoría + tiempo)

### 1. Nueva sección "Testimoniales" antes de la franja Dra. Liliana

Replicar el marquee horizontal del home (`testimonials-marquee` con 2 filas en direcciones opuestas) justo encima del bloque `.dra-strip`.

- Fondo `stone (#F7F4F0)` para contraste con la sección anterior (faciales en blanco).
- Header centrado: eyebrow "Pacientes reales · Tratamientos" + título `Lo que dicen quienes ya<br><em>vivieron el proceso.</em>`
- Reusar las clases `.testimonials-marquee`, `.marquee-row`, `.marquee-track`, `.mq-card` ya definidas en `hifi.css` (no requiere CSS nuevo).
- Quotes nuevos enfocados a tratamientos específicos (PRP, fillers, sueroterapia, capilar, bioestimuladores) con badge fuente Google.
- Link inferior "Ver las 45 reseñas en Google Maps →".

### 2. Rediseño de las cards de categoría al estilo home

Reemplazar las `tcard` actuales (foto arriba + caja blanca con texto) por el formato premium del home (`th-card`): foto full-bleed + overlay de marca + contenido sobrepuesto.

Aplicar a las 3 cards de **Sección 01 (Regenerativa)** y las 3 cards de **Sección 02 (Estética)**:
- Variantes alternadas `--navy / --beige / --steel` para ritmo cromático (como en el home).
- Estructura: badge (categoría · etiqueta tiempo), arrow icon, título grande en mayúsculas con `<br>`, descripción corta, mini-stat con icono.
- Altura uniforme ~520px, hover lift suave, link a `tratamiento.html`.
- Reutilizar `.th-card` y modificadores ya existentes en `hifi.css` → CSS nuevo mínimo.

Las **mini-rows** de Faciales/Sueroterapias se mantienen (ya funcionan bien como lista compacta), solo se les añade un chip de tiempo a la derecha (`30 min`, `45 min`).

### 3. Sistema de filtros (categoría + tiempo)

Reemplazar la barra `.cat-tabs` actual del overlap-card por un bloque de filtros más rico, inspirado en `.th-filters` del home pero con dos ejes:

```text
┌─ Filtra por categoría ─────────────────────────────────────────┐
│ [Todos] [Regenerativa] [Estética] [Faciales] [Sueroterapias]   │
│ [Alopecia]                                                      │
└────────────────────────────────────────────────────────────────┘

  Duración · ○ Cualquiera   ○ Express (≤30 min)   ○ Estándar (45–60 min)   ○ Protocolo (>60 min)
```

- **Fila 1 (categorías)**: pills con el estilo `.th-filter` del home (oscuro al activarse, fondo translúcido).
- **Fila 2 (tiempo)**: línea sutil — label "Duración" en eyebrow + chips ghost más pequeños y un único radio activo. Sin borde pesado, separado por una `hairline`.
- Atributos `data-cat` y `data-time` en cada card/`mini-row` para facilitar filtrado JS futuro (en este pase solo añadimos la UI + clase `is-active`; el filtrado funcional puede quedar para una iteración siguiente o hacerse simple con `display:none`).

### 4. Implementación técnica

**Archivos a editar:**
- `public/diseno-web/tratamientos.html` — reemplazar `.cat-tabs`, reescribir las 6 cards de las secciones 01 y 02 al formato `.th-card`, añadir chip de duración a `.mini-row`, insertar nueva `<section>` testimoniales antes de la dra-strip.
- `public/diseno-web/hifi.css` — añadir solo lo nuevo: estilos para la fila de filtro de duración (`.dur-filter`, `.dur-chip`) y el chip de tiempo de mini-row (`.mini-row__time`). Todo lo demás reusa clases existentes.

**JavaScript** (inline en la página, ligero):
- Toggle visual de filtros activos (categoría única + duración única).
- Filtrado básico mostrando/ocultando `.th-card` y `.mini-row` según `data-cat` y `data-time` con animación fade.

### 5. Orden final de la página tratamientos

```text
Hero (breadcrumb + título)
Overlap card (descripción + filtros categoría + filtros duración)   ← mejorado
01 Medicina Regenerativa  (3 th-cards estilo home)                  ← rediseñado
02 Medicina Estética      (3 th-cards estilo home)                  ← rediseñado
03+04 Faciales / Sueroterapias  (mini-rows con chip de tiempo)      ← chip añadido
🆕 Testimoniales (marquee 2 filas, fondo stone)                     ← NUEVO
Mini Dra. Liliana (franja confianza)
CTA glass card
Footer
```

### Resultado esperado

- La página gana **prueba social** justo antes del cierre, igual que el home.
- Las categorías principales se ven igual de premium que en el home, manteniendo coherencia visual entre `home.html` y `tratamientos.html`.
- El usuario tiene **dos ejes de exploración** (qué tipo de tratamiento + cuánto tiempo dispone), facilitando que encuentre lo que busca sin leer toda la página.

