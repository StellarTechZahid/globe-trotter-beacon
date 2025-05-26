
import React from 'react';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const OurImpactSection = () => {
  const stats = [
    {
      icon: Users,
      number: "9960+",
      label: "Students Enrolled",
      description: "Successfully guided students to their dream universities"
    },
    {
      icon: GraduationCap,
      number: "180+", 
      label: "Partner Universities",
      description: "Prestigious institutions across the globe"
    },
    {
      icon: Award,
      number: "960+",
      label: "Scholarships Awarded",
      description: "Millions in funding secured for our students"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries",
      description: "Study destinations available worldwide"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Making dreams come true through education - see the difference we've made
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.number}</h3>
                <h4 className="text-xl font-semibold text-white mb-3">{stat.label}</h4>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
