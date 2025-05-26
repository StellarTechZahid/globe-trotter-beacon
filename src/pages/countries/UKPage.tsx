
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Globe, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UKPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section with Background Video Effect */}
      <section className="relative h-screen overflow-hidden">
        {/* TODO: Replace with actual background video */}
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
              Discover world-class education and unparalleled opportunities in the United Kingdom with StudyGlobal Connect. Start your journey today!
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg animate-fade-in delay-400">
              Explore Now →
            </Button>
          </div>
        </div>
      </section>

      {/* Your Pathway Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to UK Education</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The United Kingdom is a global leader in higher education, offering a rich blend of academic excellence, cultural diversity, and cutting-edge research opportunities. At StudyGlobal Connect, we guide you through every step of your study abroad journey, from selecting the right university to securing visas and scholarships. With our expert support, you can unlock a world of possibilities and build a successful future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose UK Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose the UK?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Top-Ranked Universities</h3>
              <p className="text-gray-300">
                Study at world-renowned institutions like Oxford, Cambridge, and UCL, consistently ranked among the best globally.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cultural Diversity</h3>
              <p className="text-gray-300">
                Experience a vibrant, multicultural environment that fosters global perspectives and lifelong connections.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Career Opportunities</h3>
              <p className="text-gray-300">
                Access global career networks and graduate visa options to kickstart your professional journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Explore UK Universities</h2>
            <p className="text-gray-300">Quick Navigation to top UK universities</p>
          </div>

          {/* Sample Universities Grid - First 8 universities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Bangor University', ranking: '#474 Worldwide (QS 2025)', tuition: '£16,000-£20,000/year', ielts: '6.0-6.5', intake: 'September & January' },
              { name: 'Brunel University of London', ranking: 'Top 100', tuition: '£13,500 - £19,000', ielts: '6.0', intake: 'September' },
              { name: 'Cardiff University', ranking: 'Top 100', tuition: '£13,500 - £19,000', ielts: '6.0', intake: 'September' },
              { name: 'City, University of London', ranking: 'Top 100', tuition: '£13,500 - £19,000', ielts: '6.0', intake: 'September' }
            ].map((uni, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-colors">
                <div className="h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">University Image</span>
                </div>
                <h3 className="text-white font-bold mb-2">{uni.name}</h3>
                <div className="space-y-1 text-sm text-gray-300 mb-4">
                  <p>🏆 Ranking: {uni.ranking}</p>
                  <p>💷 Tuition Fee: {uni.tuition}</p>
                  <p>📊 IELTS Score: {uni.ielts}</p>
                  <p>👥 Intakes: {uni.intake}</p>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in UK Details */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">Why Study in the UK</h2>
            
            <div className="space-y-8 text-gray-300">
              <div>
                <p className="leading-relaxed">
                  UK degree gives you more than an academic experience which helps you in your real-world experiences. Wherever you go in the world, a UK education opens the door of your career and practical life ahead.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">• Ranked universities:</h3>
                <p className="leading-relaxed">
                  In you can find number of internationally ranked universities as compared to other destinations. It has the highest number of ranked institutes such as University of Cambridge, University of Oxford, & Imperial College. Almost ⅓ ranked universities are based in UK.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">• Education quality:</h3>
                <p className="leading-relaxed">
                  The standard of education in UK has always been center point attraction international students. Various regulated bodies independent learning UK universities take more practical approach rather than lecture-based learning for international students. Students are expected to take a proactive role and applying the skills in the real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">• Multicultural and secure:</h3>
                <p className="leading-relaxed">
                  For international students The diversity is reflected in every aspect of the UK culture has ranked as top multicultural and secure country for international students. The diversity is reflected in every aspect of the UK culture, food, literature, arts, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">• No language barrier:</h3>
                <p className="leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country, in UK, English is the official language and all the courses are being taught in English, making it easier for students from every part of the globe to study in the UK.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Average Tuition Fees in UK for International Students</h3>
                <p className="text-gray-300 leading-relaxed">
                  The locals pay a different fee as compared to international students planning to study in UK, tuition fees vary depending on the university and course. The average tuition fees of undergraduate program UK varies from 9000 GBP - 33,000 GBP. The average tuition fees of postgraduate programs in UK varies from 7000 GBP - 30,000 GBP. There are various options of distance learning programs where online study programs are majorly available in UK.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Working Hours Allowed in UK (Student Visa)</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As per UKVI, as an international student you are allowed work 20 hours/week. Working more than the allowed hours can strictly affect your visa status resulting in cancelling your study permit.
                </p>
                <p className="text-gray-300">
                  Average wage rates in UK for international student is 10-13 GBP/hour.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Living Cost in UK for International Student</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As per the UKVI, average living cost for an international student in UK depends on the city you are living in, the living cost in London is different as compared to outside London.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• 1334 GBP per month for courses in London (9 month)</li>
                  <li>• 1023 GBP per month for courses outside London (9 month)</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting your visa application in UKVI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UKPage;
