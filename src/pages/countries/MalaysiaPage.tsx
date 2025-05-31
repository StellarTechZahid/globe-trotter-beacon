
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MalaysiaPage = () => {
  const quickLinks = [
    { name: "University of Malaya", id: "university-of-malaya" },
    { name: "Universiti Putra Malaysia", id: "universiti-putra-malaysia" },
    { name: "Universiti Kebangsaan Malaysia", id: "universiti-kebangsaan-malaysia" },
    { name: "Taylor's University", id: "taylors-university" },
    { name: "Monash University Malaysia", id: "monash-university-malaysia" },
    { name: "UCSI University", id: "ucsi-university" },
    { name: "Sunway University", id: "sunway-university" },
    { name: "Asia Pacific University", id: "asia-pacific-university" }
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
            backgroundImage: `url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in Malaysia
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the heart of Southeast Asia with affordable excellence. Start your Malaysian dream today with Abroad Academics - your trusted study abroad consultants since 2023!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to Malaysian Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Malaysia is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and multicultural environment, studying in Malaysia opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your Malaysian dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Malaysia Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Malaysia for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose Malaysia for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to University of Malaya, Monash Malaysia, Taylor's University, and many other top-ranked institutions. Study abroad in Malaysia with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Affordable Excellence</h3>
              <p className="text-gray-300">
                Experience world-class education at fraction of Western costs with excellent value for money. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Gateway to Asia-Pacific with multicultural environment and excellent career opportunities. Top study abroad consultants ensure your success.
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Malaysian Universities for International Students</h2>
            <p className="text-gray-300">Explore Malaysia's most prestigious universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* University of Malaya */}
            <div id="university-of-malaya" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Malaya</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #65 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kuala Lumpur, Malaysia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 27,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1905</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    University of Malaya, Malaysia's top university, offers world-class programs across all disciplines. Known for producing leaders in business, politics, science, and technology.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">MYR 15,000-25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, A-levels</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply with Expert Guidance
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Malaya Campus</span>
                </div>
              </div>
            </div>

            {/* Monash University Malaysia */}
            <div id="monash-university-malaysia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Monash Malaysia Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Monash University Malaysia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Australian Monash University Campus</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bandar Sunway, Selangor</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 9,000+ (International: 55%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1998</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in Kuala Lumpur area, Monash Malaysia is an Australian university campus offering same degree quality at reduced costs for international students.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">MYR 30,000-50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.5+, A-levels</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Admission Assistance
                  </Button>
                </div>
              </div>
            </div>

            {/* Taylor's University */}
            <div id="taylors-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Taylor's University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #284 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Subang Jaya, Selangor</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 35%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1969</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Taylor's University is Malaysia's premier private university with excellent industry connections and pathway programs to international universities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">MYR 25,000-45,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">IELTS 6.0+, A-levels</p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Your Taylor's Journey
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Taylor's University Campus</span>
                </div>
              </div>
            </div>

            {/* UCSI University */}
            <div id="ucsi-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UCSI University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">UCSI University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #284 Worldwide</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kuala Lumpur, Malaysia</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 15,000+ (International: 40%)</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    UCSI University is a leading private university with strong industry partnerships and excellent career prospects for graduates in Malaysia and internationally.
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

      {/* Why Study in Malaysia - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in Malaysia</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Malaysian degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a Malaysian education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In Malaysia you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as University of Malaya, Monash Malaysia, & Taylor's University. 
                  Almost 20+ ranked universities are based in Malaysia.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in Malaysia has always been center point attraction international students. Various 
                  registered bodies independent learning Malaysian universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students Malaysia has ranked as top multicultural and secure country for international students. The diversity is reflected in every aspect of the Malaysian culture, food, literature, arts, and music with harmony among different communities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No language barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country. In Malaysia, English is 
                  the medium of instruction and all the courses are being taught in English, making it easier for students from every 
                  part of the globe to study in Malaysia.
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
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in Malaysia for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in Malaysia. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program Malaysia varies from 
                MYR 15,000-45,000/year. The average tuition fees of postgraduate programs in Malaysia varies from MYR 20,000-50,000/year. There are various options of distance learning programs where online study programs are majorly 
                available in Malaysia.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in Malaysia (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Malaysian visa, an international student, you are allowed work 20 hours/week during studies. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in Malaysia for international student is MYR 8-15/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in Malaysia for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per Malaysian authorities, average living cost for an international student in Malaysia depends on the city you are living in, the 
                living cost in Kuala Lumpur is different as compared to other cities.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• MYR 1000-1500/month for courses in Kuala Lumpur (10 month)</li>
                <li>• MYR 800-1200/month for courses in other cities (10 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application to Malaysian consulate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in Malaysia from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in Malaysia with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best Malaysian universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "Malaysian student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default MalaysiaPage;
