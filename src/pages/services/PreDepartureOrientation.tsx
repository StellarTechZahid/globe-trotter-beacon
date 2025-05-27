
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Plane, Book, Heart, Globe, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PreDepartureOrientation = () => {
  const orientationModules = [
    {
      title: "Cultural Adaptation",
      description: "Understanding local customs and social norms",
      icon: <Globe className="h-8 w-8" />,
      duration: "2 hours",
      topics: ["Cultural Differences", "Social Etiquette", "Communication Styles", "Academic Culture"]
    },
    {
      title: "Academic Preparation",
      description: "Academic system and expectations",
      icon: <Book className="h-8 w-8" />,
      duration: "2 hours",
      topics: ["Grading System", "Class Participation", "Research Methods", "Academic Integrity"]
    },
    {
      title: "Practical Living",
      description: "Essential life skills for independent living",
      icon: <Heart className="h-8 w-8" />,
      duration: "3 hours",
      topics: ["Banking & Finance", "Healthcare System", "Shopping & Transport", "Emergency Contacts"]
    },
    {
      title: "Travel Preparation",
      description: "Flight booking and arrival planning",
      icon: <Plane className="h-8 w-8" />,
      duration: "1 hour",
      topics: ["Airport Procedures", "Customs Declaration", "Transportation", "First Day Guide"]
    }
  ];

  const checklist = [
    "Passport and visa verification",
    "Flight booking assistance",
    "Travel insurance guidance",
    "Packing checklist and tips",
    "Currency exchange information",
    "International SIM card setup",
    "Emergency contact compilation",
    "University arrival procedures"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Pre-Departure Orientation</h1>
            <p className="text-xl">Comprehensive preparation for your study abroad journey</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Be Ready for Your New Adventure</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Starting your international education journey can be exciting yet overwhelming. Our comprehensive 
              pre-departure orientation program ensures you're fully prepared for life abroad, covering everything 
              from cultural adaptation to practical living skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {orientationModules.map((module, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{module.title}</h3>
                  <p className="text-gray-300 mb-3 text-center">{module.description}</p>
                  <div className="text-center mb-4">
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Duration: {module.duration}
                    </span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Pre-Departure Checklist</h3>
              <ul className="space-y-3">
                {checklist.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <Clock className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h4 className="text-2xl font-bold text-white mb-6">What You'll Receive</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Book className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">Comprehensive orientation handbook</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">Access to student community groups</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">Country-specific survival guide</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">24/7 emergency support contacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default PreDepartureOrientation;
