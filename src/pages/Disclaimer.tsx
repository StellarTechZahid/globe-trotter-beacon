
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Disclaimer | Abroad Academics</title>
        <meta name="description" content="Disclaimer for Abroad Academics" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8">Disclaimer</h1>
            <div className="text-gray-300 space-y-6">
              <p>Last updated: December 2024</p>
              <h2 className="text-2xl font-bold text-white">1. General Information</h2>
              <p>The information on this website is provided on an "as is" basis.</p>
              <h2 className="text-2xl font-bold text-white">2. No Warranties</h2>
              <p>We make no warranties or representations about the accuracy or completeness of this website's content.</p>
              <h2 className="text-2xl font-bold text-white">3. Limitation of Liability</h2>
              <p>Abroad Academics will not be liable for any damages arising from the use of this website.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
