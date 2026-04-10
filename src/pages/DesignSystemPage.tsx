import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const colors = [
  { name: "Azul Profundo (Navy)", token: "--color-navy", hex: "#0C2E49", usage: "Logo, headings, botones primarios, navbar, footer" },
  { name: "Azul Claro (Steel)", token: "--color-steel", hex: "#A1B2C6", usage: "Fondos secundarios, degradados, acentos, bordes suaves" },
  { name: "Beige Cálido", token: "--color-beige", hex: "#E5DFD3", usage: "Fondos de secciones alternas, testimonios, cards" },
  { name: "Blanco", token: "--color-white", hex: "#FFFFFF", usage: "Fondo principal, texto sobre navy" },
];

const opacityScale = [
  { pct: "100%", hex: "#0C2E49", usage: "Texto principal, botones" },
  { pct: "80%", hex: "#3D5669", usage: "Subtítulos, hovers" },
  { pct: "60%", hex: "#6E8491", usage: "Texto secundario" },
  { pct: "40%", hex: "#9FB1BA", usage: "Placeholders" },
  { pct: "20%", hex: "#D0DAE0", usage: "Bordes, separadores" },
];

const typeScale = [
  { level: "Display Hero", size: "56px", weight: 700, lineHeight: "1.1", sample: "Aging is natural" },
  { level: "H1", size: "44px", weight: 700, lineHeight: "1.1", sample: "Care is essential" },
  { level: "H2", size: "32px", weight: 600, lineHeight: "1.3", sample: "Medicina regenerativa" },
  { level: "H3", size: "22px", weight: 600, lineHeight: "1.3", sample: "Tratamientos personalizados" },
  { level: "Body", size: "17px", weight: 400, lineHeight: "1.6", sample: "Tu cuerpo tiene la capacidad de regenerarse. Nuestros tratamientos activan ese potencial con ciencia y acompañamiento." },
  { level: "Small", size: "13px", weight: 400, lineHeight: "1.4", sample: "Dra. Liliana Pérez · Cédula 7629010 · Querétaro, México" },
  { level: "CTA", size: "15px", weight: 500, lineHeight: "1.4", sample: "AGENDAR CONSULTA →" },
];

const spacing = [
  { token: "--space-xs", value: "8px", usage: "Gaps internos, iconos" },
  { token: "--space-sm", value: "16px", usage: "Padding cards, distancia entre elementos" },
  { token: "--space-md", value: "24px", usage: "Espaciado entre secciones cortas" },
  { token: "--space-lg", value: "48px", usage: "Sección a sección" },
  { token: "--space-xl", value: "80px", usage: "Bloques mayores, hero padding" },
  { token: "--space-2xl", value: "120px", usage: "Separación visual entre páginas" },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 mt-16 first:mt-0">{children}</h2>
);

const DesignSystemPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-navy text-primary-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-steel hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al Panel
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Design System</h1>
          <p className="text-steel mt-2">Well Aging Mexico Health Center · Versión web · Abril 2026</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Colores */}
        <SectionTitle>Paleta principal</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {colors.map((c) => (
            <div key={c.hex} className="rounded-lg overflow-hidden shadow-well border border-border">
              <div className="h-24" style={{ backgroundColor: c.hex }} />
              <div className="p-3">
                <p className="font-semibold text-sm text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{c.hex}</p>
                <p className="text-xs text-body-text mt-1">{c.usage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Degradado */}
        <h3 className="text-lg font-semibold text-foreground mb-3">Degradado de marca</h3>
        <div className="h-20 rounded-lg mb-2" style={{ background: "linear-gradient(135deg, #A1B2C6 0%, #D0D8E4 50%, #E8EDF3 100%)" }} />
        <p className="text-sm text-muted-foreground mb-8">Uso: hero backgrounds, section dividers, páginas de categoría</p>

        {/* Opacidad */}
        <h3 className="text-lg font-semibold text-foreground mb-3">Escala de opacidad (Azul Profundo)</h3>
        <div className="flex gap-2 mb-8">
          {opacityScale.map((o) => (
            <div key={o.pct} className="flex-1 text-center">
              <div className="h-16 rounded-md mb-2" style={{ backgroundColor: o.hex }} />
              <p className="text-xs font-semibold text-foreground">{o.pct}</p>
              <p className="text-xs font-mono text-muted-foreground">{o.hex}</p>
              <p className="text-xs text-body-text">{o.usage}</p>
            </div>
          ))}
        </div>

        {/* Tipografía */}
        <SectionTitle>Tipografía</SectionTitle>
        <p className="text-sm text-muted-foreground mb-6">
          Fuente principal: <strong>Montserrat</strong> (Google Fonts) — placeholder de ZT Nature (comercial).
          Alternativa premium: DM Sans.
        </p>
        <div className="space-y-6 mb-8">
          {typeScale.map((t) => (
            <div key={t.level} className="border border-border rounded-lg overflow-hidden">
              <div className="bg-beige/40 px-4 py-2 flex items-center justify-between border-b border-border">
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">{t.level}</span>
                <span className="text-xs text-muted-foreground font-mono">{t.size} · {t.weight} · lh {t.lineHeight}</span>
              </div>
              <div className="px-6 py-5">
                <p
                  className="text-foreground"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: t.size,
                    fontWeight: t.weight,
                    lineHeight: t.lineHeight,
                    letterSpacing: t.level === "CTA" ? "0.08em" : undefined,
                    textTransform: t.level === "CTA" ? "uppercase" : undefined,
                  }}
                >
                  {t.sample}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones */}
        <SectionTitle>Botones</SectionTitle>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button className="bg-navy text-white hover:bg-navy/90 rounded-lg px-7 py-3 font-medium">
            Agendar consulta
          </Button>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy/5 rounded-lg px-7 py-3 font-medium border-[1.5px]">
            Ver tratamientos
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Primario: bg navy, texto blanco, radius 8px · Secundario: outline navy, 1.5px border</p>

        {/* Espaciado */}
        <SectionTitle>Espaciado (sistema 8px)</SectionTitle>
        <div className="space-y-2 mb-8">
          {spacing.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <code className="text-xs bg-beige text-navy px-2 py-1 rounded font-mono w-32">{s.token}</code>
              <div className="bg-navy/20 rounded" style={{ width: s.value, height: "16px" }} />
              <span className="text-sm text-body-text">{s.value} — {s.usage}</span>
            </div>
          ))}
        </div>

        {/* Componentes */}
        <SectionTitle>Componentes clave</SectionTitle>
        <div className="space-y-6">
          {[
            { name: "Navbar", desc: "Logo izquierda · Links: Tratamientos / Dra. Liliana / Resultados / Blog / Contacto · CTA sticky \"Agendar consulta\" (navy) · Fondo blanco con border-bottom beige al scroll" },
            { name: "Hero Section", desc: "Texto izquierda + imagen derecha · Headline Montserrat Bold navy · Sub Montserrat Regular #3D5669 · CTA doble: primario + secundario · Fondo degradado o blanco + foto" },
            { name: "Cards de Servicio", desc: "Fondo blanco o beige · Título H3 navy · Border-radius 12px · Shadow 0 2px 16px rgba(12,46,73,0.08) · CTA link con arrow" },
            { name: "Sección Dra. Liliana", desc: "Foto portrait · Badges: \"10+ años\", \"9,000+ procedimientos\" · Quote destacado · Fondo navy con texto blanco" },
            { name: "Testimonios", desc: "Fondo beige · Stars ★★★★★ dorado · Nombre + foto · Ref GBP: \"45 reseñas verificadas en Google\"" },
            { name: "Footer", desc: "Fondo navy · Texto blanco · Logo blanco · Links + WhatsApp" },
          ].map((comp) => (
            <div key={comp.name} className="bg-beige/50 rounded-lg p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-1">{comp.name}</h3>
              <p className="text-sm text-body-text">{comp.desc}</p>
            </div>
          ))}
        </div>

        {/* Voz de marca */}
        <SectionTitle>Voz de marca</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-lg p-5 border" style={{ backgroundColor: "hsl(140 30% 96%)", borderColor: "hsl(140 30% 85%)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "hsl(140 30% 30%)" }}>✓ Hacer</h3>
            <ul className="text-sm space-y-1" style={{ color: "hsl(140 30% 35%)" }}>
              <li>"Tu cuerpo tiene la capacidad de regenerarse"</li>
              <li>"Medicina basada en evidencia"</li>
              <li>"Acompañamiento personalizado"</li>
              <li>"Dra. Liliana..." (humanizar)</li>
              <li>Tono calmo, confiado</li>
            </ul>
          </div>
          <div className="rounded-lg p-5 border" style={{ backgroundColor: "hsl(0 40% 96%)", borderColor: "hsl(0 40% 85%)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "hsl(0 40% 35%)" }}>✗ Evitar</h3>
            <ul className="text-sm space-y-1" style={{ color: "hsl(0 40% 40%)" }}>
              <li>"¡Resultados garantizados!"</li>
              <li>"Tratamiento milagroso"</li>
              <li>Lenguaje agresivo de ventas</li>
              <li>"El staff" (genérico)</li>
              <li>Alarmismo, urgencia falsa</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesignSystemPage;
