
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
import VirtualConsultingPage from "./pages/VirtualConsultingPage";
import Visa from "./pages/Visa";
import Partnership from "./pages/Partnership";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import News from "./pages/News";
import Articles from "./pages/Articles";
import Tips from "./pages/Tips";

// Scholarship pages
import Undergraduate from "./pages/scholarship/Undergraduate";
import Postgraduate from "./pages/scholarship/Postgraduate";
import PhD from "./pages/scholarship/PhD";
import Diploma from "./pages/scholarship/Diploma";
import FullyFunded from "./pages/scholarship/FullyFunded";
import PartiallyFunded from "./pages/scholarship/PartiallyFunded";
import NorthAmerica from "./pages/scholarship/NorthAmerica";
import EuropeanCountries from "./pages/scholarship/EuropeanCountries";
import CentralAsianCountries from "./pages/scholarship/CentralAsianCountries";

// Country pages
import UKPage from "./pages/countries/UKPage";
import USAPage from "./pages/countries/USAPage";
import CanadaPage from "./pages/countries/CanadaPage";
import AustraliaPage from "./pages/countries/AustraliaPage";
import MalaysiaPage from "./pages/countries/MalaysiaPage";
import GermanyPage from "./pages/countries/GermanyPage";
import ItalyPage from "./pages/countries/ItalyPage";
import NewZealandPage from "./pages/countries/NewZealandPage";
import UAEPage from "./pages/countries/UAEPage";

// Service pages
import CareerCounseling from "./pages/services/CareerCounseling";
import UniversitySelection from "./pages/services/UniversitySelection";
import ProfileEvaluation from "./pages/services/ProfileEvaluation";
import TestPreparation from "./pages/services/TestPreparation";
import ApplicationSupport from "./pages/services/ApplicationSupport";
import ScholarshipConsulting from "./pages/services/ScholarshipConsulting";
import VisaAssistance from "./pages/services/VisaAssistance";
import AccommodationSupport from "./pages/services/AccommodationSupport";
import PreDepartureOrientation from "./pages/services/PreDepartureOrientation";
import PostArrivalSupport from "./pages/services/PostArrivalSupport";
import JobSearchGuidance from "./pages/services/JobSearchGuidance";

// Event pages
import EducationExpo from "./pages/events/EducationExpo";
import EducationEvents from "./pages/events/EducationEvents";
import Seminars from "./pages/events/Seminars";
import CampusVisits from "./pages/events/CampusVisits";

// Partnership pages
import PartnerUniversities from "./pages/partnership/Universities";
import Accreditation from "./pages/partnership/Accreditation";

// Blog pages
import TopUniversitiesInUSAForInternationalStudents2024 from "./pages/blogs/TopUniversitiesInUSAForInternationalStudents2024";
import StudyInCanadaComplete2024 from "./pages/blogs/StudyInCanadaComplete2024";
import BestCountriesToStudyAbroadForInternationalStudents2024 from "./pages/blogs/BestCountriesToStudyAbroadForInternationalStudents2024";
import CompleteGuideToStudyingInCanadaTopUniversitiesAndScholarships2024 from "./pages/blogs/CompleteGuideToStudyingInCanadaTopUniversitiesAndScholarships2024";
import ItalyStudentVisaGuide from "./pages/blogs/ItalyStudentVisaGuide";
import ScholarshipsInItaly2025 from "./pages/blogs/ScholarshipsInItaly2025";
import StudyInItalyGuide from "./pages/blogs/StudyInItalyGuide";
import StudyingInCanada from "./pages/blogs/StudyingInCanada";
import StudyingInGermanyCompleteGuideForInternationalStudents2024 from "./pages/blogs/StudyingInGermanyCompleteGuideForInternationalStudents2024";
import TopGlobalScholarships2025 from "./pages/blogs/TopGlobalScholarships2025";
import StudyingInAustralia from "./pages/blogs/WhyStudyInAustraliaBestUniversitiesAndStudentLifeGuide2025";

// Article pages
import BestScholarshipsForInternationalStudents2024 from "./pages/articles/BestScholarshipsForInternationalStudents2024";
import CareerPathways from "./pages/articles/CareerPathways";
import ChoosingStudyDestination from "./pages/articles/ChoosingStudyDestination";
import VisaRequirementAnalysis from "./pages/articles/VisaRequirementAnalysis";
import EducationEconomicsAnalysis from "./pages/articles/EducationEconomicsAnalysis";
import UniversityRankingsDecoded from "./pages/articles/UniversityRankingsDecoded";
import CulturalIntelligence from "./pages/articles/CulturalIntelligence";
import ResearchOpportunities from "./pages/articles/ResearchOpportunities";
import TechnologyInEducation from "./pages/articles/TechnologyInEducation";
import SOPGuide from "./pages/articles/SOPGuide";
import TopMistakesForeignColleges from "./pages/articles/TopMistakesForeignColleges";
import StudyInGermanyFree from "./pages/articles/StudyInGermanyFree";
import Top10ScholarshipsUK from "./pages/articles/Top10ScholarshipsUK";
import UniversityApplicationTipsForInternationalStudents2024 from "./pages/articles/UniversityApplicationTipsForInternationalStudents2024";
import HowToWriteWinningScholarshipEssaysStepByStepGuide2024 from "./pages/articles/HowToWriteWinningScholarshipEssaysStepByStepGuide2024";

