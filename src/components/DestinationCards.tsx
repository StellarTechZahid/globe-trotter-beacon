
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DestinationCards = () => {
  const destinations = [
    {
      country: "United States",
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
      description: "Home to world's top universities and cutting-edge research",
      universities: "4,000+ Universities",
      students: "1.1M International Students"
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      description: "Rich academic heritage with globally recognized degrees",
      universities: "160+ Universities",
      students: "500K+ International Students"
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
      description: "Quality education with excellent post-study work opportunities",
      universities: "100+ Universities",
      students: "800K+ International Students"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "World-class education in a multicultural environment",
      universities: "43+ Universities",
      students: "700K+ International Students"
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
      description: "Leading in engineering and technology with affordable education",
      universities: "400+ Universities",
      students: "400K+ International Students"
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop",
      description: "Innovative education system with stunning natural beauty",
      universities: "8+ Universities",
      students: "50K+ International Students"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination, index) => (
        <Card 
          key={destination.country}
          className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
        >
          <div className="relative">
            <img 
              src={destination.image} 
              alt={destination.country}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
              <span className="text-2xl">{destination.flag}</span>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
              {destination.country}
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {destination.description}
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-2" />
                {destination.universities}
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-2" />
                {destination.students}
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-orange-500 group-hover:hover:bg-orange-600 transition-all duration-300">
              Explore {destination.country}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DestinationCards;
