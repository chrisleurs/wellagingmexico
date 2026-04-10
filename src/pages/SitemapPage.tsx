import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PageDetail {
  num: number;
  name: string;
  url: string;
  h1: string;
  keyword?: string;
  meta?: string;
  sections?: string;
  content?: string;
}

const pages: PageDetail[] = [
  { num: 1, name: "Home", url: "/", h1: "Aging is natural. Care is essential.", meta: "Well Aging Mexico Health Center — Medicina estética regenerativa en Querétaro. Reserva tu consulta con la Dra. Liliana Pérez.", sections: "Hero + CTA · Propuesta de valor · Categorías · Dra. Liliana preview · Testimonios · Blog preview · Footer CTA" },
  { num: 2, name: "Sobre Nosotros", url: "/sobre-nosotros/", h1: "Medicina con propósito — quiénes somos", keyword: "clínica medicina regenerativa Querétaro", content: "Filosofía, misión, visión, valores, historia, credenciales" },
  { num: 3, name: "Dra. Liliana Pérez", url: "/sobre-nosotros/dra-liliana/", h1: "Dra. Liliana Pérez — Tu guía en salud y longevidad", keyword: "médico estético Querétaro, doctora medicina regenerativa Querétaro" },
  { num: 4, name: "Células Madre", url: "/tratamientos/medicina-regenerativa/celulas-madre/", h1: "Tratamiento con Células Madre en Querétaro", keyword: "células madre medicina regenerativa Querétaro" },
  { num: 5, name: "PRP", url: "/tratamientos/medicina-regenerativa/prp-plasma-rico-en-plaquetas/", h1: "PRP — Plasma Rico en Plaquetas en Querétaro", keyword: "PRP plasma rico plaquetas Querétaro" },
  { num: 6, name: "Exosomas", url: "/tratamientos/medicina-regenerativa/exosomas/", h1: "Terapia con Exosomas — regeneración a nivel celular", keyword: "exosomas tratamiento estético Querétaro" },
  { num: 7, name: "Péptidos y Secretoras", url: "/tratamientos/medicina-regenerativa/peptidos-y-secretoras/", h1: "Péptidos y Células Secretoras — longevidad activa", keyword: "péptidos antiaging Querétaro" },
  { num: 8, name: "Fibroblastos", url: "/tratamientos/medicina-regenerativa/fibroblastos/", h1: "Terapia con Fibroblastos en Querétaro", keyword: "fibroblastos rejuvenecimiento facial Querétaro" },
  { num: 9, name: "Factores de Crecimiento", url: "/tratamientos/medicina-regenerativa/factores-de-crecimiento/", h1: "Factores de Crecimiento — restauración tisular", keyword: "factores de crecimiento piel Querétaro" },
  { num: 10, name: "Botox", url: "/tratamientos/medicina-estetica/botox-toxina-botulinica/", h1: "Botox y Toxina Botulínica en Querétaro", keyword: "botox Querétaro, toxina botulínica precio Querétaro" },
  { num: 11, name: "Fillers", url: "/tratamientos/medicina-estetica/fillers-acido-hialuronico/", h1: "Fillers con Ácido Hialurónico en Querétaro", keyword: "fillers ácido hialurónico Querétaro" },
  { num: 12, name: "Bioestimuladores", url: "/tratamientos/medicina-estetica/bioestimuladores/", h1: "Bioestimuladores — regeneración dérmica profunda", keyword: "bioestimuladores colágeno Querétaro" },
  { num: 13, name: "Faciales Personalizados", url: "/tratamientos/faciales-y-spa/faciales-personalizados/", h1: "Faciales Personalizados en Querétaro", keyword: "facial médico Querétaro" },
  { num: 14, name: "Masajes Terapéuticos", url: "/tratamientos/faciales-y-spa/masajes-terapeuticos/", h1: "Masajes Terapéuticos — recuperación y bienestar", keyword: "masajes terapéuticos Querétaro" },
  { num: 15, name: "Protocolos Antiaging", url: "/tratamientos/faciales-y-spa/protocolos-antiaging/", h1: "Protocolos Antiaging — plan personalizado de rejuvenecimiento", keyword: "protocolo antiaging Querétaro" },
  { num: 16, name: "Sueros Vitamínicos", url: "/tratamientos/sueroterapias/sueros-vitaminicos/", h1: "Sueros Vitamínicos IV en Querétaro", keyword: "sueroterapia vitamínica Querétaro" },
  { num: 17, name: "Suero Antiaging", url: "/tratamientos/sueroterapias/suero-antiaging/", h1: "Suero Antiaging IV — regeneración sistémica", keyword: "suero antiaging Querétaro" },
  { num: 18, name: "Suero Energizante", url: "/tratamientos/sueroterapias/suero-energizante/", h1: "Suero Energizante — vitalidad instantánea", keyword: "suero energizante Querétaro" },
  { num: 19, name: "PRP Capilar", url: "/tratamientos/alopecia/tratamiento-alopecia-prp/", h1: "PRP para Alopecia — regeneración capilar con plasma", keyword: "PRP alopecia Querétaro" },
  { num: 20, name: "Mesoterapia Capilar", url: "/tratamientos/alopecia/mesoterapia-capilar/", h1: "Mesoterapia Capilar en Querétaro", keyword: "mesoterapia capilar Querétaro" },
  { num: 21, name: "Resultados", url: "/resultados/", h1: "Resultados reales — lo que puedes esperar", keyword: "resultados medicina estética Querétaro" },
  { num: 22, name: "Blog", url: "/blog/", h1: "Blog — Salud, longevidad y bienestar bien explicados" },
  { num: 26, name: "Contacto", url: "/contacto/", h1: "Agenda tu consulta — el primer paso hacia tu bienestar", keyword: "clínica medicina estética Querétaro contacto" },
];

