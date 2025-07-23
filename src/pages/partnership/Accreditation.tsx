
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Shield, CheckCircle, Star, Globe, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Accreditation = () => {
  const accreditations = [
    {
      title: "ICEF Agency Status",
      description: "International Consultants for Education and Fairs certified agency",
      icon: Globe,
      details: "Recognized globally for ethical practices and professional standards"
    },
    {
      title: "British Council Certified",
      description: "Official partner for UK education services",
      icon: Shield,
      details: "Authorized to provide guidance for UK university applications"
    },
    {
      title: "NAFSA Member",
      description: "Association of International Educators membership",
      icon: Users,
      details: "Connected with global education professionals and best practices"
    },
    {
      title: "AIRC Certified",
      description: "American International Recruitment Council certification",
      icon: Award,
      details: "Committed to ethical recruitment and student protection"
    }
  ];

  const memberships = [
    "International Association of Universities (IAU)",
    "European Association for International Education (EAIE)",
    "Association of International Education Administrators (AIEA)",
    "Canadian Bureau for International Education (CBIE)",
    "Australian International Education Association (AIEA)"
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Accreditation & Memberships | Abroad Academics</title>
        <meta name="description" content="Learn about our professional accreditations and memberships that ensure quality education consulting services." />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Accreditation & Memberships</h1>
            <p className="text-xl mb-6">Certified excellence in international education consulting</p>
            <p className="text-lg opacity-90">Your trust, our commitment to quality service</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Professional Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accreditations and memberships demonstrate our commitment to maintaining the highest 
              standards in international education consulting and student services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {accreditations.map((accreditation, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <accreditation.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{accreditation.title}</h3>
                      <p className="text-orange-400 mb-3 font-semibold">{accreditation.description}</p>
                      <p className="text-gray-300 text-sm">{accreditation.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gray-900 border-orange-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Star className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Quality Assurance</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Ethical recruitment practices</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Transparent fee structure</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Student protection measures</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Continuous professional development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-orange-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Professional Memberships</h3>
                </div>
                <ul className="space-y-3">
                  {memberships.map((membership, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-sm">{membership}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gray-900 rounded-lg p-8 border border-orange-500">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Students Worldwide</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our certifications ensure that you receive professional, ethical, and reliable guidance throughout 
              your study abroad journey. Trust in our expertise and commitment to your success.
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accreditation;
