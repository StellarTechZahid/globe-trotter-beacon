
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, MapPin, GraduationCap, Trophy, Users, Globe, ArrowRight } from 'lucide-react';

const SuccessStories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

  const allStories = [
    {
      name: "Ayesha Khan",
      university: "University of Oxford",
      country: "UK",
      program: "Masters in Computer Science",
      story: "Abroad Academics, the best study abroad consultants in Pakistan since 2023, helped me secure admission to my dream university in the UK. Their guidance was invaluable throughout the process.",
      rating: 5,
      scholarship: "$25,000 Merit Scholarship",
      year: "2023"
    },
    {
      name: "Rahim Ali",
      university: "Harvard University", 
      country: "USA",
      program: "MBA",
      story: "The team at Abroad Academics made my study abroad process smooth and stress-free. As the leading study abroad consultants in Lahore, they provided exceptional service. Highly recommend!",
      rating: 5,
      scholarship: "Full Tuition Waiver",
      year: "2023"
    },
    {
      name: "Sara Ahmed",
      university: "University of Toronto",
      country: "Canada", 
      program: "PhD in Engineering",
      story: "Thanks to Abroad Academics, Pakistan's best study abroad consultants founded in 2023, I got a scholarship and admission to a top university. Amazing support throughout!",
      rating: 5,
      scholarship: "$30,000 Research Scholarship",
      year: "2023"
    },
    {
      name: "Muhammad Hassan",
      university: "University of Melbourne",
      country: "Australia",
      program: "Masters in Data Science",
      story: "Abroad Academics guided me through every step of the application process. Their expertise as the top study abroad consultants in Pakistan is unmatched.",
      rating: 5,
      scholarship: "$20,000 Merit Award",
      year: "2023"
    },
    {
      name: "Fatima Sheikh",
      university: "Technical University Munich",
      country: "Germany",
      program: "Masters in Mechanical Engineering",
      story: "The counselors at Abroad Academics are truly professional. They helped me secure admission to one of Germany's top technical universities with full funding.",
      rating: 5,
      scholarship: "DAAD Scholarship",
      year: "2023"
    },
    {
      name: "Ali Raza",
      university: "University of Auckland",
      country: "New Zealand",
      program: "Masters in Business Analytics",
      story: "Choosing Abroad Academics as my study abroad consultant was the best decision. They are indeed the best education consultants in Pakistan.",
      rating: 5,
      scholarship: "$15,000 Excellence Scholarship",
      year: "2023"
    },
    {
      name: "Zainab Malik",
      university: "University of British Columbia",
      country: "Canada",
      program: "Masters in Public Health",
      story: "Abroad Academics not only helped me get admission but also guided me through visa and accommodation processes. Truly the best study abroad consultants!",
      rating: 5,
      scholarship: "$18,000 Graduate Scholarship",
      year: "2023"
    },
    {
      name: "Usman Khan",
      university: "Imperial College London",
      country: "UK",
      program: "Masters in Finance",
      story: "The team's dedication and expertise helped me achieve my dream of studying at one of the world's top universities. Excellent service from Pakistan's leading consultants.",
      rating: 5,
      scholarship: "$22,000 Merit Scholarship",
      year: "2023"
    }
  ];

  const totalPages = Math.ceil(allStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const currentStories = allStories.slice(startIndex, startIndex + storiesPerPage);

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Meta Tags */}
      <head>
        <title>Success Stories - Best Study Abroad Consultants Pakistan | Abroad Academics 2023</title>
        <meta name="description" content="Read inspiring success stories from students who chose Abroad Academics, Pakistan's best study abroad consultants since 2023. 98% visa success rate, $150M+ scholarships secured." />
        <meta name="keywords" content="study abroad success stories Pakistan, best study abroad consultants testimonials, student success stories Lahore, international education success Pakistan, Abroad Academics reviews" />
      </head>

      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl mb-4">Inspiring journeys of our successful students since 2023</p>
            <p className="text-lg opacity-90">Pakistan's best study abroad consultants - proven results</p>
          </div>
        </div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Success Stories from Pakistan's Best Study Abroad Consultants
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Since our founding in 2023, Abroad Academics has established itself as Pakistan's premier study abroad consultancy. 
              Our success stories showcase how we've helped thousands of Pakistani students secure admissions to top universities 
              worldwide with over $150 million in scholarships. Read testimonials from students who chose the best study abroad 
              consultants in Pakistan and achieved their international education dreams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-black p-6 rounded-lg border border-orange-500">
              <Trophy className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">98% Success Rate</h3>
              <p className="text-gray-300">Highest visa approval rate among study abroad consultants in Pakistan</p>
            </div>
            <div className="text-center bg-black p-6 rounded-lg border border-orange-500">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">2,500+ Students</h3>
              <p className="text-gray-300">Successfully placed in top universities worldwide since 2023</p>
            </div>
            <div className="text-center bg-black p-6 rounded-lg border border-orange-500">
              <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">15+ Countries</h3>
              <p className="text-gray-300">Study destinations covered by Pakistan's best consultants</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentStories.map((story, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-black font-bold text-xl">{story.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">{story.name}</h3>
                    <p className="text-orange-500 font-semibold">{story.university}</p>
                    <div className="flex items-center justify-center mt-2 mb-3">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-400">{story.country}</span>
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <GraduationCap className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-400 text-sm">{story.program}</span>
                    </div>
                    <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {story.scholarship}
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-6 w-6 text-orange-500 mb-2" />
                    <p className="text-gray-300 italic leading-relaxed">{story.story}</p>
                    <p className="text-orange-500 text-sm mt-3 font-semibold">Class of {story.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-800 hover:bg-gray-700 text-white border border-orange-500"
            >
              Previous
            </Button>
            
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? 'bg-orange-500 text-black'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-orange-500'
                }`}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-gray-800 hover:bg-gray-700 text-white border border-orange-500"
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who chose Abroad Academics, Pakistan's best study abroad consultants 
            since 2023. Let our expert team guide you to your dream university with personalized counseling and proven results.
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 text-lg"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
