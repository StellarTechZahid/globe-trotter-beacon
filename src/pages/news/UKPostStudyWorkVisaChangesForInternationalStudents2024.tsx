
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UKPostStudyWorkVisaChangesForInternationalStudents2024 = () => {
  const keyChanges = [
    {
      change: "Graduate Route Duration Extended",
      description: "PhD graduates now get 3 years instead of 2 years post-study work rights",
      impact: "Positive",
      effectiveDate: "January 2024"
    },
    {
      change: "Minimum Salary Threshold Increased",
      description: "Skilled Worker visa threshold raised from £26,200 to £38,700",
      impact: "Challenging",
      effectiveDate: "April 2024"
    },
    {
      change: "Health and Care Worker Exemption",
      description: "Healthcare workers exempt from increased salary thresholds",
      impact: "Positive", 
      effectiveDate: "March 2024"
    },
    {
      change: "Shortage Occupation List Updated",
      description: "New roles added including teachers, engineers, and IT specialists",
      impact: "Positive",
      effectiveDate: "February 2024"
    }
  ];

  const graduateRouteDetails = [
    {
      qualification: "Bachelor's Degree",
      duration: "2 years",
      requirements: "Completed degree at UK university",
      workRights: "Any job at any skill level"
    },
    {
      qualification: "Master's Degree",
      duration: "2 years", 
      requirements: "Completed postgraduate degree",
      workRights: "Any job at any skill level"
    },
    {
      qualification: "PhD/Doctorate",
      duration: "3 years",
      requirements: "Completed doctoral research",
      workRights: "Any job at any skill level"
    }
  ];

  const pathwayOptions = [
    {
      pathway: "Skilled Worker Visa",
      requirements: "Job offer with approved sponsor, minimum salary £38,700",
      duration: "Up to 5 years",
      leadsToPR: "Yes (after 5 years)"
    },
    {
      pathway: "Global Talent Visa",
      requirements: "Exceptional talent in academia, research, arts, or digital technology",
      duration: "5 years",
      leadsToPR: "Yes (after 3-5 years)"
    },
    {
      pathway: "Start-up/Innovator Visa",
      requirements: "Innovative business idea endorsed by approved body",
      duration: "2-3 years",
      leadsToPR: "Yes (Innovator only)"
    },
    {
      pathway: "Graduate Entrepreneur",
      requirements: "University endorsement for business venture",
      duration: "2 years",
      leadsToPR: "No (can switch to other routes)"
    }
  ];

  const topEmployingSectors = [
    { sector: "Technology & IT", growth: "+15%", avgSalary: "£45,000-65,000" },
    { sector: "Healthcare", growth: "+12%", avgSalary: "£35,000-55,000" },
    { sector: "Finance & Banking", growth: "+8%", avgSalary: "£50,000-80,000" },
    { sector: "Engineering", growth: "+10%", avgSalary: "£40,000-60,000" },
    { sector: "Education", growth: "+6%", avgSalary: "£30,000-45,000" },
    { sector: "Consulting", growth: "+9%", avgSalary: "£45,000-70,000" }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>UK Post-Study Work Visa Changes for International Students 2024 | Latest Updates</title>
        <meta name="description" content="Latest UK post-study work visa changes 2024. Graduate Route updates, new salary thresholds, and pathways to permanent residency for international students in the UK." />
        <meta name="keywords" content="UK graduate route 2024, post study work visa UK, UK immigration changes, international students UK, UK skilled worker visa, UK work permit, graduate visa UK" />
        <link rel="canonical" href="https://yourdomain.com/news/uk-post-study-work-visa-changes-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UK Post-Study Work Visa Changes for International Students 2024</h1>
            <p className="text-xl mb-6">Breaking news and comprehensive analysis of the latest UK immigration updates</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get UK Visa Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Breaking News Summary */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-500 text-white p-4 rounded-lg mb-8">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6" />
                <span className="font-bold">BREAKING NEWS</span>
                <Clock className="h-5 w-5" />
                <span>Updated: March 15, 2024</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-red-500 mb-6">Major UK Immigration Changes in 2024</h2>
            <p className="text-lg text-gray-300 mb-8">
              The UK government has announced significant changes to post-study work visa regulations affecting 
              international students. While some changes present challenges, others offer new opportunities. 
              PhD graduates receive extended work rights, while salary thresholds for permanent residency pathways 
              have increased substantially. These changes reshape the landscape for international students planning 
              to work in the UK after graduation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-black rounded-lg border border-red-500">
                <div className="text-3xl font-bold text-red-500 mb-2">685,000</div>
                <p className="text-white font-semibold">Student Visas Issued 2023</p>
                <p className="text-gray-400 text-sm">Record high numbers</p>
              </div>
              <div className="text-center p-6 bg-black rounded-lg border border-green-500">
                <div className="text-3xl font-bold text-green-500 mb-2">3 Years</div>
                <p className="text-white font-semibold">PhD Graduate Route</p>
                <p className="text-gray-400 text-sm">Extended from 2 years</p>
              </div>
              <div className="text-center p-6 bg-black rounded-lg border border-orange-500">
                <div className="text-3xl font-bold text-orange-500 mb-2">£38,700</div>
                <p className="text-white font-semibold">New Salary Threshold</p>
                <p className="text-gray-400 text-sm">For Skilled Worker visa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Changes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Key Changes in 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {keyChanges.map((change, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{change.change}</h3>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        change.impact === 'Positive' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {change.impact}
                      </span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                        {change.effectiveDate}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{change.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Route Details */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Updated Graduate Route Visa Details</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {graduateRouteDetails.map((route, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{route.qualification}</h3>
                  <div className="text-3xl font-bold text-red-500 mb-4">{route.duration}</div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400 text-sm">Requirements:</span>
                      <p className="text-white">{route.requirements}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Work Rights:</span>
                      <p className="text-green-400">{route.workRights}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 bg-blue-500 bg-opacity-10 border-blue-500">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Important Notes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Graduate Route cannot be extended beyond the maximum duration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You can switch to other visa categories while on Graduate Route</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">No minimum salary requirement for Graduate Route visa</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pathways to Permanent Residency */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Pathways to UK Permanent Residency</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {pathwayOptions.map((pathway, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{pathway.pathway}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-orange-500 font-semibold">Requirements: </span>
                      <span className="text-gray-300">{pathway.requirements}</span>
                    </div>
                    <div>
                      <span className="text-orange-500 font-semibold">Duration: </span>
                      <span className="text-white">{pathway.duration}</span>
                    </div>
                    <div>
                      <span className="text-orange-500 font-semibold">Leads to PR: </span>
                      <span className={pathway.leadsToPR.includes('Yes') ? 'text-green-400' : 'text-red-400'}>
                        {pathway.leadsToPR}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Market Analysis */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">UK Employment Market for International Graduates</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Top Employing Sectors 2024</h3>
              <div className="space-y-4">
                {topEmployingSectors.map((sector, index) => (
                  <Card key={index} className="bg-black border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-semibold">{sector.sector}</h4>
                          <p className="text-gray-400 text-sm">{sector.avgSalary}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-green-400 font-bold">{sector.growth}</div>
                          <p className="text-gray-400 text-xs">Job growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Market Insights</h3>
              <Card className="bg-black border-red-500">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                      <div>
                        <h4 className="text-white font-semibold">Strong Demand</h4>
                        <p className="text-gray-300 text-sm">Tech and healthcare sectors show highest demand</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-6 w-6 text-orange-500" />
                      <div>
                        <h4 className="text-white font-semibold">Salary Growth</h4>
                        <p className="text-gray-300 text-sm">Average 8% increase in graduate starting salaries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-6 w-6 text-blue-500" />
                      <div>
                        <h4 className="text-white font-semibold">Remote Work</h4>
                        <p className="text-gray-300 text-sm">65% of employers offer hybrid/remote options</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6 bg-blue-500 bg-opacity-10 border-blue-500">
                <CardContent className="p-6">
                  <h4 className="text-blue-500 font-semibold mb-3">Key Statistics:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 78% of international graduates find employment within 6 months</li>
                    <li>• Average starting salary: £28,000-35,000</li>
                    <li>• London offers highest salaries but also highest living costs</li>
                    <li>• Manchester, Edinburgh, and Birmingham emerging as key hubs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Action Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">What International Students Should Do Now</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Stay updated on immigration rule changes through official UK government sources",
                "Plan career progression to meet new salary thresholds for Skilled Worker visa",
                "Explore sectors with lower salary thresholds or exemptions (healthcare, teaching)",
                "Consider pursuing PhD studies for extended 3-year Graduate Route benefits",
                "Build UK work experience during studies through internships and part-time work",
                "Network with employers and alumni in your target industry",
                "Develop skills in high-demand sectors like technology and healthcare",
                "Seek professional immigration advice for complex cases"
              ].map((action, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-white">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Navigating UK Immigration Changes?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance on the latest UK visa changes and plan your post-study career path
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get UK Immigration Advice
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UKPostStudyWorkVisaChangesForInternationalStudents2024;
