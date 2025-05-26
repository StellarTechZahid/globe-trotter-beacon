
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Partnership = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Partnership</h1>
            <p className="text-xl">Our trusted academic partners worldwide</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500 text-center">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Partner Universities</h2>
              <p className="text-gray-300 mb-6">
                Explore our network of prestigious universities and institutions across the globe.
              </p>
              <Link
                to="/partnership/universities"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded"
              >
                View Universities
              </Link>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500 text-center">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Accreditation & Memberships</h2>
              <p className="text-gray-300 mb-6">
                Learn about our certifications and professional memberships that ensure quality service.
              </p>
              <Link
                to="/partnership/accreditation"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded"
              >
                View Accreditations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
