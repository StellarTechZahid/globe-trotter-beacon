
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, GraduationCap, CreditCard, Users, MapPin, Award, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Applications",
      description: "Expert guidance for applications to top universities worldwide with personalized essay support.",
      features: ["Application Strategy", "Essay Writing", "Document Preparation"]
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Complete visa support from documentation to interview preparation for all study destinations.",
      features: ["Document Review", "Interview Prep", "Status Tracking"]
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description: "Maximize your funding opportunities with our comprehensive scholarship search and application support.",
      features: ["Scholarship Search", "Application Support", "Merit Evaluation"]
    },
    {
      icon: CreditCard,
      title: "Financial Planning",
      description: "Comprehensive financial planning including education loans and budget management.",
      features: ["Loan Assistance", "Budget Planning", "Cost Analysis"]
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Professional career guidance to align your studies with future career opportunities.",
      features: ["Career Assessment", "Industry Insights", "Networking Support"]
    },
    {
      icon: MapPin,
      title: "Pre-Departure Support",
      description: "Complete preparation for your journey including accommodation and cultural orientation.",
      features: ["Accommodation Help", "Travel Guidance", "Cultural Preparation"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive support throughout your study abroad journey, from application to graduation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white group-hover:bg-blue-600 group-hover:hover:bg-blue-700 transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
