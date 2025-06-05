
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Scholarship from './pages/Scholarship';
import Countries from './pages/Countries';
import Visa from './pages/Visa';
import Consultation from './pages/Consultation';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

// Country Pages
import UKPage from './pages/countries/UKPage';
import USAPage from './pages/countries/USAPage';
import CanadaPage from './pages/countries/CanadaPage';
import AustraliaPage from './pages/countries/AustraliaPage';
import MalaysiaPage from './pages/countries/MalaysiaPage';
import GermanyPage from './pages/countries/GermanyPage';
import ItalyPage from './pages/countries/ItalyPage';
import NewZealandPage from './pages/countries/NewZealandPage';

// Service Pages
import CareerCounseling from './pages/services/CareerCounseling';
import UniversitySelection from './pages/services/UniversitySelection';
import ProfileEvaluation from './pages/services/ProfileEvaluation';
import TestPreparation from './pages/services/TestPreparation';
import ApplicationSupport from './pages/services/ApplicationSupport';
import ScholarshipConsulting from './pages/services/ScholarshipConsulting';
import VisaAssistance from './pages/services/VisaAssistance';
import AccommodationSupport from './pages/services/AccommodationSupport';
import PreDepartureOrientation from './pages/services/PreDepartureOrientation';
import PostArrivalSupport from './pages/services/PostArrivalSupport';
import JobSearchGuidance from './pages/services/JobSearchGuidance';

// Event Pages
import EducationExpo from './pages/events/EducationExpo';
import EducationEvents from './pages/events/EducationEvents';
import Seminars from './pages/events/Seminars';
import CampusVisits from './pages/events/CampusVisits';

// Partnership Pages
import Partnership from './pages/Partnership';

// Additional Pages
import Events from './pages/Events';
import VirtualConsulting from './pages/VirtualConsulting';
import SuccessStories from './pages/SuccessStories';
import BlogsNews from './pages/BlogsNews';
import Blogs from './pages/Blogs';
import Articles from './pages/Articles';
import Tips from './pages/Tips';
import News from './pages/News';

// Blog/Article/Tip/News Detail Pages
import StudyingInCanada from './pages/blogs/StudyingInCanada';
import ChoosingStudyDestination from './pages/articles/ChoosingStudyDestination';
import UniversityRankingsDecoded from './pages/articles/UniversityRankingsDecoded';
import FirstTimeInternationalStudents from './pages/tips/FirstTimeInternationalStudents';
import CanadaImmigrationTargets from './pages/news/CanadaImmigrationTargets';

// Scholarship Category Pages
import NorthAmericaScholarship from './pages/scholarships/NorthAmericaScholarship';
import EuropeanCountriesScholarship from './pages/scholarships/EuropeanCountriesScholarship';
import AsianCountriesScholarship from './pages/scholarships/AsianCountriesScholarship';
import FullyFunded from './pages/scholarship/FullyFunded';
import PartiallyFunded from './pages/scholarship/PartiallyFunded';
import CentralAsianCountries from './pages/scholarship/CentralAsianCountries';
import NorthAmerica from './pages/scholarship/NorthAmerica';
import EuropeanCountries from './pages/scholarship/EuropeanCountries';

