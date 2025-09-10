import React from 'react';
import ConsultationForm from './ConsultationForm';

const ConsultationFormWrapper = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" id="consultation-form">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Register for Free Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your international education journey. Our expert counselors 
            will provide personalized guidance tailored to your academic goals and career aspirations.
          </p>
        </div>

        <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-500/30 shadow-2xl">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default ConsultationFormWrapper;