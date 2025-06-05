
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FullyFunded = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Fully Funded Scholarships | Complete Financial Coverage</title>
        <meta name="description" content="Explore fully funded scholarships covering 100% tuition, living expenses, and more for international students." />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fully Funded Scholarships</h1>
            <p className="text-xl mb-6">100% Financial Coverage for Your International Education</p>
            <Link to="/scholarship/fully-funded-scholarships-for-international-students-2024">
              <Button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold">
                View Complete Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-500 mb-8">Comprehensive Scholarship Information</h2>
          <p className="text-xl text-gray-300 mb-8">
            Access our detailed guide covering all aspects of fully funded scholarships for international students
          </p>
          <Link to="/scholarship/fully-funded-scholarships-for-international-students-2024">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg">
              Access Complete Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullyFunded;
