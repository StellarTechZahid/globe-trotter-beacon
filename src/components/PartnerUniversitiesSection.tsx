
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnerUniversitiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const universities = [
    {
      name: "Royal Holloway, University of London",
      country: "UK",
      description: "A prestigious university in London with a strong focus on research and teaching excellence.",
      logo: "RH",
      ranking: "Top 25 UK"
    },
    {
      name: "Queen Mary University of London", 
      country: "UK",
      description: "A world-class institution in the heart of London, offering a wide range of programs.",
      logo: "QM",
      ranking: "Top 50 Global"
    },
    {
      name: "University of Birmingham",
      country: "UK", 
      description: "A leading UK university offering high-quality education and research opportunities.",
      logo: "UB",
      ranking: "Russell Group"
    },
    {
      name: "Curtin University",
      country: "Australia",
      description: "A global university with a strong connection with industry and research excellence.",
      logo: "CU",
      ranking: "Top 200 Global"
    },
    {
      name: "University of Waterloo",
      country: "Canada",
      description: "A university known for its focus on research and co-operative education programs.",
      logo: "UW",
      ranking: "Top 3 Canada"
    },
    {
      name: "McMaster University",
      country: "Canada",
      description: "Renowned for its innovative teaching methods and research-intensive programs.",
      logo: "MC",
      ranking: "Top 100 Global"
    },
    {
      name: "University of Sydney",
      country: "Australia",
      description: "Australia's first university, known for academic excellence and beautiful campus.",
      logo: "US",
      ranking: "Top 50 Global"
    },
    {
      name: "Technical University of Munich",
      country: "Germany",
      description: "Leading technical university in Europe with strong industry connections.",
      logo: "TUM",
      ranking: "Top 50 Global"
    },
    {
      name: "Bocconi University",
      country: "Italy",
      description: "Premier institution for business, economics, and management studies.",
      logo: "BU",
      ranking: "Top Business School"
    },
    {
      name: "University of Auckland",
      country: "New Zealand",
      description: "New Zealand's largest and highest-ranked university.",
      logo: "UA",
      ranking: "Top 100 Global"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partner Universities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with prestigious institutions worldwide to provide you with the best educational opportunities
          </p>
        </div>

        {/* Moving Cards Container */}
        <div className="relative overflow-hidden mb-16">
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden animate-scroll"
            style={{ 
              width: `${universities.length * 400}px`
            }}
          >
            {[...universities, ...universities].map((university, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-96 bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-lg">{university.logo}</span>
                  </div>
                  <div className="text-orange-500 text-sm font-semibold mb-2">{university.country}</div>
                  <div className="text-orange-400 text-xs mb-2">{university.ranking}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center h-16 flex items-center justify-center">{university.name}</h3>
                <p className="text-gray-300 text-sm text-center mb-6 h-12">{university.description}</p>
                
                <div className="text-center">
                  <Button 
                    onClick={scrollToConsultation}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/partnership/universities">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-3">
              View All Partner Universities →
            </Button>
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PartnerUniversitiesSection;
