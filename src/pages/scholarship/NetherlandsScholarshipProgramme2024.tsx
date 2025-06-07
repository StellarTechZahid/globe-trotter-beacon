
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NetherlandsScholarshipProgramme2024 = () => {
  const scholarshipBenefits = [
    {
      title: "Tuition Fee Coverage",
      description: "Full or partial tuition fee waiver depending on the programme",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Monthly Living Allowance",
      description: "€1,000-1,500 per month for living expenses in the Netherlands",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Visa Support",
      description: "Assistance with residence permit and visa application process",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Integration Support",
      description: "Dutch language courses and cultural integration programmes",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const eligibleCountries = [
    "Bangladesh", "Brazil", "China", "Colombia", "Egypt", "Ethiopia", "Ghana", "India",
    "Indonesia", "Iran", "Jordan", "Kenya", "Mexico", "Morocco", "Nigeria", "Pakistan",
    "Philippines", "South Africa", "Sri Lanka", "Thailand", "Turkey", "Uganda", "Vietnam"
  ];

  const participatingUniversities = [
    {
      name: "University of Amsterdam",
      programs: "Social Sciences, Economics, Medicine, Law",
      ranking: "QS World Ranking #55"
    },
    {
      name: "Delft University of Technology",
      programs: "Engineering, Technology, Applied Sciences",
      ranking: "QS World Ranking #47"
    },
    {
      name: "Utrecht University",
      programs: "Life Sciences, Medicine, Social Sciences",
      ranking: "QS World Ranking #105"
    },
    {
      name: "Leiden University",
      programs: "Law, Medicine, Humanities, Social Sciences",
      ranking: "QS World Ranking #114"
    },
    {
      name: "Erasmus University Rotterdam",
      programs: "Business, Economics, Medicine, Social Sciences",
      ranking: "QS World Ranking #183"
    },
    {
      name: "University of Groningen",
      programs: "Natural Sciences, Medicine, Economics",
      ranking: "QS World Ranking #139"
    }
  ];

  const applicationRequirements = [
    "Bachelor's degree (for Master's) or Master's degree (for PhD) with excellent grades",
    "Citizenship of one of the eligible countries (Non-EU/EEA)",
    "Admission to a participating Dutch university programme",
    "English proficiency certificate (IELTS 6.5+ or TOEFL 90+)",
    "Strong academic background and research potential",
    "Motivation letter explaining study goals and career plans",
    "Two letters of recommendation from academic supervisors"
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "University Application",
      description: "Apply for admission to eligible programmes at participating universities",
      deadline: "December 2024 - February 2025"
    },
    {
      step: "2",
      title: "Scholarship Application",
      description: "Submit scholarship application through university portal",
      deadline: "February - April 2025"
    },
    {
      step: "3",
      title: "Selection Process",
      description: "Universities conduct selection based on academic merit and potential",
      deadline: "April - May 2025"
    },
    {
      step: "4",
      title: "Results Notification",
      description: "Scholarship recipients notified and preparation for arrival",
      deadline: "June - July 2025"
    }
  ];

  const studyFields = [
    "Agriculture and Natural Resources", "Applied Sciences", "Behavioural and Social Sciences",
    "Economics and Business", "Engineering and Technology", "Health and Life Sciences",
    "Humanities", "Law", "Natural Sciences and Mathematics", "Education and Teacher Training"
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Netherlands Scholarship Programme 2024 | Nuffic NFP Funding for Developing Countries</title>
        <meta name="description" content="Apply for Netherlands Scholarship Programme 2024. €1,500/month living allowance, full tuition coverage for students from developing countries. Study at top Dutch universities." />
        <meta name="keywords" content="Netherlands Scholarship Programme 2024, NFP Netherlands, Nuffic scholarships, study in Netherlands, Dutch government scholarship, developing countries scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/netherlands-scholarship-programme-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Netherlands Scholarship Programme 2024</h1>
            <p className="text-xl mb-6">Nuffic NFP - Empowering Talent from Developing Countries</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Netherlands Scholarship Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">About Netherlands Scholarship Programme</h2>
            <p className="text-lg text-gray-300 mb-8">
              The Netherlands Scholarship Programme (NFP) is a government-funded programme that provides scholarships 
              for professionals from developing countries to pursue higher education in the Netherlands. Administered 
              by Nuffic, the NFP aims to contribute to sustainable development by building human capital and institutional 
              capacity in partner countries.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">300+ Scholarships</h3>
                <p className="text-gray-400 text-sm">Annual awards available</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">23 Countries</h3>
                <p className="text-gray-400 text-sm">Eligible developing nations</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">50+ Universities</h3>
                <p className="text-gray-400 text-sm">Participating institutions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">€45,000</h3>
                <p className="text-gray-400 text-sm">Average total scholarship value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Netherlands Scholarship Benefits</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipBenefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Universities */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top Participating Dutch Universities</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {participatingUniversities.map((university, index) => (
              <Card key={index} className="bg-black border-orange-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{university.name}</h3>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {university.ranking}
                    </span>
                  </div>
                  <p className="text-gray-300">{university.programs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Countries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Eligible Countries 2024</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-red-500">
              <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-3">
                {eligibleCountries.map((country, index) => (
                  <div key={index} className="bg-black p-3 rounded text-center">
                    <span className="text-white text-sm">{country}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-center">
                <strong>Note:</strong> Only citizens of these developing countries are eligible for NFP scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Fields */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Available Study Fields</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {studyFields.map((field, index) => (
                <div key={index} className="flex items-center bg-black p-4 rounded-lg border border-orange-500">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-white">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Application Requirements 2024</h2>
            <Card className="bg-gray-900 border-red-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {applicationRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Application Process Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="bg-black p-6 rounded-lg border border-orange-500 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.deadline}
                      </span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Netherlands Scholarship Programme?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure your scholarship and study at world-class Dutch universities
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Netherlands Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetherlandsScholarshipProgramme2024;
