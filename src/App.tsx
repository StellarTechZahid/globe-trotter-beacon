import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import FloatingConsultationButton from "@/components/FloatingConsultationButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact";
import BlogsNews from "./pages/BlogsNews";
import SuccessStories from "./pages/SuccessStories";
import Consultation from "./pages/Consultation";
import Scholarship from "./pages/Scholarship";
import FAQs from "./pages/FAQs";
import Disclaimer from "./pages/Disclaimer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import VirtualConsulting from "./pages/VirtualConsulting";
import Visa from "./pages/Visa";
import Partnership from "./pages/Partnership";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs-news" element={<BlogsNews />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/virtual-consulting" element={<VirtualConsulting />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/partnership" element={<Partnership />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingConsultationButton />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
