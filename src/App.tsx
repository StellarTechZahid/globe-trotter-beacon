import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Countries from './pages/Countries';
import Contact from './pages/Contact';
import Scholarship from './pages/Scholarship';
import Events from './pages/Events';
import FAQs from './pages/FAQs';
import BlogsNews from './pages/BlogsNews';
import SuccessStories from './pages/SuccessStories';
import Partnership from './pages/Partnership';
import VirtualConsulting from './pages/VirtualConsulting';
import NotFound from './pages/NotFound';

// Country Pages
import AustraliaPage from './pages/countries/AustraliaPage';
import CanadaPage from './pages/countries/CanadaPage';
import USAPage from './pages/countries/USAPage';
import UKPage from './pages/countries/UKPage';
import GermanyPage from './pages/countries/GermanyPage';
import NewZealandPage from './pages/countries/NewZealandPage';
import MalaysiaPage from './pages/countries/MalaysiaPage';
import ItalyPage from './pages/countries/ItalyPage';

// Service Pages
import UniversitySelection from './pages/services/UniversitySelection';
import ApplicationSupport from './pages/services/ApplicationSupport';
import VisaAssistance from './pages/services/VisaAssistance';
import ScholarshipConsulting from './pages/services/ScholarshipConsulting';
import TestPreparation from './pages/services/TestPreparation';
import CareerCounseling from './pages/services/CareerCounseling';
import ProfileEvaluation from './pages/services/ProfileEvaluation';
import PreDepartureOrientation from './pages/services/PreDepartureOrientation';
import PostArrivalSupport from './pages/services/PostArrivalSupport';
import AccommodationSupport from './pages/services/AccommodationSupport';
import JobSearchGuidance from './pages/services/JobSearchGuidance';

// Event Pages
import EducationExpo from './pages/events/EducationExpo';
import EducationEvents from './pages/events/EducationEvents';
import Seminars from './pages/events/Seminars';
import CampusVisits from './pages/events/CampusVisits';

// Scholarship Pages
import FullyFunded from './pages/scholarship/FullyFunded';
import PartiallyFunded from './pages/scholarship/PartiallyFunded';
import EuropeanCountries from './pages/scholarship/EuropeanCountries';
import NorthAmerica from './pages/scholarship/NorthAmerica';
import CentralAsianCountries from './pages/scholarship/CentralAsianCountries';

// Individual Scholarship Detail Pages
import FullbrightScholarship from './pages/scholarships/FullbrightScholarship';
import ChevelingScholarship from './pages/scholarships/ChevelingScholarship';
import VanierCGS from './pages/scholarships/VanierCGS';
import BolashakScholarship from './pages/scholarships/BolashakScholarship';
import GatesCambridgeScholarship from './pages/scholarships/GatesCambridgeScholarship';
import DAADScholarship from './pages/scholarships/DAADScholarship';
import RhodesScholarship from './pages/scholarships/RhodesScholarship';
import MarshallScholarship from './pages/scholarships/MarshallScholarship';
import KnightHennesyScholarship from './pages/scholarships/KnightHennesyScholarship';
import HarvardScholarship from './pages/scholarships/HarvardScholarship';
import YaleScholarship from './pages/scholarships/YaleScholarship';
import MITScholarship from './pages/scholarships/MITScholarship';

// Blog/News/Tips/Articles Pages
import Blogs from './pages/Blogs';
import News from './pages/News';
import Tips from './pages/Tips';
import Articles from './pages/Articles';

// Blog Detail Pages
import StudyingInCanada from './pages/blogs/StudyingInCanada';

// Article Detail Pages
import UniversityRankingsDecoded from './pages/articles/UniversityRankingsDecoded';
import ChoosingStudyDestination from './pages/articles/ChoosingStudyDestination';

// Tips Detail Pages
import FirstTimeInternationalStudents from './pages/tips/FirstTimeInternationalStudents';

// News Detail Pages
import CanadaImmigrationTargets from './pages/news/CanadaImmigrationTargets';

// Styles
import './App.css';

