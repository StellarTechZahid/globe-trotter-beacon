
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Globe, CheckCircle, Star, Shield, Heart, BookOpen, Briefcase, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We believe in transparent processes and honest guidance, ensuring students make informed decisions about their future."
    },
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every decision we make is centered around what's best for our students' academic and career success."
    },
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "We maintain partnerships only with accredited institutions that meet the highest standards of education quality."
    },
    {
      icon: Briefcase,
      title: "Career Focus",
      description: "Our guidance extends beyond admission to ensure students are career-ready and industry-relevant."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description: "Started with a vision to democratize international education access for students worldwide."
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Expanded partnerships to include universities across UK, USA, Canada, and Australia."
    },
    {
      year: "2016",
      title: "Digital Innovation",
      description: "Launched our comprehensive digital platform for streamlined application processes."
    },
    {
      year: "2020",
      title: "Virtual Excellence",
      description: "Adapted to provide seamless virtual counseling and support during global challenges."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated advanced AI tools for personalized course matching and career guidance."
    }
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: "Market Insights",
      stat: "90%",
      description: "Accuracy in predicting admission trends and success rates"
    },
    {
      icon: Clock,
      title: "Processing Speed",
      stat: "48hrs",
      description: "Average response time for document review and feedback"
    },
    {
      icon: Globe,
      title: "Global Network",
      stat: "180+",
      description: "Partner universities across major study destinations"
    },
    {
      icon: Award,
      title: "Scholarship Success",
      stat: "75%",
      description: "Of our students receive some form of financial assistance"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-orange-500">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-black ml-1"></div>
                </div>
                <p className="text-orange-500 font-semibold">Video: Our Journey to Excellence</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">About Study Global</h2>
            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              For over 15 years, Study Global has been the trusted bridge connecting ambitious students 
              with world-class educational opportunities. We've successfully guided over 10,000 students 
              to their dream universities across 25+ countries, maintaining an unprecedented 98% success rate.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our comprehensive approach goes beyond mere admissions assistance. We provide end-to-end 
              support from career counseling and university selection to visa guidance and post-arrival 
              support, ensuring our students not just get admitted, but thrive in their chosen destinations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              What sets us apart is our commitment to personalized guidance. Every student receives 
              tailored advice based on their academic background, career aspirations, and personal 
              preferences, making their study abroad journey both successful and fulfilling.
            </p>
            <Link to="/about">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-orange-500 mb-2">{achievement.count}</h3>
                <p className="text-gray-300">{achievement.label}</p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-all duration-300 group text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Journey of Excellence</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that shaped our commitment to student success
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                    <div className="text-orange-500 font-bold text-2xl mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{milestone.title}</h4>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-black"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Expertise in Numbers</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable excellence in every aspect of our service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-8 border border-orange-500 text-center group hover:border-orange-400 transition-all duration-300">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{item.stat}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Features */}
        <div className="bg-gray-900 rounded-lg p-8 border border-orange-500 mb-12">
          <h3 className="text-2xl font-bold text-orange-500 mb-8 text-center">Why Choose Study Global?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={scrollToConsultation}
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
          >
            Book Free Consultation Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
