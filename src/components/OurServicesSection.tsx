
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, FileText, Award, CreditCard, Users, MapPin, CheckCircle, Star, Clock, Shield } from 'lucide-react';

const OurServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Applications",
      description: "Expert guidance for applications to top universities worldwide with personalized essay support.",
      features: ["Application Strategy", "Essay Writing", "Document Preparation"],
      slug: "university-selection"
    },
    {
      icon: FileText,
      title: "Visa Assistance", 
      description: "Complete visa support from documentation to interview preparation for all study destinations.",
      features: ["Document Review", "Interview Prep", "Status Tracking"],
      slug: "visa-assistance"
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description: "Maximize your funding opportunities with our comprehensive scholarship search and application support.",
      features: ["Scholarship Search", "Application Support", "Merit Evaluation"],
      slug: "scholarship-consulting"
    },
    {
      icon: CreditCard,
      title: "Financial Planning",
      description: "Comprehensive financial planning including education loans and budget management.",
      features: ["Loan Assistance", "Budget Planning", "Cost Analysis"],
      slug: "application-support"
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Professional career guidance to align your studies with future career opportunities.",
      features: ["Career Assessment", "Industry Insights", "Networking Support"],
      slug: "career-counseling"
    },
    {
      icon: MapPin,
      title: "Pre-Departure Support",
      description: "Complete preparation for your journey including accommodation and cultural orientation.",
      features: ["Accommodation Help", "Travel Guidance", "Cultural Preparation"],
      slug: "pre-departure-orientation"
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "100% Success Guarantee",
      description: "We're confident in our process - if we can't help you get accepted, you don't pay."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your entire study abroad journey."
    },
    {
      icon: Star,
      title: "Expert Counselors",
      description: "Our team consists of certified education consultants with 15+ years of experience."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Service",
      description: "From initial consultation to graduation - we're with you every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive support throughout your study abroad journey, from application to graduation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="bg-orange-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-orange-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link to={`/services/${service.slug}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Learn More →
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional Features Section */}
        <div className="bg-gray-900 rounded-lg p-8 border border-orange-500 mb-12">
          <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Why Choose Our Services?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-3">
              View All Services →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