const categories = [
  { name: "Home", pages: [1] },
  { name: "Sobre Nosotros", pages: [2, 3] },
  { name: "Medicina Regenerativa", pages: [4, 5, 6, 7, 8, 9] },
  { name: "Medicina Estética", pages: [10, 11, 12] },
  { name: "Faciales y Spa", pages: [13, 14, 15] },
  { name: "Sueroterapias", pages: [16, 17, 18] },
  { name: "Alopecia", pages: [19, 20] },
  { name: "Otros", pages: [21, 22, 26] },
];

const CategorySection = ({ cat }: { cat: typeof categories[0] }) => {
  const [open, setOpen] = useState(true);
  const catPages = cat.pages.map((n) => pages.find((p) => p.num === n)!);

  return (
    <div className="mb-6">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 w-full text-left py-2">
        {open ? <ChevronDown className="w-4 h-4 text-navy" /> : <ChevronRight className="w-4 h-4 text-navy" />}
        <span className="font-semibold text-foreground">{cat.name}</span>
        <span className="text-xs text-muted-foreground ml-2">({cat.pages.length} páginas)</span>
      </button>
      {open && (
        <div className="ml-6 space-y-3 mt-2">
          {catPages.map((p) => (
            <div key={p.num} className="bg-beige/30 rounded-lg p-4 border border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-navy text-white text-xs font-semibold px-2 py-0.5 rounded">{p.num}</span>
                    <span className="font-semibold text-foreground">{p.name}</span>
                  </div>
                  <code className="text-xs text-muted-foreground block mb-2">{p.url}</code>
                  <p className="text-sm text-body-text"><strong>H1:</strong> {p.h1}</p>
                  {p.keyword && <p className="text-sm text-body-text"><strong>Keywords:</strong> {p.keyword}</p>}
                  {p.meta && <p className="text-sm text-body-text"><strong>Meta:</strong> {p.meta}</p>}
                  {p.sections && <p className="text-sm text-body-text"><strong>Secciones:</strong> {p.sections}</p>}
                  {p.content && <p className="text-sm text-body-text"><strong>Contenido:</strong> {p.content}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SitemapPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-navy text-primary-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-steel hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al Panel
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Sitemap</h1>
          <p className="text-steel mt-2">Arquitectura SEO · 26 páginas · wellaging.mx</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* URL Tree */}
        <h2 className="text-2xl font-semibold text-foreground mb-6">Estructura de URLs</h2>
        <pre className="bg-navy text-steel text-xs md:text-sm p-6 rounded-lg overflow-x-auto mb-12 font-mono leading-relaxed">
{`wellaging.mx/
├── (home)
├── sobre-nosotros/
│   └── dra-liliana/
├── tratamientos/
│   ├── medicina-regenerativa/
│   │   ├── celulas-madre/
│   │   ├── prp-plasma-rico-en-plaquetas/
│   │   ├── exosomas/
│   │   ├── peptidos-y-secretoras/
│   │   ├── fibroblastos/
│   │   └── factores-de-crecimiento/
│   ├── medicina-estetica/
│   │   ├── botox-toxina-botulinica/
│   │   ├── fillers-acido-hialuronico/
│   │   └── bioestimuladores/
│   ├── faciales-y-spa/
│   │   ├── faciales-personalizados/
│   │   ├── masajes-terapeuticos/
│   │   └── protocolos-antiaging/
│   ├── sueroterapias/
│   │   ├── sueros-vitaminicos/
│   │   ├── suero-antiaging/
│   │   └── suero-energizante/
│   └── alopecia/
│       ├── tratamiento-alopecia-prp/
│       └── mesoterapia-capilar/
├── resultados/
├── blog/
└── contacto/`}
        </pre>

        {/* Detalle por categoría */}
        <h2 className="text-2xl font-semibold text-foreground mb-6">Detalle de páginas</h2>
        {categories.map((cat) => (
          <CategorySection key={cat.name} cat={cat} />
        ))}

        {/* Notas SEO */}
        <h2 className="text-2xl font-semibold text-foreground mb-4 mt-12">Notas de arquitectura SEO</h2>
        <div className="bg-beige/50 rounded-lg p-6 border border-border space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Páginas de mayor prioridad</h3>
            <ol className="list-decimal list-inside text-sm text-body-text space-y-1">
              <li>Home</li>
              <li>Dra. Liliana (featured snippet oportunidad)</li>
              <li>Botox Querétaro (alto volumen de búsqueda)</li>
              <li>PRP Querétaro (diferenciador + volumen)</li>
              <li>Células Madre Querétaro (nicho premium)</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Internal linking</h3>
            <ul className="text-sm text-body-text space-y-1">
              <li>• Cada servicio → CTA Contacto + 2 servicios relacionados</li>
              <li>• Blog posts → páginas de servicio mencionadas</li>
              <li>• Home → todas las categorías</li>
              <li>• Dra. Liliana → testimonios + resultados</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Schema Markup (Semana 2)</h3>
            <ul className="text-sm text-body-text space-y-1">
              <li>• LocalBusiness + MedicalBusiness → Home</li>
              <li>• Physician → Dra. Liliana</li>
              <li>• MedicalProcedure → cada tratamiento</li>
              <li>• FAQPage → Home + servicios clave</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SitemapPage;
