
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserCheck, 
  FileText, 
  GraduationCap, 
  Plane, 
  CheckCircle,
  ArrowDown,
  Sparkles,
  Zap,
  Target,
  Shield
} from 'lucide-react';

const AdvancedProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      icon: UserCheck,
      title: "Initial Consultation",
      subtitle: "Proprietary Assessment",
      description: "We build business-ready guidance with proprietary vital off-the-shelf modules, allowing us to develop completely unique solutions at high speed and lower risk.",
      features: ["Profile Analysis", "Goal Setting", "Document Review"],
      color: "from-blue-500 to-indigo-600",
      position: "top-left"
    },
    {
      id: 2,  
      icon: FileText,
      title: "Application Strategy",
      subtitle: "Vetted Documentation Process",
      description: "Our expert team crafts a personalized application strategy with vetted documentation processes that complement our methodology.",
      features: ["University Selection", "Essay Writing", "Document Preparation"],
      color: "from-purple-500 to-pink-600",
      position: "top-center"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Admission Support", 
      subtitle: "Vetted Partner Network",
      description: "Leveraging our network of vetted university partners, we ensure your application gets the attention it deserves with quality and reliability.",
      features: ["Partner Universities", "Application Tracking", "Interview Prep"],
      color: "from-green-500 to-teal-600",
      position: "top-right"
    },
    {
      id: 4,
      icon: Plane,
      title: "Launch Preparation",
      subtitle: "Ready to Scale and Launch",
      description: "Working collaboratively with students to tailor solutions to their needs. Ready to scale, produce, and launch your international education journey.",
      features: ["Visa Processing", "Accommodation", "Orientation"],
      color: "from-orange-500 to-red-600",
      position: "bottom"
    }
  ];

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
            Our Approach
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-scale-in">
            How Our Process Works
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in">
            We build business-ready solutions with proprietary vital off-the-shelf modules, 
            allowing us to develop completely unique guidance at high speed and lower risk.
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - Connected Flow */}
          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {processSteps.slice(0, 3).map((step, index) => (
                <div key={step.id} className="relative group">
                  <Card 
                    className="bg-gray-800/50 border border-gray-700 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <CardContent className="p-8 text-center">
                      {/* Icon with glow effect */}
                      <div className={`bg-gradient-to-r ${step.color} p-6 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <step.icon className="h-12 w-12 text-white drop-shadow-lg" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-orange-400 text-sm font-semibold mb-4 tracking-wide">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors">
                        {step.description}
                      </p>
                      
                      {/* Features with hover animations */}
                      <div className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Step number indicator */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.id}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connecting arrows with animation */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="relative">
                        <ArrowDown className="w-8 h-8 text-orange-500 rotate-90 animate-pulse" />
                        <div className="absolute inset-0 w-8 h-8 bg-orange-500/20 rounded-full blur-sm animate-ping"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Center Connecting Element */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="w-4 h-24 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 w-4 h-24 bg-orange-500/30 rounded-full blur-md animate-pulse"></div>
                <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white animate-spin" />
              </div>
            </div>

            {/* Final Step - Centered */}
            <div className="flex justify-center">
              <div className="max-w-lg w-full">
                <Card className="bg-black/70 border-2 border-orange-500 backdrop-blur-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-orange-500/25 group relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10"></div>
                  
                  <CardContent className="p-10 text-center relative z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-3xl w-32 h-32 flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <Sparkles className="h-16 w-16 text-white animate-pulse" />
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {processSteps[3].title}
                    </h3>
                    <p className="text-orange-400 text-lg font-semibold mb-6 tracking-wide">
                      {processSteps[3].subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-white transition-colors">
                      {processSteps[3].description}
                    </p>
                    
                    {/* Features grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {processSteps[3].features.map((feature, idx) => (
                        <div key={idx} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group/item">
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2 group-hover/item:scale-110 transition-transform" />
                          <span className="text-xs text-gray-400 group-hover/item:text-gray-200 transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold px-10 py-4 text-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                      <Target className="w-5 h-5 mr-2" />
                      Start Your Journey
                    </Button>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-500"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Future?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our systematic approach ensures every step of your journey is carefully planned and expertly executed.
            </p>
            <div className="flex justify-center space-x-6">
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn More About Our Process →
              </Button>
              <Button 
                className="bg-orange-500 text-black px-8 py-3 hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Contact Our Experts ↗
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedProcessSection;
