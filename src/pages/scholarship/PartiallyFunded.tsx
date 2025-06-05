
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PartiallyFunded = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Partially Funded Scholarships | Merit-Based Financial Aid</title>
        <meta name="description" content="Discover partially funded scholarships offering significant financial support for international students worldwide." />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partially Funded Scholarships</h1>
            <p className="text-xl mb-6">Merit-Based Financial Support for Your Education</p>
            <Link to="/scholarship/partially-funded-scholarships-international-students-2024">
              <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold">
                View Complete Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">Explore Merit-Based Scholarships</h2>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive information about partially funded scholarships and financial aid opportunities
          </p>
          <Link to="/scholarship/partially-funded-scholarships-international-students-2024">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
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

export default PartiallyFunded;
