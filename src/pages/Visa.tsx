
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Clock, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Visa = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Visa Assistance Services | Abroad Academics</title>
        <meta name="description" content="Expert visa assistance for international students. Get help with visa applications and documentation." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="py-20 full-width-container">
          <div className="container-full max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Visa Assistance</h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Expert guidance for your student visa application process
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                  <p className="text-gray-300">Complete assistance with visa documentation and requirements</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Fast Processing</h3>
                  <p className="text-gray-300">Quick and efficient visa application processing</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">High Success Rate</h3>
                  <p className="text-gray-300">Proven track record of successful visa applications</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16">
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3"
              >
                Get Visa Assistance
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Visa;