import CaliforniaScholarship from './pages/scholarships/CaliforniaScholarship';
import TexasScholarship from './pages/scholarships/TexasScholarship';
import NewYorkScholarship from './pages/scholarships/NewYorkScholarship';
import FloridaScholarship from './pages/scholarships/FloridaScholarship';
import ErasmusMundusScholarship from './pages/scholarships/ErasmusMundusScholarship';
import AustralianGovernmentScholarship from './pages/scholarships/AustralianGovernmentScholarship';
import StanfordScholarship from './pages/scholarships/StanfordScholarship';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs-news" element={<BlogsNews />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/virtual-consulting" element={<VirtualConsulting />} />

        {/* Country Routes */}
        <Route path="/countries/australia" element={<AustraliaPage />} />
        <Route path="/countries/canada" element={<CanadaPage />} />
        <Route path="/countries/usa" element={<USAPage />} />
        <Route path="/countries/uk" element={<UKPage />} />
        <Route path="/countries/germany" element={<GermanyPage />} />
        <Route path="/countries/new-zealand" element={<NewZealandPage />} />
        <Route path="/countries/malaysia" element={<MalaysiaPage />} />
        <Route path="/countries/italy" element={<ItalyPage />} />

        {/* Service Routes */}
        <Route path="/services/university-selection" element={<UniversitySelection />} />
        <Route path="/services/application-support" element={<ApplicationSupport />} />
        <Route path="/services/visa-assistance" element={<VisaAssistance />} />
        <Route path="/services/scholarship-consulting" element={<ScholarshipConsulting />} />
        <Route path="/services/test-preparation" element={<TestPreparation />} />
        <Route path="/services/career-counseling" element={<CareerCounseling />} />
        <Route path="/services/profile-evaluation" element={<ProfileEvaluation />} />
        <Route path="/services/pre-departure-orientation" element={<PreDepartureOrientation />} />
        <Route path="/services/post-arrival-support" element={<PostArrivalSupport />} />
        <Route path="/services/accommodation-support" element={<AccommodationSupport />} />
        <Route path="/services/job-search-guidance" element={<JobSearchGuidance />} />

        {/* Event Routes */}
        <Route path="/events/education-expo" element={<EducationExpo />} />
        <Route path="/events/education-events" element={<EducationEvents />} />
        <Route path="/events/seminars" element={<Seminars />} />
        <Route path="/events/campus-visits" element={<CampusVisits />} />

        {/* Scholarship Category Routes */}
        <Route path="/scholarship/fully-funded" element={<FullyFunded />} />
        <Route path="/scholarship/partially-funded" element={<PartiallyFunded />} />
        <Route path="/scholarship/european-countries" element={<EuropeanCountries />} />
        <Route path="/scholarship/north-america" element={<NorthAmerica />} />
        <Route path="/scholarship/central-asian-countries" element={<CentralAsianCountries />} />

        {/* Individual Scholarship Detail Routes */}
        <Route path="/scholarships/fulbright-scholarship" element={<FullbrightScholarship />} />
        <Route path="/scholarships/chevening-scholarship" element={<ChevelingScholarship />} />
        <Route path="/scholarships/vanier-cgs" element={<VanierCGS />} />
        <Route path="/scholarships/bolashak-scholarship" element={<BolashakScholarship />} />
        <Route path="/scholarships/gates-cambridge-scholarship" element={<GatesCambridgeScholarship />} />
        <Route path="/scholarships/daad-scholarship" element={<DAADScholarship />} />
        <Route path="/scholarships/rhodes-scholarship" element={<RhodesScholarship />} />
        <Route path="/scholarships/marshall-scholarship" element={<MarshallScholarship />} />
        <Route path="/scholarships/knight-hennessy-scholarship" element={<KnightHennesyScholarship />} />
        <Route path="/scholarships/harvard-scholarship" element={<HarvardScholarship />} />
        <Route path="/scholarships/yale-scholarship" element={<YaleScholarship />} />
        <Route path="/scholarships/mit-scholarship" element={<MITScholarship />} />

        {/* Blog/News/Tips/Articles Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/news" element={<News />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/articles" element={<Articles />} />
        
        {/* Blog Detail Routes */}
        <Route path="/blogs/studying-in-canada" element={<StudyingInCanada />} />
        
        {/* Article Detail Routes */}
        <Route path="/articles/university-rankings-decoded" element={<UniversityRankingsDecoded />} />
        <Route path="/articles/choosing-study-destination" element={<ChoosingStudyDestination />} />
        
        {/* Tips Detail Routes */}
        <Route path="/tips/first-time-international-students" element={<FirstTimeInternationalStudents />} />
        
        {/* News Detail Routes */}
        <Route path="/news/canada-immigration-targets" element={<CanadaImmigrationTargets />} />
        
        <Route path="/scholarships/california-scholarship" element={<CaliforniaScholarship />} />
        <Route path="/scholarships/texas-scholarship" element={<TexasScholarship />} />
        <Route path="/scholarships/new-york-scholarship" element={<NewYorkScholarship />} />
        <Route path="/scholarships/florida-scholarship" element={<FloridaScholarship />} />
        <Route path="/scholarships/erasmus-mundus-scholarship" element={<ErasmusMundusScholarship />} />
        <Route path="/scholarships/australian-government-scholarship" element={<AustralianGovernmentScholarship />} />
        <Route path="/scholarships/stanford-scholarship" element={<StanfordScholarship />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
