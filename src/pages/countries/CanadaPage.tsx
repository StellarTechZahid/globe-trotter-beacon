
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CanadaPage = () => {
  const universities = [
    { name: 'University of Toronto', id: 'university-toronto' },
    { name: 'University of British Columbia', id: 'university-ubc' },
    { name: 'McGill University', id: 'mcgill-university' },
    { name: 'University of Alberta', id: 'university-alberta' },
    { name: 'McMaster University', id: 'mcmaster-university' },
    { name: 'University of Waterloo', id: 'university-waterloo' },
    { name: 'Western University', id: 'western-university' },
    { name: 'Queens University', id: 'queens-university' }
  ];

  const sampleUniversities = [
    { 
      name: 'University of Toronto', 
      id: 'university-toronto',
      ranking: '#21 Worldwide (QS 2025)', 
      tuition: 'CAD $58,000-$65,000/year', 
      ielts: '6.5-7.0', 
      intake: 'Fall & Winter' 
    },
    { 
      name: 'University of British Columbia', 
      id: 'university-ubc',
      ranking: '#34 Worldwide', 
      tuition: 'CAD $45,000-$55,000/year', 
      ielts: '6.5', 
      intake: 'Fall & Winter' 
    },
    { 
      name: 'McGill University', 
      id: 'mcgill-university',
      ranking: '#30 Worldwide', 
      tuition: 'CAD $45,000-$60,000/year', 
      ielts: '6.5', 
      intake: 'Fall' 
    },
    { 
      name: 'University of Alberta', 
      id: 'university-alberta',
      ranking: '#111 Worldwide', 
      tuition: 'CAD $30,000-$40,000/year', 
      ielts: '6.5', 
      intake: 'Fall, Winter & Spring' 
    }
  ];

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
              Experience world-class education in one of the world's most welcoming countries with excellent post-study opportunities.
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to Canadian Education</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Canada is renowned for its high-quality education system, multicultural environment, and excellent 
              post-graduation work opportunities. With a strong emphasis on research and innovation, Canadian 
              universities offer world-class programs while maintaining affordable tuition fees compared to other 
              English-speaking countries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Canada Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose Canada?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Education</h3>
              <p className="text-gray-300">
                Home to globally ranked universities like University of Toronto, UBC, and McGill with strong research focus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Welcoming Environment</h3>
              <p className="text-gray-300">
                Known for its friendly multicultural society and high standard of living with excellent student support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Post-Study Opportunities</h3>
              <p className="text-gray-300">
                Excellent Post-Graduation Work Permit (PGWP) options and pathways to permanent residence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuickNavigation universities={universities} />

      {/* Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Explore Canadian Universities</h2>
            <p className="text-gray-300">Top Canadian universities offering world-class education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sampleUniversities.map((uni, index) => (
              <div key={index} id={uni.id} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-colors">
                <div className="h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">University Image</span>
                </div>
                <h3 className="text-white font-bold mb-2">{uni.name}</h3>
                <div className="space-y-1 text-sm text-gray-300 mb-4">
                  <p>🏆 Ranking: {uni.ranking}</p>
                  <p>💰 Tuition Fee: {uni.tuition}</p>
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default CanadaPage;
