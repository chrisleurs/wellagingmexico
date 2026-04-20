

## Plan: Quitar barra superior del panel + Logo como acceso al panel + Item "Inicio" en navbars

### Problema
La barra navy superior del panel (en `/diseno-web`) ocupa 52px arriba del iframe y compite visualmente con el navbar real del sitio. Solución: eliminarla, hacer que el **logo "Well Aging"** del propio sitio sea el atajo para volver al panel, y agregar **"Inicio"** como primer item del navbar para llevar a `home.html`.

### Cambios

**1. `src/pages/DisenoWebPage.tsx` — Eliminar barra superior**
- Quitar el `<header>` completo. El iframe ocupa toda la pantalla (`height: 100vh`).
- Eliminar imports no usados (`ArrowLeft`, `ExternalLink`, `useNavigate`).
- Resultado: el sitio se ve full-screen, sin distracción.

**2. Las 7 páginas en `public/diseno-web/*.html` — Logo → Panel + Item "Inicio"**

En cada navbar (`nav-hifi` en home, `nav` en el resto):
- **Logo**: cambiar `href="home.html"` → `href="/diseno-web"` y agregar `target="_top"` para escapar del iframe y volver al panel `/`.

  Espera, mejor: el logo debe llevar al **panel de control** (`/`). Entonces `href="/"` con `target="_top"`.
- **Agregar `<a href="home.html">Inicio</a>`** como primer item de `.nav-links` en las 7 páginas (con `class="active"` cuando estamos en `home.html`).

**3. Mobile drawer (`#mobileDrawer`) en las 7 páginas**
- Agregar también el link **Inicio** como primer item del drawer móvil para mantener paridad con desktop.

**4. Tooltip / hint visual (opcional pero recomendado)**
- Agregar `title="Volver al panel de control"` al `<a class="nav-logo">` para que el usuario entienda al hacer hover que el logo es el atajo al panel.

### Detalles técnicos
- El logo usa `target="_top"` porque las páginas viven dentro de un `<iframe>` en `/diseno-web`; sin eso, navegar a `/` cargaría el panel **dentro** del iframe.
- El item "Inicio" usa rutas relativas (`home.html`) — funciona igual dentro del iframe y al abrir en pestaña nueva.
- El estilo del nuevo link "Inicio" hereda automáticamente los estilos de `.nav-links a` ya existentes en cada página (incluyendo los overrides inline de `blog.html` y `resultados.html`).
- Total de archivos editados: **8** (1 React + 7 HTML).

### Resultado esperado
- `/diseno-web` muestra el sitio a pantalla completa, sin barra navy superior.
- Click en el logo "Well Aging" desde cualquier página → vuelve al panel `/`.
- Nuevo item "Inicio" visible en navbar desktop y drawer móvil → lleva a `home.html`.

