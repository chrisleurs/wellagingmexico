

## Plan: Nueva sección "Diseño Web" con páginas Hi-Fi

### Resumen
Agregar una cuarta card "Diseño Web" en el panel de Control que lleve a una nueva página `/diseno-web` con tabs para previsualizar las 4 páginas Hi-Fi (Home, Tratamientos, Tratamiento, Sobre Nosotros) usando el CSS `hifi.css`. Generar imágenes de fondo con IA para rellenar los placeholders del wireframe y darle vida visual a las páginas.

### Archivos Hi-Fi recibidos
- `index-hifi.html` → Home
- `tratamientos-hifi.html` → Listado tratamientos
- `tratamiento-hifi.html` → Detalle PRP
- `sobre-nosotros-hifi.html` → Dra. Liliana
- `hifi.css` → Stylesheet compartido (depende también de `responsive.css` que ya existe)

### Alcance

**1. Copiar archivos a `public/diseno-web/`**
- 4 archivos HTML hi-fi
- `hifi.css`
- Reutilizar `responsive.css` existente (copiar también para mantener autonomía)

**2. Generar imágenes de fondo con IA (Nano banana)**
Crear ~8-10 imágenes que cubran los `.ph` placeholders más visibles:
- Hero principal (mujer madura, luz natural, spa médico premium)
- Doctora (Dra. Liliana, retrato editorial, bata blanca, ambiente clínico)
- Clínica interior (recepción minimalista navy/beige)
- Tratamiento PRP (manos con jeringa, ambiente médico estético)
- 3-4 cards de tratamientos (facial, corporal, regenerativo, wellness)
- Before/after rostro (resultados sutiles, naturales)
- Background ambiente (texturas spa, agua, mármol)

Guardar en `public/diseno-web/img/` y reemplazar los `<div class="ph">` correspondientes en los HTML por `<img>` o backgrounds CSS inline.

**3. Crear página `/diseno-web` (`src/pages/DisenoWebPage.tsx`)**
- Mismo patrón que `WireframesPage.tsx`: header navy + tabs + iframe
- 4 tabs: Home · Tratamientos · Tratamiento (PRP) · Sobre Nosotros
- Botón "Abrir en nueva pestaña"
- Botón volver al Control

**4. Actualizar `src/pages/Index.tsx`**
- Agregar 4ª card "Diseño Web" con icono `Sparkles` o `Monitor` (lucide-react)
- Ajustar grid a `md:grid-cols-2 lg:grid-cols-4` para acomodar 4 cards

**5. Actualizar `src/App.tsx`**
- Nueva ruta `/diseno-web` → `DisenoWebPage`

### Detalles técnicos
- Las imágenes se inyectan editando el HTML directamente (reemplazar `.ph` por `<img src="img/xxx.jpg">` con clases que mantengan dimensiones)
- Para hero/clinic con `.hero-kenburns`, usar `background-image` inline en el contenedor
- Resolución imágenes: 1600x1000 para heroes, 800x600 para cards
- Estética: spa médico premium, paleta navy/beige/steel, modelos diversos edad 35-60, iluminación natural cálida, sin texto en imágenes

### Archivos a crear/modificar

| Archivo | Acción |
|---------|--------|
| `public/diseno-web/home.html` | Crear (desde index-hifi) |
| `public/diseno-web/tratamientos.html` | Crear |
| `public/diseno-web/tratamiento.html` | Crear |
| `public/diseno-web/sobre-nosotros.html` | Crear |
| `public/diseno-web/hifi.css` | Crear |
| `public/diseno-web/responsive.css` | Crear |
| `public/diseno-web/img/*.jpg` | Crear (~8-10 imágenes IA) |
| `src/pages/DisenoWebPage.tsx` | Crear |
| `src/pages/Index.tsx` | Modificar (4ª card + grid) |
| `src/App.tsx` | Modificar (nueva ruta) |

