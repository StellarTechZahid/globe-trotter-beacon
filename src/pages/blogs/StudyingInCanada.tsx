
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Eye, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyingInCanada = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop"
          alt="Studying in Canada"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/blogs" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Complete Guide to Studying in Canada: Top Universities and Scholarships 2024
            </h1>
            <div className="flex items-center space-x-6 text-orange-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Sarah Johnson
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                January 15, 2024
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                2.3k views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">Study Guides</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Canada</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Universities</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Scholarships</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Table of Contents */}
              <Card className="bg-black border-orange-500 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Table of Contents</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#why-canada" className="hover:text-orange-500">1. Why Choose Canada for Higher Education?</a></li>
                    <li><a href="#top-universities" className="hover:text-orange-500">2. Top Canadian Universities for International Students</a></li>
                    <li><a href="#admission-requirements" className="hover:text-orange-500">3. Admission Requirements and Process</a></li>
                    <li><a href="#scholarships" className="hover:text-orange-500">4. Scholarship Opportunities</a></li>
                    <li><a href="#student-visa" className="hover:text-orange-500">5. Student Visa Process</a></li>
                    <li><a href="#cost-of-living" className="hover:text-orange-500">6. Cost of Living and Tuition Fees</a></li>
                    <li><a href="#work-opportunities" className="hover:text-orange-500">7. Work Opportunities During and After Studies</a></li>
                    <li><a href="#student-life" className="hover:text-orange-500">8. Student Life and Cultural Experience</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Article Body */}
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <p className="text-lg leading-relaxed">
                    Canada has emerged as the leading destination for international students worldwide, and for good reason. 
                    With its welcoming immigration policies, high-quality education system, and multicultural environment, 
                    Canada offers unparalleled opportunities for academic and personal growth. This comprehensive guide will 
                    walk you through everything you need to know about studying in Canada in 2024.
                  </p>

                  <section id="why-canada" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Why Choose Canada for Higher Education?</h2>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">World-Class Education System</h3>
                    <p className="mb-4">
                      Canada consistently ranks among the top countries for educational quality according to international rankings. 
                      Canadian universities are known for their rigorous academic standards, innovative research opportunities, and 
                      practical approach to learning. The Canadian education system emphasizes critical thinking, creativity, and 
                      collaboration, preparing students for success in the global job market.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">Welcoming Immigration Policies</h3>
                    <p className="mb-4">
                      Canada's immigration policies are notably favorable for international students, offering clear pathways to 
                      permanent residency after graduation. The Post-Graduation Work Permit Program (PGWPP) allows students to gain 
                      valuable Canadian work experience, which can significantly enhance their chances of becoming permanent residents. 
                      In 2024, the Canadian government has increased its immigration targets, with a special focus on retaining 
                      international graduates.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">Multicultural Environment</h3>
                    <p className="mb-4">
                      Canada prides itself on being one of the most diverse and inclusive countries in the world. International 
                      students find themselves in a welcoming multicultural environment where diversity is celebrated. This 
                      multicultural setting provides a unique opportunity to learn about different cultures, build global networks, 
                      and develop cross-cultural communication skills that are highly valued by employers worldwide.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">Safety and Quality of Life</h3>
                    <p className="mb-4">
                      Canada consistently ranks as one of the safest countries globally, with low crime rates and a high standard 
                      of living. Canadian cities like Toronto, Vancouver, and Montreal regularly feature in global rankings of the 
                      most livable cities. The country offers excellent healthcare, efficient public transportation, and a clean 
                      environment, ensuring a high quality of life for international students.
                    </p>
                  </section>
                  
                  <section id="top-universities" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Top Canadian Universities for International Students</h2>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">University of Toronto</h3>
                    <p className="mb-4">
                      Consistently ranking as Canada's top university and among the world's top 30, the University of Toronto 
                      excels in research output and academic excellence. With over 700 undergraduate programs and 200 graduate 
                      programs across three campuses, it offers unparalleled academic diversity. The university hosts over 20,000 
                      international students from 160+ countries, creating a truly global learning environment.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">McGill University</h3>
                    <p className="mb-4">
                      Located in Montreal, McGill University is renowned for its medical education and research. Founded in 1821, 
                      it has a rich history of academic excellence and innovation. McGill offers over 300 degree programs across 
                      its 11 faculties and has produced 12 Nobel laureates and 145 Rhodes Scholars. Its diverse student body 
                      includes students from more than 150 countries.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">University of British Columbia</h3>
                    <p className="mb-4">
                      Situated in Vancouver, UBC offers breathtaking campus views of the Pacific Ocean and mountains. It ranks 
                      consistently among the top 50 universities worldwide and is known for its research in sustainable development, 
                      health sciences, and technology. UBC hosts over 17,000 international students and offers more than 500 
                      undergraduate and graduate programs.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">University of Waterloo</h3>
                    <p className="mb-4">
                      The University of Waterloo is world-renowned for its co-operative education program, the largest of its kind 
                      in the world. It excels in computer science, engineering, and mathematics, with strong ties to Silicon Valley 
                      tech companies. Waterloo's innovative approach to education combines academic learning with practical work 
                      experience, making its graduates highly sought after by employers.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">McMaster University</h3>
                    <p className="mb-4">
                      Located in Hamilton, Ontario, McMaster University is known for its innovative problem-based learning approach, 
                      particularly in its medical school. It ranks among Canada's most research-intensive universities and offers 
                      excellent programs in health sciences, engineering, business, and humanities. The university's commitment to 
                      interdisciplinary education prepares students to tackle complex global challenges.
                    </p>
                  </section>
                  
                  <section id="admission-requirements" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Admission Requirements and Process</h2>
                    <p className="mb-4">
                      Admission to Canadian universities typically requires strong academic records, language proficiency in English 
                      or French, standardized test scores (depending on the program), letters of recommendation, and personal 
                      statements or essays. Most Canadian universities have their own online application systems, and it's advisable 
                      to apply 8-12 months before your intended start date.
                    </p>
                    
                    {/* More content would go here - abbreviated for brevity */}
                  </section>
                  
                  <section id="scholarships" className="mt-12">
                    {/* More content would go here */}
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Scholarship Opportunities</h2>
                    <p className="mb-4">
                      International students in Canada have access to a wide range of scholarship opportunities. These include:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li>Vanier Canada Graduate Scholarships (up to CAD $50,000 per year)</li>
                      <li>Canada Graduate Scholarships – Master's Program (CGS M)</li>
                      <li>Province-specific scholarships like Ontario Graduate Scholarship</li>
                      <li>University-specific merit scholarships</li>
                      <li>External scholarships from organizations and foundations</li>
                    </ul>
                  </section>
                  
                  {/* More sections would be added here */}
                  
                  <section className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Conclusion</h2>
                    <p>
                      Canada offers international students a perfect blend of academic excellence, cultural diversity, and future 
                      opportunities. With its welcoming immigration policies, world-class universities, and high quality of life, 
                      it's no wonder Canada continues to be a top choice for students worldwide. By understanding the admission 
                      requirements, scholarship opportunities, and visa processes, you'll be well-prepared to begin your educational 
                      journey in Canada.
                    </p>
                  </section>

                  <section className="mt-12 border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Start Your Canadian Education Journey?</h3>
                    <p className="mb-6">
                      Our expert consultants can help you navigate the application process, find the right university, and secure 
                      scholarships for your studies in Canada. Book a free consultation today to discuss your options.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3">
                        Book a Free Consultation
                      </Button>
                    </Link>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">You May Also Like</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Study in Australia: Best Universities and Student Life Guide",
                excerpt: "Explore Australia's top-ranked universities, vibrant student life, and excellent career prospects for international students in 2024.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=350&fit=crop",
                author: "Michael Chen",
                date: "January 12, 2024",
                link: "/blogs/studying-in-australia"
              },
              {
                title: "Top 10 Scholarship Opportunities for International Students in 2024",
                excerpt: "Comprehensive list of fully-funded and partial scholarships available for international students across top study destinations.",
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=350&fit=crop",
                author: "Emma Wilson",
                date: "January 10, 2024",
                link: "/blogs/top-scholarships"
              },
              {
                title: "UK Universities Guide: Russell Group vs Modern Universities",
                excerpt: "Compare Russell Group universities with modern UK institutions to make the best choice for your academic career and future prospects.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
                author: "James Thompson",
                date: "January 8, 2024",
                link: "/blogs/uk-universities-guide"
              }
            ].map((blog, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                  <Link to={blog.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Read Article
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

export default StudyingInCanada;
