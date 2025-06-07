
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, Calendar, Clock, FileText, Users, Globe, Star, Award, BookOpen, AlertTriangle, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NewZealandStudentVisaUpdates2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const keyUpdates = [
    {
      title: "Extended Post-Study Work Rights",
      date: "January 2024",
      description: "New Zealand extended post-study work visa duration to 3 years for qualifications level 7 and above from approved institutions.",
      impact: "Positive",
      details: ["3-year work visa for level 7+ qualifications", "Previously limited to 1-3 years", "Includes diplomas, bachelor's, and postgraduate degrees"]
    },
    {
      title: "Increased Financial Requirements", 
      date: "February 2024",
      description: "Student visa financial requirements increased to NZ$20,000 per year of study plus tuition fees.",
      impact: "Neutral",
      details: ["Previous requirement: NZ$15,000", "Additional NZ$1,000 per month for dependents", "Bank statements must be recent (within 3 months)"]
    },
    {
      title: "Streamlined Application Process",
      date: "March 2024",
      description: "Introduction of digital-first application process with faster processing times for most student visa applications.",
      impact: "Positive", 
      details: ["Online document submission", "Reduced processing time to 4-6 weeks", "Real-time application tracking available"]
    },
    {
      title: "Partner Work Rights Enhancement",
      date: "April 2024",
      description: "Partners of students in level 8+ qualifications can now work full-time without restrictions.",
      impact: "Positive",
      details: ["Full-time work rights for partners", "Previously limited to 20 hours", "Applies to master's and PhD students' partners"]
    }
  ];

  const visaRequirements2024 = [
    {
      category: "Academic Requirements",
      requirements: [
        "Offer of place from approved education provider",
        "Meet academic entry requirements",
        "English language proficiency (IELTS 6.0+)",
        "Academic transcripts and certificates"
      ]
    },
    {
      category: "Financial Requirements",
      requirements: [
        "NZ$20,000 per year for living costs",
        "Full tuition fees payment or guarantee",
        "Additional NZ$1,000/month for dependents",
        "Evidence of financial support"
      ]
    },
    {
      category: "Health & Character",
      requirements: [
        "Medical examination (if required)",
        "Chest X-ray for tuberculosis screening",
        "Police clearance certificate",
        "Good character declaration"
      ]
    },
    {
      category: "Immigration Requirements",
      requirements: [
        "Valid passport (6+ months validity)",
        "Genuine temporary entrant",
        "Intent to return home after studies",
        "Meet health and character requirements"
      ]
    }
  ];

  const processingTimes = [
    { type: "Student Visa (Standard)", time: "4-6 weeks", notes: "Most applications" },
    { type: "Student Visa (Priority)", time: "2-3 weeks", notes: "PhD and research students" },
    { type: "Variation of Conditions", time: "2-4 weeks", notes: "Course or institution changes" },
    { type: "Renewal Applications", time: "3-5 weeks", notes: "Continuing studies" }
  ];

  const workRights2024 = [
    {
      qualification: "Foundation/English Courses",
      workHours: "No work rights",
      duration: "N/A"
    },
    {
      qualification: "Certificate/Diploma (Level 4-6)",
      workHours: "20 hours/week",
      duration: "Study period only"
    },
    {
      qualification: "Bachelor's Degree (Level 7)",
      workHours: "20 hours/week + full-time during breaks",
      duration: "3-year post-study work visa"
    },
    {
      qualification: "Master's/Postgraduate (Level 8-9)",
      workHours: "20 hours/week + full-time during breaks",
      duration: "3-year post-study work visa"
    },
    {
      qualification: "PhD (Level 10)",
      workHours: "Unlimited",
      duration: "3-year post-study work visa"
    }
  ];

  const applicationTips = [
    {
      title: "Complete Documentation",
      description: "Ensure all documents are certified, translated, and meet NZ requirements",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Financial Evidence",
      description: "Provide clear evidence of sufficient funds for entire study period",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Early Application",
      description: "Apply at least 8-10 weeks before intended travel date",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Health Requirements",
      description: "Complete medical examinations from approved panel physicians",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>New Zealand Student Visa Updates 2024 | Latest Changes & Requirements</title>
        <meta name="description" content="Latest New Zealand student visa updates 2024 including extended work rights, increased financial requirements, and streamlined application process." />
        <meta name="keywords" content="New Zealand student visa 2024, NZ visa updates, student visa requirements New Zealand, post-study work visa NZ, New Zealand immigration news" />
        <link rel="canonical" href="https://yourdomain.com/news/new-zealand-student-visa-updates-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New Zealand Student Visa Updates 2024</h1>
            <p className="text-xl mb-6">Latest Changes and Requirements for International Students</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Visa Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Key Visa Updates for 2024</h2>
          <div className="space-y-6">
            {keyUpdates.map((update, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{update.title}</h3>
                      <div className="flex items-center mb-3">
                        <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-gray-300 text-sm">{update.date}</span>
                        <span className={`ml-4 px-2 py-1 rounded text-xs font-semibold ${
                          update.impact === 'Positive' ? 'bg-green-500 text-black' :
                          update.impact === 'Negative' ? 'bg-red-500 text-white' :
                          'bg-yellow-500 text-black'
                        }`}>
                          {update.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{update.description}</p>
                  <div className="space-y-2">
                    {update.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements 2024 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Student Visa Requirements 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {visaRequirements2024.map((category, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                  <div className="space-y-3">
                    {category.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Rights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Work Rights by Qualification Level</h2>
          <Card className="bg-gray-900 border-blue-500">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-500">
                      <th className="text-left text-white font-semibold py-3">Qualification Level</th>
                      <th className="text-left text-white font-semibold py-3">Work Hours During Study</th>
                      <th className="text-left text-white font-semibold py-3">Post-Study Work Rights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workRights2024.map((right, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="text-gray-300 py-3">{right.qualification}</td>
                        <td className="text-gray-300 py-3">{right.workHours}</td>
                        <td className="text-gray-300 py-3">{right.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Processing Times */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Current Processing Times</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processingTimes.map((time, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{time.type}</h3>
                  <p className="text-2xl font-bold text-green-500 mb-2">{time.time}</p>
                  <p className="text-gray-300 text-sm">{time.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Application Success Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationTips.map((tip, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                  <p className="text-gray-300">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="bg-yellow-900 border-yellow-500">
            <CardContent className="p-8">
              <div className="flex items-start">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-3">Important Notice</h3>
                  <p className="text-gray-300 mb-4">
                    Immigration policies and requirements can change frequently. Always check the official 
                    Immigration New Zealand website for the most current information before applying.
                  </p>
                  <p className="text-gray-300">
                    Processing times may vary based on individual circumstances, completeness of application, 
                    and current application volumes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help with Your NZ Student Visa?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance on New Zealand student visa applications and requirements
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Professional Visa Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewZealandStudentVisaUpdates2024;
