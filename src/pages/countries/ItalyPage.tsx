
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ItalyPage = () => {
  const quickLinks = [
    { name: "University of Bologna", id: "university-of-bologna" },
    { name: "Sapienza University of Rome", id: "sapienza-university-of-rome" },
    { name: "University of Milan", id: "university-of-milan" },
    { name: "Bocconi University", id: "bocconi-university" },
    { name: "University of Padova", id: "university-of-padova" },
    { name: "University of Florence", id: "university-of-florence" },
    { name: "Politecnico di Milano", id: "politecnico-di-milano" },
    { name: "University of Turin", id: "university-of-turin" }
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
                Home to University of Bologna (oldest university), Sapienza Rome, Bocconi, and many other top-ranked institutions. Study abroad in Italy with the best educational consultants.
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Italian Universities for International Students</h2>
            <p className="text-gray-300">Explore Italy's most prestigious universities with our expert guidance</p>
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
                    University of Bologna, the world's oldest university, offers world-class programs across all disciplines. Known as the birthplace of university education with rich academic tradition.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bologna Campus</span>
                </div>
              </div>
            </div>

            {/* Sapienza University of Rome */}
            <div id="sapienza-university-of-rome" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Sapienza University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Sapienza University of Rome</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #134 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Rome, Lazio</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 115,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1303</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in Rome, Sapienza is one of Europe's largest universities, renowned for research excellence and comprehensive programs in the eternal city.
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
                  </Button>
                </div>
              </div>
            </div>

            {/* Bocconi University */}
            <div id="bocconi-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Bocconi University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Top 10 Business Schools Europe</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Milan, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 60%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1902</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Bocconi University is Italy's premier business university with excellent career prospects and strong alumni network in finance and business worldwide.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">€14,000-€16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 7.0+, GMAT/SAT</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Milan Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Bocconi University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Milan */}
            <div id="university-of-milan" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Milan Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Milan</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #316 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Milan, Lombardy</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 64,000+ (International: 6%)</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Milan is a leading Italian university in Milan's financial district with strong industry connections and international partnerships.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply Now with Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
