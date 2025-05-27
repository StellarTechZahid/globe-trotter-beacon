
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, GraduationCap, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Scholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarshipTypes = [
    {
      icon: Award,
      title: "Fully Funded Scholarships",
      description: "Complete financial coverage including tuition, living expenses, travel costs, and health insurance",
      amount: "Up to $200,000",
      link: "/scholarship/fully-funded",
      features: ["100% Tuition Coverage", "Monthly Stipend", "Health Insurance", "Travel Allowance", "Research Funding"]
    },
    {
      icon: DollarSign,
      title: "Partially Funded Scholarships",
      description: "Partial financial assistance covering significant portions of tuition or living expenses",
      amount: "Up to $100,000",
      link: "/scholarship/partially-funded",
      features: ["50-80% Tuition Coverage", "Merit-Based Awards", "Need-Based Support", "Academic Excellence", "Leadership Programs"]
    },
    {
      icon: Globe,
      title: "European Scholarships",
      description: "Exclusive opportunities in European universities including Erasmus+ and government scholarships",
      amount: "Up to €150,000",
      link: "/scholarship/european-countries",
      features: ["Erasmus+ Programs", "Government Scholarships", "University Grants", "Research Fellowships", "Cultural Exchange"]
    },
    {
      icon: Users,
      title: "Regional Scholarships",
      description: "Targeted funding for Central Asian, North American, and other regional scholarship programs",
      amount: "Varies by Region",
      link: "/scholarship/central-asian-countries",
      features: ["Regional Partnerships", "Cultural Scholarships", "Bilateral Programs", "Development Grants", "Exchange Programs"]
    }
  ];

  const stats = [
    { number: "2,500+", label: "Scholarships Awarded", description: "Successfully secured for our students" },
    { number: "$150M+", label: "Total Funding", description: "Secured in scholarship amounts" },
    { number: "98%", label: "Application Success", description: "For qualified applicants" },
    { number: "280+", label: "Partner Universities", description: "Offering exclusive scholarships" }
  ];

  const successStories = [
    {
      name: "Ahmed Hassan",
      scholarship: "Gates Cambridge Scholarship",
      amount: "$180,000",
      university: "University of Cambridge",
      program: "PhD Computer Science",
      story: "With Abroad Academics' guidance, I secured one of the most prestigious scholarships in the world."
    },
    {
      name: "Maria Rodriguez",
      scholarship: "Fulbright Scholarship",
      amount: "$120,000",
      university: "Harvard University",
      program: "Master's in Public Policy",
      story: "The team helped me craft a compelling application that stood out among thousands of applicants."
    },
    {
      name: "David Chen",
      scholarship: "Chevening Scholarship",
      amount: "$95,000",
      university: "Oxford University",
      program: "Master's in International Relations",
      story: "From essay writing to interview preparation, the support was comprehensive and exceptional."
    }
  ];

  const benefits = [
    "Personalized scholarship matching based on your profile",
    "Expert application essay review and optimization",
    "One-on-one interview preparation and coaching",
    "Document verification and professional formatting",
    "Deadline management and submission tracking",
    "Post-award guidance and enrollment support",
    "Scholarship renewal assistance for multi-year awards",
    "Alternative funding options if primary applications are unsuccessful"
  ];

  const eligibilityCriteria = [
    {
      title: "Academic Excellence",
      description: "Strong academic record with minimum GPA requirements",
      icon: GraduationCap
    },
    {
      title: "Leadership Experience",
      description: "Demonstrated leadership in academics, community, or professional settings",
      icon: Users
    },
    {
      title: "Research Potential",
      description: "Clear research interests and potential for contribution to the field",
      icon: BookOpen
    },
    {
      title: "Language Proficiency",
      description: "Required English proficiency test scores (IELTS/TOEFL)",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Scholarships</h1>
            <p className="text-xl mb-8">Unlock prestigious funding opportunities for your international education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Scholarship Opportunities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore comprehensive scholarship options tailored to your academic goals and financial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipTypes.map((scholarship, index) => {
              const IconComponent = scholarship.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-8 border border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{scholarship.title}</h3>
                      <p className="text-gray-300 mb-4">{scholarship.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-orange-500 font-bold text-lg">{scholarship.amount}</span>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {scholarship.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to={scholarship.link}>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-black w-full">
                          Learn More & Apply →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300">Students who achieved their dreams with our scholarship guidance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-black rounded-lg p-6 border border-orange-500">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{story.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{story.name}</h3>
                  <p className="text-orange-500 font-semibold">{story.scholarship}</p>
                  <p className="text-gray-400">{story.university}</p>
                  <p className="text-gray-400 text-sm">{story.program}</p>
                </div>

                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-orange-500">{story.amount}</span>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 italic text-center">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">How We Help You Secure Scholarships</h2>
              <p className="text-xl text-gray-300">
                Our comprehensive approach maximizes your chances of receiving prestigious funding
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Eligibility Criteria</h2>
            <p className="text-xl text-gray-300">General requirements for most scholarship programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityCriteria.map((criteria, index) => {
              const IconComponent = criteria.icon;
              return (
                <div key={index} className="bg-black rounded-lg p-6 border border-orange-500 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{criteria.title}</h3>
                  <p className="text-gray-300">{criteria.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Scholarship Process</h2>
            <p className="text-xl text-gray-300">Step-by-step guidance to scholarship success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Profile Assessment", desc: "Comprehensive evaluation of your academic profile and scholarship eligibility" },
              { step: "2", title: "Opportunity Matching", desc: "Identify and match you with suitable scholarship opportunities worldwide" },
              { step: "3", title: "Application Preparation", desc: "Expert assistance with essays, documents, and application requirements" },
              { step: "4", title: "Submission & Follow-up", desc: "Professional submission and ongoing support throughout the selection process" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Let our scholarship experts help you find and secure the perfect funding for your education abroad
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Consultation Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scholarship;
