import { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
const HeroCarousel = lazy(() => import('@/components/HeroCarousel'));
const AboutUsSection = lazy(() => import('@/components/AboutUsSection'));
const StudyDestinationsSection = lazy(() => import('@/components/StudyDestinationsSection'));
const OurServicesSection = lazy(() => import('@/components/OurServicesSection'));
const PartnerUniversitiesSection = lazy(() => import('@/components/PartnerUniversitiesSection'));
const OurImpactSection = lazy(() => import('@/components/OurImpactSection'));
const TestimonialsCarousel = lazy(() => import('@/components/TestimonialsCarousel'));
const LatestInsightsSection = lazy(() => import('@/components/LatestInsightsSection'));
const ConsultationForm = lazy(() => import('@/components/ConsultationForm'));
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      toast('Install Abroad Academics App', {
        description: 'Add our app to your home screen for quick access to study abroad guidance!',
        action: {
          label: 'Install',
          onClick: () => {
            (deferredPrompt as any)?.prompt();
            (deferredPrompt as any)?.userChoice.then((choiceResult: { outcome: string }) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User installed the PWA');
              }
              setDeferredPrompt(null);
            });
          }
        }
      });
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as any)?.prompt();
      (deferredPrompt as any)?.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User installed the PWA');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Best Study Abroad Consultants in Pakistan | Abroad Academics - Founded 2023</title>
        <meta name="description" content="Abroad Academics - Pakistan's #1 study abroad consultants since 2023. Expert guidance for USA, UK, Canada, Australia. Best study abroad consultants in Lahore with 98% visa success rate. Get free consultation today!" />
        <meta name="keywords" content="best study abroad consultants Pakistan, study abroad consultants Lahore, top education consultants Pakistan, overseas education consultants, international education consultants Pakistan, study abroad guidance Pakistan, university admission consultants" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Study Abroad Consultants Pakistan | Abroad Academics 2023" />
        <meta property="og:description" content="Pakistan's leading study abroad consultants since 2023. 98% visa success rate, $150M+ scholarships secured. Expert guidance for international education." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://abroadacademics.vercel.app" />
      </Helmet>
      <Navbar />
      {deferredPrompt && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button onClick={handleInstallClick} className="bg-orange-500 text-white hover:bg-orange-600">
            Install Abroad Academics App
          </Button>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <HeroCarousel />
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pakistan's Best Study Abroad Consultants Since 2023
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Abroad Academics, founded in 2023, has rapidly established itself as the leading study abroad consultancy in Pakistan. 
                As the best study abroad consultants in Lahore and across Pakistan, we provide comprehensive guidance for students 
                aspiring to study in top universities worldwide. Our expert team of certified education consultants specializes in 
                helping Pakistani students secure admissions to prestigious institutions in the USA, UK, Canada, Australia, and beyond.
                With a proven track record of 98% visa success rate and over $150 million in scholarships secured, we are Pakistan's 
                most trusted name in international education consulting.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-black p-8 rounded-lg border border-orange-500">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Best Study Abroad Consultants</h2>
                <p className="text-gray-300">
                  Recognized as the top study abroad consultants in Pakistan, providing expert guidance since 2023 
                  with 98% visa success rate for qualified students. Our comprehensive services cover university selection, 
                  application assistance, scholarship guidance, and visa support.
                </p>
              </div>
              <div className="text-center bg-black p-8 rounded-lg border border-orange-500">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Lahore's Premier Consultancy</h2>
                <p className="text-gray-300">
                  Based in Lahore, we serve as the best study abroad consultants in Lahore, helping thousands of 
                  students achieve their international education dreams. Our local expertise combined with global 
                  university partnerships makes us Pakistan's leading education consultancy.
                </p>
              </div>
              <div className="text-center bg-black p-8 rounded-lg border border-orange-500">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Founded 2023 - Rapid Excellence</h2>
                <p className="text-gray-300">
                  Despite being founded in 2023, Abroad Academics has rapidly become Pakistan's most trusted 
                  name in international education consulting. Our innovative approach and dedicated team have 
                  achieved remarkable success in just our first year of operations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutUsSection />
        <StudyDestinationsSection />
        <OurServicesSection />
        <PartnerUniversitiesSection />
        <OurImpactSection />
        <section className="bg-black py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Students Say About Pakistan's Best Study Abroad Consultants
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from students who chose Abroad Academics as their study abroad consultants and successfully 
                secured admissions to top universities worldwide since our founding in 2023.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">
                Why Choose Abroad Academics - Best Study Abroad Consultants in Pakistan?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Discover why thousands of Pakistani students trust Abroad Academics as their study abroad consultants. 
                Our comprehensive services, expert guidance, and proven track record make us the top choice for 
                international education in Pakistan.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Best Study Abroad Consultants Since 2023</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-orange-500">Established Excellence:</strong> Founded in 2023, Abroad Academics has quickly 
                    become the most trusted name among study abroad consultants in Pakistan, helping thousands of students 
                    achieve their international education goals with our innovative approach and dedicated support.
                  </p>
                  <p>
                    <strong className="text-orange-500">Lahore's Leading Consultancy:</strong> As the best study abroad consultants 
                    in Lahore, we provide personalized guidance to students across Punjab and Pakistan, ensuring each student 
                    receives expert attention tailored to their academic aspirations and career goals.
                  </p>
                  <p>
                    <strong className="text-orange-500">Comprehensive Services:</strong> Our team of certified education consultants 
                    offers end-to-end services including university selection, application assistance, visa guidance, scholarship 
                    consultation, test preparation support, and pre-departure orientation.
                  </p>
                  <p>
                    <strong className="text-orange-500">Global University Partnerships:</strong> We maintain strong relationships 
                    with 280+ top universities in USA, UK, Canada, Australia, Germany, and other study destinations, giving our 
                    students access to exclusive opportunities and fast-track admissions.
                  </p>
                  <p>
                    <strong className="text-orange-500">Proven Success Record:</strong> With 98% visa success rate and over $150 million 
                    in scholarships secured for our students, we have established ourselves as Pakistan's most successful study abroad consultancy.
                  </p>
                </div>
              </div>
              <div className="bg-black p-8 rounded-lg border border-orange-500">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">Our 2023 Success Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Students Successfully Placed</span>
                    <span className="text-orange-500 font-bold">2,500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Visa Success Rate</span>
                    <span className="text-orange-500 font-bold">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Scholarships Secured</span>
                    <span className="text-orange-500 font-bold">$150M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Partner Universities</span>
                    <span className="text-orange-500 font-bold">280+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Countries Covered</span>
                    <span className="text-orange-500 font-bold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Student Satisfaction</span>
                    <span className="text-orange-500 font-bold">99.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">
                Top Study Destinations - Expert Guidance from Pakistan's Best Consultants
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                As the leading study abroad consultants in Pakistan, we specialize in helping students secure admissions 
                to top universities in the world's most popular study destinations. Our expertise covers comprehensive 
                guidance for studying in USA, UK, Canada, Australia, Germany, and many more countries.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-900 p-6 rounded-lg border border-orange-500">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Study in USA</h3>
                <p className="text-gray-300 text-sm">Top universities, STEM programs, OPT benefits</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-orange-500">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Study in UK</h3>
                <p className="text-gray-300 text-sm">Russell Group universities, post-study work visa</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-orange-500">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Study in Canada</h3>
                <p className="text-gray-300 text-sm">PR pathways, affordable education, work permits</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-orange-500">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Study in Australia</h3>
                <p className="text-gray-300 text-sm">Group of Eight universities, research opportunities</p>
              </div>
            </div>
          </div>
        </section>
        <LatestInsightsSection />
        <div id="consultation-form">
          <ConsultationForm />
        </div>
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;