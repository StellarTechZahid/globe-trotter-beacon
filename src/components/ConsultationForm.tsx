
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    intake: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    'United Kingdom',
    'United States',
    'Canada',
    'Australia',
    'Malaysia',
    'UAE',
    'Germany',
    'Italy',
    'New Zealand'
  ];

  const programs = [
    'Undergraduate',
    'Postgraduate',
    'PhD/Doctorate',
    'Foundation',
    'Language Course',
    'Professional Course'
  ];

  const intakes = [
    'September 2024',
    'January 2025',
    'May 2025',
    'September 2025',
    'January 2026'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your Google Sheets API endpoint
    // You'll need to set up Google Apps Script with Google Sheets
    // Example endpoint: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Website Consultation Form'
        }),
      });

      // Since we're using no-cors, we can't check the actual response
      // But we'll assume success if no error is thrown
      toast.success('Registration Successful!', {
        description: 'Thank you for your interest. Our team will contact you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        program: '',
        intake: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong!', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Register for Free Consultation
          </h2>
          <p className="text-xl text-gray-300">
            Take the first step towards your study abroad journey with a free consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-white">Desired Country *</Label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program" className="text-white">Program Type *</Label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="intake" className="text-white">Preferred Intake</Label>
              <select
                id="intake"
                name="intake"
                value={formData.intake}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md focus:border-orange-500 focus:outline-none"
              >
                <option value="">Select intake</option>
                {intakes.map((intake) => (
                  <option key={intake} value={intake}>
                    {intake}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-12 py-3 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </Button>
            </div>
          </form>

          {/* Instructions for Google Sheets setup */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-orange-500">
            <h3 className="text-orange-500 font-semibold mb-2">Setup Instructions:</h3>
            <p className="text-gray-300 text-sm">
              To connect this form to Google Sheets:
              <br />1. Create a Google Sheet with columns: Name, Email, Phone, Country, Program, Intake, Timestamp, Source
              <br />2. Go to Extensions → Apps Script
              <br />3. Create a script to handle POST requests and save data to your sheet
              <br />4. Deploy as web app and replace 'YOUR_SCRIPT_ID' in the code with your actual script ID
              <br />5. Make sure to set proper permissions for the script
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
