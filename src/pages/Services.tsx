
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    'Career Counseling',
    'University Selection', 
    'Profile Evaluation',
    'Test Preparation',
    'Application Support',
    'Scholarship Consulting',
    'Visa Assistance',
    'Accommodation Support',
    'Pre-Departure Orientation',
    'Post-Arrival Support',
    'Job Search Guidance'
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive support throughout your study abroad journey</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-colors">
                <h3 className="text-xl font-bold text-orange-500 mb-4">{service}</h3>
                <p className="text-gray-300 mb-4">
                  Professional guidance and support for {service.toLowerCase()} to help you succeed in your study abroad journey.
                </p>
                <Link
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-orange-500 hover:text-orange-400 font-semibold"
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

export default Services;
