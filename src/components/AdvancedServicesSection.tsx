
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  FileText, 
  Award, 
  Shield, 
  Users, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

const AdvancedServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      subtitle: "Advanced Protective Guidance",
      description: "Advanced university selection with comprehensive evaluation, positioning, and guidance sensors for safer decision-making in your academic journey.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      features: ["Profile Matching", "Ranking Analysis", "Application Strategy"],
      color: "from-blue-600 to-indigo-700",
      category: "Academic Excellence"
    },
    {
      icon: Shield,
      title: "Visa Protection",  
      subtitle: "Safety & Security with Advanced Sensors",
      description: "Safety guidance with visa processing, document protection, and application sensors to prevent rejection and monitor your application status.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop", 
      features: ["Document Review", "Interview Prep", "Status Tracking"],
      color: "from-green-600 to-emerald-700",
      category: "Visa Excellence"
    },
    {
      icon: Star,
      title: "Scholarship Performance",
      subtitle: "Smart Academic Excellence Tracking",
      description: "Smart scholarship guidance with merit evaluation and funding sensors that track opportunities, optimize applications, and performance metrics.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      features: ["Merit Evaluation", "Funding Search", "Application Support"],
      color: "from-purple-600 to-pink-700", 
      category: "Scholarship Excellence"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Service Applications
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore how our services are applied in different professional contexts, from 
            academic guidance to visa processing and scholarship consulting.
          </p>
          <p className="text-orange-400 mt-4 cursor-pointer hover:text-orange-300 transition-colors">
            Scroll horizontally to see more examples →
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden ${
                  hoveredCard === index ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  {/* Icon and Category */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-3">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium bg-black/20 rounded-full px-3 py-1">
                      {service.category}
                    </span>
                  </div>

                  {/* Sensor Indicators */}
                  <div className="absolute top-6 right-6 space-y-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute bottom-4 left-6 w-32 h-16 opacity-60">
                    <path
                      d="M0,12 Q16,8 32,12 T64,12 T96,12 T128,12"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="3,3"
                      className="animate-pulse"
                    />
                    <circle cx="96" cy="12" r="2" fill="white" className="animate-pulse" />
                    <circle cx="64" cy="12" r="2" fill="white" className="animate-pulse" />
                  </svg>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-orange-600 text-sm font-semibold mb-4 tracking-wide">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 hover:shadow-lg transition-all duration-300 group`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center items-center mt-16 space-x-4">
          <button className="w-12 h-2 bg-gray-600 rounded-full hover:bg-orange-500 transition-colors duration-300"></button>
          <button className="w-12 h-2 bg-orange-500 rounded-full"></button>
          <button className="w-12 h-2 bg-gray-600 rounded-full hover:bg-orange-500 transition-colors duration-300"></button>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-12">
          <p className="text-gray-400 max-w-3xl mx-auto">
            These examples showcase just a few ways our comprehensive services can enhance your study abroad experience and academic performance through intelligent guidance and support systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedServicesSection;
