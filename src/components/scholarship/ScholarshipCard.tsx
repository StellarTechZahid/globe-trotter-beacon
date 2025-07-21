
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Globe, Calendar, Award, DollarSign } from 'lucide-react';

interface ScholarshipCardProps {
  scholarship: {
    title: string;
    description: string;
    amount: string;
    country: string;
    university: string;
    deadline: string;
    requirements: string[];
    coverage: string;
    image?: string;
  };
  onApply: () => void;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship, onApply }) => {
  const getCountryImage = (country: string) => {
    const countryImages: { [key: string]: string } = {
      'USA': 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop',
      'UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
      'Canada': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop',
      'Australia': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'Germany': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop',
      'Europe': 'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=400&h=300&fit=crop',
      'Sweden': 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=300&fit=crop',
      'New Zealand': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      'Netherlands': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop'
    };
    return countryImages[country] || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop';
  };

  return (
    <Card className="group bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden">
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img 
            src={getCountryImage(scholarship.country)} 
            alt={scholarship.country}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-orange-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
              <Globe className="h-4 w-4" />
              <span>{scholarship.country}</span>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-black/60 backdrop-blur-sm text-orange-500 px-3 py-1 rounded-full text-sm font-bold">
              {scholarship.amount}
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
            {scholarship.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {scholarship.description}
          </p>
          <p className="text-gray-400 text-sm italic">
            {scholarship.university}
          </p>
        </div>

        <div className="flex items-center justify-between py-3 px-4 bg-black/50 rounded-lg border border-orange-500/20">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span className="text-white text-sm font-medium">Deadline</span>
          </div>
          <span className="text-orange-500 text-sm font-bold">{scholarship.deadline}</span>
        </div>

        <div className="space-y-3">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-4 rounded-lg border border-orange-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="h-4 w-4 text-orange-500" />
              <span className="text-white font-semibold text-sm">Coverage</span>
            </div>
            <p className="text-gray-300 text-sm">{scholarship.coverage}</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-orange-500 font-semibold text-sm flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Requirements</span>
            </h4>
            <ul className="space-y-1">
              {scholarship.requirements.slice(0, 3).map((req, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">{req}</span>
                </li>
              ))}
              {scholarship.requirements.length > 3 && (
                <li className="text-orange-500 text-xs">+{scholarship.requirements.length - 3} more requirements</li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            onClick={onApply}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span>Apply Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScholarshipCard;
