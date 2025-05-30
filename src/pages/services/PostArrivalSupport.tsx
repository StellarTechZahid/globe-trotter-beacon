
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Home, CreditCard, Heart, Users, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PostArrivalSupport = () => {
  const services = [
    {
      title: "Airport Pickup & Welcome",
      description: "Warm welcome and safe transportation from airport",
      icon: <MapPin className="h-8 w-8" />,
      features: ["Airport Reception", "Safe Transportation", "Welcome Package", "Initial Orientation"]
    },
    {
      title: "Accommodation Assistance",
      description: "Help finding and settling into your new home",
      icon: <Home className="h-8 w-8" />,
      features: ["Housing Search", "Lease Assistance", "Roommate Matching", "Home Setup"]
    },
    {
      title: "Banking & Financial Setup",
      description: "Opening bank accounts and financial planning",
      icon: <CreditCard className="h-8 w-8" />,
      features: ["Bank Account Opening", "Credit History Building", "Financial Planning", "Money Transfer"]
    },
    {
      title: "Healthcare Registration",
      description: "Health insurance and medical care setup",
      icon: <Heart className="h-8 w-8" />,
      features: ["Health Insurance", "Doctor Registration", "Emergency Contacts", "Medical Records"]
    }
  ];

  const supportAreas = [
    {
      title: "Academic Support",
      icon: <GraduationCap className="h-6 w-6" />,
      items: ["Course Registration", "Academic Advisor Meeting", "Library Tour", "Study Groups"]
    },
    {
      title: "Social Integration",
      icon: <Users className="h-6 w-6" />,
      items: ["Student Community", "Cultural Events", "Networking Events", "Local Meetups"]
    },
    {
      title: "Career Services",
      icon: <Briefcase className="h-6 w-6" />,
      items: ["Career Center Registration", "Resume Building", "Job Search", "Interview Prep"]
    },
    {
      title: "Emergency Support",
      icon: <Phone className="h-6 w-6" />,
      items: ["24/7 Helpline", "Emergency Contacts", "Crisis Support", "Family Communication"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Post-Arrival Support</h1>
            <p className="text-xl">Comprehensive support to help you settle into your new country</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Your First Days Made Easy</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Starting life in a new country can be overwhelming. Our comprehensive post-arrival support 
              ensures you have all the help you need to settle in comfortably and focus on your studies. 
              From the moment you land until you're fully settled, we're here for you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default PostArrivalSupport;
