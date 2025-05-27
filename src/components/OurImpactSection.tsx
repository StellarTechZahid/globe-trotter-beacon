
import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const OurImpactSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    scholarships: 0,
    countries: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const targets = {
    students: 9960,
    universities: 180,
    scholarships: 960,
    countries: 25
  };

  const stats = [
    {
      icon: Users,
      key: 'students' as keyof typeof counters,
      number: counters.students + "+",
      label: "Students Enrolled",
      description: "Successfully guided students to their dream universities"
    },
    {
      icon: GraduationCap,
      key: 'universities' as keyof typeof counters,
      number: counters.universities + "+", 
      label: "Partner Universities",
      description: "Prestigious institutions across the globe"
    },
    {
      icon: Award,
      key: 'scholarships' as keyof typeof counters,
      number: counters.scholarships + "+",
      label: "Scholarships Awarded",
      description: "Millions in funding secured for our students"
    },
    {
      icon: Globe,
      key: 'countries' as keyof typeof counters,
      number: counters.countries + "+",
      label: "Countries",
      description: "Study destinations available worldwide"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        students: Math.floor(targets.students * progress),
        universities: Math.floor(targets.universities * progress),
        scholarships: Math.floor(targets.scholarships * progress),
        countries: Math.floor(targets.countries * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black">
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
