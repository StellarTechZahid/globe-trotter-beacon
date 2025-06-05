
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NorthAmericaScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    { name: "Fulbright Scholarship", country: "USA", amount: "Full Coverage", url: "/scholarships/fulbright-scholarship" },
    { name: "Canada Graduate Scholarship", country: "Canada", amount: "$35,000", url: "/scholarships/canada-graduate-scholarship" },
    { name: "Harvard University Scholarship", country: "USA", amount: "Full Coverage", url: "/scholarships/harvard-scholarship" },
    { name: "Stanford University Scholarship", country: "USA", amount: "Full Coverage", url: "/scholarships/stanford-scholarship" }
  ];

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>North America Scholarships | Study in USA & Canada</title>
        <meta name="description" content="Explore scholarships for studying in North America - USA and Canada. Find fully funded and partial scholarships." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">North America Scholarships</h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Discover scholarship opportunities in the United States and Canada
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

export default NorthAmericaScholarship;
