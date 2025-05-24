
import React, { useState, useEffect, useRef } from 'react';

const ImpactCounter = () => {
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    countries: 0,
    success: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targets = {
    students: 10000,
    universities: 500,
    countries: 25,
    success: 98
  };

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
        countries: Math.floor(targets.countries * progress),
        success: Math.floor(targets.success * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const stats = [
    {
      value: counters.students.toLocaleString() + '+',
      label: 'Students Placed',
      icon: '🎓'
    },
    {
      value: counters.universities + '+',
      label: 'Partner Universities',
      icon: '🏛️'
    },
    {
      value: counters.countries + '+',
      label: 'Countries',
      icon: '🌍'
    },
    {
      value: counters.success + '%',
      label: 'Success Rate',
      icon: '⭐'
    }
  ];

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-6xl mb-4">{stat.icon}</div>
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            {stat.value}
          </div>
          <div className="text-xl text-blue-100">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactCounter;
