
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Countries = () => {
  const countries = [
    { name: 'United Kingdom', slug: 'uk', description: 'Rich academic heritage with globally recognized degrees' },
    { name: 'United States', slug: 'usa', description: 'Home to world\'s top universities and cutting-edge research' },
    { name: 'Canada', slug: 'canada', description: 'Quality education with excellent post-study work opportunities' },
    { name: 'Australia', slug: 'australia', description: 'World-class education in a multicultural environment' },
    { name: 'Malaysia', slug: 'malaysia', description: 'Affordable quality education in Southeast Asia' },
    { name: 'UAE', slug: 'uae', description: 'Modern education hub in the Middle East' },
    { name: 'Germany', slug: 'germany', description: 'Leading in engineering and technology with affordable education' },
    { name: 'Italy', slug: 'italy', description: 'Rich cultural heritage with excellent academic programs' },
    { name: 'New Zealand', slug: 'new-zealand', description: 'Innovative education system with stunning natural beauty' }
  ];

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Study Destinations | Countries | Abroad Academics</title>
        <meta name="description" content="Explore study destinations worldwide. Find the perfect country for your international education." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 container-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Study Destinations</h1>
              <p className="text-xl">Discover world-class education opportunities across the globe</p>
            </div>
          </div>
        </section>

        <section className="py-20 full-width-container">
          <div className="container-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 hover:border-orange-400 transition-colors">
                  <div className="h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400">{country.name} Image</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{country.name}</h3>
                  <p className="text-gray-300 mb-4">{country.description}</p>
                  <Link
                    to={`/countries/${country.slug}`}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded"
                  >
                    Explore {country.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
