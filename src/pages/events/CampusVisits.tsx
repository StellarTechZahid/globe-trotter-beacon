
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Plane, Video, ArrowRight } from 'lucide-react';

const CampusVisits = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const campusVisits = [
    {
      id: 1,
      title: "Virtual Campus Tour - University of Toronto",
      date: "April 10, 2024",
      location: "Online Platform",
      time: "8:00 PM PKT",
      type: "Virtual",
      university: "University of Toronto, Canada",
      description: "Live virtual campus tour with current students and admissions officers. Explore facilities, dormitories, and academic buildings."
    },
    {
      id: 2,
      title: "Physical Campus Visit - Australian Universities",
      date: "June 15-25, 2024",
      location: "Melbourne, Sydney, Brisbane",
      time: "10 Days Program",
      type: "Physical",
      university: "Multiple Australian Universities",
      description: "Organized group visit to top Australian universities with guided tours, meetings with faculty, and cultural immersion."
    },
    {
      id: 3,
      title: "UK Universities Virtual Open Day",
      date: "May 20, 2024",
      location: "Online Event",
      time: "6:00 PM PKT",
      type: "Virtual",
      university: "Russell Group Universities",
      description: "Virtual open day featuring multiple UK universities with live Q&A sessions and program presentations."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Campus Visits</h1>
            <p className="text-xl mb-6">Explore university campuses virtually and physically</p>
            <p className="text-lg opacity-90">Get firsthand experience of campus life and facilities</p>
          </div>
        </div>
      </section>

      {/* Campus Visits Grid with Orange Branding */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Upcoming Campus Visits</h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            {campusVisits.map((visit) => (
              <Card key={visit.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                          visit.type === 'Virtual' 
                            ? 'bg-orange-500 text-black' 
                            : 'bg-orange-500 text-black'
                        }`}>
                          {visit.type}
                        </span>
                        {visit.type === 'Virtual' ? (
                          <Video className="h-5 w-5 text-orange-500" />
                        ) : (
                          <Plane className="h-5 w-5 text-orange-500" />
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{visit.title}</h3>
                      <p className="text-gray-300 mb-4">{visit.description}</p>
                      <p className="text-orange-500 font-semibold">{visit.university}</p>
                    </div>
                    
                    <div>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{visit.date}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{visit.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-5 w-5 mr-3 text-orange-500" />
                          <span>{visit.time}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={scrollToConsultation}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                      >
                        Join Campus Visit
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

export default CampusVisits;
