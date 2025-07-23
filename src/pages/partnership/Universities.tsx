
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Universities = () => {
  const partnerUniversities = [
    {
      name: "University of Oxford",
      country: "United Kingdom",
      ranking: "#2 Global",
      students: "24,000+",
      programs: "100+",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
      description: "One of the world's oldest and most prestigious universities"
    },
    {
      name: "Harvard University",
      country: "United States",
      ranking: "#1 Global",
      students: "23,000+",
      programs: "150+",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      description: "Leading Ivy League institution with global recognition"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      ranking: "#18 Global",
      students: "97,000+",
      programs: "200+",
      image: "https://images.unsplash.com/photo-1544492450-e1b8eba6dfa6?w=400&h=300&fit=crop",
      description: "Canada's top research university with diverse programs"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      ranking: "#33 Global",
      students: "48,000+",
      programs: "180+",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      description: "Australia's leading university with excellent research facilities"
    },
    {
      name: "Technical University of Munich",
      country: "Germany",
      ranking: "#50 Global",
      students: "45,000+",
      programs: "165+",
      image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&h=300&fit=crop",
      description: "Premier technical university with strong industry connections"
    },
    {
      name: "University of Amsterdam",
      country: "Netherlands",
      ranking: "#58 Global",
      students: "42,000+",
      programs: "200+",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Historic university with innovative research programs"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Partner Universities | Abroad Academics</title>
        <meta name="description" content="Explore our network of prestigious partner universities worldwide offering quality education and research opportunities." />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Partner Universities</h1>
            <p className="text-xl mb-6">Our network of prestigious academic institutions worldwide</p>
            <p className="text-lg opacity-90">Connecting students with world-class education opportunities</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">World-Class Academic Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've established partnerships with top-ranked universities across the globe to provide our students 
              with access to exceptional educational opportunities and research facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partnerUniversities.map((university, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {university.ranking}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{university.name}</h3>
                  <div className="flex items-center text-orange-400 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{university.country}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{university.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{university.students}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{university.programs}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToConsultation}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gray-900 rounded-lg p-8 border border-orange-500">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our partnerships ensure you receive personalized guidance and support throughout your application process. 
              Let our expert counselors help you choose the perfect university for your academic goals.
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3"
            >
              Get Expert Guidance
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
