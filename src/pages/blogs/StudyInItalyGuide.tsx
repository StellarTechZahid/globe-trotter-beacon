
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Eye, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const StudyInItalyGuide = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Complete Process to Study in Italy 2025: From Admission to Classes</title>
        <meta name="description" content="Discover the complete process to study in Italy in 2025, from admission opening to attending classes at your dream university. Learn about applications, pre-enrollment, visas, and more for international students." />
        <meta name="keywords" content="study in Italy 2025, Italy university admission process, how to enroll in Italian universities, Italy study abroad process, Italian student visa 2025, pre-enrollment Universitaly" />
        <link rel="canonical" href="https://yourdomain.com/blogs/study-in-italy-complete-process" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Complete Process to Study in Italy 2025: From Admission to Classes" />
        <meta property="og:description" content="Step-by-step guide to studying in Italy in 2025, covering admissions, pre-enrollment, visas, and starting classes at top universities." />
        <meta property="og:image" content="https://yourdomain.com/images/study-in-italy-2025.jpg" />
        <meta property="og:url" content="https://yourdomain.com/blogs/study-in-italy-complete-process" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Complete Process to Study in Italy 2025: From Admission to Classes",
              "description": "Comprehensive guide to studying in Italy in 2025, from admission applications to attending classes at your dream university.",
              "author": {
                "@type": "Person",
                "name": "Emma Wilson"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Study Abroad Website",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourdomain.com/logo.png"
                }
              },
              "datePublished": "2025-06-11",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourdomain.com/blogs/study-in-italy-complete-process"
              },
              "image": "https://yourdomain.com/images/study-in-italy-2025.jpg",
              "keywords": "study in Italy, Italy university admission 2025, Italian student visa, study abroad Italy, Universitaly pre-enrollment"
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1516979187457-6376e0a1b43f?w=1200&h=600&fit=crop&q=80"
          alt="Study in Italy Campus"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/blogs" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Complete Process to Study in Italy 2025: From Admission to Classes
            </h1>
            <div className="flex items-center space-x-6 text-orange-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Emma Wilson
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                June 11, 2025
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                22 min read
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                4.2k views
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
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">Study Abroad Guide</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Italy</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">University Admission</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">International Students</span>
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
                    <li><a href="#introduction" className="hover:text-orange-500">1. Why Study in Italy?</a></li>
                    <li><a href="#course-selection" className="hover:text-orange-500">2. Choosing Your Program and University</a></li>
                    <li><a href="#admission-process" className="hover:text-orange-500">3. University Admission Process</a></li>
                    <li><a href="#pre-enrollment" className="hover:text-orange-500">4. Pre-Enrollment via Universitaly</a></li>
                    <li><a href="#visa-application" className="hover:text-orange-500">5. Applying for a Student Visa</a></li>
                    <li><a href="#residence-permit" className="hover:text-orange-500">6. Obtaining a Residence Permit</a></li>
                    <li><a href="#enrollment" className="hover:text-orange-500">7. Final Enrollment at Your University</a></li>
                    <li><a href="#pre-arrival" className="hover:text-orange-500">8. Pre-Arrival Preparations</a></li>
                    <li><a href="#first-day" className="hover:text-orange-500">9. First Day at Your Dream University</a></li>
                    <li><a href="#timeline" className="hover:text-orange-500">10. Timeline for Success</a></li>
                    <li><a href="#success-stories" className="hover:text-orange-500">11. Success Stories</a></li>
                    <li><a href="#conclusion" className="hover:text-orange-500">12. Conclusion</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Article Body */}
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <section id="introduction" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Why Study in Italy?</h2>
                    <p className="text-lg leading-relaxed">
                      Italy, renowned for its historic universities, affordable education, and vibrant culture, attracts over 100,000 international students annually. Home to the University of Bologna (founded in 1088) and modern leaders like Politecnico di Milano, Italy offers diverse programs in English, low tuition fees (€1,000-€4,000/year), and a rich lifestyle blending art, cuisine, and history. Studying in Italy means immersing yourself in cities like Rome, Florence, or Milan while earning a globally recognized degree. This guide outlines the complete process for non-EU international students to study in Italy in 2025, from admission opening to attending classes at your dream university, ensuring a smooth journey to academic success.
                    </p>
                    <p className="mb-4">
                      Whether you’re eyeing a bachelor’s in engineering at Sapienza University or a master’s in fashion at Bocconi, this step-by-step guide covers course selection, applications, pre-enrollment, visas, and more. With practical tips and a clear timeline, you’ll be ready to navigate the Italian education system confidently.[](https://www.timeshighereducation.com/counsellor/admissions-processes-and-funding/applying-university-italy-comprehensive-guide)
                    </p>
                  </section>

                  <section id="course-selection" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Choosing Your Program and University</h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">Research Programs</h3>
                    <p className="mb-4">
                      Start by identifying your academic and career goals. Italy offers programs in fields like engineering, medicine, business, arts, and humanities. Many universities, such as the University of Pavia and University of Siena, provide English-taught bachelor’s and master’s degrees. Use platforms like <a href="https://www.universitaly.it" className="text-orange-500 hover:underline">Universitaly</a> or university websites to explore options.[](https://www.universitaly.it/first-steps)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Select a University</h3>
                    <p className="mb-4">
                      Choose a university based on rankings, program reputation, location, and tuition. Top choices include:
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Politecnico di Milano:</strong> Engineering and design (QS World Ranking 2025: #111).</li>
                        <li><strong>Sapienza University of Rome:</strong> Humanities, sciences (QS: #132).</li>
                        <li><strong>University of Bologna:</strong> Diverse programs (QS: #133).</li>
                        <li><strong>Bocconi University:</strong> Business and economics (QS: Top 50 for business).</li>
                      </ul>
                      Check if your program requires entrance exams (e.g., IMAT for medicine, TOLC for STEM).[](https://www.timeshighereducation.com/counsellor/admissions-processes-and-funding/applying-university-italy-comprehensive-guide)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Language Requirements</h3>
                    <p className="mb-4">
                      English-taught programs require IELTS (6.0-6.5) or TOEFL (80-90). Italian-taught programs need a B2-level certificate (CILS or CELI). Some universities accept an English Proficiency Certificate if your prior education was in English.[](https://www.mastersportal.com/articles/1654/how-to-get-a-student-visa-for-italy.html)
                    </p>
                  </section>

                  <section id="admission-process" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">University Admission Process</h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">Check Eligibility</h3>
                    <p className="mb-4">
                      For bachelor’s (Laurea, 3 years), you need 12 years of schooling and a valid high school diploma. For master’s (Laurea Magistrale, 2 years), a relevant bachelor’s degree is required. Non-EU students may need a Dichiarazione di Valore (DV) to validate foreign qualifications via the Italian embassy.[](https://www.timeshighereducation.com/counsellor/admissions-processes-and-funding/applying-university-italy-comprehensive-guide)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Application Deadlines</h3>
                    <p className="mb-4">
                      Most universities open applications for the September 2025 intake in November 2024, closing between May and June 2025. Competitive programs (e.g., medicine) may have earlier deadlines (January-February). Check university websites or Universitaly for exact dates.[](https://www.gyandhan.com/blogs/italy-universities-application-deadlines)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Submit Application</h3>
                    <p className="mb-4">
                      Apply via the university’s online portal (e.g., <a href="https://apply.unipv.eu" className="text-orange-500 hover:underline">University of Pavia</a>) or Universitaly. Required documents include:
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>High school diploma or bachelor’s degree (translated into Italian).</li>
                        <li>Transcripts and CV.</li>
                        <li>Motivation letter and reference letters.</li>
                        <li>Language proficiency certificate.</li>
                        <li>Passport copy.</li>
                      </ul>
                      Some programs require entrance exams or interviews. Pay application fees (€30-€100).[](https://apply.unipv.eu/)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Receive Admission Offer</h3>
                    <p className="mb-4">
                      Universities notify applicants by August 2025. Offers may be unconditional (direct acceptance) or conditional (e.g., passing an exam). Confirm your acceptance promptly.[](https://www.unipage.net/en/admission_italy)
                    </p>
                  </section>

                  <section id="pre-enrollment" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Pre-Enrollment via Universitaly</h2>
                    <p className="mb-4">
                      Non-EU students must complete pre-enrollment on the <a href="https://www.universitaly.it" className="text-orange-500 hover:underline">Universitaly portal</a> (February-July 2025) to validate their application with the Italian embassy.[](https://www.universitaly.it/first-steps)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Steps for Pre-Enrollment</h3>
                    <ul className="list-decimal pl-6 mb-4 space-y-2">
                      <li>Create an account on Universitaly.</li>
                      <li>Select your program and university.</li>
                      <li>Upload admission letter, passport, diploma, and transcripts.</li>
                      <li>Submit the application for embassy validation.</li>
                      <li>Contact your local Italian embassy to confirm receipt and schedule an appointment.</li>
                    </ul>
                    <p className="mb-4">
                      The embassy validates your documents and issues a pre-application letter or DVL (Letter of Academic Eligibility), typically by mid-May. Start early to avoid delays.[](https://www.prospects.ac.uk/postgraduate-study/study-abroad/study-in-italy)
                    </p>
                  </section>

                  <section id="visa-application" className="mt-4">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Applying for a Student Visa</h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">Visa Type</h3>
                    <p className="mb-4">
                      Non-EU students need a Type D National Visa for studies exceeding 90 days.[](https://www.mastersportal.com/articles/1654/how-to-get-a-student-visa-for-italy.html)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Required Documents</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Visa application form.</li>
                      <li>Passport (valid 3+ months beyond stay).</li>
                      <li>Two passport photos.</li>
                      <li>Admission letter.</li>
                      <li>Financial proof (€6,079.45/year).</li>
                      <li>Health insurance (€30,000 coverage).</li>
                      <li>Accommodation proof.</li>
                      <li>Visa fee receipt (€50).</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-white mb-4">Application Process</h3>
                    <p className="mb-4">
                      Book an embassy appointment 2-3 months before departure. Submit documents, provide biometrics, and attend an interview if required. Processing takes 15-90 days. Collect your visa and verify details before traveling.[](https://www.mastersportal.com/articles/1654/how-to-get-a-student-visa-for-italy.html)
                    </p>
                  </section>

                  <section id="residence-permit" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Obtaining a Residence Permit</h2>
                    <p className="mb-4">
                      Within eight days of arriving in Italy, apply for a residence permit (Permesso di Soggiorno) at a post office.[](https://www.universitaly.it/first-steps)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Steps</h3>
                    <ul className="list-decimal pl-6 mb-4 space-y-2">
                      <li>Obtain a “Kit Giallo” from a post office.</li>
                      <li>Submit application with passport, visa, admission letter, insurance, and €16 revenue stamp.</li>
                      <li>Pay fees (€30.46 postage, €70.46 permit).</li>
                      <li>Attend a Questura appointment for biometrics.</li>
                      <li>Collect your permit, valid for your program duration.</li>
                    </ul>
                    <p className="mb-4">
                      The permit is crucial for legal residence, part-time work (20 hours/week), and healthcare access.[](https://medium.com/%40mrwriter1402/methods-for-applying-to-italian-universities-97784c944063)
                    </p>
                  </section>

                  <section id="enrollment" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Final Enrollment at Your University</h2>
                    <p className="mb-4">
                      After arriving in Italy, complete final enrollment at your university to receive your matricola (student ID) and pay tuition fees.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Steps</h3>
                    <ul className="list-decimal pl-6 mb-4 space-y-2">
                      <li>Visit the university’s international office with your visa, residence permit application receipt, and admission letter.</li>
                      <li>Submit any pending documents (e.g., DV, translations).</li>
                      <li>Pay tuition fees (€1,000-€4,000/year, based on income for public universities).</li>
                      <li>Register for courses and receive your matricola.</li>
                      <li>Attend orientation sessions for campus navigation and academic policies.</li>
                    </ul>
                    <p className="mb-4">
                      Enrollment confirms your student status, granting access to classes, libraries, and services.[](https://studyinitaly.esteri.it/en/enrollment-procedures)
                    </p>
                  </section>

                  <section id="pre-arrival" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Pre-Arrival Preparations</h2>
                    <p className="mb-4">
                      Prepare for your move to Italy to ensure a smooth transition:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li><strong>Book Flights:</strong> Arrive 1-2 weeks before classes (September 2025) to settle in.</li>
                      <li><strong>Secure Accommodation:</strong> Reserve university dorms or private rentals (€300-€800/month).</li>
                      <li><strong>Financial Planning:</strong> Budget for living costs (€700-€1,200/month, varying by city).</li>
                      <li><strong>Learn Basic Italian:</strong> Phrases like “Buongiorno” or “Dove è…” ease daily interactions.</li>
                      <li><strong>Pack Smart:</strong> Bring academic documents, seasonal clothing, and adapters (Type L plugs).</li>
                    </ul>
                    <p className="mb-4">
                      Join university social media groups to connect with peers.[](https://medium.com/%40mrwriter1402/methods-for-applying-to-italian-universities-97784c944063)
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Pre-Arrival Checklist</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-gray-700">
                        <thead>
                          <tr className="bg-gray-800">
                            <th className="p-3 text-white border border-gray-700">Task</th>
                            <th className="p-3 text-white border border-gray-700">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-700">Book flight</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Confirm accommodation</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Arrange health insurance</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Carry academic documents</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Register with university’s international office</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section id="first-day" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">First Day at Your Dream University</h2>
                    <p className="mb-4">
                      Your first day marks the start of your academic journey in Italy. Here’s what to expect:
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Orientation</h3>
                    <p className="mb-4">
                      Attend welcome sessions to meet professors, peers, and learn about campus facilities. Universities like Bologna offer campus tours and networking events.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Classroom Culture</h3>
                    <p className="mb-4">
                      Italian classrooms emphasize participation and critical thinking. Be punctual (classes start 8:30-9:00 AM), bring a notebook, and engage in discussions. Professors are approachable but expect respect.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Cultural Tips</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Greet with “Buongiorno” or a handshake.</li>
                      <li>Dress smart-casual (jeans and a neat shirt are fine).</li>
                      <li>Enjoy coffee breaks at campus cafés to socialize.</li>
                      <li>Respect siesta hours (1-3 PM) when some services close.</li>
                    </ul>
                    <p className="mb-4">
                      Explore your city after classes—visit a piazza or try gelato to embrace the Italian lifestyle.
                    </p>
                  </section>

                  <section id="timeline" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Timeline for Success</h2>
                    <p className="mb-4">
                      Follow this timeline for the September 2025 intake:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-gray-700">
                        <thead>
                          <tr className="bg-gray-800">
                            <th className="p-3 text-white border border-gray-700">Month</th>
                            <th className="p-3 text-white border border-gray-700">Task</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-700">Nov 2024 - Jan 2025</td>
                            <td className="p-3 border border-gray-700">Research programs, universities; prepare language tests.</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Feb - May 2025</td>
                            <td className="p-3 border border-gray-700">Apply to universities; start pre-enrollment on Universitaly.</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Jun - Jul 2025</td>
                            <td className="p-3 border border-gray-700">Complete pre-enrollment; apply for visa.</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Aug 2025</td>
                            <td className="p-3 border border-gray-700">Receive visa; book flights, accommodation.</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Sep 2025</td>
                            <td className="p-3 border border-gray-700">Arrive, apply for residence permit, enroll, start classes.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section id="success-stories" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Success Stories</h2>
                    <p className="mb-4">
                      These fictional stories showcase successful journeys to Italian universities:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-4">
                      <li><strong>Zahid S. (Pakistan, 2024):</strong> Accepted to Sapienza for a master’s in data science, Zahid navigated pre-enrollment and visa processes early, arriving in Rome to start classes seamlessly.</li>
                      <li><strong>Amara O. (Nigeria, 2023):</strong> Enrolled in Politecnico di Milano’s architecture program, Amara secured a scholarship and residence permit, thriving in Milan’s design hub.</li>
                      <li><strong>Raj P. (India, 2024):</strong> Studying medicine at University of Pavia, Raj passed the IMAT exam and completed enrollment, now enjoying clinical training.</li>
                    </ul>
                    <p className="mb-4">
                      Explore more <a href="/success-stories" className="text-orange-500 hover:underline">success stories</a> for motivation.
                    </p>
                  </section>

                  <section id="conclusion" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Conclusion</h2>
                    <p className="mb-4">
                      Studying in Italy in 2025 is an achievable dream with careful planning. From selecting your program to attending your first class, this guide covers every step—admissions, pre-enrollment, visas, residence permits, and enrollment. Italy’s world-class universities, affordable education, and cultural richness await. Start your journey today by researching programs, preparing documents, and following the timeline. With persistence, you’ll soon be studying at your dream university, sipping espresso in a piazza, and embracing la dolce vita.
                    </p>
                    <p className="mb-4">
                      Need help? Visit our <a href="/study-abroad" className="text-orange-500 hover:underline">study abroad resources</a> or book a consultation with our experts.
                    </p>
                  </section>

                  <section className="mt-12 border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Study in Italy?</h3>
                    <p className="mb-6">
                      Our consultants can guide you through university applications, visa processes, and scholarships. Book a free consultation to start your Italian adventure.
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
                title: "How to Apply for a Student Visa in Italy: A Step-by-Step Guide 2025",
                excerpt: "Learn how to secure an Italian student visa with our detailed guide for international students.",
                image: "https://images.unsplash.com/photo-1543783207-ec64e4d710f7?w=600&h=350&fit=crop",
                author: "Sarah Johnson",
                date: "June 11, 2025",
                link: "/blogs/how-to-apply-for-student-visa-in-italy"
              },
              {
                title: "Top English-Taught Programs in Italy for 2025",
                excerpt: "Discover the best English-taught bachelor’s and master’s programs at Italian universities.",
                image: "https://images.unsplash.com/photo-1516321165247-4aa89a48d322?w=600&h=350&fit=crop",
                author: "Michael Chen",
                date: "June 9, 2025",
                link: "/blogs/top-english-programs-italy"
              },
              {
                title: "Scholarships for International Students in Italy 2025",
                excerpt: "Explore funding options to make your Italian education affordable with scholarships and grants.",
                image: "https://images.unsplash.com/photo-1499-124125-1500w?s=auto&w=600&h=350&q=80",
                author: "James Thompson",
                date: "June 7, 2025",
                link: "/blogs/scholarships-italy"
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

export default StudyInItalyGuide;
