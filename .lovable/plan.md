

## Plan: Actualizar páginas Hi-Fi a v2 + agregar Resultados, Contacto y Blog

### Resumen
Reemplazar las 4 páginas Hi-Fi existentes con sus versiones v2, actualizar el CSS principal a `hifi-2.css`, y agregar 3 páginas nuevas (Resultados, Contacto, Blog) al tab de Diseño Web.

### Cambios

**1. Reemplazar CSS principal**
- `public/diseno-web/hifi.css` ← contenido de `hifi-2.css` (1506 líneas, incluye 10 elevation moves: video loop, marquee, animaciones, parallax, counters, etc.)

**2. Reemplazar 4 páginas existentes con v2**
- `public/diseno-web/home.html` ← `index-hifi-2.html`
- `public/diseno-web/tratamientos.html` ← `tratamientos-hifi-2.html`
- `public/diseno-web/tratamiento.html` ← `tratamiento-hifi-2.html`
- `public/diseno-web/sobre-nosotros.html` ← `sobre-nosotros-hifi-2.html`

**3. Agregar 3 páginas nuevas**
- `public/diseno-web/resultados.html` ← `resultados-hifi.html`
- `public/diseno-web/contacto.html` ← `contacto-hifi.html`
- `public/diseno-web/blog.html` ← `blog-hifi.html`

**4. Re-inyectar imágenes en los HTML actualizados**
Las páginas v2 vienen con `.ph` placeholders. Aplicar el mismo script de inyección de imágenes que se usó antes para reemplazar placeholders por las imágenes ya generadas en `public/diseno-web/img/` (hero-home, dra-liliana, clinica-interior, prp-treatment, treatment-*, gallery-*).

**5. Generar imágenes faltantes con IA** (~4-5 nuevas)
- `results-ba-1.jpg` y `results-ba-2.jpg` — before/after rostro para página Resultados
- `blog-featured.jpg` — imagen editorial para post destacado
- `blog-thumb-1/2/3.jpg` — thumbnails de artículos
- `contacto-clinic.jpg` — fachada/recepción para sección de contacto

**6. Actualizar `src/pages/DisenoWebPage.tsx`**
Ampliar el array `pages` de 4 a 7 tabs:
```
Home · Tratamientos · Tratamiento (PRP) · Sobre Nosotros · Resultados · Blog · Contacto
```

### Archivos a modificar/crear

| Archivo | Acción |
|---------|--------|
| `public/diseno-web/hifi.css` | Reemplazar (v2 completo) |
| `public/diseno-web/home.html` | Reemplazar + inyectar imágenes |
| `public/diseno-web/tratamientos.html` | Reemplazar + inyectar imágenes |
| `public/diseno-web/tratamiento.html` | Reemplazar + inyectar imágenes |
| `public/diseno-web/sobre-nosotros.html` | Reemplazar + inyectar imágenes |
| `public/diseno-web/resultados.html` | Crear + inyectar imágenes |
| `public/diseno-web/contacto.html` | Crear + inyectar imágenes |
| `public/diseno-web/blog.html` | Crear + inyectar imágenes |
| `public/diseno-web/img/*.jpg` | Generar ~5 imágenes nuevas |
| `src/pages/DisenoWebPage.tsx` | Ampliar tabs a 7 |

### Notas
- El nuevo `hifi-2.css` es una capa de elevación con tokens completos (sombras, radios, animaciones), así que reemplaza limpiamente al CSS anterior y mantiene compatibilidad con los `.ph` placeholders.
- Las páginas v2 traen Tailwind CDN en algunos casos (home v2 lo usa) — se conserva tal cual.
- El simulado de "video hero" del paso anterior queda obsoleto: la v2 ya define su propio sistema (`hero-video-loop` con Ken Burns + light drift en el CSS v2).

