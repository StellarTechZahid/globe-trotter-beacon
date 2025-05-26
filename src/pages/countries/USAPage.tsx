
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Globe, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const USAPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section with Background Video Effect */}
      <section className="relative h-screen overflow-hidden">
        {/* TODO: Replace with actual background video */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in the USA
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the land of opportunities. Start your American dream today!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to American Education</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The United States is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in the USA opens doors to endless possibilities. Our expert team will guide you through every step of your journey to achieve your American dream.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose USA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose the USA?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to Harvard, MIT, Stanford, and many other top-ranked institutions that lead in research and innovation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Hub</h3>
              <p className="text-gray-300">
                Experience the birthplace of technology and entrepreneurship with access to Silicon Valley and major corporations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Career Excellence</h3>
              <p className="text-gray-300">
                Access to Optional Practical Training (OPT) and excellent career prospects in the world's largest economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Explore US Universities</h2>
            <p className="text-gray-300">Top American universities waiting for you</p>
          </div>

          {/* Sample Universities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Harvard University', ranking: '#4 Worldwide (QS 2025)', tuition: '$50,000-$60,000/year', gre: 'Required', intake: 'Fall & Spring' },
              { name: 'Stanford University', ranking: '#5 Worldwide', tuition: '$55,000-$65,000/year', gre: 'Required', intake: 'Fall' },
              { name: 'MIT', ranking: '#1 Worldwide', tuition: '$53,000-$58,000/year', gre: 'Required', intake: 'Fall' },
              { name: 'UC Berkeley', ranking: '#10 Worldwide', tuition: '$45,000-$55,000/year', gre: 'Required', intake: 'Fall & Spring' }
            ].map((uni, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-colors">
                <div className="h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">University Image</span>
                </div>
                <h3 className="text-white font-bold mb-2">{uni.name}</h3>
                <div className="space-y-1 text-sm text-gray-300 mb-4">
                  <p>🏆 Ranking: {uni.ranking}</p>
                  <p>💰 Tuition Fee: {uni.tuition}</p>
                  <p>📊 GRE/GMAT: {uni.gre}</p>
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

      <Footer />
    </div>
  );
};

export default USAPage;
