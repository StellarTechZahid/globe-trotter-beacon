
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, BookOpen, ArrowRight } from 'lucide-react';

const EducationEvents = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const educationEvents = [
    {
      id: 1,
      title: "IELTS Preparation Workshop",
      date: "Every Saturday",
      location: "Abroad Academics Office, Lahore",
      time: "2:00 PM - 4:00 PM",
      type: "Weekly Workshop",
      description: "Comprehensive IELTS preparation workshop covering all four modules with expert instructors."
    },
    {
      id: 2,
      title: "University Application Masterclass",
      date: "March 25, 2024",
      location: "Virtual Event",
      time: "7:00 PM - 9:00 PM",
      type: "Masterclass",
      description: "Learn the secrets of successful university applications from our expert counselors."
    },
    {
      id: 3,
      title: "Scholarship Application Workshop",
      date: "April 5, 2024",
      location: "Lahore, Karachi, Islamabad",
      time: "10:00 AM - 12:00 PM",
      type: "Workshop",
      description: "Step-by-step guidance on applying for international scholarships and funding opportunities."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Education Events</h1>
            <p className="text-xl mb-6">Workshops, seminars, and training sessions for international education</p>
            <p className="text-lg opacity-90">Expert-led events to enhance your study abroad journey</p>
          </div>
        </div>
      </section>

      {/* Events Grid with Orange Branding */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Upcoming Education Events</h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            {educationEvents.map((event) => (
              <Card key={event.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                        {event.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                    </div>
                    
                    <div>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={scrollToConsultation}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                      >
                        Register Now
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

export default EducationEvents;
