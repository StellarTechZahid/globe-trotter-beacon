import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ItalyPage = () => {
  // Quick navigation links for all public universities
  const quickLinks = [
    { name: "University of Bologna", id: "university-of-bologna" },
    { name: "Sapienza University of Rome", id: "sapienza-university-of-rome" },
    { name: "University of Milan", id: "university-of-milan" },
    { name: "University of Padova", id: "university-of-padova" },
    { name: "University of Florence", id: "university-of-florence" },
    { name: "Politecnico di Milano", id: "politecnico-di-milano" },
    { name: "University of Turin", id: "university-of-turin" },
    { name: "University of Pisa", id: "university-of-pisa" },
    { name: "University of Naples Federico II", id: "university-of-naples" },
    { name: "University of Trento", id: "university-of-trento" },
    { name: "University of Pavia", id: "university-of-pavia" },
    { name: "University of Genova", id: "university-of-genova" },
    { name: "University of Siena", id: "university-of-siena" },
    { name: "University of Perugia", id: "university-of-perugia" },
    { name: "University of Trieste", id: "university-of-trieste" },
    { name: "University of Bari Aldo Moro", id: "university-of-bari" },
    { name: "University of Catania", id: "university-of-catania" },
    { name: "University of Palermo", id: "university-of-palermo" },
    { name: "University of Parma", id: "university-of-parma" },
    { name: "University of Modena and Reggio Emilia", id: "university-of-modena" },
    { name: "University of Cagliari", id: "university-of-cagliari" },
    { name: "University of Verona", id: "university-of-verona" },
    { name: "University of Ferrara", id: "university-of-ferrara" },
    { name: "University of Salento", id: "university-of-salento" },
    { name: "University of Udine", id: "university-of-udine" },
    { name: "University of Sassari", id: "university-of-sassari" },
    { name: "University of Brescia", id: "university-of-brescia" },
    { name: "University of Calabria", id: "university-of-calabria" },
    { name: "University of Messina", id: "university-of-messina" },
    { name: "University of Insubria", id: "university-of-insubria" },
    { name: "University of Bergamo", id: "university-of-bergamo" },
    { name: "University of Eastern Piedmont", id: "university-of-eastern-piedmont" },
    { name: "University of Camerino", id: "university-of-camerino" },
    { name: "University of L'Aquila", id: "university-of-laquila" },
    { name: "University of Basilicata", id: "university-of-basilicata" },
    { name: "University of Molise", id: "university-of-molise" },
    { name: "University of Sannio", id: "university-of-sannio" },
    { name: "University of Tuscia", id: "university-of-tuscia" },
    { name: "Polytechnic University of Bari", id: "polytechnic-university-of-bari" },
    { name: "Polytechnic University of Turin", id: "polytechnic-university-of-turin" },
    { name: "University of Macerata", id: "university-of-macerata" },
    { name: "University of Urbino", id: "university-of-urbino" },
    { name: "Ca' Foscari University of Venice", id: "ca-foscari-university-of-venice" },
    { name: "University of Chieti-Pescara", id: "university-of-chieti-pescara" },
    { name: "University of Teramo", id: "university-of-teramo" }
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
            backgroundImage: `url(https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in Italy
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities with Renaissance heritage and affordable excellence. Start your Italian dream today with Abroad Academics - your trusted study abroad consultants since 2023!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to Italian Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Italy is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and rich cultural heritage, studying in Italy opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your Italian dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Italy Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Italy for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose Italy for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to University of Bologna (oldest university), Sapienza Rome, and many other top-ranked institutions. Study abroad in Italy with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rich Cultural Heritage</h3>
              <p className="text-gray-300">
                Experience Renaissance art, history, and culture while pursuing world-class education in historic cities. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to European job market and excellent post-study work opportunities across the European Union. Top study abroad consultants ensure your success.
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Public Italian Universities for International Students</h2>
            <p className="text-gray-300">Explore Italy's prestigious public universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* University of Bologna */}
            <div id="university-of-bologna" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bologna</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #154 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bologna, Emilia-Romagna</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 85,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1088</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The world’s oldest university, renowned for its academic tradition and diverse programs across disciplines.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unibo.it/en/university/campuses-and-structures/images/campus-bologna.jpg" alt="University of Bologna Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* Sapienza University of Rome */}
            <div id="sapienza-university-of-rome" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uniroma1.it/sites/default/files/campus-aerial.jpg" alt="Sapienza University Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Sapienza University of Rome</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #134 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Rome, Lazio</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 115,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1303</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    One of Europe’s largest universities, known for research excellence and comprehensive programs in Rome.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,800-€4,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Milan */}
            <div id="university-of-milan" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unimi.it/sites/default/files/campus-milan.jpg" alt="University of Milan Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Milan</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #316 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Milan, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 64,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1924</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leading university in Milan’s financial district with strong industry connections and international programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,500-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Padova */}
            <div id="university-of-padova" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Padova</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #219 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Padua, Veneto</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 62,000+ (International: 7%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1222</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    One of the oldest universities, known for its contributions to science and humanities, located in historic Padua.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,500-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unipd.it/sites/default/files/campus-padova.jpg" alt="University of Padova Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Florence */}
            <div id="university-of-florence" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unifi.it/upload/campus-florence.jpg" alt="University of Florence Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Florence</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #351 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Florence, Tuscany</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 51,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1321</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A hub for arts, humanities, and sciences in the culturally rich city of Florence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Politecnico di Milano */}
            <div id="politecnico-di-milano" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Politecnico di Milano</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #111 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Milan, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 47,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1863</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Italy’s top technical university, excelling in engineering, architecture, and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€3,000-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.polimi.it/fileadmin/immagini/campus-leonardo.jpg" alt="Politecnico di Milano Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Turin */}
            <div id="university-of-turin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unito.it/sites/default/files/campus-turin.jpg" alt="University of Turin Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Turin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #214 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Turin, Piedmont</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 70,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1404</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A major research university offering diverse programs in a vibrant industrial city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,800-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Pisa */}
            <div id="university-of-pisa" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Pisa</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #317 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Pisa, Tuscany</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1343</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for mathematics and sciences, located in the historic city of Pisa.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unipi.it/images/campus-pisa.jpg" alt="University of Pisa Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Naples Federico II */}
            <div id="university-of-naples" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unina.it/documents/campus-naples.jpg" alt="University of Naples Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Naples Federico II</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #243 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Naples, Campania</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 80,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1224</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    One of the oldest universities, offering diverse programs in a vibrant southern city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Trento */}
            <div id="university-of-trento" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Trento</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #236 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Trento, Trentino-Alto Adige</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1962</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university excelling in innovation, technology, and international collaboration.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unitn.it/images/campus-trento.jpg" alt="University of Trento Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Pavia */}
            <div id="university-of-pavia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unipv.eu/site/campus-pavia.jpg" alt="University of Pavia Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Pavia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #401-450 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Pavia, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 9%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1361</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A historic university known for medicine, sciences, and humanities in a charming city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Genova */}
            <div id="university-of-genova" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Genova</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #351-400 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Genoa, Liguria</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1481</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A coastal university strong in maritime studies, engineering, and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unige.it/images/campus-genova.jpg" alt="University of Genova Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Siena */}
            <div id="university-of-siena" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unisi.it/images/campus-siena.jpg" alt="University of Siena Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Siena</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #451-500 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Siena, Tuscany</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1240</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for law, economics, and humanities in the historic city of Siena.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Perugia */}
            <div id="university-of-perugia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Perugia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #451-500 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Perugia, Umbria</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 7%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1308</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A historic university offering programs in humanities, sciences, and medicine.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unipg.it/images/campus-perugia.jpg" alt="University of Perugia Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Trieste */}
            <div id="university-of-trieste" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.units.it/images/campus-trieste.jpg" alt="University of Trieste Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Trieste</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #401-450 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Trieste, Friuli-Venezia Giulia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1924</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for sciences, engineering, and international studies in a multicultural city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Bari Aldo Moro */}
            <div id="university-of-bari" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bari Aldo Moro</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #501-550 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bari, Apulia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 49,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1925</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leading university in southern Italy, strong in medicine, law, and economics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uniba.it/images/campus-bari.jpg" alt="University of Bari Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Catania */}
            <div id="university-of-catania" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unict.it/images/campus-catania.jpg" alt="University of Catania Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Catania</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Catania, Sicily</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1434</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A major Sicilian university with strengths in sciences, humanities, and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Palermo */}
            <div id="university-of-palermo" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Palermo</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Palermo, Sicily</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1806</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A key institution in Sicily, known for architecture, medicine, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unipa.it/images/campus-palermo.jpg" alt="University of Palermo Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Parma */}
            <div id="university-of-parma" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unipr.it/images/campus-parma.jpg" alt="University of Parma Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Parma</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #451-500 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Parma, Emilia-Romagna</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 27,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1601</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Famous for food sciences, medicine, and humanities in a culinary hub.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Modena and Reggio Emilia */}
            <div id="university-of-modena" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Modena and Reggio Emilia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #401-450 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Modena, Emilia-Romagna</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 7%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1175</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for automotive engineering and humanities in the heart of Italy’s motor valley.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unimore.it/images/campus-modena.jpg" alt="University of Modena Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Cagliari */}
            <div id="university-of-cagliari" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unica.it/images/campus-cagliari.jpg" alt="University of Cagliari Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Cagliari</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cagliari, Sardinia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1606</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leading university in Sardinia, strong in sciences, medicine, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Verona */}
            <div id="university-of-verona" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Verona</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #451-500 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Verona, Veneto</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 22,000+ (International: 7%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1982</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university with strengths in humanities, economics, and biotechnology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.univr.it/images/campus-verona.jpg" alt="University of Verona Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Ferrara */}
            <div id="university-of-ferrara" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unife.it/images/campus-ferrara.jpg" alt="University of Ferrara Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Ferrara</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #501-550 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ferrara, Emilia-Romagna</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1391</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A historic university known for humanities, sciences, and architecture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Salento */}
            <div id="university-of-salento" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Salento</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Lecce, Apulia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1955</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university in southern Italy, strong in humanities and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unisalento.it/images/campus-lecce.jpg" alt="University of Salento Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Udine */}
            <div id="university-of-udine" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uniud.it/images/campus-udine.jpg" alt="University of Udine Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Udine</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #501-550 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Udine, Friuli-Venezia Giulia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 15,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1978</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A dynamic university with programs in agriculture, engineering, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Sassari */}
            <div id="university-of-sassari" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Sassari</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sassari, Sardinia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 13,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1562</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leading university in Sardinia, known for medicine, veterinary sciences, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uniss.it/images/campus-sassari.jpg" alt="University of Sassari Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Brescia */}
            <div id="university-of-brescia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unibs.it/images/campus-brescia.jpg" alt="University of Brescia Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Brescia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Brescia, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1982</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university with strengths in engineering, medicine, and economics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Calabria */}
            <div id="university-of-calabria" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Calabria</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Rende, Calabria</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1972</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern campus in southern Italy, known for engineering, sciences, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unical.it/images/campus-calabria.jpg" alt="University of Calabria Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Messina */}
            <div id="university-of-messina" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unime.it/images/campus-messina.jpg" alt="University of Messina Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Messina</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Messina, Sicily</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1548</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A historic university in Sicily, strong in medicine, law, and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Insubria */}
            <div id="university-of-insubria" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Insubria</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Varese and Como, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1998</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university with campuses in Varese and Como, known for sciences and medicine.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uninsubria.it/images/campus-varese.jpg" alt="University of Insubria Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Bergamo */}
            <div id="university-of-bergamo" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unibg.it/images/campus-bergamo.jpg" alt="University of Bergamo Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bergamo</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #651-700 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bergamo, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1968</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for economics, humanities, and engineering in a historic city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Eastern Piedmont */}
            <div id="university-of-eastern-piedmont" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Eastern Piedmont</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Vercelli, Novara, Alessandria, Piedmont</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 15,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1998</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A multi-campus university specializing in medicine, law, and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uniupo.it/images/campus-vercelli.jpg" alt="University of Eastern Piedmont Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Camerino */}
            <div id="university-of-camerino" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unicam.it/images/campus-camerino.jpg" alt="University of Camerino Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Camerino</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #501-550 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Camerino, Marche</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 7%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1336</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A historic university known for sciences, law, and pharmacy in a picturesque town.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of L'Aquila */}
            <div id="university-of-laquila" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of L'Aquila</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #651-700 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: L'Aquila, Abruzzo</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1596</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for engineering, sciences, and humanities in a mountainous region.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.univaq.it/images/campus-laquila.jpg" alt="University of L'Aquila Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Basilicata */}
            <div id="university-of-basilicata" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unibas.it/images/campus-basilicata.jpg" alt="University of Basilicata Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Basilicata</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Potenza and Matera, Basilicata</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1982</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A smaller university with programs in engineering, humanities, and agriculture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Molise */}
            <div id="university-of-molise" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Molise</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Campobasso, Molise</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1982</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A small university focusing on agriculture, economics, and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unimol.it/images/campus-campobasso.jpg" alt="University of Molise Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Sannio */}
            <div id="university-of-sannio" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unisannio.it/images/campus-benevento.jpg" alt="University of Sannio Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Sannio</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Benevento, Campania</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,000+ (International: 4%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1998</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A small university specializing in engineering, economics, and law.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Tuscia */}
            <div id="university-of-tuscia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Tuscia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Viterbo, Lazio</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1979</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for agriculture, forestry, and cultural heritage studies in a historic region.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unitus.it/images/campus-viterbo.jpg" alt="University of Tuscia Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* Polytechnic University of Bari */}
            <div id="polytechnic-university-of-bari" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.poliba.it/images/campus-bari.jpg" alt="Polytechnic University of Bari Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Polytechnic University of Bari</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bari, Apulia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1990</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A technical university specializing in engineering, architecture, and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Polytechnic University of Turin */}
            <div id="polytechnic-university-of-turin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Polytechnic University of Turin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #252 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Turin, Piedmont</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 33,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1859</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leading technical university excelling in engineering, architecture, and technology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,500-€4,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.polito.it/images/campus-turin.jpg" alt="Polytechnic University of Turin Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Macerata */}
            <div id="university-of-macerata" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unimc.it/images/campus-macerata.jpg" alt="University of Macerata Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Macerata</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Macerata, Marche</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1290</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A historic university specializing in humanities, law, and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Urbino */}
            <div id="university-of-urbino" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Urbino</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Urbino, Marche</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1506</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for humanities, arts, and cultural studies in a Renaissance city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.uniurb.it/images/campus-urbino.jpg" alt="University of Urbino Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* Ca' Foscari University of Venice */}
            <div id="ca-foscari-university-of-venice" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unive.it/images/campus-venice.jpg" alt="Ca' Foscari University of Venice Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Ca' Foscari University of Venice</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Venice, Veneto</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1868</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for economics, humanities, and international studies in the iconic city of Venice.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Chieti-Pescara */}
            <div id="university-of-chieti-pescara" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Chieti-Pescara</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #651-700 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chieti and Pescara, Abruzzo</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 27,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1960</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university with strengths in medicine, architecture, and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unich.it/images/campus-chieti.jpg" alt="University of Chieti-Pescara Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* University of Teramo */}
            <div id="university-of-teramo" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <img src="https://www.unite.it/images/campus-teramo.jpg" alt="University of Teramo Campus" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Teramo</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Teramo, Abruzzo</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1993</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A modern university specializing in law, veterinary medicine, and communication sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€2,000-€3,500/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, TOLC-I</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ItalyPage;

      {/* Why Study in Italy - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in Italy</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Italian degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, an Italian education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Historic universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In Italy you can find number of internationally ranked universities as compared to other destinations. It has the 
                  oldest universities such as University of Bologna (1088), Sapienza Rome, & University of Padova. 
                  Almost 30+ ranked universities are based in Italy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in Italy has always been center point attraction international students. Various 
                  registered bodies independent learning Italian universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Cultural heritage and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students Italy has ranked as top cultural heritage and secure country for international students. The diversity is reflected in every aspect of the Italian culture, art, architecture, food, literature, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Affordable education:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Italy offers affordable quality education with excellent scholarship opportunities for international students. Public universities charge reasonable tuition fees while maintaining high academic standards.
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
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in Italy for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in Italy. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program Italy varies from 
                €2,000-€4,000/year for public universities. The average tuition fees of postgraduate programs in Italy varies from €2,500-€5,000/year. Private universities may charge €10,000-€20,000/year.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in Italy (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Italian visa, an international student, you are allowed work 20 hours/week during studies. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in Italy for international student is €8-12/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in Italy for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Italian authorities, average living cost for an international student in Italy depends on the city you are living in, the 
                living cost in Milan/Rome is different as compared to other cities.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• €800-1200/month for courses in Milan/Rome (10 month)</li>
                <li>• €600-900/month for courses in other cities (10 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application to Italian consulate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in Italy from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in Italy with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best Italian universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "Italian student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default ItalyPage;
