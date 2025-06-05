
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Terms of Service | Abroad Academics</title>
        <meta name="description" content="Terms of Service for Abroad Academics" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8">Terms of Service</h1>
            <div className="text-gray-300 space-y-6">
              <p>Last updated: December 2024</p>
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              <h2 className="text-2xl font-bold text-white">2. Services</h2>
              <p>Abroad Academics provides educational consultancy services for international students.</p>
              <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
              <p>Users are responsible for providing accurate information and following our guidelines.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
