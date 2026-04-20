import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const DisenoWebPage = () => {
  const navigate = useNavigate();
  const indexUrl = "/diseno-web/home.html";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-navy text-primary-foreground py-3 px-4 flex items-center justify-between shadow-well">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-steel hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Panel
        </button>
        <div className="text-sm font-semibold tracking-wide">
          Diseño Web · Well Aging Mexico
        </div>
        <a
          href={indexUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-steel hover:text-white transition-colors"
        >
          Abrir en nueva pestaña <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </header>

      <main className="flex-1">
        <iframe
          src={indexUrl}
          title="Well Aging Mexico — Diseño Web"
          className="w-full h-full border-0"
          style={{ height: "calc(100vh - 52px)" }}
        />
      </main>
    </div>
  );
};

export default DisenoWebPage;
