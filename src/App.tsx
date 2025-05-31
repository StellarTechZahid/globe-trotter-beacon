
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
import Blogs from "./pages/Blogs";
import News from "./pages/News";
import Tips from "./pages/Tips";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import UKPage from "./pages/countries/UKPage";
import USAPage from "./pages/countries/USAPage";
import CanadaPage from "./pages/countries/CanadaPage";
import AustraliaPage from "./pages/countries/AustraliaPage";
import GermanyPage from "./pages/countries/GermanyPage";
import ItalyPage from "./pages/countries/ItalyPage";
import MalaysiaPage from "./pages/countries/MalaysiaPage";
import VirtualConsulting from "./pages/VirtualConsulting";
import Scholarship from "./pages/Scholarship";
import UniversitySelection from "./pages/services/UniversitySelection";
import CareerCounseling from "./pages/services/CareerCounseling";
import ProfileEvaluation from "./pages/services/ProfileEvaluation";
import TestPreparation from "./pages/services/TestPreparation";
import ApplicationSupport from "./pages/services/ApplicationSupport";
import ScholarshipConsulting from "./pages/services/ScholarshipConsulting";
import VisaAssistance from "./pages/services/VisaAssistance";
import AccommodationSupport from "./pages/services/AccommodationSupport";
import PreDepartureOrientation from "./pages/services/PreDepartureOrientation";
import PostArrivalSupport from "./pages/services/PostArrivalSupport";
import JobSearchGuidance from "./pages/services/JobSearchGuidance";
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
          <Route path="/services/career-counseling" element={<CareerCounseling />} />
          <Route path="/services/profile-evaluation" element={<ProfileEvaluation />} />
          <Route path="/services/test-preparation" element={<TestPreparation />} />
          <Route path="/services/application-support" element={<ApplicationSupport />} />
          <Route path="/services/scholarship-consulting" element={<ScholarshipConsulting />} />
          <Route path="/services/visa-assistance" element={<VisaAssistance />} />
          <Route path="/services/accommodation-support" element={<AccommodationSupport />} />
          <Route path="/services/pre-departure-orientation" element={<PreDepartureOrientation />} />
          <Route path="/services/post-arrival-support" element={<PostArrivalSupport />} />
          <Route path="/services/job-search-guidance" element={<JobSearchGuidance />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/uk" element={<UKPage />} />
          <Route path="/countries/usa" element={<USAPage />} />
          <Route path="/countries/canada" element={<CanadaPage />} />
          <Route path="/countries/australia" element={<AustraliaPage />} />
          <Route path="/countries/germany" element={<GermanyPage />} />
          <Route path="/countries/italy" element={<ItalyPage />} />
          <Route path="/countries/malaysia" element={<MalaysiaPage />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/virtual-consulting" element={<VirtualConsulting />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarship/fully-funded" element={<FullyFunded />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/blogs-news" element={<BlogsNews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
