
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about'
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Career Counseling', href: '/services/career-counseling' },
        { name: 'University Selection', href: '/services/university-selection' },
        { name: 'Profile Evaluation', href: '/services/profile-evaluation' },
        { name: 'Test Preparation', href: '/services/test-preparation' },
        { name: 'Application Support', href: '/services/application-support' },
        { name: 'Scholarship Consulting', href: '/services/scholarship-consulting' },
        { name: 'Visa Assistance', href: '/services/visa-assistance' },
        { name: 'Accommodation Support', href: '/services/accommodation-support' },
        { name: 'Pre-Departure Orientation', href: '/services/pre-departure-orientation' },
        { name: 'Post-Arrival Support', href: '/services/post-arrival-support' },
        { name: 'Job Search Guidance', href: '/services/job-search-guidance' }
      ]
    },
    { 
      name: 'Countries', 
      href: '/countries',
      dropdown: [
        { name: 'United Kingdom', href: '/countries/uk' },
        { name: 'United States', href: '/countries/usa' },
        { name: 'Canada', href: '/countries/canada' },
        { name: 'Australia', href: '/countries/australia' },
        { name: 'Malaysia', href: '/countries/malaysia' },
        { name: 'UAE', href: '/countries/uae' },
        { name: 'Germany', href: '/countries/germany' },
        { name: 'Italy', href: '/countries/italy' },
        { name: 'New Zealand', href: '/countries/new-zealand' }
      ]
    },
    { 
      name: 'Partnership', 
      href: '/partnership',
      dropdown: [
        { name: 'Partner Universities', href: '/partnership/universities' },
        { name: 'Accreditation & Memberships', href: '/partnership/accreditation' }
      ]
    },
    { 
      name: 'Events', 
      href: '/events',
      dropdown: [
        { name: 'Education Expo', href: '/events/education-expo' },
        { name: 'Education Events', href: '/events/education-events' },
        { name: 'Seminars', href: '/events/seminars' },
        { name: 'Campus Visits', href: '/events/campus-visits' }
      ]
    },
    { 
      name: 'Scholarship', 
      href: '/scholarship',
      dropdown: [
        { name: 'Fully Funded', href: '/scholarship/fully-funded' },
        { name: 'Partially Funded', href: '/scholarship/partially-funded' },
        { name: 'European Countries', href: '/scholarship/european-countries' },
        { name: 'Central Asian Countries', href: '/scholarship/central-asian-countries' },
        { name: 'North America', href: '/scholarship/north-america' }
      ]
    },
    { name: 'Virtual Consulting', href: '/virtual-consulting' },
    { name: 'Success Stories', href: '/success-stories' },
    { 
      name: 'Blogs & News', 
      href: '/blogs-news',
      dropdown: [
        { name: 'Blogs', href: '/blogs' },
        { name: 'Articles', href: '/articles' },
        { name: 'Tips', href: '/tips' },
        { name: 'News', href: '/news' }
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-orange-500" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-orange-500" />
              <span>info@studyglobal.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>📍 Free Consultation, No Fees! Fully Funded Scholarships Available</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <span className="text-black font-bold text-xl">SG</span>
              </div>
              <span className="text-2xl font-bold text-white">Study Global</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-white hover:text-orange-500 transition-colors duration-200 font-medium flex items-center"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black border-t border-orange-500">
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-1 text-gray-300 hover:text-orange-500 transition-colors text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4">
                  <Button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToConsultation();
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
