
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedDestinationsSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const destinations = [
    {
      country: "United States",
      slug: "usa",
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
      description: "Home to world's top universities and cutting-edge research facilities with unmatched opportunities for international students",
      stats: { universities: "4,000+", students: "1.1M" },
      features: ["STEM Excellence", "Research Opportunities", "OPT Benefits"],
      color: "from-blue-600 to-purple-700",
      category: "Top Destination"
    },
    {
      country: "United Kingdom", 
      slug: "uk",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      description: "Rich academic heritage with globally recognized degrees and prestigious institutions offering world-class education",
      stats: { universities: "160+", students: "500K+" },
      features: ["Russell Group Universities", "Post-Study Work Visa", "Global Recognition"],
      color: "from-red-600 to-orange-700",
      category: "Academic Excellence"
    },
    {
      country: "Canada",
      slug: "canada", 
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop",
      description: "Quality education with excellent post-study work opportunities and clear pathways to permanent residency",
      stats: { universities: "100+", students: "800K+" },
      features: ["PR Pathways", "Affordable Education", "Work Permits"],
      color: "from-green-600 to-teal-700",
      category: "Immigration Friendly"
    }
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % destinations.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
            Global Destinations
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-scale-in">
            From Dreams to Reality
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Explore how our comprehensive guidance is revolutionizing international education 
            with intelligent solutions tailored to your specific academic goals.
          </p>
        </div>

        {/* Interactive Cards Carousel */}
        <div className="max-w-7xl mx-auto">
          {/* Navigation dots */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`transition-all duration-500 ${
                  activeCard === index 
                    ? 'w-12 h-3 bg-orange-500 rounded-full' 
                    : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="relative h-[700px] perspective-1000">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === activeCard
                    ? 'translate-x-0 opacity-100 scale-100 z-20 rotate-0'
                    : index < activeCard
                    ? '-translate-x-full opacity-30 scale-95 z-10 -rotate-3'
                    : 'translate-x-full opacity-30 scale-95 z-10 rotate-3'
                } bg-gray-900/80 border border-gray-700/50 backdrop-blur-2xl hover:border-orange-500/50 shadow-2xl`}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image}
                      alt={destination.country}
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-30 mix-blend-overlay`}></div>
                    
                    {/* Country Badge */}
                    <div className="absolute top-8 left-8 bg-black/70 backdrop-blur-md rounded-2xl px-6 py-3 border border-gray-600/50">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{destination.flag}</span>
                        <div>
                          <p className="text-white font-bold text-lg">{destination.country}</p>
                          <p className="text-orange-400 text-sm">{destination.category}</p>
                        </div>
                      </div>
                    </div>

                    {/* Animated particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                      <div className="absolute top-32 right-32 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute bottom-32 left-32 w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-700"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900/95 to-black/95">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                          {destination.country}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {destination.description}
                        </p>
                      </div>

                      {/* Animated Stats */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-500 group">
                          <div className="flex items-center mb-3">
                            <GraduationCap className="w-6 h-6 text-orange-500 mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-400 text-sm">Universities</span>
                          </div>
                          <p className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">
                            {destination.stats.universities}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-500 group">
                          <div className="flex items-center mb-3">
                            <Users className="w-6 h-6 text-orange-500 mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-400 text-sm">Int'l Students</span>
                          </div>
                          <p className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">
                            {destination.stats.students}
                          </p>
                        </div>
                      </div>

                      {/* Features with animations */}
                      <div className="space-y-4">
                        {destination.features?.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300">
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={`/countries/${destination.slug}`} className="block">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold py-4 text-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-orange-500/25">
                          Explore {destination.country}
                          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-8 mt-16">
            <button
              onClick={prevCard}
              className="bg-gray-800/80 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600/50 hover:border-orange-500/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-gray-400 px-6">
              {activeCard + 1} / {destinations.length}
            </div>
            <button
              onClick={nextCard}
              className="bg-orange-500 hover:bg-orange-600 text-black p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom description */}
        <div className="text-center mt-16">
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            These destinations represent just a few of the amazing opportunities available through our comprehensive guidance system. 
            Each country offers unique advantages for international students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedDestinationsSection;
