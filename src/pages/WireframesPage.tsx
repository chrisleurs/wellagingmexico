import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState } from "react";

const wireframes = [
  { name: "Home", file: "/wireframes/home.html" },
  { name: "Categoría de Tratamientos", file: "/wireframes/tratamientos.html" },
  { name: "Tratamiento Individual", file: "/wireframes/tratamiento.html" },
  { name: "Dra. Liliana / Sobre Nosotros", file: "/wireframes/sobre-nosotros.html" },
  { name: "Resultados", file: "/wireframes/resultados.html" },
  { name: "Blog", file: "/wireframes/blog.html" },
  { name: "Blog Post", file: "/wireframes/blog-post.html" },
  { name: "Contacto", file: "/wireframes/contacto.html" },
];

const WireframesPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-navy text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-steel hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al Panel
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Wireframes</h1>
          <p className="text-steel mt-2">Wireframes HTML interactivos · Well Aging Mexico · Abril 2026</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {wireframes.map((w, i) => (
            <button
              key={w.file}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === i
                  ? "bg-navy text-white"
                  : "bg-beige/50 text-foreground hover:bg-beige"
              }`}
            >
              {w.name}
            </button>
          ))}
        </div>

        {/* Open in new tab */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">{wireframes[active].name}</h2>
          <a
            href={wireframes[active].file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-navy hover:underline"
          >
            Abrir en nueva pestaña <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Iframe */}
        <div className="border border-border rounded-lg overflow-hidden shadow-well" style={{ height: "75vh" }}>
          <iframe
            key={wireframes[active].file}
            src={wireframes[active].file}
            className="w-full h-full"
            title={wireframes[active].name}
          />
        </div>
      </main>
    </div>
  );
};

export default WireframesPage;
