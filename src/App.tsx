import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DesignSystemPage from "./pages/DesignSystemPage.tsx";
import SitemapPage from "./pages/SitemapPage.tsx";
import WireframesPage from "./pages/WireframesPage.tsx";
import DisenoWebPage from "./pages/DisenoWebPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/wireframes" element={<WireframesPage />} />
          <Route path="/diseno-web" element={<DisenoWebPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
