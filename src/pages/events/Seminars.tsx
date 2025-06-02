
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, Mic, ArrowRight } from 'lucide-react';

const Seminars = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const seminars = [
    {
      id: 1,
      title: "Study in Canada: Opportunities and Pathways",
      date: "March 30, 2024",
      location: "Pearl Continental Hotel, Lahore",
      time: "6:00 PM - 8:00 PM",
      speaker: "Canadian Education Specialist",
      attendees: "200+ Expected",
      description: "Comprehensive seminar on Canadian education system, immigration policies, and career opportunities."
    },
    {
      id: 2,
      title: "UK University Applications: Post-Brexit Updates",
      date: "April 15, 2024",
      location: "Marriott Hotel, Karachi",
      time: "5:00 PM - 7:00 PM",
      speaker: "UK Education Consultant",
      attendees: "150+ Expected",
      description: "Latest updates on UK university applications, visa processes, and scholarship opportunities."
    },
    {
      id: 3,
      title: "US Universities: STEM Programs and OPT Benefits",
      date: "May 8, 2024",
      location: "Serena Hotel, Islamabad",
      time: "4:00 PM - 6:00 PM",
      speaker: "US Education Expert",
      attendees: "180+ Expected",
      description: "Focus on STEM programs in US universities and Optional Practical Training benefits for international students."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section with Orange Branding */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Educational Seminars</h1>
            <p className="text-xl mb-6">Expert insights and guidance from international education specialists</p>
            <p className="text-lg opacity-90">Attend seminars led by university representatives and education experts</p>
          </div>
        </div>
      </section>

      {/* Seminars Grid with Orange Branding */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Upcoming Seminars</h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            {seminars.map((seminar) => (
              <Card key={seminar.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{seminar.title}</h3>
                      <p className="text-gray-300 mb-6">{seminar.description}</p>
                      
                      <div className="flex items-center text-gray-300 mb-4">
                        <Mic className="h-5 w-5 mr-3 text-orange-500" />
                        <span>Speaker: {seminar.speaker}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="h-5 w-5 mr-3 text-orange-500" />
                        <span>{seminar.attendees}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{seminar.date}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{seminar.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{seminar.time}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={scrollToConsultation}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                      >
                        Reserve Your Seat
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

export default Seminars;
