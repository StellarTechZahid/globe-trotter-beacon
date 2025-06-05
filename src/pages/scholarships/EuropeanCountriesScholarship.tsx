
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const EuropeanCountriesScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    { name: "Erasmus Mundus Scholarship", country: "Europe", amount: "€25,000", url: "/scholarships/erasmus-mundus-scholarship" },
    { name: "DAAD Germany Scholarship", country: "Germany", amount: "€850/month", url: "/scholarships/daad-germany-scholarship" },
    { name: "Switzerland Government Scholarship", country: "Switzerland", amount: "CHF 1,920", url: "/scholarships/swiss-government-scholarship" },
    { name: "Netherlands Scholarship", country: "Netherlands", amount: "€5,000", url: "/scholarships/netherlands-scholarship" }
  ];

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>European Scholarships | Study in Europe</title>
        <meta name="description" content="Explore scholarships for studying in European countries. Find opportunities in Germany, Netherlands, Switzerland and more." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">European Scholarships</h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Discover scholarship opportunities across European countries
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

export default EuropeanCountriesScholarship;
