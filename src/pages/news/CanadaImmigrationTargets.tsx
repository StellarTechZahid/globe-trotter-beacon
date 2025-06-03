
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowLeft, Share2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CanadaImmigrationTargets = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop"
          alt="Canada Immigration News"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/news" className="inline-flex items-center text-red-300 hover:text-red-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4 animate-pulse">
              BREAKING NEWS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Canada Announces New Immigration Targets for International Students 2024
            </h1>
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
                <Clock className="h-5 w-5 mr-2" />
                4 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              {/* News Meta */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Immigration
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    Policy Update
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  Source: Government of Canada
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <div className="font-semibold text-xl border-l-4 border-red-500 pl-4 italic text-white">
                    The Canadian government has announced ambitious immigration targets for 2024, with a strong focus on 
                    retaining international students who have graduated from Canadian institutions.
                  </div>

                  <p className="mt-8">
                    OTTAWA — In a significant policy announcement yesterday, Canadian Immigration Minister Sean Fraser unveiled 
                    the country's immigration targets for 2024, highlighting enhanced pathways for international students to 
                    become permanent residents.
                  </p>

                  <p>
                    Under the new plan, Canada aims to welcome 485,000 new permanent residents in 2024, with special provisions 
                    for international students and recent graduates from Canadian educational institutions.
                  </p>

                  <h2 className="text-2xl font-bold text-orange-500 mb-4 mt-8">Key Highlights of the New Immigration Plan</h2>

                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong className="text-white">Enhanced Post-Graduation Work Permits:</strong> International students 
                      will benefit from extended work permits, with graduates from master's programs now eligible for 3-year 
                      work permits, regardless of program duration.
                    </li>
                    <li>
                      <strong className="text-white">Express Entry Modifications:</strong> Additional points will be awarded 
                      under the Comprehensive Ranking System (CRS) for international graduates from Canadian institutions, 
                      particularly in STEM fields and healthcare.
                    </li>
                    <li>
                      <strong className="text-white">Provincial Nominee Program Expansion:</strong> Provinces will receive 
                      increased nomination allocations specifically for international graduates in high-demand sectors.
                    </li>
                    <li>
                      <strong className="text-white">New International Student Stream:</strong> A dedicated immigration stream 
                      for international students will be launched in July 2024, offering a direct pathway to permanent residency 
                      for graduates who secure employment in their field of study.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-orange-500 mb-4 mt-8">Implications for International Students</h2>

                  <p>
                    The new immigration targets and policy adjustments reflect Canada's strategic approach to addressing labor 
                    shortages and demographic challenges through the retention of international talent. International students 
                    already in Canada or considering Canadian education will find increasingly favorable conditions for long-term 
                    settlement.
                  </p>

                  <p>
                    "International students bring tremendous value to our communities and economy," said Minister Fraser during 
                    the announcement. "They contribute over $22 billion annually to our economy, help create a diverse and 
                    innovative society, and represent an important source of future permanent residents and citizens who are 
                    already integrated into Canadian life."
                  </p>

                  <div className="bg-gray-800 p-5 border-l-4 border-orange-500 my-8">
                    <h3 className="text-xl font-bold text-white mb-2">Statistics at a Glance</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>485,000 new permanent residents targeted for 2024</li>
                      <li>40% increase in permanent residency pathways for international graduates compared to 2023</li>
                      <li>Over 200,000 study permits expected to be issued to new international students in 2024</li>
                      <li>60% of international graduates now transition to permanent residency within 5 years</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-orange-500 mb-4">Sector-Specific Opportunities</h2>

                  <p>
                    The new immigration targets place particular emphasis on graduates in the following sectors:
                  </p>

                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong className="text-white">Healthcare:</strong> Nurses, medical technologists, and mental health 
                      practitioners
                    </li>
                    <li>
                      <strong className="text-white">Technology:</strong> Software developers, data scientists, cybersecurity 
                      specialists
                    </li>
                    <li>
                      <strong className="text-white">Engineering:</strong> Civil, mechanical, and electrical engineers
                    </li>
                    <li>
                      <strong className="text-white">Skilled Trades:</strong> Construction, manufacturing, and maintenance 
                      professionals
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-orange-500 mb-4 mt-8">Expert Reactions</h2>

                  <p>
                    Education experts have welcomed the announcement. Dr. Maria Rodriguez, Director of International Education 
                    at the University of Toronto, commented: "These new immigration targets send a powerful message to 
                    international students that Canada not only values their educational journey but also sees them as future 
                    citizens who can contribute to the country's prosperity."
                  </p>

                  <h2 className="text-2xl font-bold text-orange-500 mb-4 mt-8">Next Steps for Prospective Students</h2>

                  <p>
                    International students considering Canada as a study destination should:
                  </p>

                  <ul className="list-disc pl-6 space-y-3">
                    <li>Research programs aligned with Canada's in-demand sectors</li>
                    <li>Understand the post-graduation work permit eligibility criteria</li>
                    <li>Familiarize themselves with provincial nominee programs in their intended province of study</li>
                    <li>Consider the long-term immigration implications when selecting institutions and programs</li>
                  </ul>

                  <div className="border-t border-gray-700 pt-6 mt-8">
                    <p className="text-sm text-gray-400">
                      This news update was published on January 16, 2024. Immigration policies are subject to change. 
                      International students are advised to consult official Government of Canada sources for the most 
                      current information.
                    </p>
                  </div>

                  <section className="mt-12 border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">How Can We Help You?</h3>
                    <p className="mb-6">
                      Our immigration consultants can provide expert guidance on navigating Canada's immigration pathways for 
                      international students. From study permit applications to post-graduation work permits and permanent 
                      residency strategies, we offer comprehensive support at every stage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-6 py-2 w-full">
                          Book a Consultation
                        </Button>
                      </Link>
                      <Button className="bg-gray-700 hover:bg-gray-600 text-white text-lg px-6 py-2 w-full">
                        <Share2 className="h-5 w-5 mr-2" />
                        Share This News
                      </Button>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related News Updates</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UK Post-Study Work Visa Extended: New Opportunities for International Graduates",
                excerpt: "The UK government extends post-study work rights for international graduates, providing more pathways to permanent residency.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
                author: "UK Education Bureau",
                date: "January 14, 2024",
                category: "Policy Update",
                link: "/news/uk-post-study-visa"
              },
              {
                title: "Australia Launches New Scholarship Program Worth $50 Million",
                excerpt: "The Australian government unveils a comprehensive scholarship program targeting students from developing countries.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=350&fit=crop",
                author: "Australian Education International",
                date: "January 12, 2024",
                category: "Scholarships",
                link: "/news/australia-scholarship-program"
              },
              {
                title: "Germany Simplifies Student Visa Process for International Applicants",
                excerpt: "New streamlined visa application process reduces processing time from 3 months to 6 weeks for international students.",
                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=350&fit=crop",
                author: "German Academic Exchange Service",
                date: "January 10, 2024",
                category: "Visa Updates",
                link: "/news/germany-visa-simplification"
              }
            ].map((news, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{news.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {news.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <Link to={news.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Read Full Update
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

export default CanadaImmigrationTargets;
