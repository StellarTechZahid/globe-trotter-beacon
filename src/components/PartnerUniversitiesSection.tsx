
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnerUniversitiesSection = () => {
  const universities = [
    {
      name: "Royal Holloway, University of London",
      country: "UK",
      description: "A prestigious university in London with a strong focus on research and teaching excellence.",
      logo: "RH"
    },
    {
      name: "Queen Mary University of London", 
      country: "UK",
      description: "A world-class institution in the heart of London, offering a wide range of programs.",
      logo: "QM"
    },
    {
      name: "University of Birmingham",
      country: "UK", 
      description: "A leading UK university offering high-quality education and research opportunities.",
      logo: "UB"
    },
    {
      name: "Curtin University",
      country: "Australia",
      description: "A global university with a strong connection with Australia.",
      logo: "CU"
    },
    {
      name: "University of Waterloo",
      country: "Canada",
      description: "A university known for its focus on research and teaching excellence.",
      logo: "UW"
    },
    {
      name: "Queen Mary University of London",
      country: "UK",
      description: "A world-class institution in the heart of London, offering a wide range of programs.",
      logo: "QM"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partner Universities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with prestigious institutions worldwide to provide you with the best educational opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {universities.map((university, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{university.logo}</span>
                </div>
                <div className="text-orange-500 text-sm font-semibold mb-2">{university.country}</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 text-center">{university.name}</h3>
              <p className="text-gray-300 text-sm text-center mb-6">{university.description}</p>
              
              <div className="text-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2">
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/partnership/universities">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-3">
              View All Partner Universities →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversitiesSection;
