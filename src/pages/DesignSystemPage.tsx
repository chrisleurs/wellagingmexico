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
  { level: "Display Hero", size: "56–72px", weight: "Bold 700", font: "Montserrat" },
  { level: "H1", size: "40–48px", weight: "Bold 700", font: "Montserrat" },
  { level: "H2", size: "28–36px", weight: "SemiBold 600", font: "Montserrat" },
  { level: "H3", size: "20–24px", weight: "SemiBold 600", font: "Montserrat" },
  { level: "Body", size: "16–18px", weight: "Regular 400", font: "Montserrat" },
  { level: "Small", size: "13–14px", weight: "Regular 400", font: "Montserrat" },
  { level: "CTA", size: "15–16px", weight: "Medium 500", font: "Montserrat" },
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
        <div className="space-y-4 mb-8">
          {typeScale.map((t) => (
            <div key={t.level} className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="w-28 text-sm font-medium text-muted-foreground">{t.level}</span>
              <span className="text-foreground" style={{ fontSize: t.size.split("–")[0], fontWeight: parseInt(t.weight) }}>
                Aging is natural
              </span>
              <span className="text-xs text-muted-foreground ml-auto hidden md:block">{t.size} · {t.weight}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-2"><strong>Line-height:</strong> Display/H1: 1.1 · H2/H3: 1.3 · Body: 1.6 · Small: 1.4</p>

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
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 mb-2">✓ Hacer</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>"Tu cuerpo tiene la capacidad de regenerarse"</li>
              <li>"Medicina basada en evidencia"</li>
              <li>"Acompañamiento personalizado"</li>
              <li>"Dra. Liliana..." (humanizar)</li>
              <li>Tono calmo, confiado</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-semibold text-red-800 mb-2">✗ Evitar</h3>
            <ul className="text-sm text-red-700 space-y-1">
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
