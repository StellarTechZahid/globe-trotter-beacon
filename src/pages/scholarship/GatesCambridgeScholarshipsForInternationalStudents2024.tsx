
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Star, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GatesCambridgeScholarshipsForInternationalStudents2024 = () => {
  const scholarshipCriteria = [
    {
      criterion: "Outstanding Intellectual Ability",
      description: "Demonstrated through academic achievement and potential for research excellence",
      weight: "Primary"
    },
    {
      criterion: "Leadership Potential", 
      description: "Evidence of leadership capacity and ability to inspire others",
      weight: "Essential"
    },
    {
      criterion: "Commitment to Improving Lives",
      description: "Clear vision for how your work will contribute to improving the lives of others",
      weight: "Core"
    },
    {
      criterion: "Good Fit with Cambridge",
      description: "Strong alignment between your goals and Cambridge's academic offerings",
      weight: "Important"
    }
  ];

  const statisticsData = [
    { number: "100+", label: "Annual Awards", description: "Full scholarships awarded each year" },
    { number: "95+", label: "Countries", description: "Countries outside UK eligible" },
    { number: "£60,000+", label: "Annual Value", description: "Full funding per scholar" },
    { number: "1,800+", label: "Alumni Network", description: "Global Gates Cambridge community" }
  ];

  const applicationStages = [
    {
      stage: "Stage 1",
      title: "Cambridge Application",
      description: "Apply for admission and funding through Cambridge graduate application",
      deadline: "December 2024",
      details: "Submit academic application with Gates Cambridge funding request"
    },
    {
      stage: "Stage 2", 
      title: "Automatic Consideration",
      description: "All eligible applications automatically considered for Gates Cambridge",
      deadline: "January 2025",
      details: "No separate application required - assessed on merit"
    },
    {
      stage: "Stage 3",
      title: "Shortlisting",
      description: "Most promising candidates shortlisted for interview",
      deadline: "February 2025", 
      details: "Academic references and application materials reviewed"
    },
    {
      stage: "Stage 4",
      title: "Interview Process",
      description: "Final selection through comprehensive interview",
      deadline: "March 2025",
      details: "Virtual or in-person interviews with selection committee"
    }
  ];

  const topCambridgeDepartments = [
    "Engineering", "Computer Science", "Natural Sciences", "Medicine", "Economics",
    "Education", "Politics and International Studies", "Law", "History", "English",
    "Mathematics", "Physics", "Chemistry", "Biological Sciences", "Geography"
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Gates Cambridge Scholarships for International Students 2024 | Full Cambridge Funding</title>
        <meta name="description" content="Apply for Gates Cambridge Scholarships 2024 - prestigious full funding for international graduate students at University of Cambridge. Complete guide with application process, deadlines, and selection criteria." />
        <meta name="keywords" content="Gates Cambridge scholarship 2024, Cambridge University funding, international graduate scholarship, Bill Gates foundation scholarship, study at Cambridge, PhD Masters Cambridge, UK university scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/gates-cambridge-scholarships-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gates Cambridge Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">The Most Prestigious International Scholarship at Cambridge University</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Gates Cambridge Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-500 mb-6">About Gates Cambridge Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              The Gates Cambridge Scholarship programme was established in October 2000 by a donation of 
              US$210 million from the Bill and Melinda Gates Foundation. The mission is to build a global 
              network of future leaders committed to improving the lives of others. It is one of the most 
              prestigious international scholarships in the world, offering full funding for outstanding 
              students from countries outside the UK to pursue graduate study at Cambridge.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">World's Top 1%</h3>
                <p className="text-gray-400 text-sm">Most competitive scholarship</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Outstanding Minds</h3>
                <p className="text-gray-400 text-sm">Exceptional intellectuals</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Global Impact</h3>
                <p className="text-gray-400 text-sm">Changing the world</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Elite Network</h3>
                <p className="text-gray-400 text-sm">Future world leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Gates Cambridge by Numbers 2024</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statisticsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Gates Cambridge Selection Criteria 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipCriteria.map((criteria, index) => (
              <Card key={index} className="bg-gray-900 border-purple-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{criteria.criterion}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {criteria.weight}
                    </span>
                  </div>
                  <p className="text-gray-300">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-purple-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Total Scholarship Value</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">£60,000 - £80,000</div>
              <p className="text-gray-300">Per year (varies by course length and personal circumstances)</p>
              <div className="mt-4 text-gray-300">
                <p><strong>Includes:</strong> Full university tuition, maintenance allowance, travel costs, visa fees, 
                family allowance (if applicable), academic development funding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Application Process 2024-2025</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationStages.map((stage, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{stage.stage}</span>
                  </div>
                  <div className="bg-black p-6 rounded-lg border border-purple-500 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {stage.deadline}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{stage.description}</p>
                    <p className="text-gray-400 text-sm italic">{stage.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Departments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Popular Cambridge Departments for Gates Scholars</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topCambridgeDepartments.map((department, index) => (
                  <div key={index} className="bg-black p-4 rounded border border-gray-700 hover:border-purple-500 transition-colors text-center">
                    <span className="text-white font-medium">{department}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-center">
                Gates Cambridge Scholarships are available for all graduate courses at Cambridge University.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center">Eligibility Requirements 2024</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black border-purple-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Essential Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Citizen of any country outside the UK</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Applying for full-time graduate study at Cambridge</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Outstanding academic record</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Financial need for scholarship support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-orange-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Selection Priorities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">First-class honours or equivalent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Research potential and intellectual curiosity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Leadership experience and potential</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Commitment to serving others</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Deadlines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-8">Key Deadlines 2024-2025</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-purple-500">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Early Deadline</h3>
                  <div className="text-2xl font-bold text-purple-500 mb-2">October 5, 2024</div>
                  <p className="text-gray-300 text-sm">For courses starting October 2025</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-purple-500">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Main Deadline</h3>
                  <div className="text-2xl font-bold text-purple-500 mb-2">December 5, 2024</div>
                  <p className="text-gray-300 text-sm">For courses starting October 2025</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-purple-500">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Final Results</h3>
                  <div className="text-2xl font-bold text-purple-500 mb-2">April 2025</div>
                  <p className="text-gray-300 text-sm">Scholarship decisions announced</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Gates Cambridge?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join the world's most prestigious scholarship programme and become part of a global network of future leaders
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Gates Cambridge Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GatesCambridgeScholarshipsForInternationalStudents2024;
