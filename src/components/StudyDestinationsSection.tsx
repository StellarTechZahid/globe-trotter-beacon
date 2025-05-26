
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Building } from 'lucide-react';

const StudyDestinationsSection = () => {
  const destinations = [
    {
      name: "United States",
      slug: "usa",
      description: "Home to world's top universities and cutting-edge research",
      stats: ["500+ Universities", "1M+ International Students"],
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop"
    },
    {
      name: "United Kingdom", 
      slug: "uk",
      description: "Rich academic heritage with globally recognized degrees",
      stats: ["160+ Universities", "500K+ International Students"],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
    },
    {
      name: "Canada",
      slug: "canada", 
      description: "Quality education with excellent post-study work opportunities",
      stats: ["100+ Universities", "800K+ International Students"],
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop"
    },
    {
      name: "Australia",
      slug: "australia",
      description: "World-class education in a multicultural environment",
      stats: ["43 Universities", "700K+ International Students"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      name: "Germany",
      slug: "germany",
      description: "Leading in engineering and technology with affordable education",
      stats: ["400+ Universities", "400K+ International Students"],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop"
    },
    {
      name: "New Zealand",
      slug: "new-zealand",
      description: "Innovative education system with stunning natural beauty",
      stats: ["8 Universities", "50K+ International Students"],
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Explore Top Study Destinations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover world-class education opportunities across the globe's most prestigious academic destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-orange-500 hover:border-orange-400 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  <GraduationCap className="w-4 h-4 inline mr-1" />
                  Top Destination
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{destination.name}</h3>
                <p className="text-gray-300 mb-4">{destination.description}</p>
                
                <div className="space-y-2 mb-6">
                  {destination.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center text-sm text-orange-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {stat}
                    </div>
                  ))}
                </div>
                
                <Link to={`/countries/${destination.slug}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Explore {destination.name} →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/countries">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-3">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinationsSection;
