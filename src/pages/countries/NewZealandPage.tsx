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
    { name: 'Wellington Institute of Technology (WelTec)', id: 'wellington-institute-of-technology' },
    { name: 'Southern Institute of Technology', id: 'southern-institute-of-technology' },
    { name: 'Manukau Institute of Technology', id: 'manukau-institute-of-technology' },
    { name: 'Nelson Marlborough Institute of Technology', id: 'nelson-marlborough-institute-of-technology' },
    { name: 'Eastern Institute of Technology', id: 'eastern-institute-of-technology' },
    { name: 'Waikato Institute of Technology (Wintec)', id: 'wintec' },
    { name: 'NorthTec', id: 'northtec' },
    { name: 'Western Institute of Technology at Taranaki', id: 'western-institute-of-technology' },
    { name: 'Toi Ohomai Institute of Technology', id: 'toi-ohomai-institute-of-technology' },
    { name: 'Whitecliffe College', id: 'whitecliffe-college' },
    { name: 'Yoobee Colleges', id: 'yoobee-colleges' },
    { name: 'New Zealand School of Tourism', id: 'new-zealand-school-of-tourism' },
    { name: 'Pacific International Hotel Management School', id: 'pacific-international-hotel-management-school' },
    { name: 'New Zealand Tertiary College', id: 'new-zealand-tertiary-college' },
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
            backgroundImage: `ur[](https://images.unsplash.com/photo-1534437047414-09d1237636a8?w=1920&h=1080&fit=crop)` 
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to New Zealand Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              New Zealand is renowned for its high-quality education system, innovative teaching methods, and stunning natural beauty. With globally recognized universities, polytechnics, and private institutions, studying in New Zealand offers unique opportunities for academic and personal growth. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your New Zealand dream with our comprehensive overseas education consultancy services.
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
                Home to top-ranked universities like University of Auckland and Otago, and leading polytechnics like Unitec, offering cutting-edge programs.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe and Welcoming</h3>
              <p className="text-gray-300">
                Experience a safe, inclusive, and multicultural environment with a high quality of life, ideal for international students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Career Opportunities</h3>
              <p className="text-gray-300">
                Access post-study work visas and strong career prospects in a globally connected economy, with pathways to residency.
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
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1883</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    New Zealand’s top-ranked university, the University of Auckland offers a wide range of programs and is a global leader in research and innovation.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
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
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dunedin</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1869</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its vibrant student life and excellence in health sciences, Otago is a top choice for international students seeking a supportive academic environment.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
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
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Wellington</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 22,000+ (International: 21%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1897</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in New Zealand’s capital, Victoria University is renowned for its programs in law, humanities, and social sciences, with a strong focus on global connections.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Victoria Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Victoria University Campus</span>
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top Polytechnic in NZ</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dunedin, Auckland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1870</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Otago Polytechnic offers career-focused programs in fields like nursing, IT, and design, with a reputation for hands-on learning and industry connections.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply Now with Us
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
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Leading Private Arts College</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Auckland, Wellington</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1983</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Whitecliffe College specializes in arts, design, and fashion, offering creative programs with a focus on practical skills and global industry trends.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Whitecliffe Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Whitecliffe College Campus</span>
                </div>
              </div>
            </div>

            {/* Placeholder for Other Institutions */}
            {quickLinks.slice(5).map((link) => (
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
                        <p className="text-white">NZD $20,000-$40,000/year</p>
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

      {/* Why Study in New Zealand - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in New Zealand</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              A New Zealand education offers a unique blend of academic excellence, practical skills, and an unparalleled lifestyle. 
              Degrees and diplomas from New Zealand institutions are globally recognized, opening doors to international career opportunities.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Globally Ranked Universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  All eight New Zealand universities, including Auckland and Otago, are ranked in the top 3% globally, offering world-class education in diverse fields.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Practical and Innovative Education:</h3>
                <p className="text-gray-300 leading-relaxed">
                  New Zealand institutions emphasize hands-on learning, industry connections, and innovative teaching, preparing students for real-world challenges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Safe and Scenic Environment:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ranked among the safest countries, New Zealand offers a stunning natural landscape and a welcoming, multicultural society for international students.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• English-Taught Programs:</h3>
                <p className="text-gray-300 leading-relaxed">
                  All courses are taught in English, making New Zealand an accessible destination for international students from around the globe.
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
                Tuition fees vary by institution and program. Universities typically charge NZD $30,000-$50,000/year for undergraduate programs and NZD $20,000-$40,000/year for postgraduate programs. Polytechnics and private colleges like Otago Polytechnic and Whitecliffe offer more affordable options, ranging from NZD $20,000-$35,000/year.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in New Zealand (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                International students on a New Zealand student visa can work up to 20 hours per week during academic sessions and full-time during scheduled breaks, such as summer holidays.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates for students range from NZD $20-$25/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in New Zealand for International Students</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Living costs depend on the city. Auckland and Wellington are more expensive, while smaller cities like Dunedin are more affordable.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• NZD $1,500-$2,000/month in Auckland/Wellington (12 months)</li>
                <li>• NZD $1,000-$1,500/month in other cities (12 months)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Proof of sufficient funds (NZD $20,000/year) is required for visa applications, typically through bank statements or sponsorships.
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
              { step: "2", title: "Institution Selection", desc: "Choose the best New Zealand universities or colleges based on your profile and goals with our expert team" },
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
