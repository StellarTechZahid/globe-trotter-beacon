
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Privacy Policy | Abroad Academics</title>
        <meta name="description" content="Privacy Policy for Abroad Academics" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <div className="text-gray-300 space-y-6">
              <p>Last updated: December 2024</p>
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when using our services.</p>
              <h2 className="text-2xl font-bold text-white">2. How We Use Information</h2>
              <p>We use the information to provide and improve our services.</p>
              <h2 className="text-2xl font-bold text-white">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
