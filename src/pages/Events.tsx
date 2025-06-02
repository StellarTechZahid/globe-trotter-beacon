
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, ArrowRight, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const eventTypes = [
    { 
      name: 'Education Expo', 
      slug: 'education-expo', 
      description: 'Meet university representatives and explore study options at Pakistan\'s largest international education expo',
      icon: Globe,
      color: 'purple',
      stats: '200+ Universities, 15+ Countries'
    },
    { 
      name: 'Education Events', 
      slug: 'education-events', 
      description: 'Seminars and workshops on international education, IELTS preparation, and application guidance',
      icon: Users,
      color: 'blue',
      stats: 'Weekly Workshops, Expert Sessions'
    },
    { 
      name: 'Seminars', 
      slug: 'seminars', 
      description: 'Expert talks on study abroad processes, visa guidance, and country-specific opportunities',
      icon: Calendar,
      color: 'green',
      stats: 'Monthly Seminars, Industry Experts'
    },
    { 
      name: 'Campus Visits', 
      slug: 'campus-visits', 
      description: 'Virtual and physical campus tours with our team to explore university facilities and student life',
      icon: MapPin,
      color: 'red',
      stats: 'Virtual & Physical Tours'
    }
  ];

  const upcomingEvents = [
    {
      title: "Pakistan International Education Expo 2024",
      date: "March 15-17, 2024",
      location: "Lahore Expo Center",
      attendees: "5000+ Students",
      type: "Education Expo"
    },
    {
      title: "IELTS Preparation Workshop",
      date: "Every Saturday",
      location: "Multiple Cities",
      attendees: "50+ Students per session",
      type: "Workshop"
    },
    {
      title: "Study in Canada Seminar",
      date: "March 30, 2024",
      location: "Pearl Continental Hotel",
      attendees: "200+ Students",
      type: "Seminar"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Educational Events & Expos</h1>
            <p className="text-xl mb-6">Join Pakistan's premier international education events organized by Abroad Academics</p>
            <p className="text-lg opacity-90">Established 2023 - Leading study abroad consultants in Pakistan</p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Pakistan's Best Study Abroad Events - Abroad Academics 2023
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Since our founding in 2023, Abroad Academics has organized Pakistan's most comprehensive international 
              education events. As the best study abroad consultants in Pakistan and leading study abroad consultants 
              in Lahore, we bring together top universities, scholarship opportunities, and expert guidance under one roof. 
              Our education expos, seminars, and workshops have helped thousands of Pakistani students connect with 
              international universities and secure their study abroad dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Explore Our Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {eventTypes.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className={`bg-gray-900 border-${event.color}-500 hover:border-${event.color}-400 transition-all duration-300 group`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`h-8 w-8 text-${event.color}-500 mr-4`} />
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                        {event.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <div className={`text-${event.color}-500 font-semibold mb-6`}>
                      {event.stats}
                    </div>
                    
                    <Link to={`/events/${event.slug}`}>
                      <Button className={`w-full bg-${event.color}-500 hover:bg-${event.color}-600 text-white font-semibold`}>
                        Explore {event.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Upcoming Events Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-orange-500" />
                      {event.attendees}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Why Attend Abroad Academics Events?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct University Access</h3>
              <p className="text-gray-300">
                Meet representatives from 200+ top universities worldwide and get direct admission guidance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Guidance</h3>
              <p className="text-gray-300">
                Get personalized advice from Pakistan's best study abroad consultants since 2023.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scholarship Opportunities</h3>
              <p className="text-gray-300">
                Discover exclusive scholarship opportunities and funding options for Pakistani students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
