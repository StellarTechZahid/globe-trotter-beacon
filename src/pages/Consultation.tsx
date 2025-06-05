
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';
import { Helmet } from 'react-helmet-async';

const Consultation = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Free Consultation | Abroad Academics</title>
        <meta name="description" content="Book your free consultation with our expert education counselors." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Free Consultation</h1>
            <p className="text-xl text-gray-300 mb-12">
              Get personalized guidance from our expert counselors
            </p>
            <ConsultationForm />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;
