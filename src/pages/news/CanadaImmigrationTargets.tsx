
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2, Bookmark, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CanadaImmigrationTargets = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Canada Announces New Immigration Targets for International Students 2024 | Breaking News</title>
        <meta name="description" content="Canada plans to welcome 485,000 new permanent residents in 2024, with significant opportunities for international students and graduates. Read the full update." />
        <meta name="keywords" content="Canada immigration targets 2024, international students Canada, permanent residence Canada, immigration news" />
        <link rel="canonical" href="https://yourdomain.com/news/canada-immigration-targets" />
        <meta property="og:title" content="Canada Announces New Immigration Targets for International Students 2024" />
        <meta property="og:description" content="Canada plans to welcome 485,000 new permanent residents in 2024, with significant opportunities for international students and graduates." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/news/canada-immigration-targets" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop"
          alt="Canada Immigration Targets 2024"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/news" className="inline-flex items-center text-red-300 hover:text-red-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4 animate-pulse">
              URGENT
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Canada Announces New Immigration Targets for International Students 2024
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Canada plans to welcome 485,000 new permanent residents in 2024, with significant opportunities for international students and graduates
            </p>
            <div className="flex items-center flex-wrap gap-y-2 space-x-6 text-red-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Immigration News Team
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                January 16, 2024
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Breaking News
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-gray-300">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Immigration
              </span>
              <span className="text-sm">Source: Government of Canada</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
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
          <Card className="bg-gray-900 border-red-500">
            <CardContent className="p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  
                  <div className="bg-red-500 bg-opacity-10 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-red-500 font-bold text-lg mb-2">Key Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Canada to welcome 485,000 new permanent residents in 2024</li>
                      <li>Increased focus on retaining international students and graduates</li>
                      <li>Enhanced Provincial Nominee Program (PNP) allocations</li>
                      <li>Streamlined pathways for French-speaking candidates</li>
                      <li>Priority for healthcare workers and skilled trades</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Breaking: Canada's Ambitious 2024 Immigration Plan</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Canadian government has announced its most ambitious immigration targets yet for 2024, with plans to welcome 485,000 new permanent residents. This represents a significant increase from previous years and demonstrates Canada's commitment to addressing labor shortages while providing clear pathways for international students to build their futures in the country.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      Immigration, Refugees and Citizenship Canada (IRCC) Minister Sean Fraser announced these targets during a press conference in Ottawa, emphasizing that international students who have invested in Canadian education will be prioritized in the immigration process.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">What This Means for International Students</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      The new immigration plan includes several provisions specifically designed to benefit current and prospective international students:
                    </p>
                    
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Enhanced Post-Graduation Pathways</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      The government is expanding the Post-Graduation Work Permit (PGWP) program and creating additional pathways for students to transition from temporary to permanent residence. This includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                      <li>Extended work permit durations for graduates in high-demand fields</li>
                      <li>Streamlined Express Entry processing for Canadian-educated candidates</li>
                      <li>Additional points for Canadian education in the Comprehensive Ranking System</li>
                      <li>Special immigration streams for healthcare and technology graduates</li>
                    </ul>
                    
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Provincial Nominee Program Expansion</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Each province and territory will receive increased Provincial Nominee Program (PNP) allocations, with many provinces planning to prioritize international graduates from their institutions. This means:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                      <li>More nomination opportunities for recent graduates</li>
                      <li>Faster processing times for provincial nominations</li>
                      <li>Industry-specific streams for in-demand occupations</li>
                      <li>Enhanced support for rural and northern immigration</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Timeline and Implementation</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      The immigration targets will be implemented throughout 2024, with several key milestones:
                    </p>
                    
                    <div className="bg-gray-800 p-6 rounded-lg border border-orange-500 mb-6">
                      <h4 className="text-xl font-bold text-orange-500 mb-3">2024 Immigration Timeline</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li><strong>Q1 2024:</strong> Enhanced PNP allocations take effect</li>
                        <li><strong>Q2 2024:</strong> New PGWP extensions implemented</li>
                        <li><strong>Q3 2024:</strong> Additional Express Entry draws for Canadian graduates</li>
                        <li><strong>Q4 2024:</strong> Full implementation of new immigration streams</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">How to Prepare</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      Current and prospective international students should take the following steps to maximize their opportunities:
                    </p>
                    
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">For Current Students</h3>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                      <li>Maintain excellent academic standing</li>
                      <li>Gain Canadian work experience through co-op programs and part-time work</li>
                      <li>Improve English/French language proficiency</li>
                      <li>Research provincial immigration programs in your study location</li>
                      <li>Connect with career services and immigration advisors</li>
                    </ul>
                    
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">For Prospective Students</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                      <li>Consider programs in high-demand fields like healthcare, technology, and skilled trades</li>
                      <li>Research provinces with strong PNP programs</li>
                      <li>Begin improving language test scores early</li>
                      <li>Explore institutions with strong industry connections</li>
                      <li>Consider French-language programs for additional advantages</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Expert Quote</h3>
                    <blockquote className="text-lg leading-relaxed italic mb-4">
                      "This announcement represents the most significant opportunity for international students to build their futures in Canada. The government's commitment to retaining international graduates demonstrates recognition of their valuable contributions to Canadian society and the economy."
                    </blockquote>
                    <p className="text-right text-red-400">- Dr. Immigration Policy Expert, University of Toronto</p>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Next Steps</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Stay updated on the latest immigration policy changes and ensure you're positioned to take advantage of these new opportunities. Our team of immigration experts can help you navigate the changing landscape and develop a personalized strategy for your Canadian immigration journey.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-3 w-full md:w-auto">
                        Get Expert Immigration Guidance
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-8">
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Canada immigration</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">international students</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">permanent residence</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">PNP program</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Express Entry</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanadaImmigrationTargets;
