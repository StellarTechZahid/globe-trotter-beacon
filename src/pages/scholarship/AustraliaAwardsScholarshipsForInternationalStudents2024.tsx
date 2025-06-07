
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AustraliaAwardsScholarshipsForInternationalStudents2024 = () => {
  const eligibleCountries = [
    "Bangladesh", "Bhutan", "Cambodia", "China", "Cook Islands", "Fiji", "India", "Indonesia",
    "Kiribati", "Laos", "Malaysia", "Maldives", "Marshall Islands", "Micronesia", "Mongolia",
    "Myanmar", "Nauru", "Nepal", "Niue", "Pakistan", "Palau", "Papua New Guinea", "Philippines",
    "Samoa", "Solomon Islands", "Sri Lanka", "Thailand", "Timor-Leste", "Tonga", "Tuvalu",
    "Vanuatu", "Vietnam"
  ];

  const studyAreas = [
    {
      category: "Agriculture & Food Security",
      fields: ["Agricultural Science", "Food Technology", "Rural Development", "Sustainable Agriculture"]
    },
    {
      category: "Education",
      fields: ["Educational Leadership", "Curriculum Development", "Teacher Training", "Higher Education"]
    },
    {
      category: "Health",
      fields: ["Public Health", "Medical Research", "Health Systems", "Nursing", "Pharmacy"]
    },
    {
      category: "Infrastructure & Trade",
      fields: ["Engineering", "Urban Planning", "Transport", "Information Technology", "Economics"]
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Australia Awards Scholarships for International Students 2024 | Complete Application Guide</title>
        <meta name="description" content="Comprehensive guide to Australia Awards Scholarships 2024 for international students from developing countries. Learn about eligibility, benefits, application process and deadlines." />
        <meta name="keywords" content="Australia Awards scholarship 2024, study in Australia, international scholarships Australia, developing countries scholarships, Australian government funding, postgraduate scholarships Australia" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/australia-awards-scholarships-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia Awards Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">Transforming lives through quality Australian education and development leadership</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Australia Awards Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500 mb-6">About Australia Awards Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              Australia Awards Scholarships are prestigious international scholarships offered by the Australian Government 
              to citizens of participating developing countries. These scholarships provide opportunities for people from 
              developing countries to undertake full-time undergraduate or postgraduate study at participating Australian 
              universities and Technical and Further Education (TAFE) institutions.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Up to AUD $70,000</h3>
                <p className="text-gray-400 text-sm">Total funding value</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">All Levels</h3>
                <p className="text-gray-400 text-sm">Undergraduate to PhD</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">30+ Countries</h3>
                <p className="text-gray-400 text-sm">Eligible developing nations</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Full Support</h3>
                <p className="text-gray-400 text-sm">Travel & living costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Australia Awards Benefits 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-green-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Financial Coverage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Full tuition fees for the duration of study</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Return air travel to Australia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Contribution to living expenses (AUD $2,000-3,000/month)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Overseas Student Health Cover (OSHC)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-green-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Additional Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Introductory Academic Program (IAP)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">English language training (if required)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Research support for higher degree students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Professional development opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Study Areas */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Priority Study Areas 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {studyAreas.map((area, index) => (
              <Card key={index} className="bg-black border-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{area.category}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {area.fields.map((field, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-300 text-sm">{field}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Application Process 2024</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Citizen of eligible developing country</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Meet academic merit requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Demonstrate leadership potential</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">English language proficiency (IELTS/TOEFL)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Application Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Applications open: February 1, 2024</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Application deadline: April 30, 2024</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Results announced: October 2024</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Studies commence: February 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Future with Australia Awards?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure your Australia Awards Scholarship and study at world-class Australian institutions
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Australia Awards Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AustraliaAwardsScholarshipsForInternationalStudents2024;
