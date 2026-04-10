import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WireframeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <div className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-t-lg">{title}</div>
    <div className="border border-t-0 border-border rounded-b-lg p-4 bg-beige/20 text-sm text-body-text font-mono whitespace-pre-wrap leading-relaxed">
      {children}
    </div>
  </div>
);

const PageWireframe = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-semibold text-foreground mb-1">{title}</h2>
    <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
    {children}
  </section>
);

const WireframesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-navy text-primary-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-steel hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al Panel
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Wireframes</h1>
          <p className="text-steel mt-2">Estructura de secciones · Sin assets · Abril 2026</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* HOME */}
        <PageWireframe title="Página 1 — Home" subtitle="/">
          <WireframeSection title="NAVBAR">
            [Logo] Tratamientos · Dra. Liliana · Resultados · Blog | [Agendar consulta →]
          </WireframeSection>
          <WireframeSection title="HERO [Foto]">
            Aging is natural.{"\n"}Care is essential.{"\n"}
            Medicina estética regenerativa en Querétaro.{"\n"}
            Basada en ciencia. Dirigida por la Dra. Liliana Pérez.{"\n"}
            [Agendar consulta] [Ver tratamientos]{"\n"}
            ✓ +9,000 procedimientos  ✓ 45 reseñas 5★  ✓ +10 años
          </WireframeSection>
          <WireframeSection title="PROPUESTA DE VALOR (3 columnas)">
            [Ícono] Tratamientos personalizados{"\n"}
            [Ícono] Acompañamiento de vanguardia{"\n"}
            [Ícono] Medicina basada en evidencia regenerativa
          </WireframeSection>
          <WireframeSection title="CATEGORÍAS DE TRATAMIENTOS">
            "¿Qué estás buscando?"{"\n"}
            [Card] Medicina Regenerativa  [Card] Medicina Estética{"\n"}
            [Card] Faciales y Spa  [Card] Sueroterapias  [Card] Alopecia{"\n"}
            [Ver todos los tratamientos →]
          </WireframeSection>
          <WireframeSection title="DRA. LILIANA (Fondo navy #0C2E49)">
            [Foto portrait] "La medicina regenerativa no trata síntomas. Trata el origen."{"\n"}
            Dra. Liliana Pérez · Postgrado medicina estética · Maestría metabolismo redox · Cédula: 7629010{"\n"}
            [Conocer a la Dra. →]
          </WireframeSection>
          <WireframeSection title="RESULTADOS / ANTES Y DESPUÉS">
            "Lo que pueden lograr nuestros tratamientos"{"\n"}
            [Foto antes] → [Foto después]  [Foto antes] → [Foto después]{"\n"}
            [Ver más resultados →]
          </WireframeSection>
          <WireframeSection title="TESTIMONIOS (Fondo beige #E5DFD3)">
            ★★★★★ "Texto del testimonio..." — Nombre, tratamiento{"\n"}
            ★★★★★ "Texto del testimonio..." — Nombre, tratamiento{"\n"}
            45 reseñas verificadas en Google [Ver en Google Maps →]
          </WireframeSection>
          <WireframeSection title="BLOG PREVIEW">
            [Imagen] Título post 1  ·  [Imagen] Título post 2  ·  [Imagen] Título post 3{"\n"}
            Leer más →
          </WireframeSection>
          <WireframeSection title="CTA FINAL (Fondo degradado de marca)">
            "Tu primera consulta es el primer paso."{"\n"}
            [Agendar mi consulta →] WhatsApp: 442 206 7185
          </WireframeSection>
          <WireframeSection title="FOOTER (Fondo navy)">
            [Logo blanco] Tratamientos · Dra. Liliana · Resultados · Blog · Contacto{"\n"}
            Balcones del Amor 103, Querétaro · 442 206 7185{"\n"}
            © 2026 Well Aging Mexico Health Center
          </WireframeSection>
        </PageWireframe>

        {/* SERVICIO */}
        <PageWireframe title="Página 2 — Servicio tipo" subtitle="/tratamientos/[categoria]/[servicio]/">
          <WireframeSection title="HERO SERVICIO">
            Breadcrumb: Inicio › Tratamientos › Medicina Regenerativa{"\n"}
            [Nombre del tratamiento]          [Imagen]{"\n"}
            Subtítulo: beneficio principal en una línea{"\n"}
            [Agendar consulta]
          </WireframeSection>
          <WireframeSection title="¿QUÉ ES? (2 columnas)">
            Explicación accesible del          [Imagen o ilustración]{"\n"}
            tratamiento. Sin jerga.{"\n"}
            Qué hace en tu cuerpo.
          </WireframeSection>
          <WireframeSection title="BENEFICIOS (íconos + texto corto)">
            [✓] Beneficio 1  [✓] Beneficio 2  [✓] Beneficio 3{"\n"}
            [✓] Beneficio 4  [✓] Beneficio 5  [✓] Beneficio 6
          </WireframeSection>
          <WireframeSection title="¿PARA QUIÉN ES?">
            Candidatos ideales (bullets){"\n"}
            Contraindicaciones relevantes
          </WireframeSection>
          <WireframeSection title="PROCESO / CÓMO FUNCIONA">
            1. Consulta inicial   2. Aplicación   3. Seguimiento
          </WireframeSection>
          <WireframeSection title="PREGUNTAS FRECUENTES (acordeón)">
            + ¿Cuántas sesiones necesito?{"\n"}
            + ¿Duele?{"\n"}
            + ¿Cuándo veo resultados?
          </WireframeSection>
          <WireframeSection title="TRATAMIENTOS RELACIONADOS">
            [Card 1]  [Card 2]  [Card 3]
          </WireframeSection>
          <WireframeSection title="CTA FINAL">
            "¿Este tratamiento es para ti? Platicamos."{"\n"}
            [Agendar consulta] [WhatsApp]
          </WireframeSection>
        </PageWireframe>

        {/* DRA. LILIANA */}
        <PageWireframe title="Página 3 — Dra. Liliana" subtitle="/sobre-nosotros/dra-liliana/">
          <WireframeSection title="HERO (Fondo navy)">
            [Foto grande portrait]{"\n"}
            Dra. Liliana Carmen Pérez Pérez{"\n"}
            Médico Especialista en Medicina Estética Regenerativa{"\n"}
            Cédula: 7629010
          </WireframeSection>
          <WireframeSection title="HISTORIA PERSONAL">
            "¿Por qué me especialicé en medicina regenerativa?"{"\n"}
            [Texto en primera persona, humanizado]{"\n"}
            Filosofía: no tratar síntomas, sino el origen
          </WireframeSection>
          <WireframeSection title="CREDENCIALES (timeline o cards)">
            [Año] Postgrado medicina estética{"\n"}
            [Año] Maestría en metabolismo redox{"\n"}
            +10 años de experiencia clínica{"\n"}
            +9,000 procedimientos realizados
          </WireframeSection>
          <WireframeSection title="FILOSOFÍA DE ATENCIÓN">
            "Cómo trabajo contigo"{"\n"}
            Diagnóstico · Plan personalizado · Seguimiento
          </WireframeSection>
          <WireframeSection title="TESTIMONIOS + CTA FINAL">
            Reviews relacionados con la Dra.{"\n"}
            "Agenda tu consulta con la Dra. Liliana"{"\n"}
            [Agendar consulta →]
          </WireframeSection>
        </PageWireframe>

        {/* RESULTADOS */}
        <PageWireframe title="Página 4 — Resultados" subtitle="/resultados/">
          <WireframeSection title="HERO">
            "Resultados reales de pacientes reales"{"\n"}
            Cada caso es único. Aquí algunos ejemplos.
          </WireframeSection>
          <WireframeSection title="FILTROS">
            [Todos] [Regenerativa] [Estética] [Faciales] [Alopecia]
          </WireframeSection>
          <WireframeSection title="GALERÍA ANTES/DESPUÉS (grid)">
            [Antes → Después]  [Antes → Después]  [Antes → Después]{"\n"}
            [Antes → Después]  [Antes → Después]  [Antes → Después]
          </WireframeSection>
          <WireframeSection title="TESTIMONIOS ESCRITOS">
            (Google Reviews embed o manual)
          </WireframeSection>
          <WireframeSection title="CTA">
            "¿Quieres resultados así? Tu consulta es el primer paso."{"\n"}
            [Agendar consulta →]
          </WireframeSection>
        </PageWireframe>

        {/* CONTACTO */}
        <PageWireframe title="Página 5 — Contacto" subtitle="/contacto/">
          <WireframeSection title="HERO">
            "Agenda tu consulta — el primer paso hacia tu bienestar"
          </WireframeSection>
          <WireframeSection title="2 COLUMNAS">
            FORMULARIO               INFORMACIÓN DE CONTACTO{"\n"}
            Nombre *                  WhatsApp: 442 206 7185{"\n"}
            Email *                   Lun-Vie: 10:00-19:00{"\n"}
            Teléfono                  Sáb: 10:00-14:00{"\n"}
            Tratamiento de interés    Balcones del Amor 103, Qro{"\n"}
            Mensaje{"\n"}
            [Enviar mensaje]          [Botón WhatsApp directo]
          </WireframeSection>
          <WireframeSection title="MAPA GOOGLE MAPS (embed)">
            Balcones del Amor 103, Balcones Coloniales, Querétaro
          </WireframeSection>
        </PageWireframe>

        {/* Notas */}
        <div className="bg-beige/50 rounded-lg p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-3">Notas de implementación</h3>
          <ul className="text-sm text-body-text space-y-2">
            <li>• <strong>Componente reutilizable:</strong> Card de servicio (título + imagen + descripción + CTA)</li>
            <li>• <strong>Componente reutilizable:</strong> CTA section (título + botón + WhatsApp)</li>
            <li>• <strong>Componente reutilizable:</strong> Testimonial card (★ + texto + nombre)</li>
            <li>• <strong>Navbar sticky:</strong> con CTA "Agendar consulta" siempre visible en mobile</li>
            <li>• <strong>WhatsApp float button:</strong> fijo en esquina inferior derecha</li>
            <li>• <strong>FLOW integration:</strong> botones "Agendar consulta" abren URL de FLOW en nueva pestaña</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default WireframesPage;
