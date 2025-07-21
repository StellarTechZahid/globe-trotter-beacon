
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Search } from 'lucide-react';

interface ScholarshipFiltersProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  countries: string[];
  totalResults: number;
  currentResults: number;
}

const ScholarshipFilters: React.FC<ScholarshipFiltersProps> = ({
  selectedCountry,
  onCountryChange,
  countries,
  totalResults,
  currentResults
}) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black border-y border-orange-500/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-orange-500" />
              <span className="text-white font-semibold">Filters</span>
            </div>
            <div className="h-4 w-px bg-orange-500/30" />
            <div className="flex items-center space-x-3">
              <span className="text-white text-sm font-medium">Country:</span>
              <Select value={selectedCountry} onValueChange={onCountryChange}>
                <SelectTrigger className="w-48 bg-black/50 border-2 border-orange-500/30 text-white hover:border-orange-500/50 focus:border-orange-500 transition-colors">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="bg-black border-2 border-orange-500/30 backdrop-blur-sm">
                  <SelectItem value="all" className="text-white hover:bg-orange-500/20 focus:bg-orange-500/20">
                    All Countries
                  </SelectItem>
                  {countries.filter(c => c !== 'all').map(country => (
                    <SelectItem 
                      key={country} 
                      value={country} 
                      className="text-white hover:bg-orange-500/20 focus:bg-orange-500/20"
                    >
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
              <Search className="h-4 w-4 text-orange-500" />
              <span className="text-white text-sm">
                Showing <span className="font-bold text-orange-500">{currentResults}</span> of{' '}
                <span className="font-bold text-orange-500">{totalResults}</span> scholarships
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipFilters;
