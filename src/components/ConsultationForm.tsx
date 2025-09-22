
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ConsultationFormProps {
  onSuccess?: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    desiredCountry: '',
    previousEducation: '',
    cgpa: '',
    programType: '',
    fieldOfStudy: '',
    intake: '',
    budget: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const response = await fetch('/api/functions/v1/send-consultation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration Successful!', {
          description: 'Thank you for registering. We will contact you within 24 hours to schedule your free consultation.',
          style: {
            background: '#ea580c',
            color: 'white',
            border: '1px solid #ea580c'
          }
        });

        setFormData({
          fullName: '',
          email: '',
          desiredCountry: '',
          previousEducation: '',
          cgpa: '',
          programType: '',
          fieldOfStudy: '',
          intake: '',
          budget: '',
          phoneNumber: ''
        });

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-orange-500 font-semibold mb-2 text-sm">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-orange-500 font-semibold mb-2 text-sm">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label htmlFor="desiredCountry" className="block text-orange-500 font-semibold mb-2 text-sm">
            Desired Country *
          </label>
          <select
            id="desiredCountry"
            name="desiredCountry"
            value={formData.desiredCountry}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-orange-400 text-sm"
            required
          >
            <option value="">Select a country</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Italy">Italy</option>
            <option value="Malaysia">Malaysia</option>
            <option value="UAE">UAE</option>
          </select>
        </div>

        <div>
          <label htmlFor="previousEducation" className="block text-orange-500 font-semibold mb-2 text-sm">
            Previous Education *
          </label>
          <input
            type="text"
            id="previousEducation"
            name="previousEducation"
            value={formData.previousEducation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="e.g., Bachelor's in Computer Science"
            required
          />
        </div>

        <div>
          <label htmlFor="cgpa" className="block text-orange-500 font-semibold mb-2 text-sm">
            CGPA / Academic Score *
          </label>
          <input
            type="text"
            id="cgpa"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="e.g., 3.8/4.0 or 85%"
            required
          />
        </div>

        <div>
          <label htmlFor="programType" className="block text-orange-500 font-semibold mb-2 text-sm">
            Program Type Applying For *
          </label>
          <select
            id="programType"
            name="programType"
            value={formData.programType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-orange-400 text-sm"
            required
          >
            <option value="">Select program type</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Diploma">Diploma</option>
            <option value="Certificate">Certificate</option>
          </select>
        </div>

        <div>
          <label htmlFor="fieldOfStudy" className="block text-orange-500 font-semibold mb-2 text-sm">
            Field of Study *
          </label>
          <input
            type="text"
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="e.g., Computer Science, Business"
            required
          />
        </div>

        <div>
          <label htmlFor="intake" className="block text-orange-500 font-semibold mb-2 text-sm">
            Intake (Month & Year) *
          </label>
          <input
            type="text"
            id="intake"
            name="intake"
            value={formData.intake}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="e.g., September 2024"
            required
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-orange-500 font-semibold mb-2 text-sm">
            Budget (in USD) *
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="e.g., $50,000"
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-orange-500 font-semibold mb-2 text-sm">
            Phone Number (with country code) *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-orange-500 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            placeholder="e.g., +1-234-567-8900"
            required
          />
        </div>
      </div>

      <div className="text-center pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-2 text-sm disabled:opacity-50 w-full md:w-auto"
        >
          {isSubmitting ? 'Submitting...' : 'Register for Free Consultation'}
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
