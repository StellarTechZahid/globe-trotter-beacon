
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserCheck, 
  FileText, 
  GraduationCap, 
  Plane, 
  CheckCircle,
  ArrowDown,
  Sparkles
} from 'lucide-react';

const AdvancedProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: UserCheck,
      title: "Initial Consultation",
      subtitle: "Proprietary Assessment",
      description: "We conduct a comprehensive evaluation of your academic background, career aspirations, and personal preferences using our advanced profiling system.",
      features: ["Profile Analysis", "Goal Setting", "Document Review"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,  
      icon: FileText,
      title: "Application Strategy",
      subtitle: "Vetted Documentation Process",
      description: "Our expert team crafts a personalized application strategy with vetted documentation processes that complement our methodology.",
      features: ["University Selection", "Essay Writing", "Document Preparation"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Admission Support", 
      subtitle: "Vetted Partner Network",
      description: "Leveraging our network of vetted university partners, we ensure your application gets the attention it deserves with quality and reliability.",
      features: ["Partner Universities", "Application Tracking", "Interview Prep"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      icon: Plane,
      title: "Pre-Departure Ready",
      subtitle: "Launch Preparation",
      description: "Working collaboratively with students to tailor solutions to their needs. Ready to scale, produce, and launch your international education journey.",
      features: ["Visa Processing", "Accommodation", "Orientation"],
      color: "from-orange-500 to-red-600"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Approach
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            How Our Process Works
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We build business-ready and software with proprietary vital off-the-shelf modules, 
            allowing us to develop completely unique solutions at high speed and lower risk.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {processSteps.slice(0, 3).map((step, index) => (
              <div key={step.id} className="relative group">
                <Card className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${step.color} p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-orange-400 text-sm font-semibold mb-4 tracking-wide">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowDown className="w-8 h-8 text-orange-500 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Connecting Lines */}
          <div className="flex justify-center mb-12">
            <div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full"></div>
          </div>

          {/* Bottom Section - Final Step */}
          <div className="flex justify-center">
            <div className="max-w-md">
              <Card className="bg-black/50 border border-orange-500 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">{processSteps[3].title}</h3>
                  <p className="text-orange-400 text-sm font-semibold mb-4 tracking-wide">
                    {processSteps[3].subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {processSteps[3].description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {processSteps[3].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold px-8 py-3 hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                    Start Your Journey
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="flex justify-center space-x-8">
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3"
            >
              Learn More About Our Process →
            </Button>
            <Button 
              className="bg-orange-500 text-black px-8 py-3 hover:bg-orange-600"
            >
              Contact Our Experts ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedProcessSection;