// News pages
import GlobalEducationTrends2024 from "./pages/news/GlobalEducationTrends2024";
import CanadaImmigrationTargets from "./pages/news/CanadaImmigrationTargets";
import NewZealandStudentVisaUpdates2024 from "./pages/news/NewZealandStudentVisaUpdates2024";
import UKPostStudyWorkVisaChangesForInternationalStudents2024 from "./pages/news/UKPostStudyWorkVisaChangesForInternationalStudents2024";

// Tips pages
import StudyAbroadPreparationChecklist2024 from "./pages/tips/StudyAbroadPreparationChecklist2024";
import FirstTimeInternationalStudents from "./pages/tips/FirstTimeInternationalStudents";
import TopTipsForInternationalStudentVisaApplications2024 from "./pages/tips/TopTipsForInternationalStudentVisaApplications2024";

// Fallback detail pages
import BlogDetailFallback from "./pages/blogs/BlogDetailFallback";
import ArticleDetailFallback from "./pages/articles/ArticleDetailFallback";
import NewsDetailFallback from "./pages/news/NewsDetailFallback";
import TipsDetailFallback from "./pages/tips/TipsDetailFallback";

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
            <Route path="/virtual-consulting-services" element={<VirtualConsultingPage />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/tips" element={<Tips />} />
            
            {/* Scholarship Routes */}
            <Route path="/scholarship/undergraduate" element={<Undergraduate />} />
            <Route path="/scholarship/postgraduate" element={<Postgraduate />} />
            <Route path="/scholarship/phd" element={<PhD />} />
            <Route path="/scholarship/diploma" element={<Diploma />} />
            <Route path="/scholarship/fully-funded" element={<FullyFunded />} />
            <Route path="/scholarship/partially-funded" element={<PartiallyFunded />} />
            <Route path="/scholarship/north-america" element={<NorthAmerica />} />
            <Route path="/scholarship/european-countries" element={<EuropeanCountries />} />
            <Route path="/scholarship/central-asian-countries" element={<CentralAsianCountries />} />

            {/* Country Routes */}
            <Route path="/countries/uk" element={<UKPage />} />
            <Route path="/countries/usa" element={<USAPage />} />
            <Route path="/countries/canada" element={<CanadaPage />} />
            <Route path="/countries/australia" element={<AustraliaPage />} />
            <Route path="/countries/malaysia" element={<MalaysiaPage />} />
            <Route path="/countries/germany" element={<GermanyPage />} />
            <Route path="/countries/italy" element={<ItalyPage />} />
            <Route path="/countries/new-zealand" element={<NewZealandPage />} />
            <Route path="/countries/uae" element={<UAEPage />} />

            {/* Service Routes */}
            <Route path="/services/career-counseling" element={<CareerCounseling />} />
            <Route path="/services/university-selection" element={<UniversitySelection />} />
            <Route path="/services/profile-evaluation" element={<ProfileEvaluation />} />
            <Route path="/services/test-preparation" element={<TestPreparation />} />
            <Route path="/services/application-support" element={<ApplicationSupport />} />
            <Route path="/services/scholarship-consulting" element={<ScholarshipConsulting />} />
            <Route path="/services/visa-assistance" element={<VisaAssistance />} />
            <Route path="/services/accommodation-support" element={<AccommodationSupport />} />
            <Route path="/services/pre-departure-orientation" element={<PreDepartureOrientation />} />
            <Route path="/services/post-arrival-support" element={<PostArrivalSupport />} />
            <Route path="/services/job-search-guidance" element={<JobSearchGuidance />} />

            {/* Event Routes */}
            <Route path="/events/education-expo" element={<EducationExpo />} />
            <Route path="/events/education-events" element={<EducationEvents />} />
            <Route path="/events/seminars" element={<Seminars />} />
            <Route path="/events/campus-visits" element={<CampusVisits />} />

            {/* Partnership Routes */}
            <Route path="/partnership/universities" element={<PartnerUniversities />} />
            <Route path="/partnership/accreditation" element={<Accreditation />} />

            {/* Blog Routes */}
            <Route path="/blogs/top-universities-in-usa-for-international-students-2024" element={<TopUniversitiesInUSAForInternationalStudents2024 />} />
            <Route path="/blogs/study-in-canada-complete-2024" element={<StudyInCanadaComplete2024 />} />
            <Route path="/blogs/studying-in-canada" element={<StudyingInCanada />} />
            <Route path="/blogs/studying-in-australia" element={<StudyingInAustralia />} />
            <Route path="/blogs/top-scholarships" element={<TopGlobalScholarships2025 />} />
            <Route path="/blogs/uk-universities-guide" element={<UniversityRankingsDecoded />} />
            <Route path="/blogs/usa-student-visa-guide" element={<VisaRequirementAnalysis />} />
            <Route path="/blogs/german-universities" element={<StudyingInGermanyCompleteGuideForInternationalStudents2024 />} />
            <Route path="/blogs/study-abroad-preparation" element={<StudyAbroadPreparationChecklist2024 />} />
            <Route path="/blogs/student-visa-italy-guide" element={<ItalyStudentVisaGuide />} />
            <Route path="/blogs/study-in-italy-complete-process" element={<StudyInItalyGuide />} />
            <Route path="/blogs/italy-scholarships-2025" element={<ScholarshipsInItaly2025 />} />
            <Route path="/blogs/:slug" element={<BlogDetailFallback />} />

            {/* Article Routes */}
            <Route path="/articles/best-scholarships-for-international-students-2024" element={<BestScholarshipsForInternationalStudents2024 />} />
            <Route path="/articles/career-pathways" element={<CareerPathways />} />
            <Route path="/articles/choosing-study-destination" element={<ChoosingStudyDestination />} />
            <Route path="/articles/visa-requirements-analysis" element={<VisaRequirementAnalysis />} />
            <Route path="/articles/economics-of-education" element={<EducationEconomicsAnalysis />} />
            <Route path="/articles/university-rankings-decoded" element={<UniversityRankingsDecoded />} />
            <Route path="/articles/cultural-intelligence" element={<CulturalIntelligence />} />
            <Route path="/articles/career-pathways-graduates" element={<CareerPathways />} />
            <Route path="/articles/research-opportunities" element={<ResearchOpportunities />} />
            <Route path="/articles/technology-in-education" element={<TechnologyInEducation />} />
            <Route path="/articles/how-to-write-a-strong-sop" element={<SOPGuide />} />
            <Route path="/articles/top-mistakes-when-applying-abroad" element={<TopMistakesForeignColleges />} />
            <Route path="/articles/study-in-germany-free-guide" element={<StudyInGermanyFree />} />
            <Route path="/articles/top-uk-scholarships-2025" element={<Top10ScholarshipsUK />} />
            <Route path="/articles/:slug" element={<ArticleDetailFallback />} />

            {/* News Routes */}
            <Route path="/news/global-education-trends-2024" element={<GlobalEducationTrends2024 />} />
            <Route path="/news/canada-immigration-targets" element={<CanadaImmigrationTargets />} />
            <Route path="/news/uk-post-study-visa" element={<UKPostStudyWorkVisaChangesForInternationalStudents2024 />} />
            <Route path="/news/australia-scholarship-program" element={<GlobalEducationTrends2024 />} />
            <Route path="/news/germany-visa-simplification" element={<GlobalEducationTrends2024 />} />
            <Route path="/news/us-student-enrollment" element={<GlobalEducationTrends2024 />} />
            <Route path="/news/new-zealand-borders-open" element={<NewZealandStudentVisaUpdates2024 />} />
            <Route path="/news/erasmus-expansion" element={<GlobalEducationTrends2024 />} />
            <Route path="/news/digital-transformation" element={<GlobalEducationTrends2024 />} />
            <Route path="/news/:slug" element={<NewsDetailFallback />} />

            {/* Tips Routes */}
            <Route path="/tips/study-abroad-preparation-checklist-2024" element={<StudyAbroadPreparationChecklist2024 />} />
            <Route path="/tips/first-time-international-students" element={<FirstTimeInternationalStudents />} />
            <Route path="/tips/scholarship-application-secrets" element={<HowToWriteWinningScholarshipEssaysStepByStepGuide2024 />} />
            <Route path="/tips/budget-friendly-study-abroad" element={<EducationEconomicsAnalysis />} />
            <Route path="/tips/ielts-speaking-strategies" element={<TopTipsForInternationalStudentVisaApplications2024 />} />
            <Route path="/tips/university-application-essays" element={<SOPGuide />} />
            <Route path="/tips/cultural-adaptation" element={<CulturalIntelligence />} />
            <Route path="/tips/part-time-work-legal" element={<VisaRequirementAnalysis />} />
            <Route path="/tips/time-management-tips" element={<FirstTimeInternationalStudents />} />
            <Route path="/tips/:slug" element={<TipsDetailFallback />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingConsultationButton />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
