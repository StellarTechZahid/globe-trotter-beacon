
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UniversityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const universities = [
    { name: "Harvard University", country: "USA", logo: "🏛️", ranking: "#1 Global" },
    { name: "Oxford University", country: "UK", logo: "🎓", ranking: "#2 Global" },
    { name: "MIT", country: "USA", logo: "🔬", ranking: "#3 Global" },
    { name: "Stanford University", country: "USA", logo: "🌟", ranking: "#4 Global" },
    { name: "Cambridge University", country: "UK", logo: "📚", ranking: "#5 Global" },
    { name: "University of Toronto", country: "Canada", logo: "🍁", ranking: "#1 Canada" },
    { name: "Australian National University", country: "Australia", logo: "🦘", ranking: "#1 Australia" },
    { name: "ETH Zurich", country: "Switzerland", logo: "⚡", ranking: "#1 Switzerland" },
    { name: "University of Edinburgh", country: "UK", logo: "🏰", ranking: "#5 UK" },
    { name: "McGill University", country: "Canada", logo: "🎯", ranking: "#2 Canada" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % universities.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleUniversities = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % universities.length;
      visible.push(universities[index]);
    }
    return visible;
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-6 transition-transform duration-500">
        {getVisibleUniversities().map((university, index) => (
          <Card 
            key={`${university.name}-${currentIndex}-${index}`}
            className="min-w-[280px] hover:shadow-xl transition-all duration-300 bg-white border-0 hover:-translate-y-1"
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">{university.logo}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{university.name}</h3>
              <p className="text-slate-600 mb-2">{university.country}</p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {university.ranking}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UniversityCarousel;
