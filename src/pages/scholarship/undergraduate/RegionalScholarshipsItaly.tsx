import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const RegionalScholarshipsItaly = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Regional Scholarships Italy 2025 - Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Italian regional scholarships for international students. Learn about DSU scholarships, eligibility requirements, and application process." />
        <meta name="keywords" content="Italy regional scholarships, DSU scholarships Italy, study in Italy funding, Italian government scholarships, regional scholarships Europe, Bologna scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/regional-scholarships-italy" />
        <meta property="og:title" content="Regional Scholarships Italy 2025 - Study in Italy Guide" />
        <meta property="og:description" content="Discover regional scholarships in Italy offering tuition waivers, accommodation, and living allowances for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/regional-scholarships-italy" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=630&fit=crop"
          alt="Regional Scholarships Italy - University of Bologna"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇮🇹</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Italy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Regional Scholarships Italy 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Comprehensive funding opportunities through Italian regional DSU scholarships
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-900 border-t border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">€11,059</div>
              <div className="text-gray-400 text-sm">Annual Award</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">20</div>
              <div className="text-gray-400 text-sm">Italian Regions</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Free</div>
              <div className="text-gray-400 text-sm">Tuition Coverage</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">50K+</div>
              <div className="text-gray-400 text-sm">Annual Recipients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-gray-300">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-orange-500" />
                <span className="font-semibold">Europe Education Specialist</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>6.3k views</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 space-y-8">
              
              <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-orange-500 font-bold text-lg mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Complete tuition fee exemption for eligible students</li>
                  <li>Annual scholarship up to €11,059 for living expenses</li>
                  <li>Free or subsidized accommodation in student residences</li>
                  <li>Meal vouchers and cafeteria access</li>
                  <li>Healthcare coverage and student services</li>
                  <li>Available at universities across all 20 Italian regions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About Italian Regional Scholarships (DSU)</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Italian Regional Scholarships, known as "Diritto allo Studio Universitario" (DSU), represent one of Europe's most comprehensive student support systems. These scholarships are administered by regional authorities across Italy's 20 regions, providing financial assistance to both domestic and international students based on merit and financial need.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The DSU system was established to ensure equal access to higher education regardless of economic background. Each region manages its own scholarship program, but they all follow similar guidelines and offer comparable benefits. This decentralized approach allows for regional variations while maintaining consistent quality and accessibility.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  International students, including those from non-EU countries, are eligible for these scholarships under the same conditions as Italian students, making Italy one of the most accessible European destinations for international education.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>High school diploma or equivalent qualification</li>
                  <li>Admission to an Italian public university or recognized institution</li>
                  <li>Maintain minimum academic performance standards (varies by region)</li>
                  <li>Complete required number of credits per academic year</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Requirements (ISEE)</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>ISEE (Indicatore della Situazione Economica Equivalente) below €23,626</li>
                  <li>ISPE (Indicatore della Situazione Patrimoniale Equivalente) below €51,413</li>
                  <li>International students: equivalent income documentation required</li>
                  <li>Family financial situation assessed for dependency determination</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Residency and Status</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>EU citizens: treated equally with Italian students</li>
                  <li>Non-EU citizens: valid study permit (permesso di soggiorno)</li>
                  <li>Refugees and asylum seekers: special provisions available</li>
                  <li>Long-term EU residents: eligible under standard conditions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits and Coverage</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Benefits</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition Exemption:</strong> Complete waiver of university fees</li>
                  <li><strong>Monetary Grant:</strong> Up to €11,059 annually (varies by region)</li>
                  <li><strong>Payment Schedule:</strong> Distributed in multiple installments throughout the year</li>
                  <li><strong>Additional Bonuses:</strong> Merit-based supplements for exceptional performance</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Accommodation Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Priority allocation in university residences</li>
                  <li>Reduced rates for on-campus housing</li>
                  <li>Housing allowance for private accommodation</li>
                  <li>Guaranteed accommodation for out-of-region students</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Services</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Free or subsidized meals at university cafeterias</li>
                  <li>Healthcare coverage and medical services</li>
                  <li>Free access to university libraries and facilities</li>
                  <li>Transportation discounts and student mobility support</li>
                  <li>Career counseling and job placement assistance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Regional Variations and Top Universities</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Emilia-Romagna Region</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <h4 className="text-orange-500 font-semibold mb-2">University of Bologna</h4>
                  <p className="text-gray-300 text-sm mb-2">Europe's oldest university (founded 1088) with comprehensive scholarship programs</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Maximum grant: €11,059 annually</li>
                    <li>Free accommodation for eligible students</li>
                    <li>Strong international programs in English</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Lombardy Region</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <h4 className="text-orange-500 font-semibold mb-2">University of Milan & Bocconi</h4>
                  <p className="text-gray-300 text-sm mb-2">Leading institutions in business, economics, and sciences</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Comprehensive DSU support available</li>
                    <li>Additional merit-based scholarships</li>
                    <li>Strong industry connections</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Tuscany Region</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                  <h4 className="text-orange-500 font-semibold mb-2">University of Florence & Pisa</h4>
                  <p className="text-gray-300 text-sm mb-2">Historic universities with strong research programs</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Excellent support for international students</li>
                    <li>Cultural immersion opportunities</li>
                    <li>Renaissance city locations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>May-August:</strong> Application period opens (varies by region)</li>
                  <li><strong>September:</strong> Document submission deadline</li>
                  <li><strong>October-November:</strong> Results announcement</li>
                  <li><strong>December:</strong> First installment payment</li>
                  <li><strong>Throughout year:</strong> Academic progress monitoring</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>ISEE documentation or equivalent financial statements</li>
                  <li>University enrollment certificate</li>
                  <li>Academic transcripts and diploma (translated and legalized)</li>
                  <li>Residence permit (for non-EU students)</li>
                  <li>Family composition and income documentation</li>
                  <li>Bank statements and tax returns</li>
                  <li>Declaration of academic objectives</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Procedure</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Apply online through regional DSU portal</li>
                  <li>Submit required financial documentation</li>
                  <li>Provide proof of university enrollment</li>
                  <li>Attend any required interviews or assessments</li>
                  <li>Maintain academic progress requirements</li>
                  <li>Renew application annually with updated documents</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Maintaining Scholarship Eligibility</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Performance Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Complete minimum 20 credits by August 10th of first year</li>
                  <li>Achieve minimum 25 credits for subsequent years</li>
                  <li>Maintain satisfactory GPA according to regional standards</li>
                  <li>Graduate within maximum timeframe (typically 6 years for bachelor's)</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Status Updates</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Submit updated ISEE annually</li>
                  <li>Report any changes in family financial situation</li>
                  <li>Maintain residency status requirements</li>
                  <li>Comply with scholarship terms and conditions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Tips for International Students</h2>
                <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300">
                  <li><strong>Start Early:</strong> Begin application process 6-8 months before enrollment</li>
                  <li><strong>Document Translation:</strong> Ensure all documents are properly translated and legalized</li>
                  <li><strong>ISEE Equivalent:</strong> Work with Italian consulates to establish financial documentation equivalence</li>
                  <li><strong>Language Preparation:</strong> While English programs exist, basic Italian helps with administration</li>
                  <li><strong>Regional Research:</strong> Different regions have varying benefits - research thoroughly</li>
                  <li><strong>University Support:</strong> Contact international offices for guidance through the process</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Living in Italy as a Scholarship Student</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Italy offers an exceptional quality of life for international students. The country's rich cultural heritage, excellent cuisine, and central European location make it an ideal base for academic and personal growth. Regional scholarships ensure that financial constraints don't prevent students from experiencing authentic Italian culture.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Students benefit from Italy's well-developed transportation network, allowing easy travel throughout Europe. The country's strong academic tradition, combined with modern research facilities, provides an excellent environment for undergraduate studies across diverse fields.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Study in Italy?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Italian Regional Scholarships offer one of Europe's most comprehensive support systems for international students. With full tuition coverage, living allowances, and additional services, these scholarships make quality European education accessible and affordable. Start your journey to studying in the heart of the Mediterranean today.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Italy scholarships</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">DSU scholarships</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">study in Italy</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">European education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">regional scholarships</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">University of Bologna</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Scholarships */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related Scholarships</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "DAAD Germany Scholarships",
                description: "German government scholarships for international students",
                country: "🇩🇪 Germany",
                amount: "€850/month",
                link: "/scholarship/undergraduate/daad-scholarships-germany"
              },
              {
                title: "French Government Scholarships",
                description: "Eiffel Excellence Scholarship Programme",
                country: "🇫🇷 France",
                amount: "€1,181/month",
                link: "/scholarship/undergraduate/french-government-scholarships"
              },
              {
                title: "Swiss Excellence Scholarships",
                description: "Swiss government scholarships for international students",
                country: "🇨🇭 Switzerland",
                amount: "CHF 1,920/month",
                link: "/scholarship/undergraduate/swiss-excellence-scholarships"
              }
            ].map((scholarship, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">{scholarship.country}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {scholarship.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{scholarship.description}</p>
                  <div className="text-orange-500 font-semibold mb-4">{scholarship.amount}</div>
                  <Link to={scholarship.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegionalScholarshipsItaly;