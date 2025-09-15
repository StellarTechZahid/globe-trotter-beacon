import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GermanyPage = () => {
  const quickLinks = [
    { name: "Technical University of Munich", id: "technical-university-of-munich" },
    { name: "Ludwig Maximilian University of Munich", id: "ludwig-maximilian-university-of-munich" },
    { name: "Heidelberg University", id: "heidelberg-university" },
    { name: "Humboldt University of Berlin", id: "humboldt-university-of-berlin" },
    { name: "University of Bonn", id: "university-of-bonn" },
    { name: "RWTH Aachen University", id: "rwth-aachen-university" },
    { name: "Charité Universitätsmedizin Berlin", id: "charite-universitatsmedizin-berlin" },
    { name: "University of Tübingen", id: "university-of-tubingen" },
    { name: "Free University of Berlin", id: "free-university-of-berlin" },
    { name: "University of Göttingen", id: "university-of-gottingen" },
    { name: "University of Freiburg", id: "university-of-freiburg" },
    { name: "University of Hamburg", id: "university-of-hamburg" },
    { name: "Technical University of Berlin", id: "technical-university-of-berlin" },
    { name: "University of Cologne", id: "university-of-cologne" },
    { name: "Technical University Dresden", id: "technical-university-dresden" },
    { name: "University of Würzburg", id: "university-of-wurzburg" },
    { name: "Karlsruhe Institute of Technology", id: "karlsruhe-institute-of-technology" },
    { name: "University of Münster", id: "university-of-munster" },
    { name: "University of Ulm", id: "university-of-ulm" },
    { name: "University of Mannheim", id: "university-of-mannheim" },
    { name: "University of Konstanz", id: "university-of-konstanz" },
    { name: "Leipzig University", id: "leipzig-university" },
    { name: "University of Rostock", id: "university-of-rostock" },
    { name: "University of Greifswald", id: "university-of-greifswald" },
    { name: "University of Halle-Wittenberg", id: "university-of-halle-wittenberg" },
    { name: "University of Marburg", id: "university-of-marburg" },
    { name: "University of Jena", id: "university-of-jena" }
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
            backgroundImage: `ur[](https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in Germany
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities with affordable excellence in engineering and technology. Start your German dream today with Abroad Academics - your trusted study abroad consultants since 2023!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to German Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Germany is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and affordable education, studying in Germany opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your German dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Germany Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Germany for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose Germany for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to TU Munich, Heidelberg, Humboldt Berlin, and many other top-ranked institutions that lead in engineering and research. Study abroad in Germany with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Affordable Excellence</h3>
              <p className="text-gray-300">
                Experience world-class education with minimal tuition fees and excellent scholarship opportunities. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to 18-month job search visa and excellent career prospects in Europe's largest economy. Top study abroad consultants ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <QuickNavigation links={quickLinks} />

      {/* Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top German Universities for International Students</h2>
            <p className="text-gray-300">Explore Germany's most prestigious universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* Technical University of Munich */}
            <div id="technical-university-of-munich" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Technical University of Munich</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #28 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Munich</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 45,000+ (International: 38%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1868</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Germany's top technical university, offering world-class programs in engineering and technology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Technical University of Munich Campus</span>
                </div>
              </div>
            </div>

            {/* Ludwig Maximilian University of Munich */}
            <div id="ludwig-maximilian-university-of-munich" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Ludwig Maximilian University of Munich Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Ludwig Maximilian University of Munich</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #59 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Munich</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 51,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1472</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    One of Germany's oldest universities, known for research in humanities and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Heidelberg University */}
            <div id="heidelberg-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Heidelberg University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #84 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Heidelberg</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1386</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Germany's oldest university, renowned for medicine and natural sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Heidelberg University Campus</span>
                </div>
              </div>
            </div>

            {/* Humboldt University of Berlin */}
            <div id="humboldt-university-of-berlin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Humboldt University of Berlin Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Humboldt University of Berlin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #126 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Berlin</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1810</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Historic university in Berlin, known for humanities and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€300/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Bonn */}
            <div id="university-of-bonn" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bonn</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #239 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bonn</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 13%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1818</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for research in mathematics, physics, and economics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bonn Campus</span>
                </div>
              </div>
            </div>

            {/* RWTH Aachen University */}
            <div id="rwth-aachen-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">RWTH Aachen University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">RWTH Aachen University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #99 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Aachen</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 47,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1870</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Largest technical university in Germany, famous for engineering and technology programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Charité Universitätsmedizin Berlin */}
            <div id="charite-universitatsmedizin-berlin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Charité Universitätsmedizin Berlin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #90 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Berlin</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1710</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Europe's largest university hospital, leading in medical research and education.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Charité Universitätsmedizin Berlin Campus</span>
                </div>
              </div>
            </div>

            {/* University of Tübingen */}
            <div id="university-of-tubingen" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Tübingen Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Tübingen</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #222 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Tübingen</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 27,000+ (International: 14%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1477</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for theology, medicine, and humanities in a picturesque town.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Free University of Berlin */}
            <div id="free-university-of-berlin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Free University of Berlin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #97 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Berlin</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1948</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading research university in Berlin, strong in social sciences and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€300/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Free University of Berlin Campus</span>
                </div>
              </div>
            </div>

            {/* University of Göttingen */}
            <div id="university-of-gottingen" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Göttingen Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Göttingen</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #232 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Göttingen</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1737</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Famous for natural sciences and mathematics, with numerous Nobel laureates.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Freiburg */}
            <div id="university-of-freiburg" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Freiburg</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #212 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Freiburg</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1457</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in environmental sciences and humanities in the Black Forest region.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Freiburg Campus</span>
                </div>
              </div>
            </div>

            {/* University of Hamburg */}
            <div id="university-of-hamburg" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Hamburg Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Hamburg</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #205 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hamburg</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 43,000+ (International: 13%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1919</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Large university in the port city, strong in law, economics, and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€300/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Technical University of Berlin */}
            <div id="technical-university-of-berlin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Technical University of Berlin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #147 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Berlin</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1879</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading technical university in Berlin, known for engineering and computer science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€300/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Technical University of Berlin Campus</span>
                </div>
              </div>
            </div>

            {/* University of Cologne */}
            <div id="university-of-cologne" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Cologne Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Cologne</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #268 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cologne</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1388</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    One of Europe's oldest universities, strong in economics and management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Technical University Dresden */}
            <div id="technical-university-dresden" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Technical University Dresden</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #246 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dresden</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 32,000+ (International: 14%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1828</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading technical university in East Germany, known for engineering and materials science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Technical University Dresden Campus</span>
                </div>
              </div>
            </div>

            {/* University of Würzburg */}
            <div id="university-of-wurzburg" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Würzburg Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Würzburg</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #397 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Würzburg</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 28,000+ (International: 9%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1402</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for medicine, psychology, and life sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Karlsruhe Institute of Technology */}
            <div id="karlsruhe-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Karlsruhe Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #102 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Karlsruhe</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2009 (merger)</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading research institution in engineering and natural sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Karlsruhe Institute of Technology Campus</span>
                </div>
              </div>
            </div>

            {/* University of Münster */}
            <div id="university-of-munster" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Münster Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Münster</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #382 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Münster</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 45,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1780</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Large university known for law, medicine, and theology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Ulm */}
            <div id="university-of-ulm" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Ulm</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #375 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ulm</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 13%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Modern university focused on medicine, sciences, and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Ulm Campus</span>
                </div>
              </div>
            </div>

            {/* University of Mannheim */}
            <div id="university-of-mannheim" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Mannheim Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Mannheim</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #194 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Mannheim</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Top for business and economics in Germany.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Konstanz */}
            <div id="university-of-konstanz" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Konstanz</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #478 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Konstanz</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Modern university strong in politics, law, and psychology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Konstanz Campus</span>
                </div>
              </div>
            </div>

            {/* Leipzig University */}
            <div id="leipzig-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Leipzig University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Leipzig University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #479 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Leipzig</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1409</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    One of Germany's oldest universities, known for music, literature, and medicine.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Rostock */}
            <div id="university-of-rostock" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Rostock</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #761-770 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Rostock</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 13,000+ (International: 9%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1419</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Northern Europe's oldest university, strong in life sciences and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Rostock Campus</span>
                </div>
              </div>
            </div>

            {/* University of Greifswald */}
            <div id="university-of-greifswald" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Greifswald Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Greifswald</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #401-450 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Greifswald</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1456</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Historic university known for medicine and environmental sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Halle-Wittenberg */}
            <div id="university-of-halle-wittenberg" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Halle-Wittenberg</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Halle</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1502</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for agriculture, medicine, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Halle-Wittenberg Campus</span>
                </div>
              </div>
            </div>

            {/* University of Marburg */}
            <div id="university-of-marburg" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Marburg Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Marburg</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #801-850 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Marburg</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1527</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Famous for philosophy and medicine, with a historic campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Jena */}
            <div id="university-of-jena" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Jena</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #461 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Jena</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 11%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1558</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for optics, physics, and philosophy, with strong industry ties.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€150/semester</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, TestAS</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Jena Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Germany - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in Germany</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              German degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a German education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In Germany you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as TU Munich, University of Heidelberg, & Humboldt Berlin. 
                  Almost 46+ ranked universities are based in Germany.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in Germany has always been center point attraction international students. Various 
                  registered bodies independent learning German universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Affordable and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students Germany has ranked as top affordable and secure country for international students. Most public universities charge minimal tuition fees while providing world-class education quality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Engineering excellence:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Germany is known worldwide for its engineering excellence and innovation. Many multinational companies have their headquarters in Germany, providing excellent internship and job opportunities for international students.
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
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in Germany for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in Germany. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program Germany varies from 
                €150-€350/semester for public universities. The average tuition fees of postgraduate programs in Germany varies from €150-€350/semester. Private universities may charge €15,000-€30,000/year.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in Germany (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per German visa, an international student, you are allowed work 120 full days or 240 half days per year. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in Germany for international student is €10-15/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in Germany for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per German authorities, average living cost for an international student in Germany depends on the city you are living in, the 
                living cost in Munich/Frankfurt is different as compared to other cities.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• €800-1200/month for courses in Munich/Frankfurt (10 month)</li>
                <li>• €600-900/month for courses in other cities (10 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application to German consulate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in Germany from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in Germany with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best German universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "German student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default GermanyPage;
