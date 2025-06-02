
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, Globe, ArrowRight } from 'lucide-react';

const EducationExpo = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const upcomingExpos = [
    {
      id: 1,
      title: "Pakistan International Education Expo 2024",
      date: "March 15-17, 2024",
      location: "Lahore Expo Center",
      time: "10:00 AM - 6:00 PM",
      attendees: "5000+ Students Expected",
      countries: "15+ Countries",
      universities: "200+ Universities",
      description: "The largest international education expo in Pakistan featuring top universities from USA, UK, Canada, Australia, and more."
    },
    {
      id: 2,
      title: "Study Abroad Fair Karachi",
      date: "April 20-21, 2024",
      location: "Karachi Convention Center",
      time: "11:00 AM - 7:00 PM",
      attendees: "3000+ Students Expected",
      countries: "12+ Countries",
      universities: "150+ Universities",
      description: "Connect with international university representatives and explore scholarship opportunities."
    },
    {
      id: 3,
      title: "Global Education Summit Islamabad",
      date: "May 10-11, 2024",
      location: "Pakistan Convention Center",
      time: "9:00 AM - 5:00 PM",
      attendees: "2500+ Students Expected",
      countries: "10+ Countries",
      universities: "120+ Universities",
      description: "Premier education summit featuring government officials, university representatives, and study abroad experts."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Education Expo</h1>
            <p className="text-xl mb-6">Meet university representatives from around the world</p>
            <p className="text-lg opacity-90">Discover opportunities, scholarships, and programs at Pakistan's largest education expos</p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-500 mb-6">
              Pakistan's Premier Education Expo - Abroad Academics
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Abroad Academics, established in 2023 as Pakistan's leading study abroad consultants, organizes the most comprehensive 
              education expos in Pakistan. Our education expos feature representatives from top universities worldwide, offering direct 
              access to admissions officers, scholarship opportunities, and expert guidance for Pakistani students.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Expos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Upcoming Education Expos</h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            {upcomingExpos.map((expo) => (
              <Card key={expo.id} className="bg-gray-900 border-purple-500 hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{expo.title}</h3>
                      <p className="text-gray-300 mb-6">{expo.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-5 w-5 mr-3 text-purple-500" />
                          <span>{expo.date}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-5 w-5 mr-3 text-purple-500" />
                          <span>{expo.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-5 w-5 mr-3 text-purple-500" />
                          <span>{expo.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="bg-black p-4 rounded-lg border border-purple-500">
                          <div className="flex items-center justify-between">
                            <Users className="h-6 w-6 text-purple-500" />
                            <span className="text-white font-semibold">{expo.attendees}</span>
                          </div>
                        </div>
                        <div className="bg-black p-4 rounded-lg border border-purple-500">
                          <div className="flex items-center justify-between">
                            <Globe className="h-6 w-6 text-purple-500" />
                            <span className="text-white font-semibold">{expo.countries}</span>
                          </div>
                        </div>
                        <div className="bg-black p-4 rounded-lg border border-purple-500">
                          <div className="flex items-center justify-between">
                            <span className="text-purple-500 font-semibold">Universities</span>
                            <span className="text-white font-semibold">{expo.universities}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={scrollToConsultation}
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3"
                      >
                        Register for Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationExpo;
