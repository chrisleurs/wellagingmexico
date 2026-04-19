import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState } from "react";

const pages = [
  { name: "Home", file: "/diseno-web/home.html" },
  { name: "Tratamientos", file: "/diseno-web/tratamientos.html" },
  { name: "Tratamiento (PRP)", file: "/diseno-web/tratamiento.html" },
  { name: "Sobre Nosotros", file: "/diseno-web/sobre-nosotros.html" },
];

const DisenoWebPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-navy text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-steel hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Panel
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Diseño Web · Hi-Fi</h1>
          <p className="text-steel mt-2">
            Páginas hi-fi con imágenes editoriales · Well Aging Mexico · Abril 2026
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {pages.map((p, i) => (
            <button
              key={p.file}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === i
                  ? "bg-navy text-white"
                  : "bg-beige/50 text-foreground hover:bg-beige"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">{pages[active].name}</h2>
          <a
            href={pages[active].file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-navy hover:underline"
          >
            Abrir en nueva pestaña <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div
          className="border border-border rounded-lg overflow-hidden shadow-well"
          style={{ height: "75vh" }}
        >
          <iframe
            key={pages[active].file}
            src={pages[active].file}
            className="w-full h-full"
            title={pages[active].name}
          />
        </div>
      </main>
    </div>
  );
};

export default DisenoWebPage;
