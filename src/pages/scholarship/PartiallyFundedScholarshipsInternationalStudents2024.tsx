
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PartiallyFundedScholarshipsInternationalStudents2024 = () => {
  const featuredScholarships = [
    {
      name: "DAAD Scholarships for Development-Related Postgraduate Courses",
      provider: "German Academic Exchange Service",
      country: "Germany",
      value: "€861 - €1,200/month + partial tuition",
      deadline: "March 31, 2024",
      coverage: ["Monthly stipend", "Partial/Full tuition coverage", "Health insurance", "Travel allowance"],
      eligibility: ["Bachelor's degree", "2+ years work experience", "Development field focus"],
      link: "/scholarship/daad-scholarships-for-development-related-postgraduate-courses-2024",
      fundingPercentage: "80-100%"
    },
    {
      name: "Australia Awards Scholarships",
      provider: "Australian Government",
      country: "Australia", 
      value: "Up to AUD $70,000 annually",
      deadline: "April 30, 2024",
      coverage: ["Full/partial tuition", "Living allowance", "Health coverage", "Research support"],
      eligibility: ["Academic merit", "Leadership potential", "Development focus"],
      link: "/scholarship/australia-awards-scholarships-for-international-students-2024",
      fundingPercentage: "70-100%"
    },
    {
      name: "Erasmus+ Master Degree Scholarships",
      provider: "European Union",
      country: "European Union",
      value: "€24,000 - €48,000 total",
      deadline: "Multiple deadlines",
      coverage: ["Tuition contribution", "Monthly allowance", "Travel costs", "Installation costs"],
      eligibility: ["Bachelor's degree", "EU or partner country citizen", "Language requirements"],
      link: "/scholarship/erasmus-mundus-joint-master-degree-scholarships-2024",
      fundingPercentage: "60-90%"
    },
    {
      name: "Swedish Institute Scholarships",
      provider: "Swedish Institute",
      country: "Sweden",
      value: "SEK 10,000/month + tuition",
      deadline: "February 1, 2024",
      coverage: ["Living allowance", "Tuition fees", "Insurance", "Travel grant"],
      eligibility: ["Academic excellence", "Leadership experience", "Specific country eligibility"],
      link: "/scholarships/sweden-scholarship",
      fundingPercentage: "90-100%"
    },
    {
      name: "Finnish Government Scholarship Pool",
      provider: "Finnish Government",
      country: "Finland",
      value: "€1,500/month",
      deadline: "January 31, 2024",
      coverage: ["Monthly allowance", "Tuition support", "Research costs"],
      eligibility: ["Master's/PhD studies", "Academic merit", "Research focus"],
      link: "/scholarships/finland-scholarship",
      fundingPercentage: "70-85%"
    },
    {
      name: "Norwegian Quota Scheme",
      provider: "Norwegian Government",
      country: "Norway",
      value: "NOK 140,000/year",
      deadline: "March 1, 2024",
      coverage: ["Living stipend", "Some tuition support", "Basic insurance"],
      eligibility: ["Developing country citizenship", "Academic qualifications", "Norwegian language"],
      link: "/scholarships/norway-scholarship",
      fundingPercentage: "60-80%"
    }
  ];

  const scholarshipCategories = [
    {
      title: "Merit-Based Scholarships",
      description: "Awards based on academic excellence and achievements",
      percentage: "50-90%",
      examples: ["University merit awards", "Academic excellence scholarships", "Dean's list scholarships"]
    },
    {
      title: "Need-Based Scholarships", 
      description: "Financial aid based on demonstrated financial need",
      percentage: "40-80%",
      examples: ["Financial aid programs", "Income-based grants", "Hardship scholarships"]
    },
    {
      title: "Subject-Specific Scholarships",
      description: "Funding for specific fields of study or research areas",
      percentage: "60-100%",
      examples: ["STEM scholarships", "Arts & humanities grants", "Business school awards"]
    },
    {
      title: "Regional/Country Scholarships",
      description: "Targeted funding for students from specific regions",
      percentage: "70-95%",
      examples: ["Developing country scholarships", "Regional partnership programs", "Bilateral agreements"]
    }
  ];

  const fundingBreakdown = [
    {
      category: "Tuition Coverage",
      description: "Partial to full tuition fee coverage",
      range: "25% - 100%",
      average: "65%"
    },
    {
      category: "Living Expenses",
      description: "Monthly stipend for accommodation and living costs",
      range: "$500 - $2,000",
      average: "$1,200"
    },
    {
      category: "Additional Benefits",
      description: "Health insurance, travel, research, and book allowances",
      range: "$200 - $1,500",
      average: "$750"
    }
  ];

  const applicationStrategies = [
    {
      title: "Multiple Applications",
      description: "Apply to 8-12 scholarships to maximize chances of success",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Tailor Applications",
      description: "Customize each application to match specific scholarship criteria",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Strong Portfolio",
      description: "Build a comprehensive portfolio of achievements and experiences",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Financial Planning",
      description: "Plan for remaining costs not covered by partial funding",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const eligibilityFactors = [
    "Strong academic record (minimum 3.0-3.5 GPA)",
    "Relevant bachelor's degree for master's programs",
    "English language proficiency (IELTS 6.0-7.0, TOEFL 80-100)",
    "Letters of recommendation from academic or professional references",
    "Personal statement demonstrating goals and motivation",
    "Work experience (required for some programs)",
    "Research proposal (for research-based programs)",
    "Financial need documentation (for need-based scholarships)"
  ];

  const costAnalysis = [
    {
      country: "Germany",
      avgTuition: "€1,500 - €20,000",
      avgLiving: "€800 - €1,200/month",
      scholarshipCoverage: "60-100%",
      outOfPocket: "€2,000 - €15,000/year"
    },
    {
      country: "Australia", 
      avgTuition: "AUD $20,000 - $45,000",
      avgLiving: "AUD $1,400 - $2,500/month",
      scholarshipCoverage: "50-80%",
      outOfPocket: "AUD $8,000 - $25,000/year"
    },
    {
      country: "Sweden",
      avgTuition: "SEK 80,000 - 140,000",
      avgLiving: "SEK 8,000 - 12,000/month",
      scholarshipCoverage: "70-100%",
      outOfPocket: "SEK 10,000 - 50,000/year"
    },
    {
      country: "Norway",
      avgTuition: "Free (EU) / NOK 50,000+ (Non-EU)",
      avgLiving: "NOK 10,000 - 15,000/month", 
      scholarshipCoverage: "40-80%",
      outOfPocket: "NOK 30,000 - 80,000/year"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Annual Scholarships", description: "Partially funded opportunities worldwide" },
    { number: "$1.8B+", label: "Total Funding", description: "Distributed in partial scholarships annually" },
    { number: "65%", label: "Average Coverage", description: "Of total education costs covered" },
    { number: "85%", label: "Success Rate", description: "For well-prepared applications" }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Partially Funded Scholarships for International Students 2024 | Merit-Based Awards</title>
        <meta name="description" content="Explore 25,000+ partially funded scholarships for international students in 2024. Merit-based and need-based financial aid covering 50-80% of education costs worldwide." />
        <meta name="keywords" content="partially funded scholarships 2024, merit scholarships international students, DAAD scholarships, Australia Awards, Erasmus scholarships, study abroad funding, financial aid" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/partially-funded-scholarships-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partially Funded Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">Merit-Based Financial Aid to Make Your Education Dreams Affordable</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Scholarship Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Partially Funded Scholarships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Understanding Partially Funded Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              Partially funded scholarships provide significant financial support, typically covering 50-80% of education costs. 
              These merit-based and need-based awards help make international education more accessible by reducing financial burden 
              while still requiring some personal investment in your future. They're excellent stepping stones to world-class education 
              and often lead to additional funding opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Top Partially Funded Scholarships 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredScholarships.map((scholarship, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{scholarship.name}</h3>
                    <div className="text-right">
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold block mb-2">
                        {scholarship.deadline}
                      </span>
                      <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {scholarship.fundingPercentage}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-500 font-semibold">Provider: </span>
                      <span className="text-white">{scholarship.provider}</span>
                    </div>
                    <div>
                      <span className="text-blue-500 font-semibold">Country: </span>
                      <span className="text-white">{scholarship.country}</span>
                    </div>
                    <div>
                      <span className="text-blue-500 font-semibold">Value: </span>
                      <span className="text-green-500 font-bold">{scholarship.value}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Coverage:</h4>
                    <div className="space-y-1">
                      {scholarship.coverage.map((item, idx) => (
                        <div key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <div className="space-y-1">
                      {scholarship.eligibility.map((req, idx) => (
                        <div key={idx} className="text-gray-300 text-sm flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={scholarship.link}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                      View Details & Apply
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Types of Partially Funded Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarshipCategories.map((category, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {category.percentage} Coverage
                  </div>
                  <div className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="text-orange-500 text-sm">{example}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Breakdown */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Typical Funding Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fundingBreakdown.map((funding, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{funding.category}</h3>
                  <p className="text-gray-300 mb-6">{funding.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-blue-500 font-semibold">Range: </span>
                      <span className="text-white">{funding.range}</span>
                    </div>
                    <div>
                      <span className="text-blue-500 font-semibold">Average: </span>
                      <span className="text-green-500 font-bold">{funding.average}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Analysis by Country */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Cost Analysis by Popular Destinations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {costAnalysis.map((country, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{country.country}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Average Tuition:</span>
                      <span className="text-white font-semibold">{country.avgTuition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Living Costs:</span>
                      <span className="text-white font-semibold">{country.avgLiving}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Scholarship Coverage:</span>
                      <span className="text-green-500 font-semibold">{country.scholarshipCoverage}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-600 pt-4">
                      <span className="text-orange-500 font-semibold">Your Investment:</span>
                      <span className="text-orange-500 font-bold">{country.outOfPocket}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Strategies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Application Success Strategies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationStrategies.map((strategy, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">General Eligibility Requirements</h2>
            <Card className="bg-gray-900 border-orange-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {eligibilityFactors.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Partially Funded Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your chances of securing merit-based funding for your education abroad
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Scholarship Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartiallyFundedScholarshipsInternationalStudents2024;
