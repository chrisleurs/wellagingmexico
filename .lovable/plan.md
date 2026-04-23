

## Unificar Navbar — Igual a Home en TODAS las páginas

### Decisión confirmada
- **Estilo base:** todas las páginas usan el navbar de Home (`.nav-hifi`): transparente sobre el hero, frosted-white al hacer scroll.
- **Sin nombre de página** dentro del navbar (queda limpio, el contexto lo da el hero).
- **Hamburguesa mobile:** fondo beige `#E5DFD3`, líneas y texto en **blanco** `#FFFFFF`. Drawer con fondo beige y links blancos, sin fondo en hover (solo línea sutil debajo).
- **CTA del navbar en mobile:** oculto en todas las páginas. Solo logo + hamburguesa.

### Archivos y cambios

**1. `public/diseno-web/blog.html`** — reemplazar `<nav class="nav" style="background:#fff">` por la estructura `<nav class="nav-hifi"><div class="nav-inner">…</div></nav>` idéntica a Home (con `class="active"` en el link de Blog). Quitar todos los `style="color:..."` inline. Asegurar que el hero stone tiene padding-top suficiente para no ser tapado al inicio (~80px mobile).

**2. `public/diseno-web/contacto.html`** — reemplazar `<nav class="nav">` por `<nav class="nav-hifi">` con la misma estructura de Home (`active` en Contacto). Ajustar `.contact-hero` para que el primer viewport no quede tapado por el nav fijo (padding-top mobile ~80px).

**3. `public/diseno-web/tratamiento.html`** — reemplazar `<nav class="nav">` por `<nav class="nav-hifi">` (active en Tratamientos). Mantener el hero oscuro existente (ya funciona con nav transparente).

**4. `public/diseno-web/hifi.css`** — bloque `.nav-hamburger` y `.mobile-drawer-*`:
- `.nav-hamburger`, `.nav-hifi .nav-hamburger`, `.nav-hifi.nav-scrolled .nav-hamburger`: `background: #E5DFD3`, sin borde.
- `.nav-hamburger span` y variantes: `background: #FFFFFF` (blanco).
- `.mobile-drawer-panel`: `background: #E5DFD3`, `color: #FFFFFF`.
- `.mobile-drawer-logo`, `.mobile-drawer-close`, `.mobile-drawer-nav a`: `color: #FFFFFF` (logo span en blanco translúcido).
- `.mobile-drawer-nav a:hover/active`: `background: transparent !important`, solo `border-bottom: 1px solid rgba(255,255,255,.55)`.
- `.mobile-drawer-cta`: fondo navy `#0C2E49`, texto blanco (mantener jerarquía del CTA).

**5. `public/diseno-web/responsive.css`** — limpieza:
- Eliminar/anular reglas viejas que pintan `nav` con fondo oscuro `rgba(12,12,12,.96)` (líneas ~14-47), porque ya no aplican: ahora todas las páginas usan `.nav-hifi`.
- Sustituirlas por una regla específica para `.nav-hifi` mobile que mantenga el comportamiento transparente sobre hero + scrolled blanco (ya existe en hifi.css, solo asegurar que no se pisa).
- Confirmar `nav.nav .btn-nav-cta`, `.nav-hifi .nav-cta` ocultos en mobile (ya está).
- Forzar líneas hamburguesa blancas en mobile sobreescribiendo el bloque `.nav-hamburger span` actual que las pone navy.

**6. Limpiar línea entre secciones en home** — verificar `.hero-bottom-blend` y border del overlap card (ya cubierto en iteraciones previas; revalidar tras cambios).

### Estructura final del navbar (idéntica en las 6 páginas)
```text
<nav class="nav-hifi">
  <div class="nav-inner">
    <a class="nav-logo" href="/">Well Aging<span>Mexico Health Center</span></a>
    <div class="nav-links">[Inicio] [Tratamientos] [Dra. Liliana] [Resultados] [Blog] [Contacto]</div>
    <a class="nav-cta" href="contacto.html">Agendar consulta →</a>
    <button class="nav-hamburger">☰</button>
  </div>
</nav>
+ <div class="mobile-drawer">…</div> (idéntico al de home)
```

### QA mobile (390px) y desktop
1. Abrir cada página: navbar transparente sobre hero, blanco al scrollear.
2. Hamburguesa beige con líneas blancas, visible siempre.
3. Drawer abre con fondo beige, links blancos, hover muestra línea blanca sutil.
4. CTA del navbar oculto en mobile en todas las páginas.
5. Hero de blog y contacto visible completo desde el primer viewport, sin tapado.
6. Línea fantasma entre hero y overlap en home: confirmar que no aparece.

