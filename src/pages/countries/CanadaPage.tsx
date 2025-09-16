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
    { name: 'Toronto Metropolitan University', id: 'toronto-metropolitan-university' }, // Formerly Ryerson
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
    { name: 'University Canada West', id: 'university-canada-west' }, // Private
    { name: 'Yorkville University', id: 'yorkville-university' }, // Private
    { name: 'University of Fredericton', id: 'university-of-fredericton' }, // Private
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
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `ur[](https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&h=1080&fit=crop)` 
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
              Transform your future at world's top universities and colleges in the most welcoming country. Start your Canadian dream today with Abroad Academics - your trusted study abroad consultants since 2023!
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
              Canada is home to some of the world's most prestigious universities and colleges, offering unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in Canada opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your Canadian dream with our comprehensive overseas education consultancy services.
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
              <h3 className="text-2xl font-bold text-white mb-4">World-Class Institutions</h3>
              <p className="text-gray-300">
                Home to top-ranked universities and colleges like University of Toronto, UBC, and Seneca College, leading in research and innovation. Study abroad in Canada with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Welcoming Environment</h3>
              <p className="text-gray-300">
                Experience a multicultural and inclusive society with excellent quality of life and student support. Best study abroad opportunities for Pakistani students.
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

      {/* Universities and Colleges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Canadian Universities and Colleges for International Students</h2>
            <p className="text-gray-300">Explore Canada's most prestigious institutions with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* University of Toronto */}
            <div id="university-of-toronto" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Toronto</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #21 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Toronto, Ontario</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 97,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1827</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Toronto, Canada's top university, offers world-class programs across all disciplines. Known for producing leaders in business, politics, science, and technology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">CAD $58,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Toronto Campus</span>
                </div>
              </div>
            </div>

            {/* University of British Columbia */}
            <div id="university-of-british-columbia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UBC Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of British Columbia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #34 Worldwide</p>
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #30 Worldwide</p>
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your McGill Journey
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #111 Worldwide</p>
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply Now with Us
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #176 Worldwide (QS 2025)</p>
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #115 Worldwide (QS 2025)</p>
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
                  </Button>
                </div>
              </div>
            </div>

            {/* Seneca College */}
            <div id="seneca-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Seneca Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Seneca College Campus</span>
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Recognized Private University</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Vancouver, British Columbia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 80%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2004</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A private university specializing in business and technology programs, University Canada West offers flexible study options and a diverse international student body.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply Now with Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Placeholder for Other Institutions */}
            {quickLinks.slice(8).map((link) => (
              <div key={link.id} id={link.id} className="bg-gray-900 rounded-lg p-8 border border-orange-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{link.name}</h3>
                    <div className="space-y-3 text-gray-300 mb-6">
                      <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Varies</p>
                      <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Varies</p>
                      <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: Varies</p>
                      <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: Varies</p>
                    </div>
                    <p className="text-gray-300 mb-6">
                      {link.name} offers a range of programs tailored for international students, with strong support for career development and academic excellence.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                        <p className="text-white">CAD $15,000-$60,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                        <p className="text-white">IELTS 6.0-6.5+, Varies by Program</p>
                      </div>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Apply with Expert Guidance
                    </Button>
                  </div>
                  <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">{link.name} Campus</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
