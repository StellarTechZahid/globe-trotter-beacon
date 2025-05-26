
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQs = () => {
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide comprehensive study abroad services including career counseling, university selection, application support, visa assistance, and post-arrival support."
    },
    {
      question: "Which countries do you cover?",
      answer: "We help students study in the UK, USA, Canada, Australia, Germany, New Zealand, Malaysia, UAE, and Italy."
    },
    {
      question: "How much do your services cost?",
      answer: "We offer free initial consultation. Our service fees vary depending on the package you choose. Contact us for detailed pricing."
    },
    {
      question: "What is the typical processing time?",
      answer: "Processing time varies by country and university. Generally, it takes 3-6 months from application to visa approval."
    },
    {
      question: "Do you help with scholarships?",
      answer: "Yes, we provide comprehensive scholarship consulting and help you identify and apply for various funding opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQs</h1>
            <p className="text-xl">Frequently Asked Questions</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <h3 className="text-xl font-bold text-orange-500 mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
