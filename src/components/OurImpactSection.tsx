
import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Award, Globe, ArrowRight, Star, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurImpactSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    scholarships: 0,
    countries: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
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
      description: "Successfully guided students to their dream universities",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      key: 'universities' as keyof typeof counters,
      number: counters.universities + "+", 
      label: "Partner Universities",
      description: "Prestigious institutions across the globe",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Award,
      key: 'scholarships' as keyof typeof counters,
      number: counters.scholarships + "+",
      label: "Scholarships Awarded",
      description: "Millions in funding secured for our students",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      key: 'countries' as keyof typeof counters,
      number: counters.countries + "+",
      label: "Countries",
      description: "Study destinations available worldwide",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "Excellence in Education",
      description: "Recognized as Pakistan's leading study abroad consultancy with 98% visa success rate",
      stats: "98% Success Rate"
    },
    {
      icon: TrendingUp,
      title: "Growing Success",
      description: "Continuous growth in student placements and university partnerships since 2023",
      stats: "200% Growth"
    },
    {
      icon: Target,
      title: "Targeted Guidance",
      description: "Personalized counseling ensuring perfect match between students and universities",
      stats: "100% Satisfaction"
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Interactive Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-xl border-orange-500/30 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-r ${stat.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <h4 className="text-xl font-semibold text-orange-400 mb-3">{stat.label}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const isActive = index === activeCard;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-700 transform ${
                  isActive 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500 scale-105 shadow-2xl shadow-orange-500/30' 
                    : 'bg-gray-900/50 border-gray-700 hover:border-orange-500/50'
                }`}
                onClick={() => setActiveCard(index)}
              >
                <CardContent className="p-8">
                  <div className={`${
                    isActive ? 'bg-orange-500' : 'bg-gray-700 group-hover:bg-orange-500'
                  } w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500`}>
                    <IconComponent className={`h-8 w-8 ${isActive ? 'text-black' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isActive ? 'text-orange-400' : 'text-white'} transition-colors duration-300`}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{achievement.description}</p>
                  <div className={`inline-flex items-center space-x-2 ${
                    isActive ? 'text-orange-400' : 'text-gray-400 group-hover:text-orange-400'
                  } transition-colors duration-300`}>
                    <span className="font-bold text-lg">{achievement.stats}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
