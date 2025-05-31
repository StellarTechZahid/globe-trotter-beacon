
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AustraliaPage = () => {
  const quickLinks = [
    { name: "University of Melbourne", id: "university-of-melbourne" },
    { name: "Australian National University", id: "australian-national-university" },
    { name: "University of Sydney", id: "university-of-sydney" },
    { name: "University of Queensland", id: "university-of-queensland" },
    { name: "Monash University", id: "monash-university" },
    { name: "University of Western Australia", id: "university-of-western-australia" },
    { name: "University of Adelaide", id: "university-of-adelaide" },
    { name: "UNSW Sydney", id: "unsw-sydney" }
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
            backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in Australia
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the land down under. Start your Australian dream today with Abroad Academics - your trusted study abroad consultants since 2023!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to Australian Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Australia is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in Australia opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your Australian dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Australia Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Australia for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose Australia for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to University of Melbourne, ANU, University of Sydney, and many other top-ranked institutions that lead in research and innovation. Study abroad in Australia with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multicultural Environment</h3>
              <p className="text-gray-300">
                Experience the most multicultural society with excellent quality of life and welcoming environment. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to post-study work visa and excellent career prospects with strong economy. Top study abroad consultants ensure your success.
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Australian Universities for International Students</h2>
            <p className="text-gray-300">Explore Australia's most prestigious universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* University of Melbourne */}
            <div id="university-of-melbourne" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Melbourne</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #14 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Melbourne, Victoria</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 51,000+ (International: 45%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1853</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Melbourne, Australia's top university, offers world-class programs across all disciplines. Known for producing leaders in business, politics, science, and arts.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">AUD $45,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, ATAR</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Melbourne Campus</span>
                </div>
              </div>
            </div>

            {/* Australian National University */}
            <div id="australian-national-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">ANU Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Australian National University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #34 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Canberra, ACT</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 42%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1946</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in Australia's capital, ANU is renowned for research excellence, politics, and international relations. Australia's national university with strong government connections.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">AUD $43,000-$48,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, ATAR</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Sydney */}
            <div id="university-of-sydney" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Sydney</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #19 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sydney, New South Wales</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 70,000+ (International: 47%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1850</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Sydney is Australia's oldest university, known for its beautiful campus and excellent graduate employment rates in the heart of Sydney.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">AUD $44,000-$52,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, ATAR</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Sydney Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Sydney Campus</span>
                </div>
              </div>
            </div>

            {/* University of Queensland */}
            <div id="university-of-queensland" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Queensland Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Queensland</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #43 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Brisbane, Queensland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 54,000+ (International: 38%)</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Queensland is a leading research university offering excellent programs with strong industry partnerships and beautiful campus in Brisbane.
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

      {/* Why Study in Australia - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in Australia</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Australian degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, an Australian education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In Australia you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as University of Melbourne, ANU, & University of Sydney. 
                  Almost 37+ ranked universities are based in Australia.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in Australia has always been center point attraction international students. Various 
                  registered bodies independent learning Australian universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students The diversity is reflected in every aspect of the Australian culture has ranked as top 
                  multicultural and secure country for international students. The diversity is reflected in every aspect of the Australian 
                  culture, food, literature, arts, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No language barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country. In Australia, English is 
                  the official language and all the courses are being taught in English, making it easier for students from every 
                  part of the globe to study in Australia.
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
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in Australia for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in Australia. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program Australia varies from 
                AUD $30,000-$55,000/year. The average tuition fees of postgraduate programs in Australia varies from AUD $32,000-$55,000/year. There are various options of distance learning programs where online study programs are majorly 
                available in Australia.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in Australia (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Australian visa, an international student, you are allowed work 48 hours/fortnight during studies. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in Australia for international student is AUD $20-25/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in Australia for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Department of Home Affairs Australia, average living cost for an international student in Australia depends on the city you are living in, the 
                living cost in Sydney/Melbourne is different as compared to other cities.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• AUD $2500-3000/month for courses in Sydney/Melbourne (10 month)</li>
                <li>• AUD $2000-2500/month for courses in other cities (10 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application to Department of Home Affairs Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in Australia from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in Australia with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best Australian universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "Australian student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default AustraliaPage;
