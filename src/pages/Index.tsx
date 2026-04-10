import { useNavigate } from "react-router-dom";
import { Palette, Map, Layout } from "lucide-react";

const cards = [
  {
    title: "Design System",
    description: "Paleta de colores, tipografía, botones, espaciado y componentes clave de la marca Well Aging.",
    icon: Palette,
    path: "/design-system",
  },
  {
    title: "Sitemap",
    description: "Arquitectura de 26 páginas, estructura de URLs, keywords y metadata SEO.",
    icon: Map,
    path: "/sitemap",
  },
  {
    title: "Wireframes",
    description: "Estructura de secciones para Home, Servicio, Dra. Liliana, Resultados y Contacto.",
    icon: Layout,
    path: "/wireframes",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Well Aging Mexico Health Center
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Panel de Control
          </h1>
          <p className="text-steel text-lg max-w-xl mx-auto">
            Documentación del proyecto web — Design System, Sitemap y Wireframes
          </p>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <button
              key={card.path}
              onClick={() => navigate(card.path)}
              className="group bg-card rounded-lg p-8 text-left shadow-well hover:shadow-well-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-beige flex items-center justify-center mb-5 group-hover:bg-navy transition-colors duration-300">
                <card.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h2>
              <p className="text-body-text text-sm leading-relaxed">
                {card.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-navy group-hover:translate-x-1 transition-transform duration-200">
                Ver documento →
              </span>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Well Aging Mexico Health Center · Proyecto HYTO</p>
      </footer>
    </div>
  );
};

export default Index;
