
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AsianCountriesScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    { name: "Japan MEXT Scholarship", country: "Japan", amount: "¥143,000", url: "/scholarships/japan-mext-scholarship" },
    { name: "Australia Awards Scholarship", country: "Australia", amount: "Full Coverage", url: "/scholarships/australia-awards-scholarship" },
    { name: "Singapore Government Scholarship", country: "Singapore", amount: "Full Coverage", url: "/scholarships/singapore-government-scholarship" },
    { name: "Chinese Government Scholarship", country: "China", amount: "Full Coverage", url: "/scholarships/chinese-government-scholarship" }
  ];

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Asian Scholarships | Study in Asia Pacific</title>
        <meta name="description" content="Explore scholarships for studying in Asian countries including Japan, Australia, Singapore and China." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">Asian Scholarships</h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Discover scholarship opportunities across Asian countries
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{scholarship.name}</h3>
                    <p className="text-gray-300 mb-4">Country: {scholarship.country}</p>
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-orange-500 font-semibold">{scholarship.amount}</span>
                    </div>
                    <Link to={scholarship.url}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3"
              >
                Get Expert Guidance
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AsianCountriesScholarship;
