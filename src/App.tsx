
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Countries from "./pages/Countries";
import Partnership from "./pages/Partnership";
import Events from "./pages/Events";
import SuccessStories from "./pages/SuccessStories";
import BlogsNews from "./pages/BlogsNews";
import Contact from "./pages/Contact";
import UKPage from "./pages/countries/UKPage";
import USAPage from "./pages/countries/USAPage";
import VirtualConsulting from "./pages/VirtualConsulting";
import Scholarship from "./pages/Scholarship";
import UniversitySelection from "./pages/services/UniversitySelection";
import FullyFunded from "./pages/scholarship/FullyFunded";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/university-selection" element={<UniversitySelection />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/uk" element={<UKPage />} />
          <Route path="/countries/usa" element={<USAPage />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/virtual-consulting" element={<VirtualConsulting />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarship/fully-funded" element={<FullyFunded />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/blogs-news" element={<BlogsNews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
