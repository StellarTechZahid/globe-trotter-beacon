import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUsSection from '@/components/AboutUsSection';
import StudyDestinationsSection from '@/components/StudyDestinationsSection';
import OurServicesSection from '@/components/OurServicesSection';
import PartnerUniversitiesSection from '@/components/PartnerUniversitiesSection';
import OurImpactSection from '@/components/OurImpactSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import LatestInsightsSection from '@/components/LatestInsightsSection';
import ConsultationFormWrapper from '@/components/ConsultationFormWrapper';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PWAInstallNotification from '@/components/PWAInstallNotification';

const Index = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    // Handle beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      (window as any).deferredPrompt = e; // Store globally for CTASection
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Track app installation
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      localStorage.setItem('pwaInstalled', 'true');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', () => {});
    };
  }, [deferredPrompt]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as any)?.prompt();
      (deferredPrompt as any)?.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User installed the PWA');
          localStorage.setItem('pwaInstalled', 'true');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleNotificationDismiss = () => {
    localStorage.setItem('pwaToastDismissed', 'true');
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
      <Toaster richColors position="top-center" />
      <PWAInstallNotification 
        deferredPrompt={deferredPrompt}
        onInstall={handleInstallClick}
        onDismiss={handleNotificationDismiss}
      />
      <Navbar />
      <HeroCarousel />
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
      <ConsultationFormWrapper />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;