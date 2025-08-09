
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
  Zap,
  Target,
  Sparkles
} from 'lucide-react';

const AdvancedServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      subtitle: "Advanced Protective Guidance",
      description: "Advanced university selection with comprehensive evaluation, positioning, and guidance sensors for safer decision-making in your academic journey.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      features: ["Profile Matching", "Ranking Analysis", "Application Strategy"],
      color: "from-blue-600 to-indigo-700",
      category: "Academic Excellence",
      sensors: ["Smart Matching", "Risk Analysis", "Performance Tracking"]
    },
    {
      icon: Shield,
      title: "Visa Protection",  
      subtitle: "Safety & Security with Advanced Sensors",
      description: "Safety guidance with visa processing, document protection, and application sensors to prevent rejection and monitor your application status.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop", 
      features: ["Document Review", "Interview Prep", "Status Tracking"],
      color: "from-green-600 to-emerald-700",
      category: "Visa Excellence",
      sensors: ["Document Scanner", "Risk Assessment", "Status Monitor"]
    },
    {
      icon: Star,
      title: "Scholarship Performance",
      subtitle: "Smart Academic Excellence Tracking",
      description: "Smart scholarship guidance with merit evaluation and funding sensors that track opportunities, optimize applications, and performance metrics.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      features: ["Merit Evaluation", "Funding Search", "Application Support"],
      color: "from-purple-600 to-pink-700", 
      category: "Scholarship Excellence",
      sensors: ["Merit Scanner", "Opportunity Finder", "Success Tracker"]
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
            Service Applications
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-scale-in">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Explore how our textile sensor technology is revolutionizing multiple industries with intelligent 
            fabric solutions tailored to specific needs.
          </p>
          <p className="text-orange-400 mt-6 cursor-pointer hover:text-orange-300 transition-colors animate-bounce">
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
                className={`group relative bg-white hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-6 overflow-hidden cursor-pointer ${
                  hoveredCard === index ? 'scale-105 z-10' : 'hover:scale-102'
                } shadow-lg hover:shadow-orange-500/10`}
              >
                {/* Background Image with overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:blur-sm"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-75 transition-all duration-700`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <span className="text-white/90 text-sm font-bold bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Sensor Indicators - More prominent */}
                  <div className="absolute top-6 right-6 space-y-3">
                    {service.sensors.map((sensor, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-black/40 rounded-full px-3 py-1 backdrop-blur-sm">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          idx === 0 ? 'bg-green-400' : idx === 1 ? 'bg-blue-400' : 'bg-purple-400'
                        }`}></div>
                        <span className="text-white text-xs font-medium">{sensor}</span>
                      </div>
                    ))}
                  </div>

                  {/* Animated Connection Lines */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <svg className="w-full h-20 opacity-60">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: 'white', stopOpacity: 0.8}} />
                          <stop offset="50%" style={{stopColor: 'orange', stopOpacity: 0.9}} />
                          <stop offset="100%" style={{stopColor: 'white', stopOpacity: 0.8}} />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,15 Q40,10 80,15 T160,15 T240,15 T320,15"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                      {[80, 160, 240].map((x, i) => (
                        <circle 
                          key={i} 
                          cx={x} 
                          cy="15" 
                          r="3" 
                          fill="white" 
                          className="animate-pulse"
                          style={{animationDelay: `${i * 300}ms`}}
                        />
                      ))}
                      <circle cx="320" cy="15" r="4" fill="orange" className="animate-bounce" />
                    </svg>
                  </div>

                  {/* Overlay content that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-full group-hover:translate-y-0`}>
                    <div className="p-6 text-white w-full">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-orange-300 text-sm font-semibold mb-3">{service.subtitle}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Zap className="w-4 h-4 text-orange-400 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-orange-600 text-sm font-bold mb-4 tracking-wide">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Enhanced Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-300 group/feature hover:translate-x-2">
                          <div className="relative">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-4 group-hover/feature:scale-125 transition-transform duration-300" />
                            <div className="absolute inset-0 w-5 h-5 bg-green-500/20 rounded-full group-hover/feature:animate-ping"></div>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-4 hover:shadow-xl hover:shadow-current/25 transition-all duration-500 group/btn hover:scale-105`}
                    >
                      <Target className="w-5 h-5 mr-2 group-hover/btn:rotate-90 transition-transform duration-500" />
                      Explore Solutions
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Navigation */}
        <div className="flex justify-center items-center mt-16 space-x-6">
          {[0, 1, 2].map((index) => (
            <button 
              key={index}
              className={`h-3 rounded-full transition-all duration-500 ${
                hoveredCard === index 
                  ? 'w-16 bg-orange-500 shadow-lg shadow-orange-500/30' 
                  : 'w-3 bg-gray-600 hover:bg-gray-500'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
            />
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700/30 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-orange-500 mr-2 animate-pulse" />
            Powered by Intelligence
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            These examples showcase just a few ways our comprehensive services can enhance your study abroad experience 
            and academic performance through intelligent guidance and advanced support systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedServicesSection;
