import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewZealandPage = () => {
  const quickLinks = [
    { name: 'University of Auckland', id: 'university-of-auckland' },
    { name: 'University of Otago', id: 'university-of-otago' },
    { name: 'Victoria University of Wellington', id: 'victoria-university-of-wellington' },
    { name: 'University of Canterbury', id: 'university-of-canterbury' },
    { name: 'Massey University', id: 'massey-university' },
    { name: 'Lincoln University', id: 'lincoln-university' },
    { name: 'Auckland University of Technology', id: 'auckland-university-of-technology' },
    { name: 'University of Waikato', id: 'university-of-waikato' },
    { name: 'Unitec Institute of Technology', id: 'unitec-institute-of-technology' },
    { name: 'Otago Polytechnic', id: 'otago-polytechnic' },
    { name: 'Ara Institute of Canterbury', id: 'ara-institute-of-canterbury' },
    { name: 'Wellington Institute of Technology', id: 'wellington-institute-of-technology' },
    { name: 'Southern Institute of Technology', id: 'southern-institute-of-technology' },
    { name: 'Manukau Institute of Technology', id: 'manukau-institute-of-technology' },
    { name: 'Nelson Marlborough Institute of Technology', id: 'nelson-marlborough-institute-of-technology' },
    { name: 'Eastern Institute of Technology', id: 'eastern-institute-of-technology' },
    { name: 'Waikato Institute of Technology', id: 'wintec' },
    { name: 'NorthTec', id: 'northtec' },
    { name: 'Western Institute of Technology at Taranaki', id: 'western-institute-of-technology' },
    { name: 'Toi Ohomai Institute of Technology', id: 'toi-ohomai-institute-of-technology' },
    { name: 'Whitecliffe College', id: 'whitecliffe-college' },
    { name: 'Yoobee Colleges', id: 'yoobee-colleges' },
    { name: 'New Zealand School of Tourism', id: 'new-zealand-school-of-tourism' },
    { name: 'Pacific International Hotel Management School', id: 'pacific-international-hotel-management-school' },
    { name: 'New Zealand Tertiary College', id: 'new-zealand-tertiary-college' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1534437047414-09d1237636a8?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in New Zealand
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world-class universities and institutes in one of the most scenic and welcoming countries. Start your New Zealand dream today with Abroad Academics - your trusted study abroad consultants since 2023!
            </p>
            <Button 
              onClick={() => window.location.href = '/#consultation-form'}
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to New Zealand Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              New Zealand offers a world-class education system, innovative teaching methods, and a safe, multicultural environment. With globally recognized universities, polytechnics, and private institutions, studying in New Zealand opens doors to academic and career success. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your New Zealand dream.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose New Zealand Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose New Zealand for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why thousands of international students choose New Zealand for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World-Class Institutions</h3>
              <p className="text-gray-300">
                Home to top universities like Auckland and Otago, and leading polytechnics like Ara Institute, offering innovative programs for global careers.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe and Welcoming</h3>
              <p className="text-gray-300">
                Experience a safe, inclusive, and multicultural society with stunning landscapes and a high quality of life, perfect for international students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Career Opportunities</h3>
              <p className="text-gray-300">
                Access post-study work visas (up to 3 years) and excellent career prospects with pathways to permanent residency in a vibrant economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <QuickNavigation links={quickLinks} />

      {/* Universities and Institutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top New Zealand Universities and Institutions for International Students</h2>
            <p className="text-gray-300">Explore New Zealand's prestigious institutions with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* University of Auckland */}
            <div id="university-of-auckland" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Auckland</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #65 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000 (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1883</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    New Zealand’s top-ranked university, renowned for its comprehensive programs in engineering, business, and medical sciences, with a vibrant international community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $35,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, High School Diploma/SAT</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Auckland Campus</span>
                </div>
              </div>
            </div>

            {/* University of Otago */}
            <div id="university-of-otago" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Otago Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Otago</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #214 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dunedin, South Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000 (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1869</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its excellence in health sciences, humanities, and vibrant student life, Otago offers a supportive environment for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $30,000-$45,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Victoria University of Wellington */}
            <div id="victoria-university-of-wellington" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Victoria University of Wellington</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #241 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Wellington, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 22,000 (International: 21%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1897</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in the capital city, Victoria excels in law, humanities, and social sciences, with strong global connections and a vibrant campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Victoria University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Canterbury */}
            <div id="university-of-canterbury" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Canterbury Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Canterbury</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #270 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Christchurch, South Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000 (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1873</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for engineering, science, and arts programs, Canterbury offers a supportive environment with strong research opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $30,000-$45,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Massey University */}
            <div id="massey-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Massey University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #239 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Palmerston North, Auckland, Wellington</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000 (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1927</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Massey is a leader in agriculture, business, and creative arts, offering flexible study options and a strong focus on applied learning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Massey University Campus</span>
                </div>
              </div>
            </div>

            {/* Lincoln University */}
            <div id="lincoln-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Lincoln University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Lincoln University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #362 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Lincoln, Canterbury</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 3,500 (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1878</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specializing in agriculture, environmental science, and land management, Lincoln offers a unique, research-driven experience for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $30,000-$38,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Auckland University of Technology */}
            <div id="auckland-university-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Auckland University of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #236 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 29,000 (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2000</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    AUT is known for its innovative programs in technology, business, and hospitality, with strong industry links and a modern campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $32,000-$42,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">AUT Campus</span>
                </div>
              </div>
            </div>

            {/* University of Waikato */}
            <div id="university-of-waikato" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Waikato Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Waikato</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #235 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hamilton, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,500 (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1964</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Waikato is recognized for its business, education, and Māori studies programs, offering a welcoming environment for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $30,000-$40,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Unitec Institute of Technology */}
            <div id="unitec-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Unitec Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000 (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1976</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Unitec offers practical programs in architecture, nursing, and engineering, with a focus on hands-on learning and industry partnerships.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $22,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Unitec Campus</span>
                </div>
              </div>
            </div>

            {/* Otago Polytechnic */}
            <div id="otago-polytechnic" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Otago Polytechnic Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Otago Polytechnic</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dunedin, Auckland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000 (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1870</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Otago Polytechnic excels in nursing, IT, and design, offering career-focused programs with strong industry connections.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Ara Institute of Canterbury */}
            <div id="ara-institute-of-canterbury" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Ara Institute of Canterbury</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Christchurch, South Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000 (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2016</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Ara offers practical programs in business, nursing, and engineering, with a focus on employability and modern facilities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Ara Institute Campus</span>
                </div>
              </div>
            </div>

            {/* Wellington Institute of Technology */}
            <div id="wellington-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">WelTec Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Wellington Institute of Technology (WelTec)</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Wellington, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,000 (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1904</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    WelTec provides hands-on programs in IT, hospitality, and engineering, with a strong focus on career-ready skills.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$27,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Southern Institute of Technology */}
            <div id="southern-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Southern Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Invercargill, South Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 13,000 (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1971</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    SIT is known for its affordable programs in business, nursing, and trades, with a focus on practical training and low-cost tuition for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $16,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">SIT Campus</span>
                </div>
              </div>
            </div>

            {/* Manukau Institute of Technology */}
            <div id="manukau-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Manukau Institute Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Manukau Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000 (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1970</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    MIT offers career-oriented programs in engineering, business, and health sciences, with a focus on practical skills and industry connections.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Nelson Marlborough Institute of Technology */}
            <div id="nelson-marlborough-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Nelson Marlborough Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Nelson, South Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,000 (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1904</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    NMIT offers programs in viticulture, maritime studies, and business, with a focus on sustainability and regional industry needs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">NMIT Campus</span>
                </div>
              </div>
            </div>

            {/* Eastern Institute of Technology */}
            <div id="eastern-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">EIT Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Eastern Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hawke’s Bay, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000 (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1975</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    EIT offers programs in wine science, nursing, and business, with a focus on regional industries and practical training.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$27,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Waikato Institute of Technology (Wintec) */}
            <div id="wintec" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Waikato Institute of Technology (Wintec)</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hamilton, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 13,000 (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1924</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Wintec offers programs in health, engineering, and media arts, with a strong emphasis on practical, industry-relevant education.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Wintec Campus</span>
                </div>
              </div>
            </div>

            {/* NorthTec */}
            <div id="northtec" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">NorthTec Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">NorthTec</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Whangarei, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,000 (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1978</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    NorthTec provides programs in nursing, business, and trades, with a focus on regional development and practical skills.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Western Institute of Technology at Taranaki */}
            <div id="western-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Western Institute of Technology at Taranaki</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New Plymouth, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 4,000 (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1972</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    WITT offers programs in engineering, nursing, and business, with a focus on practical training and community engagement.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">WITT Campus</span>
                </div>
              </div>
            </div>

            {/* Toi Ohomai Institute of Technology */}
            <div id="toi-ohomai-institute-of-technology" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Toi Ohomai Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Toi Ohomai Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Rotorua, Tauranga</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000 (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2016</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Toi Ohomai offers programs in tourism, business, and health, with a focus on practical skills and regional economic needs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$27,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Whitecliffe College */}
            <div id="whitecliffe-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Whitecliffe College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, Wellington</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,000 (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1983</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Whitecliffe specializes in arts, design, and fashion, offering creative programs with a global industry focus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $25,000-$35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, Portfolio/High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Whitecliffe Campus</span>
                </div>
              </div>
            </div>

            {/* Yoobee Colleges */}
            <div id="yoobee-colleges" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Yoobee Colleges Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Yoobee Colleges</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, Wellington, Christchurch</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 3,000 (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1997</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Yoobee specializes in digital design, animation, and film, offering cutting-edge programs for creative industries.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, Portfolio/High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* New Zealand School of Tourism */}
            <div id="new-zealand-school-of-tourism" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">New Zealand School of Tourism</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, Wellington, Christchurch</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,500 (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1985</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    NZST offers specialized programs in tourism, hospitality, and aviation, with a focus on career-ready skills for global industries.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 5.5+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">NZST Campus</span>
                </div>
              </div>
            </div>

            {/* Pacific International Hotel Management School */}
            <div id="pacific-international-hotel-management-school" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">PIHMS Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Pacific International Hotel Management School</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New Plymouth, North Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 500 (International: 40%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1995</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    PIHMS specializes in hospitality and hotel management, offering hands-on training in a simulated hotel environment.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $20,000-$28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* New Zealand Tertiary College */}
            <div id="new-zealand-tertiary-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">New Zealand Tertiary College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: NZQA Category 1 Provider</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, Christchurch</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 1,500 (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1982</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    NZTC specializes in early childhood education and health, offering flexible online and campus-based programs for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">NZD $18,000-$25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, High School Diploma</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/#consultation-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">NZTC Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand - Detailed Section */}
<section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in New Zealand</h2>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        New Zealand degrees provide you with globally recognized qualifications and practical skills that prepare you for
        real-world experiences. Wherever you go in the world, a New Zealand education opens the doors for your career
        and future opportunities.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">• World-ranked universities:</h3>
          <p className="text-gray-300 leading-relaxed">
            All 8 universities in New Zealand are ranked among the top universities worldwide. They are known for their
            research-led teaching, student support, and innovative programs that attract thousands of international students.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
          <p className="text-gray-300 leading-relaxed">
            New Zealand follows a British-based education system with a focus on practical learning and research. Students
            are encouraged to actively participate, apply skills in real-life scenarios, and think critically — ensuring long-term
            benefits in both career and life.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">• Safe and welcoming country:</h3>
          <p className="text-gray-300 leading-relaxed">
            New Zealand is consistently ranked as one of the safest countries in the world. Its diverse and inclusive culture is
            reflected in everyday life, from friendly communities to its rich heritage, arts, food, and natural beauty.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">• Affordable education:</h3>
          <p className="text-gray-300 leading-relaxed">
            New Zealand offers affordable, high-quality education with excellent scholarship opportunities for international
            students. Tuition fees are reasonable compared to other popular destinations, while academic standards remain
            world-class.
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
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in New Zealand for International Students</h2>
        <p className="text-gray-300 leading-relaxed">
          Tuition fees vary depending on the university and course. On average, undergraduate programs in New Zealand
          cost NZ$22,000–NZ$32,000/year, while postgraduate programs range from NZ$26,000–NZ$37,000/year. Certain
          specialized courses like medicine or MBA may be higher.
        </p>
      </div>

      {/* Working Hours */}
      <div>
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in New Zealand (Student Visa)</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          International students in New Zealand are allowed to work up to 20 hours/week during semesters and full-time
          during scheduled holidays. Exceeding the permitted hours can affect your visa status.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Average wage rates in New Zealand for international students are around NZ$21–NZ$25/hour.
        </p>
      </div>

      {/* Living Cost */}
      <div>
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in New Zealand for International Students</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Living costs in New Zealand depend on the city. Auckland and Wellington are more expensive compared to smaller
          cities like Hamilton or Christchurch.
        </p>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>• NZ$1,200–1,600/month in Auckland/Wellington</li>
          <li>• NZ$1,000–1,400/month in other cities</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Students may be required to show proof of financial support or sponsorship when applying for a student visa at the
          New Zealand consulate.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Study Abroad Process */}
<section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in New Zealand from Pakistan - Step by Step Process</h2>
      <p className="text-xl text-gray-300">Our proven process for studying abroad in New Zealand with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
        { step: "2", title: "University Selection", desc: "Choose the best New Zealand universities based on your profile and goals with our expert team" },
        { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
        { step: "4", title: "Visa Assistance", desc: "New Zealand student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default NewZealandPage;