// Individual Scholarship Pages
import CaliforniaScholarship from './pages/scholarships/CaliforniaScholarship';
import FloridaScholarship from './pages/scholarships/FloridaScholarship';
import NewYorkScholarship from './pages/scholarships/NewYorkScholarship';
import TexasScholarship from './pages/scholarships/TexasScholarship';
import OhioScholarship from './pages/scholarships/OhioScholarship';
import VirginiaScholarship from './pages/scholarships/VirginiaScholarship';
import MarylandScholarship from './pages/scholarships/MarylandScholarship';
import HarvardScholarship from './pages/scholarships/HarvardScholarship';
import YaleScholarship from './pages/scholarships/YaleScholarship';
import PrincetonScholarship from './pages/scholarships/PrincetonScholarship';
import MITScholarship from './pages/scholarships/MITScholarship';
import StanfordScholarship from './pages/scholarships/StanfordScholarship';
import CaltechScholarship from './pages/scholarships/CaltechScholarship';
import ChicagoScholarship from './pages/scholarships/ChicagoScholarship';
import JohnsHopkinsScholarship from './pages/scholarships/JohnsHopkinsScholarship';
import PennsylvaniaScholarship from './pages/scholarships/PennsylvaniaScholarship';
import ColumbiaScholarship from './pages/scholarships/ColumbiaScholarship';
import CornellScholarship from './pages/scholarships/CornellScholarship';
import BrownScholarship from './pages/scholarships/BrownScholarship';
import DartmouthScholarship from './pages/scholarships/DartmouthScholarship';
import DukeScholarship from './pages/scholarships/DukeScholarship';
import EmoryScholarship from './pages/scholarships/EmoryScholarship';
import ErasmusMundusScholarship from './pages/scholarships/ErasmusMundusScholarship';
import FullbrightScholarship from './pages/scholarships/FullbrightScholarship';
import ChevelingScholarship from './pages/scholarships/ChevelingScholarship';
import CommonwealthScholarship from './pages/scholarships/CommonwealthScholarship';
import RhodeScholarship from './pages/scholarships/RhodeScholarship';
import GatesScholarship from './pages/scholarships/GatesScholarship';
import DAADGermanyScholarship from './pages/scholarships/DAADGermanyScholarship';
import AustraliaAwardsScholarship from './pages/scholarships/AustraliaAwardsScholarship';
import CanadaGraduateScholarship from './pages/scholarships/CanadaGraduateScholarship';
import SwissGovernmentScholarship from './pages/scholarships/SwissGovernmentScholarship';
import NetherlandsScholarship from './pages/scholarships/NetherlandsScholarship';
import SwedenScholarship from './pages/scholarships/SwedenScholarship';
import DenmarkScholarship from './pages/scholarships/DenmarkScholarship';
import NorwayScholarship from './pages/scholarships/NorwayScholarship';
import FinlandScholarship from './pages/scholarships/FinlandScholarship';
import JapanMEXTScholarship from './pages/scholarships/JapanMEXTScholarship';
import DAADScholarship from './pages/scholarships/DAADScholarship';
import ChevelingScholarshipUK from './pages/scholarships/ChevelingScholarshipUK';
import MarshallScholarshipUK from './pages/scholarships/MarshallScholarshipUK';
import GatesCambridgeScholarship from './pages/scholarships/GatesCambridgeScholarship';
import KnightHennesyStanfordScholarship from './pages/scholarships/KnightHennesyStanfordScholarship';
import VanierCanadaGraduateScholarship from './pages/scholarships/VanierCanadaGraduateScholarship';
import BolashakInternationalScholarship from './pages/scholarships/BolashakInternationalScholarship';
import ChineseGovernmentScholarship from './pages/scholarships/ChineseGovernmentScholarship';
import SingaporeGovernmentScholarship from './pages/scholarships/SingaporeGovernmentScholarship';

