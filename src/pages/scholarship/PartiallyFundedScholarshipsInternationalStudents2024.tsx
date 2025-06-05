
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PartiallyFundedScholarshipsInternationalStudents2024 = () => {
  const scholarships = [
    {
      name: "DAAD Scholarships for Development-Related Postgraduate Courses",
      provider: "German Academic Exchange Service",
      country: "Germany",
      value: "€861 - €1,200/month",
      deadline: "March 31, 2024",
      coverage: ["Partial tuition coverage", "Monthly allowance", "Health insurance", "Travel allowance"],
      eligibility: ["Bachelor's degree", "2+ years work experience", "Development field focus"],
      link: "/scholarships/daad-scholarship"
    },
    {
      name: "Australia Awards Scholarships",
      provider: "Australian Government",
      country: "Australia", 
      value: "Up to AUD $70,000",
      deadline: "April 30, 2024",
      coverage: ["Full/partial tuition", "Living allowance", "Health coverage", "Research support"],
      eligibility: ["Academic merit", "Leadership potential", "Development focus"],
      link: "/scholarships/australia-awards-scholarship"
    },
    {
      name: "Erasmus+ Master Degree Scholarships",
      provider: "European Union",
      country: "European Union",
      value: "€24,000 - €48,000",
      deadline: "Multiple deadlines",
      coverage: ["Tuition contribution", "Monthly allowance", "Travel costs", "Installation costs"],
      eligibility: ["Bachelor's degree", "EU or partner country citizen", "Language requirements"],
      link: "/scholarships/erasmus-mundus-scholarship"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Partially Funded Scholarships for International Students 2024 | Merit-Based Awards</title>
        <meta name="description" content="Explore partially funded scholarships for international students in 2024. Merit-based and need-based financial aid covering 50-80% of education costs worldwide." />
        <meta name="keywords" content="partially funded scholarships, merit scholarships 2024, international student aid, DAAD scholarships, Australia Awards, Erasmus scholarships, study abroad funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/partially-funded-scholarships-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partially Funded Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">Merit-based financial aid to make your education dreams affordable</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Scholarship Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Content continues with scholarship listings and sections similar to fully funded page */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Understanding Partially Funded Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              Partially funded scholarships provide significant financial support, typically covering 50-80% of education costs. 
              These merit-based and need-based awards help make international education more accessible by reducing financial burden 
              while still requiring some personal investment in your future.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship listings section would continue here with similar structure */}
      
      <Footer />
    </div>
  );
};

export default PartiallyFundedScholarshipsInternationalStudents2024;
