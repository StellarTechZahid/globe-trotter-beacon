
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Phone, Mail, User, Globe, BookOpen, Calendar, GraduationCap, DollarSign } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    intake: '',
    education: '',
    cgpa: '',
    field: '',
    budget: ''
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

    // Using Sheets.best integration (Replace YOUR_SHEETS_BEST_URL with actual URL)
    const SHEETS_BEST_URL = 'https://sheet.best/api/sheets/YOUR_SHEETS_BEST_ID';

    try {
      const response = await fetch(SHEETS_BEST_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Phone Number": formData.phone,
          "Desired Country": formData.country,
          "Program Type": formData.program,
          "Preferred Intake": formData.intake,
          "Previous Education": formData.education,
          "CGPA / Academic Score": formData.cgpa,
          "Field of Study": formData.field,
          "Budget (in USD)": formData.budget,
          Timestamp: new Date().toISOString(),
          Source: 'Website Consultation Form'
        }),
      });

      if (response.ok) {
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
          intake: '',
          education: '',
          cgpa: '',
          field: '',
          budget: ''
        });
      } else {
        throw new Error('Failed to submit');
      }

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
    <section id="consultation-form" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Register for Free Consultation
          </h2>
          <p className="text-xl text-gray-300">
            Take the first step towards your study abroad journey with a free consultation.
          </p>
        </div>

        {/* Example Fields Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gray-900 bg-opacity-50 border border-orange-500 border-opacity-30 rounded-lg p-6">
            <h3 className="text-orange-500 font-semibold mb-4 text-center">Information We'll Collect:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                "Full Name",
                "Email Address", 
                "Desired Country",
                "Previous Education",
                "CGPA / Academic Score",
                "Program Type Applying For",
                "Field of Study",
                "Intake (Month & Year)",
                "Budget (in USD)",
                "Phone Number (with country code)"
              ].map((field, index) => (
                <div key={index} className="text-gray-300 text-sm p-2 bg-black bg-opacity-30 rounded border border-orange-500 border-opacity-20">
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white flex items-center">
                  <User className="w-4 h-4 mr-2 text-orange-500" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                Phone Number (with country code) *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-white flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-orange-500" />
                  Desired Country *
                </Label>
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
                <Label htmlFor="program" className="text-white flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-orange-500" />
                  Program Type *
                </Label>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="education" className="text-white flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-orange-500" />
                  Previous Education
                </Label>
                <Input
                  id="education"
                  name="education"
                  type="text"
                  placeholder="e.g., Bachelor's in Computer Science"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cgpa" className="text-white flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-orange-500" />
                  CGPA / Academic Score
                </Label>
                <Input
                  id="cgpa"
                  name="cgpa"
                  type="text"
                  placeholder="e.g., 3.8/4.0 or 85%"
                  value={formData.cgpa}
                  onChange={handleInputChange}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="field" className="text-white flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-orange-500" />
                  Field of Study
                </Label>
                <Input
                  id="field"
                  name="field"
                  type="text"
                  placeholder="e.g., Computer Science, Business"
                  value={formData.field}
                  onChange={handleInputChange}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-orange-500" />
                  Budget (in USD)
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="e.g., $50,000 - $100,000"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="intake" className="text-white flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                Preferred Intake
              </Label>
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

          {/* Instructions for Sheets.best setup */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-orange-500">
            <h3 className="text-orange-500 font-semibold mb-2">Setup Instructions for Sheets.best:</h3>
            <p className="text-gray-300 text-sm">
              To connect this form to Google Sheets using Sheets.best:
              <br />1. Go to <a href="https://sheet.best" className="text-orange-500 underline">sheet.best</a> and create an account
              <br />2. Create a Google Sheet with the columns shown above
              <br />3. Connect your Google Sheet to Sheets.best and get your API URL
              <br />4. Replace 'YOUR_SHEETS_BEST_ID' in the code with your actual Sheets.best ID
              <br />5. The form will automatically submit data to your Google Sheet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
