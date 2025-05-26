
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Events = () => {
  const eventTypes = [
    { name: 'Education Expo', slug: 'education-expo', description: 'Meet university representatives and explore study options' },
    { name: 'Education Events', slug: 'education-events', description: 'Seminars and workshops on international education' },
    { name: 'Seminars', slug: 'seminars', description: 'Expert talks on study abroad processes and opportunities' },
    { name: 'Campus Visits', slug: 'campus-visits', description: 'Virtual and physical campus tours with our team' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Events</h1>
            <p className="text-xl">Join our educational events and exhibitions</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-orange-500 hover:border-orange-400 transition-colors">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">{event.name}</h3>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <Link
                  to={`/events/${event.slug}`}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
