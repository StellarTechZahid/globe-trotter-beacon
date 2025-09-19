import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CanadaPage = () => {
  const quickLinks = [
    { name: 'University of Toronto', id: 'university-of-toronto' },
    { name: 'University of British Columbia', id: 'university-of-british-columbia' },
    { name: 'McGill University', id: 'mcgill-university' },
    { name: 'University of Alberta', id: 'university-of-alberta' },
    { name: 'McMaster University', id: 'mcmaster-university' },
    { name: 'University of Waterloo', id: 'university-of-waterloo' },
    { name: 'Western University', id: 'western-university' },
    { name: "Queen's University", id: 'queens-university' },
    { name: 'University of Ottawa', id: 'university-of-ottawa' },
    { name: 'University of Calgary', id: 'university-of-calgary' },
    { name: 'Simon Fraser University', id: 'simon-fraser-university' },
    { name: 'University of Victoria', id: 'university-of-victoria' },
    { name: 'York University', id: 'york-university' },
    { name: 'University of Manitoba', id: 'university-of-manitoba' },
    { name: 'University of Saskatchewan', id: 'university-of-saskatchewan' },
    { name: 'University of Windsor', id: 'university-of-windsor' },
    { name: 'University of Guelph', id: 'university-of-guelph' },
    { name: 'University of New Brunswick', id: 'university-of-new-brunswick' },
    { name: 'Dalhousie University', id: 'dalhousie-university' },
    { name: 'University of Prince Edward Island', id: 'university-of-prince-edward-island' },
    { name: 'Memorial University of Newfoundland', id: 'memorial-university-of-newfoundland' },
    { name: 'Concordia University', id: 'concordia-university' },
    { name: 'Carleton University', id: 'carleton-university' },
    { name: 'University of Lethbridge', id: 'university-of-lethbridge' },
    { name: 'University of Regina', id: 'university-of-regina' },
    { name: 'Brock University', id: 'brock-university' },
    { name: 'Lakehead University', id: 'lakehead-university' },
    { name: 'University of Northern British Columbia', id: 'university-of-northern-british-columbia' },
    { name: 'University of Winnipeg', id: 'university-of-winnipeg' },
    { name: 'Trent University', id: 'trent-university' },
    { name: 'Wilfrid Laurier University', id: 'wilfrid-laurier-university' },
    { name: 'Toronto Metropolitan University', id: 'toronto-metropolitan-university' },
    { name: 'OCAD University', id: 'ocad-university' },
    { name: 'University of Ontario Institute of Technology', id: 'university-of-ontario-institute-of-technology' },
    { name: 'Vancouver Island University', id: 'vancouver-island-university' },
    { name: 'Thompson Rivers University', id: 'thompson-rivers-university' },
    { name: 'Mount Royal University', id: 'mount-royal-university' },
    { name: 'University of the Fraser Valley', id: 'university-of-the-fraser-valley' },
    { name: 'Kwantlen Polytechnic University', id: 'kwantlen-polytechnic-university' },
    { name: 'Mount Allison University', id: 'mount-allison-university' },
    { name: 'Acadia University', id: 'acadia-university' },
    { name: 'St. Francis Xavier University', id: 'st-francis-xavier-university' },
    { name: 'Mount Saint Vincent University', id: 'mount-saint-vincent-university' },
    { name: "Saint Mary's University", id: 'saint-marys-university' },
    { name: 'Cape Breton University', id: 'cape-breton-university' },
    { name: 'University Canada West', id: 'university-canada-west' },
    { name: 'Yorkville University', id: 'yorkville-university' },
    { name: 'University of Fredericton', id: 'university-of-fredericton' },
    { name: 'Nipissing University', id: 'nipissing-university' },
    { name: 'Algoma University', id: 'algoma-university' },
    { name: 'Laurentian University', id: 'laurentian-university' },
    { name: 'Royal Roads University', id: 'royal-roads-university' },
    { name: 'Athabasca University', id: 'athabasca-university' },
    { name: 'Fleming College', id: 'fleming-college' },
    { name: 'George Brown College', id: 'george-brown-college' },
    { name: 'Seneca College', id: 'seneca-college' },
    { name: 'Humber College', id: 'humber-college' },
    { name: 'Sheridan College', id: 'sheridan-college' },
    { name: 'Fanshawe College', id: 'fanshawe-college' },
    { name: 'Conestoga College', id: 'conestoga-college' },
    { name: 'Centennial College', id: 'centennial-college' },
    { name: 'Niagara College', id: 'niagara-college' },
    { name: 'Douglas College', id: 'douglas-college' },
    { name: 'Langara College', id: 'langara-college' },
    { name: 'Capilano University', id: 'capilano-university' },
    { name: 'Camosun College', id: 'camosun-college' },
    { name: 'Selkirk College', id: 'selkirk-college' },
    { name: 'North Island College', id: 'north-island-college' },
    { name: 'College of the Rockies', id: 'college-of-the-rockies' },
    { name: 'Okanagan College', id: 'okanagan-college' },
    { name: 'Northern Lights College', id: 'northern-lights-college' },
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#consultation-form';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url[](https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in Canada
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the most welcoming country. Start your Canadian dream today with Abroad Academics - your trusted study abroad consultants since 2023!
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg animate-fade-in delay-400"
            >
              Get Free Consultation →
            </Button>
          </div>
        </div>
      </section>

      {/* Your Pathway Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to Canadian Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Canada is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in Canada opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your Canadian dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Canada Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Canada for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose Canada for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to University of Toronto, UBC, McGill, and many other top-ranked institutions that lead in research and innovation. Study abroad in Canada with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Welcoming Environment</h3>
              <p className="text-gray-300">
                Experience the most multicultural and welcoming society with excellent quality of life and student support. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to Post-Graduation Work Permit (PGWP) and excellent career prospects with pathways to permanent residence. Top study abroad consultants ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <QuickNavigation links={quickLinks} />

      {/* Why Choose Canada Section */}
<section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Canada for International Education?</h2>
      <p className="text-xl text-gray-300">Discover why thousands of international students choose Canada every year for their higher studies</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="h-8 w-8 text-black" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Top-Quality Universities</h3>
        <p className="text-gray-300">
          Home to world-renowned institutions like University of Toronto, McGill, and UBC, offering
          cutting-edge programs and global research opportunities.
        </p>
      </div>
      
      <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Globe className="h-8 w-8 text-black" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Affordable & Supportive</h3>
        <p className="text-gray-300">
          Benefit from reasonable tuition fees, numerous scholarships, and a welcoming support system
          for international students across Canada.
        </p>
      </div>
      
      <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Briefcase className="h-8 w-8 text-black" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Work & Career Opportunities</h3>
        <p className="text-gray-300">
          Enjoy post-graduation work permits up to 3 years and excellent job opportunities in one of
          the world’s strongest and most diverse economies.
        </p>
      </div>
    </div>
  </div>
</section>


            {/* University of British Columbia */}
            <div id="university-of-british-columbia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UBC Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of British Columbia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #40 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Vancouver, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 68,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1908</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in beautiful Vancouver, UBC is renowned for innovation, research excellence, and sustainable practices. One of Canada's most prestigious universities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $45,000-$55,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* McGill University */}
            <div id="mcgill-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">McGill University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #27 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Montreal, Quebec</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 31%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1821</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    McGill University is Canada's most international university, known for its rigorous academics and vibrant campus life in bilingual Montreal.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $45,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">McGill University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Alberta */}
            <div id="university-of-alberta" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Alberta Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Alberta</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #94 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Edmonton, Alberta</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1908</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Alberta is a leading research university offering excellent programs with affordable tuition and strong industry connections.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* McMaster University */}
            <div id="mcmaster-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">McMaster University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #173 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hamilton, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 33,000+ (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1887</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    McMaster University is renowned for its innovative teaching methods and strong programs in health sciences, engineering, and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $35,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">McMaster University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Waterloo */}
            <div id="university-of-waterloo" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Waterloo Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Waterloo</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #119 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Waterloo, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 41,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its co-op programs and innovation in tech and engineering, Waterloo is a top choice for international students seeking practical experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $40,000-$55,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Western University */}
            <div id="western-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Western University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #151 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1878</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Western University is known for its business (Ivey Business School), engineering, and health sciences programs, with a beautiful campus and strong alumni network.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $35,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Western University Campus</span>
                </div>
              </div>
            </div>

            {/* Queen's University */}
            <div id="queens-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Queen's University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Queen's University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #191 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kingston, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1841</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Queen's is known for its engineering, business, and law programs, with a strong sense of community and tradition.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $40,000-$55,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Ottawa */}
            <div id="university-of-ottawa" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Ottawa</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #219 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ottawa, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000+ (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1848</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Canada's largest bilingual university, known for law, medicine, and social sciences in the nation's capital.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $35,000-$45,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Ottawa Campus</span>
                </div>
              </div>
            </div>

            {/* University of Calgary */}
            <div id="university-of-calgary" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Calgary Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Calgary</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #211 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Calgary, Alberta</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Calgary is known for engineering, energy, and business programs, with strong ties to the oil and gas industry.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Simon Fraser University */}
            <div id="simon-fraser-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Simon Fraser University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #308 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Burnaby, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    SFU is known for its co-op programs and research in computing science and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Simon Fraser University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Victoria */}
            <div id="university-of-victoria" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Victoria Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Victoria</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #358 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Victoria, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 22,000+ (International: 21%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1963</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    UVic is known for its co-op education and research in ocean sciences and climate change.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* York University */}
            <div id="york-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">York University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #333 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 55,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1959</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    York University is known for its liberal arts, business, and law programs, with a diverse student body.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">York University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Manitoba */}
            <div id="university-of-manitoba" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Manitoba Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Manitoba</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #643 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Winnipeg, Manitoba</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1877</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The University of Manitoba is known for its agriculture, engineering, and medicine programs, with affordable tuition for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Saskatchewan */}
            <div id="university-of-saskatchewan" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Saskatchewan</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #378 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Saskatoon, Saskatchewan</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1907</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for agriculture, engineering, and veterinary medicine, with a focus on research and innovation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Saskatchewan Campus</span>
                </div>
              </div>
            </div>

            {/* University of Windsor */}
            <div id="university-of-windsor" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Windsor Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Windsor</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #546 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Windsor, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 23%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1963</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for automotive engineering and law, with strong ties to the US border and industry.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Guelph */}
            <div id="university-of-guelph" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Guelph</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #504 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Guelph, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1964</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for veterinary medicine, agriculture, and food science, with a focus on sustainability.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Guelph Campus</span>
                </div>
              </div>
            </div>

            {/* University of New Brunswick */}
            <div id="university-of-new-brunswick" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of New Brunswick Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of New Brunswick</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #622 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Fredericton, New Brunswick</p>
                  <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1785</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Canada's oldest English-language university, known for engineering and computer science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Dalhousie University */}
            <div id="dalhousie-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Dalhousie University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #283 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Halifax, Nova Scotia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 24%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1818</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Dalhousie is known for ocean studies, law, and medicine, with a coastal location and strong research focus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Dalhousie University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Prince Edward Island */}
            <div id="university-of-prince-edward-island" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Prince Edward Island Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Prince Edward Island</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Charlottetown, Prince Edward Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1969</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    UPEI is known for veterinary medicine and business, with a small, supportive community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Memorial University of Newfoundland */}
            <div id="memorial-university-of-newfoundland" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Memorial University of Newfoundland</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #660 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: St. John's, Newfoundland and Labrador</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1925</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Memorial University is known for ocean and marine studies, with affordable tuition and a unique location.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $12,000-$20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Memorial University Campus</span>
                </div>
              </div>
            </div>

            {/* Concordia University */}
            <div id="concordia-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Concordia University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Concordia University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #465 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Montreal, Quebec</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 46,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1974</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Concordia is known for arts, media, and business programs in a bilingual city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Carleton University */}
            <div id="carleton-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Carleton University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #781-790 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ottawa, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 21%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1942</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Carleton is known for journalism, public affairs, and engineering programs in Canada's capital.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Carleton University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Lethbridge */}
            <div id="university-of-lethbridge" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Lethbridge Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Lethbridge</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Lethbridge, Alberta</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 9,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for liberal arts, management, and fine arts programs, with a small class size for personalized learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Regina */}
            <div id="university-of-regina" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Regina</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Regina, Saskatchewan</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1974</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for journalism, engineering, and business programs, with co-op opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Regina Campus</span>
                </div>
              </div>
            </div>

            {/* Brock University */}
            <div id="brock-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Brock University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Brock University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: St. Catharines, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1964</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Brock is known for business, education, and grape and wine science, with a scenic location in Niagara region.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Lakehead University */}
            <div id="lakehead-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Lakehead University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Thunder Bay, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for engineering, forestry, and outdoor recreation, with a focus on experiential learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Lakehead University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Northern British Columbia */}
            <div id="university-of-northern-british-columbia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UNBC Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Northern British Columbia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Prince George, British Columbia</p>
                  <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 4,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1990</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    UNBC is known for environmental science and natural resources, with a focus on sustainability.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Winnipeg */}
            <div id="university-of-winnipeg" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Winnipeg</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Winnipeg, Manitoba</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for arts, science, and education programs, with affordable tuition and urban campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Winnipeg Campus</span>
                </div>
              </div>
            </div>

            {/* Trent University */}
            <div id="trent-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Trent University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Trent University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Peterborough, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1964</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Trent is known for environmental studies and liberal arts, with small classes and beautiful riverside campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Wilfrid Laurier University */}
            <div id="wilfrid-laurier-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Wilfrid Laurier University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Waterloo, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1911</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Laurier is known for business administration and music programs, with a focus on co-op education.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Wilfrid Laurier University Campus</span>
                </div>
              </div>
            </div>

            {/* Toronto Metropolitan University */}
            <div id="toronto-metropolitan-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Toronto Metropolitan University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Toronto Metropolitan University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #801 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 45,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1948</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Formerly Ryerson, TMU is known for media, engineering, and business programs in downtown Toronto.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* OCAD University */}
            <div id="ocad-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">OCAD University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #101 in Art & Design (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 4,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1876</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Canada's largest art and design university, known for visual arts and design programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, Portfolio</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">OCAD University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Ontario Institute of Technology */}
            <div id="university-of-ontario-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UOIT Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Ontario Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Oshawa, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2002</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for technology, engineering, and science programs, with a modern campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Vancouver Island University */}
            <div id="vancouver-island-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Vancouver Island University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Nanaimo, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1969</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    VIU is known for fisheries, aquaculture, and tourism programs, with a coastal location.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Vancouver Island University Campus</span>
                </div>
              </div>
            </div>

            {/* Thompson Rivers University */}
            <div id="thompson-rivers-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Thompson Rivers University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Thompson Rivers University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kamloops, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 14%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1970</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    TRU is known for trades, technology, and tourism programs, with open admission and flexible learning options.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Mount Royal University */}
            <div id="mount-royal-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Mount Royal University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Calgary, Alberta</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1910</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Mount Royal offers undergraduate programs in business, health, and communications, with a focus on experiential learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Mount Royal University Campus</span>
                </div>
              </div>
            </div>

            {/* University of the Fraser Valley */}
            <div id="university-of-the-fraser-valley" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UFV Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of the Fraser Valley</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Abbotsford, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 15,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1974</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    UFV is known for agriculture, criminal justice, and business programs, with a community-focused approach.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Kwantlen Polytechnic University */}
            <div id="kwantlen-polytechnic-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Kwantlen Polytechnic University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Surrey, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1981</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    KPU is known for design, horticulture, and business programs, with applied learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">KPU Campus</span>
                </div>
              </div>
            </div>

            {/* Mount Allison University */}
            <div id="mount-allison-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Mount Allison University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Mount Allison University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sackville, New Brunswick</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1839</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A top undergraduate university known for liberal arts and sciences, with small classes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Acadia University */}
            <div id="acadia-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Acadia University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Wolfville, Nova Scotia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 4,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1838</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for liberal arts, theology, and kinesiology, with a close-knit community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Acadia University Campus</span>
                </div>
              </div>
            </div>

            {/* St. Francis Xavier University */}
            <div id="st-francis-xavier-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">St. Francis Xavier University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">St. Francis Xavier University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Antigonish, Nova Scotia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1853</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for liberal arts and education, with a tradition of academic excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Mount Saint Vincent University */}
            <div id="mount-saint-vincent-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Mount Saint Vincent University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Halifax, Nova Scotia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 4,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1873</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for education, tourism, and applied human nutrition programs, with a focus on women's leadership.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Mount Saint Vincent University Campus</span>
                </div>
              </div>
            </div>

            {/* Saint Mary's University */}
            <div id="saint-marys-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Saint Mary's University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Saint Mary's University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Halifax, Nova Scotia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,000+ (International: 35%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1802</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for business, science, and liberal arts, with a high international student population.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Cape Breton University */}
            <div id="cape-breton-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Cape Breton University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sydney, Nova Scotia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,500+ (International: 50%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1974</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    CBU is known for hospitality, engineering, and business, with a high proportion of international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Cape Breton University Campus</span>
                </div>
              </div>
            </div>

            {/* University Canada West */}
            <div id="university-canada-west" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University Canada West Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University Canada West</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Private Institution</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Vancouver, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 80%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2004</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A private university specializing in business and technology programs, with flexible study options for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, Bachelor’s for Graduate Programs</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Yorkville University */}
            <div id="yorkville-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Yorkville University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Private Institution</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 70%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2003</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Private university offering business, interior design, and project management programs, with online and on-campus options.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Yorkville University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Fredericton */}
            <div id="university-of-fredericton" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Fredericton Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Fredericton</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Private Institution</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Fredericton, New Brunswick</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 1,000+ (International: 50%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2005</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Private online university specializing in business and engineering management programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, Bachelor’s for Graduate Programs</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Nipissing University */}
            <div id="nipissing-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Nipissing University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: North Bay, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for education and environmental science programs, with a lakeside campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Nipissing University Campus</span>
                </div>
              </div>
            </div>

            {/* Algoma University */}
            <div id="algoma-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Algoma University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Algoma University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sault Ste. Marie, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 1,600+ (International: 45%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for computer science and business, with a high international student ratio and personalized support.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Laurentian University */}
            <div id="laurentian-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Laurentian University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sudbury, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 9,000+ (International: 9%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1960</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for mining engineering and environmental science, with bilingual programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Laurentian University Campus</span>
                </div>
              </div>
            </div>

            {/* Royal Roads University */}
            <div id="royal-roads-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Royal Roads University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Royal Roads University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Victoria, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1995</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for applied and professional programs in business, leadership, and environmental science, with blended learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, Bachelor’s for Graduate Programs</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Athabasca University */}
            <div id="athabasca-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Athabasca University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Athabasca, Alberta</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1970</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Canada's leading online university, known for distance education in business and health.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $10,000-$20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Athabasca University Campus</span>
                </div>
              </div>
            </div>

            {/* Fleming College */}
            <div id="fleming-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Fleming College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Fleming College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top College in Ontario</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Peterborough, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Fleming College offers programs in environmental studies, health sciences, and trades, with hands-on learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* George Brown College */}
            <div id="george-brown-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">George Brown College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top College in Toronto</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    George Brown offers programs in culinary arts, fashion, and business, with urban campuses.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">George Brown College Campus</span>
                </div>
              </div>
            </div>

            {/* Seneca College */}
            <div id="seneca-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Seneca College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Seneca College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top College in Ontario</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Seneca College offers practical, career-focused programs in business, technology, and health sciences, with strong industry connections and pathways to universities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Humber College */}
            <div id="humber-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Humber College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Humber College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top 5 Colleges in Canada</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 43,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Humber College is known for its polytechnic approach, offering hands-on learning in creative, business, health, and technology fields with strong co-op and industry partnerships.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $16,000-$18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Sheridan College */}
            <div id="sheridan-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Sheridan College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Sheridan College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1 Research College in Canada</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Oakville, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Sheridan College excels in animation, film, design, and applied arts, with world-renowned programs and strong industry ties in the creative sector.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Fanshawe College */}
            <div id="fanshawe-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Fanshawe College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Fanshawe College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top College for Co-op Programs</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 43,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Fanshawe College provides comprehensive programs in aviation, health, business, and technology, emphasizing practical training and regional industry partnerships.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $14,000-$17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Conestoga College */}
            <div id="conestoga-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Conestoga College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Conestoga College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1 College in Ontario for Graduate Employment</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kitchener, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 50%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Conestoga College specializes in engineering, IT, health sciences, and business, with a focus on innovation, entrepreneurship, and high graduate employment rates.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $13,000-$16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Centennial College */}
            <div id="centennial-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Centennial College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Centennial College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Leading Polytechnic College</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 28,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Centennial College offers diverse programs in transportation, community services, engineering technology, and liberal arts, with a strong emphasis on experiential learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $15,000-$18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Niagara College */}
            <div id="niagara-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Niagara College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Niagara College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top for Tourism and Hospitality</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Niagara-on-the-Lake, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Niagara College is renowned for programs in culinary arts, tourism, viticulture, and environmental technology, leveraging its unique location near Niagara Falls.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $13,000-$16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Douglas College */}
            <div id="douglas-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Douglas College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Douglas College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Leading College in BC</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New Westminster, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1970</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Douglas College offers university-transfer programs, career-focused diplomas, and degrees in health, business, arts, and sciences, with a supportive learning environment.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $6,000-$8,000/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Langara College */}
            <div id="langara-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Langara College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Langara College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top Transfer College</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Vancouver, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 23,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1970</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Langara College provides arts and science transfer programs, continuing studies, and career training in a vibrant urban setting with pathways to major universities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $6,500-$9,000/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Capilano University */}
            <div id="capilano-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Capilano University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Capilano University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top University in BC</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: North Vancouver, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,500+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1973</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Capilano University offers baccalaureate degrees, diplomas, and certificates in arts, sciences, business, and tourism, emphasizing small class sizes and outdoor learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $7,000-$10,000/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Camosun College */}
            <div id="camosun-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Camosun College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Camosun College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Strong in Trades and Health</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Victoria, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1971</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Camosun College delivers university-transfer, vocational, and continuing education programs in a scenic coastal setting, with strengths in health and applied technologies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $5,500-$8,000/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Selkirk College */}
            <div id="selkirk-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Selkirk College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Selkirk College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Excellence in Arts and Environment</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Castlegar, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,500+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Selkirk College focuses on fine arts, environmental studies, health, and trades in the Kootenay region, offering personalized education in a natural setting.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $5,000-$7,500/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* North Island College */}
            <div id="north-island-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">North Island College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">North Island College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Regional Excellence</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Courtenay, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 3,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1975</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    North Island College serves Vancouver Island with transfer programs in arts, sciences, health, and trades, emphasizing community and coastal opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $4,500-$7,000/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* College of the Rockies */}
            <div id="college-of-the-rockies" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">College of the Rockies Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">College of the Rockies</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Strong Community College</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cranbrook, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,500+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1972</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    College of the Rockies offers university-transfer, vocational, and adult education programs in the East Kootenays, with a focus on mining, tourism, and health.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $4,000-$6,500/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Okanagan College */}
            <div id="okanagan-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Okanagan College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Okanagan College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top for Applied Degrees</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kelowna, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 9,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1963</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Okanagan College provides baccalaureate degrees, diplomas, and certificates in business, health, arts, and wine-related programs in the scenic Okanagan Valley.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $5,500-$8,500/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Northern Lights College */}
            <div id="northern-lights-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Northern Lights College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Northern Lights College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Northern BC Leader</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dawson Creek, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 3,500+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1975</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Northern Lights College offers programs in trades, health, business, and university studies tailored to northern communities, with flexible delivery options.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $4,000-$6,000/year (Domestic)</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

      {/* Why Study in Canada - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in Canada</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Canadian degrees and diplomas provide more than an academic experience, equipping you with real-world skills. 
              A Canadian education opens doors to global career opportunities and practical life experiences.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked Institutions:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Canada boasts numerous internationally ranked universities and colleges, such as University of Toronto, UBC, and Seneca College. 
                  Over 30 institutions are globally recognized for academic excellence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education Quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Canadian institutions emphasize practical, hands-on learning over lecture-based teaching. Students engage in real-world scenarios, fostering deep understanding and long-term career benefits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and Secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Canada is one of the most multicultural and safe countries for international students, with diversity reflected in its culture, food, arts, and communities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No Language Barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  English is the primary language of instruction in most Canadian institutions, making it accessible for international students from around the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Tuition Fees */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in Canada for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                Tuition fees for international students vary by institution and program. Universities typically charge CAD $30,000-$60,000/year for undergraduate programs and CAD $20,000-$50,000/year for postgraduate programs. Colleges like Seneca and Humber offer more affordable options, ranging from CAD $15,000-$25,000/year. Distance learning programs are also available at many institutions.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in Canada (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                International students on a Canadian study permit can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. Exceeding these hours may jeopardize your visa status.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates for students range from CAD $15-$20/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in Canada for International Students</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Living costs vary by city. Major cities like Toronto and Vancouver have higher costs, while smaller cities are more affordable.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• CAD $1,500-$2,000/month in Toronto/Vancouver (10 months)</li>
                <li>• CAD $1,000-$1,500/month in other cities (10 months)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Proof of sufficient funds is required for visa applications, especially if supported by loans or sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in Canada from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in Canada with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "Institution Selection", desc: "Choose the best Canadian universities or colleges based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "Canadian student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CanadaPage;