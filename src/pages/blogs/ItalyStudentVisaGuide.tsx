
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Eye, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ItalyStudentVisaGuide = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>How to Apply for a Student Visa in Italy: A Step-by-Step Guide 2025</title>
        <meta name="description" content="Learn how to apply for an Italian student visa in 2025 with our step-by-step guide. Discover eligibility, required documents, application process, and tips for international students studying in Italy." />
        <meta name="keywords" content="Italy student visa 2025, how to apply for Italian student visa, Italian student visa requirements, study in Italy visa process, study abroad in Italy, Type D visa Italy" />
        <link rel="canonical" href="https://yourdomain.com/blogs/how-to-apply-for-student-visa-in-italy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="How to Apply for a Student Visa in Italy: A Step-by-Step Guide 2025" />
        <meta property="og:description" content="Comprehensive guide to securing an Italian student visa in 2025, including eligibility, documents, and application tips for international students." />
        <meta property="og:image" content="https://yourdomain.com/images/italy-student-visa-2025.jpg" />
        <meta property="og:url" content="https://yourdomain.com/blogs/how-to-apply-for-student-visa-in-italy" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Apply for a Student Visa in Italy: A Step-by-Step Guide 2025",
              "description": "Step-by-step guide to applying for an Italian student visa in 2025, covering eligibility, documents, application process, and tips for international students.",
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
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
                "@id": "https://yourdomain.com/blogs/how-to-apply-for-student-visa-in-italy"
              },
              "image": "https://yourdomain.com/images/italy-student-visa-2025.jpg",
              "keywords": "Italy student visa, study in Italy 2025, Italian visa application, international student visa Italy"
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1543783207-ec64e4d710f7?w=1200&h=600&fit=crop&q=80"
          alt="Study in Italy"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/blogs" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              How to Apply for a Student Visa in Italy: A Step-by-Step Guide 2025
            </h1>
            <div className="flex items-center space-x-6 text-orange-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Sarah Johnson
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                June 11, 2025
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                18 min read
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                3.9k views
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
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">Visa Guide</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Italy</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Study Abroad</span>
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
                    <li><a href="#visa-overview" className="hover:text-orange-500">2. Overview of the Italian Student Visa (Type D)</a></li>
                    <li><a href="#eligibility" className="hover:text-orange-500">3. Eligibility Criteria for the Italian Student Visa</a></li>
                    <li><a href="#documents" className="hover:text-orange-500">4. Required Documents for Application</a></li>
                    <li><a href="#application-process" className="hover:text-orange-500">5. Step-by-Step Application Process</a></li>
                    <li><a href="#processing-time" className="hover:text-orange-500">6. Processing Time and Fees</a></li>
                    <li><a href="#post-arrival" className="hover:text-orange-500">7. Post-Arrival Requirements: Residence Permit</a></li>
                    <li><a href="#pitfalls" className="hover:text-orange-500">8. Common Pitfalls to Avoid</a></li>
                    <li><a href="#success-stories" className="hover:text-orange-500">9. Student Visa Success Stories</a></li>
                    <li><a href="#checklist" className="hover:text-orange-500">10. Italian Student Visa Application Checklist</a></li>
                    <li><a href="#conclusion" className="hover:text-orange-500">11. Conclusion</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Article Body */}
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <section id="introduction" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Why Study in Italy?</h2>
                    <p className="text-lg leading-relaxed">
                      Italy, with its rich history, world-class universities, and vibrant culture, is a top destination for international students in 2025. Home to institutions like the University of Bologna (the world’s oldest university) and Sapienza University of Rome, Italy offers affordable tuition, diverse programs in English, and a unique blend of academic excellence and Mediterranean lifestyle. Over 40,000 international students choose Italy annually for fields like art, fashion, engineering, and medicine. However, securing an Italian student visa (Type D) is a critical step to begin your academic journey. This comprehensive guide provides a step-by-step process for applying for an Italian student visa in 2025, covering eligibility, documents, application steps, and post-arrival requirements to ensure a smooth transition to studying in Italy.
                    </p>
                    <p className="mb-4">
                      Whether you’re pursuing a bachelor’s in Florence, a master’s in Milan, or a PhD in Rome, this guide will equip you with the knowledge to navigate the visa process confidently. From understanding requirements to avoiding common mistakes, we’ve got you covered with practical tips and resources. Let’s dive into the essentials of securing your Italian student visa.
                    </p>
                  </section>

                  <section id="visa-overview" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Overview of the Italian Student Visa (Type D)</h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">What is the Type D Visa?</h3>
                    <p className="mb-4">
                      The Italian student visa, officially a National Visa (Type D), is required for non-EU/EEA international students planning to study in Italy for more than 90 days. It allows you to reside in Italy for the duration of your academic program (up to one year, renewable). The visa is issued by Italian embassies or consulates in your home country and must be converted into a residence permit (Permesso di Soggiorno) within eight days of arriving in Italy.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Who Needs It?</h3>
                    <p className="mb-4">
                      Non-EU/EEA students, including those from the USA, India, China, Nigeria, and Brazil, need a Type D visa for degree programs, exchange programs, or language courses exceeding 90 days. EU/EEA and Swiss students are exempt and can study with just a valid passport or ID.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
                    <p className="mb-4">
                      The visa allows part-time work (up to 20 hours/week), access to Italy’s healthcare system (with insurance), and travel within the Schengen Area for up to 90 days. It’s tailored for full-time students enrolled in accredited Italian institutions.
                    </p>
                  </section>

                  <section id="eligibility" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Eligibility Criteria for the Italian Student Visa</h2>
                    <p className="mb-4">
                      To qualify for an Italian student visa in 2025, you must meet the following criteria:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Admission to an Italian Institution:</strong> You must have a letter of acceptance from a recognized Italian university, college, or language school for a full-time program.</li>
                      <li><strong>Financial Sufficiency:</strong> Prove you have at least €6,079.45 per year (2025 requirement) to cover living expenses, via bank statements, scholarships, or sponsorship letters.</li>
                      <li><strong>Health Insurance:</strong> Secure private health insurance covering at least €30,000 for medical emergencies, valid for your stay in Italy.</li>
                      <li><strong>Accommodation Proof:</strong> Provide evidence of housing, such as a rental agreement, university dorm confirmation, or a host’s declaration.</li>
                      <li><strong>Valid Passport:</strong> Your passport must be valid for at least three months beyond your planned stay and issued within the last 10 years.</li>
                      <li><strong>Good Health and Character:</strong> Some consulates may require a medical certificate or police clearance to confirm no criminal record.</li>
                    </ul>
                    <p className="mb-4">
                      Check specific requirements with your local Italian embassy, as they may vary slightly by country. For example, Indian students may need additional financial documentation.
                    </p>
                  </section>

                  <section id="documents" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Required Documents for Application</h2>
                    <p className="mb-4">
                      Preparing accurate and complete documents is crucial for a successful visa application. Here’s the standard list for 2025:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Visa Application Form:</strong> Completed and signed, available on your local Italian embassy’s website.</li>
                      <li><strong>Passport:</strong> Original and a copy, with at least two blank pages and validity as noted above.</li>
                      <li><strong>Passport Photos:</strong> Two recent, biometric-compliant photos (35x45mm, white background).</li>
                      <li><strong>Letter of Acceptance:</strong> Official admission letter from your Italian institution, specifying program details and duration.</li>
                      <li><strong>Financial Proof:</strong> Bank statements (last 3-6 months), scholarship award letters, or a financial guarantee from a sponsor, showing €6,079.45+.</li>
                      <li><strong>Health Insurance:</strong> Policy document covering €30,000 for medical emergencies, valid for your entire stay.</li>
                      <li><strong>Accommodation Proof:</strong> Rental contract, dorm confirmation, or a notarized letter from a host.</li>
                      <li><strong>Proof of Tuition Payment:</strong> Receipt or confirmation of payment (or partial payment, if applicable).</li>
                      <li><strong>Travel Itinerary:</strong> Flight reservation (not ticket) showing entry and exit dates.</li>
                      <li><strong>Academic Records:</strong> Transcripts, diplomas, or certificates relevant to your program.</li>
                      <li><strong>Visa Fee Receipt:</strong> Proof of payment (€50 for Type D visa in 2025, subject to change).</li>
                      <li><strong>Optional Documents:</strong> Medical certificate, police clearance, or motivation letter, if requested by the consulate.</li>
                    </ul>
                    <p className="mb-4">
                      All documents in non-Italian languages must be translated into Italian or English and notarized. Organize them in the order specified by your embassy to streamline processing.
                    </p>
                  </section>

                  <section id="application-process" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Step-by-Step Application Process</h2>
                    <p className="mb-4">
                      Follow these steps to apply for your Italian student visa in 2025:
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Step 1: Secure Admission</h3>
                    <p className="mb-4">
                      Apply to an accredited Italian institution and receive an official acceptance letter. Popular universities include Politecnico di Milano, University of Padua, and Bocconi University. Apply 8-12 months in advance via <a href="https://www.universitaly.it" className="text-orange-500 hover:underline">universitaly.it</a>.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Step 2: Gather Documents</h3>
                    <p className="mb-4">
                      Collect all required documents, ensuring translations and notarizations are complete. Verify requirements with your local Italian embassy or consulate, as some may request additional forms.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Step 3: Book an Appointment</h3>
                    <p className="mb-4">
                      Schedule a visa appointment at the Italian embassy or consulate in your home country. Some countries use outsourcing agencies like VFS Global. Book early (2-3 months before departure) via the embassy’s online portal.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Step 4: Submit Application</h3>
                    <p className="mb-4">
                      Attend your appointment with all documents and pay the visa fee (€50, non-refundable). You may need to provide biometrics (fingerprints, photo). Answer any questions about your study plans clearly.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Step 5: Track Your Application</h3>
                    <p className="mb-4">
                      Monitor your application status online using the tracking number provided. Processing typically takes 15-90 days, so apply at least three months before your program starts.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Step 6: Receive Your Visa</h3>
                    <p className="mb-4">
                      If approved, collect your visa from the embassy or consulate. Verify details (name, validity, program) before traveling. Book your flight to Italy and prepare for arrival.
                    </p>
                  </section>

                  <section id="processing-time" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Processing Time and Fees</h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">Processing Time</h3>
                    <p className="mb-4">
                      Italian student visa processing takes 15-90 days, depending on the embassy, your nationality, and application volume. Apply at least 90 days before your program start date to account for delays, especially during peak seasons (June-August).
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Visa Fees</h3>
                    <p className="mb-4">
                      The Type D visa fee is €50 (2025), payable in local currency at the embassy or consulate. Additional costs may include translation (€20-€100 per document), notarization (€10-€50), and courier services (€10-€30). Budget €100-€200 for ancillary expenses.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Tips for Faster Processing</h3>
                    <p className="mb-4">
                      Submit complete documents, book early appointments, and follow up politely with the embassy. Avoid peak application periods if possible.
                    </p>
                  </section>

                  <section id="post-arrival" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Post-Arrival Requirements: Residence Permit</h2>
                    <p className="mb-4">
                      After arriving in Italy, you must apply for a residence permit (Permesso di Soggiorno) within eight days to legalize your stay.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-4">Steps to Apply</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Visit a Post Office:</strong> Obtain a “Kit Giallo” (yellow kit) for residence permit applications.</li>
                      <li><strong>Complete the Form:</strong> Fill out the application, attaching copies of your passport, visa, acceptance letter, health insurance, and a €16 revenue stamp.</li>
                      <li><strong>Submit at the Post Office:</strong> Pay €30.46 (postal fee) plus €70.46 (permit fee). Receive a receipt and appointment date.</li>
                      <li><strong>Attend Appointment:</strong> Visit the local Questura (police headquarters) for biometrics and document verification.</li>
                      <li><strong>Collect Permit:</strong> Receive your Permesso di Soggiorno, valid for your program duration (up to one year, renewable).</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-white mb-4">Why It’s Important</h3>
                    <p className="mb-4">
                      The residence permit is mandatory for legal residence, access to healthcare, and part-time work. Non-compliance can lead to fines or deportation.
                    </p>
                  </section>

                  <section id="pitfalls" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Common Pitfalls to Avoid</h2>
                    <p className="mb-4">
                      Avoid these common mistakes to ensure a smooth visa process:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-4">
                      <li><strong>Incomplete Documents:</strong> Missing translations or notarizations can lead to rejection. Double-check embassy requirements.</li>
                      <li><strong>Late Applications:</strong> Applying less than 90 days before departure risks delays. Priya S. (fictional) missed her semester start due to late submission.</li>
                      <li><strong>Insufficient Funds:</strong> Showing less than €6,079.45 caused Ahmed K. (fictional) to reapply, delaying his studies.</li>
                      <li><strong>Invalid Insurance:</strong> Policies not covering €30,000 or the full stay are rejected. Verify coverage details.</li>
                      <li><strong>Missing Residence Permit:</strong> Failing to apply within eight days led to fines for Maria L. (fictional).</li>
                    </ul>
                    <p className="mb-4">
                      Consult our <a href="/visas/tips" className="text-orange-500 hover:underline">visa application tips</a> for more advice.
                    </p>
                  </section>

                  <section id="success-stories" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Student Visa Success Stories</h2>
                    <p className="mb-4">
                      These fictional stories highlight successful visa journeys:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-4">
                      <li><strong>Aisha Khan (Pakistan, 2024):</strong> Accepted to Bocconi University for a master’s in finance, Aisha secured her visa by submitting well-translated documents and booking an early appointment. She now thrives in Milan.</li>
                      <li><strong>Carlos Mendes (Brazil, 2023):</strong> Studying art history at the University of Florence, Carlos overcame financial proof challenges with a scholarship letter, securing his visa in six weeks.</li>
                      <li><strong>Li Wei (China, 2024):</strong> Enrolled in engineering at Politecnico di Torino, Li’s meticulous document preparation and timely residence permit application ensured a smooth transition.</li>
                    </ul>
                    <p className="mb-4">
                      Read more <a href="/visas/success-stories" className="text-orange-500 hover:underline">visa success stories</a> for inspiration.
                    </p>
                  </section>

                  <section id="checklist" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Italian Student Visa Application Checklist</h2>
                    <p className="mb-4">
                      Use this checklist to ensure you’re prepared:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-gray-700">
                        <thead>
                          <tr className="bg-gray-800">
                            <th className="p-3 text-white border border-gray-700">Document</th>
                            <th className="p-3 text-white border border-gray-700">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-700">Completed visa application form</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Valid passport + copy</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Two passport photos</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Letter of acceptance</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Financial proof (€6,079.45+)</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Health insurance (€30,000 coverage)</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Accommodation proof</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Tuition payment receipt</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Flight reservation</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Academic records (translated)</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-700">Visa fee payment (€50)</td>
                            <td className="p-3 border border-gray-700">☐</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section id="conclusion" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Conclusion</h2>
                    <p className="mb-4">
                      Securing an Italian student visa in 2025 is a manageable process with proper planning and preparation. By understanding eligibility, gathering complete documents, and following the step-by-step application process, you can confidently embark on your study abroad journey in Italy. From the historic campuses of Bologna to the fashion hubs of Milan, Italy offers a unique blend of academic excellence and cultural immersion. Avoid common pitfalls, apply for your residence permit promptly, and leverage resources like our visa guides to ensure success. Start your application today to join thousands of international students thriving in Italy’s vibrant academic landscape.
                    </p>
                    <p className="mb-4">
                      For more guidance, explore our <a href="/visas" className="text-orange-500 hover:underline">visa resource hub</a> or connect with our experts for personalized support.
                    </p>
                  </section>

                  <section className="mt-12 border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Study in Italy?</h3>
                    <p className="mb-6">
                      Our expert consultants can assist with visa applications, university admissions, and scholarship opportunities for your Italian study journey. Book a free consultation to get started.
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
                title: "Top 10 Global Scholarships for International Students in 2025",
                excerpt: "Discover fully-funded and partial scholarships for international students studying in Italy, the USA, UK, and more in 2025.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=350&fit=crop",
                author: "Michael Chen",
                date: "June 11, 2025",
                link: "/blogs/top-global-scholarships-2025"
              },
              {
                title: "Why Study in Italy: Best Universities and Student Life Guide 2025",
                excerpt: "Explore Italy’s top universities, affordable tuition, and vibrant student life for international students in 2025.",
                image: "https://images.unsplash.com/photo-1517232115160-ff933645a7c3?w=600&h=350&fit=crop",
                author: "Emma Wilson",
                date: "June 8, 2025",
                link: "/blogs/study-in-italy"
              },
              {
                title: "How to Apply for a Student Visa in Germany 2025",
                excerpt: "Step-by-step guide to securing a German student visa for your studies in 2025.",
                image: "https://images.unsplash.com/photo-1492724724894-746a8a723879?w=600&h=350&fit=crop",
                author: "James Thompson",
                date: "June 5, 2025",
                link: "/blogs/germany-student-visa"
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

export default ItalyStudentVisaGuide;
