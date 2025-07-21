
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Globe, Calendar, Award, DollarSign, GraduationCap, Users } from 'lucide-react';

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
      'Netherlands': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop',
      'Switzerland': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'Ireland': 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      'Norway': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'Finland': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'Italy': 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop',
      'Belgium': 'https://images.unsplash.com/photo-1562113530-57ba63c21d11?w=400&h=300&fit=crop'
    };
    return countryImages[country] || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop';
  };

  return (
    <Card className="group bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden h-full">
      <div className="relative">
        <div className="h-24 sm:h-28 md:h-32 overflow-hidden">
          <img 
            src={getCountryImage(scholarship.country)} 
            alt={scholarship.country}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute top-1.5 left-1.5">
            <div className="flex items-center space-x-1 bg-orange-500/90 backdrop-blur-sm text-black px-2 py-1 rounded-full text-xs font-semibold">
              <Globe className="h-3 w-3" />
              <span>{scholarship.country}</span>
            </div>
          </div>
          <div className="absolute top-1.5 right-1.5">
            <div className="bg-black/70 backdrop-blur-sm text-orange-500 px-2 py-1 rounded-full text-xs font-bold">
              {scholarship.amount}
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-3 space-y-2.5 flex flex-col justify-between h-[calc(100%-6rem)] sm:h-[calc(100%-7rem)] md:h-[calc(100%-8rem)]">
        <div className="space-y-2">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-orange-500 group-hover:text-orange-400 transition-colors line-clamp-2">
              {scholarship.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
              {scholarship.description}
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <GraduationCap className="h-3 w-3 text-orange-500" />
              <span className="line-clamp-1">{scholarship.university}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-1.5 px-2 bg-black/50 rounded-lg border border-orange-500/20">
            <div className="flex items-center space-x-2">
              <Calendar className="h-3 w-3 text-orange-500" />
              <span className="text-white text-xs font-medium">Deadline</span>
            </div>
            <span className="text-orange-500 text-xs font-bold">{scholarship.deadline}</span>
          </div>

          <div className="space-y-2">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-2 rounded-lg border border-orange-500/20">
              <div className="flex items-center space-x-2 mb-1">
                <Award className="h-3 w-3 text-orange-500" />
                <span className="text-white font-semibold text-xs">Coverage</span>
              </div>
              <p className="text-gray-300 text-xs line-clamp-2">{scholarship.coverage}</p>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-orange-500 font-semibold text-xs flex items-center space-x-1">
                <CheckCircle className="h-3 w-3" />
                <span>Key Requirements</span>
              </h4>
              <ul className="space-y-0.5">
                {scholarship.requirements.slice(0, 2).map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300 text-xs line-clamp-1">{req}</span>
                  </li>
                ))}
                {scholarship.requirements.length > 2 && (
                  <li className="text-orange-500 text-xs font-medium">+{scholarship.requirements.length - 2} more requirements</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-2 mt-auto">
          <Button 
            onClick={onApply}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-2 text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span>Apply Now</span>
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScholarshipCard;
