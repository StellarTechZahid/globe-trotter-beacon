
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UKPage = () => {
  const quickLinks = [
    { name: "University of Oxford", id: "university-of-oxford" },
    { name: "University of Cambridge", id: "university-of-cambridge" },
    { name: "Imperial College London", id: "imperial-college-london" },
    { name: "UCL (University College London)", id: "ucl-university-college-london" },
    { name: "King's College London", id: "kings-college-london" },
    { name: "University of Edinburgh", id: "university-of-edinburgh" },
    { name: "University of Manchester", id: "university-of-manchester" },
    { name: "London School of Economics", id: "london-school-of-economics" }
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
            backgroundImage: `url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in the UK
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the United Kingdom. Start your British education journey today with Abroad Academics - your trusted study abroad consultants since 2023!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to UK Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The United Kingdom is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in the UK opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your British dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose UK Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose the UK for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose United Kingdom for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to Oxford, Cambridge, Imperial College, and many other top-ranked institutions that lead in research and innovation. Study abroad in UK with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rich Cultural Heritage</h3>
              <p className="text-gray-300">
                Experience the birthplace of English language and culture with access to historic cities and major cultural institutions. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to Graduate Route visa and excellent career prospects in Europe and globally. Top study abroad consultants ensure your success.
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top UK Universities for International Students</h2>
            <p className="text-gray-300">Explore United Kingdom's most prestigious universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* University of Oxford */}
            <div id="university-of-oxford" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Oxford</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #2 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Oxford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 40%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1096</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Oxford, the oldest university in the English-speaking world, offers world-class programs across all disciplines. Known for producing leaders in politics, business, science, and literature.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£28,000-£39,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 7.0+</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Oxford Campus</span>
                </div>
              </div>
            </div>

            {/* University of Cambridge */}
            <div id="university-of-cambridge" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Cambridge Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Cambridge</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #3 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cambridge, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 23,000+ (International: 38%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1209</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in the historic city of Cambridge, this university is renowned for innovation, research excellence, and academic tradition. Home to many Nobel Prize winners and world leaders.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£24,000-£37,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 7.0+</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
                  </Button>
                </div>
              </div>
            </div>

            {/* Imperial College London */}
            <div id="imperial-college-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Imperial College London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #6 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 59%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1907</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Imperial College London is the UK's leading institution for science, technology, engineering, and medicine. Known for groundbreaking research and innovation in STEM fields.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£32,000-£46,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Imperial Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Imperial College London Campus</span>
                </div>
              </div>
            </div>

            {/* UCL */}
            <div id="ucl-university-college-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UCL Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">UCL (University College London)</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #9 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000+ (International: 53%)</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    UCL is a leading multidisciplinary university in central London offering diverse programs with excellent research opportunities and strong industry connections.
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

      {/* Why Study in the UK - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in the UK</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              UK degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a UK education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In UK you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as University of Cambridge, University of Oxford, & Imperial College. 
                  Almost 75+ ranked universities are based in UK.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in UK has always been center point attraction international students. Various 
                  registered bodies independent learning UK universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students The diversity is reflected in every aspect of the UK culture has ranked as top 
                  multicultural and secure country for international students. The diversity is reflected in every aspect of the UK 
                  culture, food, literature, arts, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No language barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country. In UK, English is 
                  the official language and all the courses are being taught in English, making it easier for students from every 
                  part of the globe to study in the UK.
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
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in UK for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in UK. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program UK varies from 
                £20,000-£35,000/year. The average tuition fees of postgraduate programs in UK varies from £15,000-£30,000/year. There are various options of distance learning programs where online study programs are majorly 
                available in UK.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in UK (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per UK visa, an international student, you are allowed work 20 hours/week. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in UK for international student is £10-15/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in UK for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per the UKVI, average living cost for an international student in UK depends on the city you are living in, the 
                living cost in London is different as compared to outside London.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• £1334 per month for courses in London (9 month)</li>
                <li>• £1023 per month for courses outside London (9 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application in UKVI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in UK from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in UK with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best UK universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "UK student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default UKPage;