function App() {
  return (
    <HelmetProvider>
      <div className="w-full min-h-screen flex flex-col">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/events" element={<Events />} />
            <Route path="/virtual-consulting" element={<VirtualConsulting />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/blogs-news" element={<BlogsNews />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/news" element={<News />} />

            {/* Country Routes */}
            <Route path="/countries/uk" element={<UKPage />} />
            <Route path="/countries/usa" element={<USAPage />} />
            <Route path="/countries/canada" element={<CanadaPage />} />
            <Route path="/countries/australia" element={<AustraliaPage />} />
            <Route path="/countries/malaysia" element={<MalaysiaPage />} />
            <Route path="/countries/germany" element={<GermanyPage />} />
            <Route path="/countries/italy" element={<ItalyPage />} />
            <Route path="/countries/new-zealand" element={<NewZealandPage />} />

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

            {/* Partnership Routes */}
            <Route path="/partnership/universities" element={<Partnership />} />
            <Route path="/partnership/accreditation" element={<Partnership />} />

            {/* Event Routes */}
            <Route path="/events/education-expo" element={<EducationExpo />} />
            <Route path="/events/education-events" element={<EducationEvents />} />
            <Route path="/events/seminars" element={<Seminars />} />
            <Route path="/events/campus-visits" element={<CampusVisits />} />

            {/* Blog/Article/Tip/News Detail Routes */}
            <Route path="/blogs/studying-in-canada" element={<StudyingInCanada />} />
            <Route path="/articles/choosing-study-destination" element={<ChoosingStudyDestination />} />
            <Route path="/articles/university-rankings-decoded" element={<UniversityRankingsDecoded />} />
            <Route path="/tips/first-time-international-students" element={<FirstTimeInternationalStudents />} />
            <Route path="/news/canada-immigration-targets" element={<CanadaImmigrationTargets />} />

            {/* Scholarship Category Routes */}
            <Route path="/scholarship/north-america" element={<NorthAmerica />} />
            <Route path="/scholarship/european-countries" element={<EuropeanCountries />} />
            <Route path="/scholarship/central-asian-countries" element={<CentralAsianCountries />} />
            <Route path="/scholarship/fully-funded" element={<FullyFunded />} />
            <Route path="/scholarship/partially-funded" element={<PartiallyFunded />} />

            {/* Individual Scholarship Routes */}
            <Route path="/scholarships/california-scholarship" element={<CaliforniaScholarship />} />
            <Route path="/scholarships/florida-scholarship" element={<FloridaScholarship />} />
            <Route path="/scholarships/new-york-scholarship" element={<NewYorkScholarship />} />
            <Route path="/scholarships/texas-scholarship" element={<TexasScholarship />} />
            <Route path="/scholarships/ohio-scholarship" element={<OhioScholarship />} />
            <Route path="/scholarships/virginia-scholarship" element={<VirginiaScholarship />} />
            <Route path="/scholarships/maryland-scholarship" element={<MarylandScholarship />} />
            <Route path="/scholarships/harvard-scholarship" element={<HarvardScholarship />} />
            <Route path="/scholarships/yale-scholarship" element={<YaleScholarship />} />
            <Route path="/scholarships/princeton-scholarship" element={<PrincetonScholarship />} />
            <Route path="/scholarships/mit-scholarship" element={<MITScholarship />} />
            <Route path="/scholarships/stanford-scholarship" element={<StanfordScholarship />} />
            <Route path="/scholarships/california-institute-of-technology-scholarship" element={<CaltechScholarship />} />
            <Route path="/scholarships/university-of-chicago-scholarship" element={<ChicagoScholarship />} />
            <Route path="/scholarships/johns-hopkins-university-scholarship" element={<JohnsHopkinsScholarship />} />
            <Route path="/scholarships/pennsylvania-scholarship" element={<PennsylvaniaScholarship />} />
            <Route path="/scholarships/columbia-scholarship" element={<ColumbiaScholarship />} />
            <Route path="/scholarships/cornell-scholarship" element={<CornellScholarship />} />
            <Route path="/scholarships/brown-scholarship" element={<BrownScholarship />} />
            <Route path="/scholarships/dartmouth-scholarship" element={<DartmouthScholarship />} />
            <Route path="/scholarships/duke-scholarship" element={<DukeScholarship />} />
            <Route path="/scholarships/emory-scholarship" element={<EmoryScholarship />} />
            <Route path="/scholarships/erasmus-mundus-scholarship" element={<ErasmusMundusScholarship />} />
            <Route path="/scholarships/fulbright-scholarship" element={<FullbrightScholarship />} />
            <Route path="/scholarships/chevening-scholarship" element={<ChevelingScholarship />} />
            <Route path="/scholarships/commonwealth-scholarship" element={<CommonwealthScholarship />} />
            <Route path="/scholarships/rhodes-scholarship" element={<RhodeScholarship />} />
            <Route path="/scholarships/gates-scholarship" element={<GatesScholarship />} />
            <Route path="/scholarships/daad-germany-scholarship" element={<DAADGermanyScholarship />} />
            <Route path="/scholarships/australia-awards-scholarship" element={<AustraliaAwardsScholarship />} />
            <Route path="/scholarships/canada-graduate-scholarship" element={<CanadaGraduateScholarship />} />
            <Route path="/scholarships/swiss-government-scholarship" element={<SwissGovernmentScholarship />} />
            <Route path="/scholarships/netherlands-scholarship" element={<NetherlandsScholarship />} />
            <Route path="/scholarships/sweden-scholarship" element={<SwedenScholarship />} />
            <Route path="/scholarships/denmark-scholarship" element={<DenmarkScholarship />} />
            <Route path="/scholarships/norway-scholarship" element={<NorwayScholarship />} />
            <Route path="/scholarships/finland-scholarship" element={<FinlandScholarship />} />
            <Route path="/scholarships/japan-mext-scholarship" element={<JapanMEXTScholarship />} />
            <Route path="/scholarships/daad-scholarship" element={<DAADScholarship />} />
            <Route path="/scholarships/chevening-scholarship-uk" element={<ChevelingScholarshipUK />} />
            <Route path="/scholarships/marshall-scholarship-uk" element={<MarshallScholarshipUK />} />
            <Route path="/scholarships/gates-cambridge-scholarship" element={<GatesCambridgeScholarship />} />
            <Route path="/scholarships/knight-hennessy-stanford-scholarship" element={<KnightHennesyStanfordScholarship />} />
            <Route path="/scholarships/vanier-canada-graduate-scholarship" element={<VanierCanadaGraduateScholarship />} />
            <Route path="/scholarships/bolashak-international-scholarship" element={<BolashakInternationalScholarship />} />
            <Route path="/scholarships/chinese-government-scholarship" element={<ChineseGovernmentScholarship />} />
            <Route path="/scholarships/singapore-government-scholarship" element={<SingaporeGovernmentScholarship />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
