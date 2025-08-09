
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedDestinationsSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const destinations = [
    {
      country: "United States",
      slug: "usa",
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
      description: "Home to world's top universities and cutting-edge research facilities with unmatched opportunities",
      stats: { universities: "4,000+", students: "1.1M" },
      features: ["STEM Excellence", "Research Opportunities", "OPT Benefits"],
      color: "from-blue-600 to-purple-700"
    },
    {
      country: "United Kingdom", 
      slug: "uk",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      description: "Rich academic heritage with globally recognized degrees and prestigious institutions",
      stats: { universities: "160+", students: "500K+" },
      features: ["Russell Group", "Post-Study Work", "Global Recognition"],
      color: "from-red-600 to-orange-700"
    },
    {
      country: "Canada",
      slug: "canada", 
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop",
      description: "Quality education with excellent post-study work opportunities and PR pathways",
      stats: { universities: "100+", students: "800K+" },
      features: ["PR Pathways", "Affordable Education", "Work Permits"],
      color: "from-green-600 to-teal-700"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Global Destinations
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            From Dreams to Reality
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore how our comprehensive guidance is revolutionizing international education 
            with intelligent solutions tailored to your specific academic goals.
          </p>
        </div>

        {/* Interactive Cards Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center space-x-8 mb-12">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeCard === index ? 'bg-orange-500 scale-150' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="relative h-[600px] perspective-1000">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === activeCard
                    ? 'translate-x-0 opacity-100 scale-100 z-20'
                    : index < activeCard
                    ? '-translate-x-full opacity-0 scale-95 z-10'
                    : 'translate-x-full opacity-0 scale-95 z-10'
                } bg-gray-900/50 border border-gray-700 backdrop-blur-xl hover:border-orange-500/50`}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image}
                      alt={destination.country}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${destination.color} opacity-20`}></div>
                    <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-3xl mr-2">{destination.flag}</span>
                      <span className="text-white font-semibold">{destination.country}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-12 flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                      {destination.country}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {destination.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="w-5 h-5 text-orange-500 mr-2" />
                          <span className="text-gray-400 text-sm">Universities</span>
                        </div>
                        <p className="text-2xl font-bold text-white">{destination.stats.universities}</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-orange-500 mr-2" />
                          <span className="text-gray-400 text-sm">Int'l Students</span>
                        </div>
                        <p className="text-2xl font-bold text-white">{destination.stats.students}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {destination.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link to={`/countries/${destination.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold py-4 text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group">
                        Explore {destination.country}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button
              onClick={() => setActiveCard(prev => prev > 0 ? prev - 1 : destinations.length - 1)}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={() => setActiveCard(prev => prev < destinations.length - 1 ? prev + 1 : 0)}
              className="bg-orange-500 hover:bg-orange-600 text-black p-3 rounded-full transition-colors duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedDestinationsSection;
