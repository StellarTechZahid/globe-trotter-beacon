
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
    { name: 'Queens University', id: 'queens-university' }
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
            backgroundImage: `url(https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&h=1080&fit=crop)` 
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

      {/* Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Canadian Universities for International Students</h2>
            <p className="text-gray-300">Explore Canada's most prestigious universities with our expert guidance</p>
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
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Alberta is a leading research university offering excellent programs with affordable tuition and strong industry connections.
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

      {/* Why Study in Canada - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in Canada</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Canadian degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a Canadian education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In Canada you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as University of Toronto, UBC, & McGill University. 
                  Almost 26+ ranked universities are based in Canada.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in Canada has always been center point attraction international students. Various 
                  registered bodies independent learning Canadian universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students The diversity is reflected in every aspect of the Canadian culture has ranked as top 
                  multicultural and secure country for international students. The diversity is reflected in every aspect of the Canadian 
                  culture, food, literature, arts, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No language barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country. In Canada, English is 
                  the official language and all the courses are being taught in English, making it easier for students from every 
                  part of the globe to study in Canada.
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
                The locals pay a different fee as compared to international students planning to study in Canada. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program Canada varies from 
                CAD $30,000-$60,000/year. The average tuition fees of postgraduate programs in Canada varies from CAD $20,000-$50,000/year. There are various options of distance learning programs where online study programs are majorly 
                available in Canada.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in Canada (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Canadian visa, an international student, you are allowed work 20 hours/week during studies. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in Canada for international student is CAD $15-20/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in Canada for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Immigration Canada, average living cost for an international student in Canada depends on the city you are living in, the 
                living cost in Toronto/Vancouver is different as compared to other cities.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• CAD $1500-2000/month for courses in Toronto/Vancouver (10 month)</li>
                <li>• CAD $1000-1500/month for courses in other cities (10 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application to Immigration Canada.
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
              { step: "2", title: "University Selection", desc: "Choose the best Canadian universities based on your profile and goals with our expert team" },
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
