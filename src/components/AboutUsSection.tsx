
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Globe, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const achievements = [
    { icon: Users, count: "10,000+", label: "Students Guided" },
    { icon: Globe, count: "25+", label: "Countries Covered" },
    { icon: Award, count: "98%", label: "Success Rate" },
    { icon: Star, count: "15+", label: "Years Experience" }
  ];

  const features = [
    "Expert career guidance and counseling",
    "Comprehensive university application support",
    "Visa assistance and documentation",
    "Scholarship consultation and funding support",
    "Pre-departure and post-arrival assistance",
    "Ongoing support throughout your journey"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Video placeholder and About Us content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-orange-500">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-black ml-1"></div>
                </div>
                <p className="text-orange-500 font-semibold">Video: Our Journey</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">About Us</h2>
            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We partner with globally recognized institutions to ensure our students have access to the best opportunities for success. Our team provides visa assistance and pre-departure support to ensure a smooth transition abroad.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Join us to explore tailored education plans that fit your career goals and aspirations.
            </p>
            <Link to="/about">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-orange-500 mb-2">{achievement.count}</h3>
                <p className="text-gray-300">{achievement.label}</p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
          <h3 className="text-2xl font-bold text-orange-500 mb-8 text-center">Why Choose StudyGlobal?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
