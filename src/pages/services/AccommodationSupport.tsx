
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Home, MapPin, Shield, DollarSign, Users, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AccommodationSupport = () => {
  const accommodationTypes = [
    {
      type: "University Dormitories",
      description: "On-campus housing with academic community",
      icon: <Home className="h-8 w-8" />,
      priceRange: "$500-$1500/month",
      features: ["Campus Integration", "Academic Support", "Meal Plans", "Security"]
    },
    {
      type: "Shared Apartments",
      description: "Cost-effective option with fellow students",
      icon: <Users className="h-8 w-8" />,
      priceRange: "$400-$1000/month",
      features: ["Shared Costs", "Social Environment", "Flexible Terms", "Furnished Options"]
    },
    {
      type: "Homestays",
      description: "Live with local families for cultural immersion",
      icon: <Shield className="h-8 w-8" />,
      priceRange: "$600-$1200/month",
      features: ["Cultural Exchange", "Meals Included", "Language Practice", "Support System"]
    },
    {
      type: "Private Apartments",
      description: "Independent living with complete privacy",
      icon: <MapPin className="h-8 w-8" />,
      priceRange: "$800-$2000/month",
      features: ["Complete Privacy", "No Restrictions", "Personal Space", "Long-term Stability"]
    }
  ];

  const services = [
    "Pre-arrival accommodation booking and confirmation",
    "Virtual tours and property inspections",
    "Lease agreement review and legal support",
    "Airport pickup and move-in assistance",
    "Utility setup and internet connection help",
    "24/7 support for accommodation issues"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Accommodation Support</h1>
            <p className="text-xl">Find your perfect home away from home</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Secure, Comfortable Housing Solutions</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Finding the right accommodation is crucial for your study abroad experience. Our accommodation 
              support service helps you secure safe, comfortable, and affordable housing options that suit 
              your preferences, budget, and lifestyle. We work with trusted partners worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {accommodationTypes.map((accommodation, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {accommodation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{accommodation.type}</h3>
                  <p className="text-gray-300 mb-4 text-center">{accommodation.description}</p>
                  <div className="text-center mb-4">
                    <div className="text-orange-500 font-bold text-lg">{accommodation.priceRange}</div>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {accommodation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Our Support Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <Wifi className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h4 className="text-2xl font-bold text-white mb-6">Why Choose Our Service?</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">Verified and safe properties only</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">Prime locations near universities</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-orange-500 mr-3" />
                  <span className="text-gray-300">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-black mb-4">Book Early, Save More!</h3>
            <p className="text-black text-lg mb-6">
              Secure your accommodation 3-6 months in advance to get the best properties at discounted rates.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-black">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold">Early Bird</div>
                <div className="text-sm">6+ months advance</div>
                <div className="text-lg font-bold">Save up to 15%</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold">Standard</div>
                <div className="text-sm">3-6 months advance</div>
                <div className="text-lg font-bold">Save up to 10%</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold">Last Minute</div>
                <div className="text-sm">Less than 3 months</div>
                <div className="text-lg font-bold">Limited Options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AccommodationSupport;
