
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TopBar from './navbar/TopBar';
import MobileNavigation from './navbar/MobileNavigation';
import { navItems } from './navbar/NavbarData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#consultation-form';
    }
  };

  return (
    <>
      <TopBar />

      {/* Main Navbar */}
      <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <span className="text-black font-bold text-xl">AA</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white hidden sm:block">Abroad Academics</span>
              <span className="text-lg font-bold text-white sm:hidden">AA</span>
            </Link>

            {/* Desktop Navigation - Full Size (shows all items) */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-white hover:text-orange-500 transition-colors duration-200 font-medium flex items-center px-3 py-2 whitespace-nowrap text-sm"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-sm"
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
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 ml-2 text-sm whitespace-nowrap"
              >
                Free Consultation
              </Button>
            </div>

            {/* Large Tablet Navigation (lg to xl) - Shows key items with dropdowns */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1">
              <Link to="/" className="text-white hover:text-orange-500 px-2 py-1 text-sm font-medium">Home</Link>
              <Link to="/about" className="text-white hover:text-orange-500 px-2 py-1 text-sm font-medium">About</Link>
              
              <div className="relative group">
                <Link to="/services" className="text-white hover:text-orange-500 flex items-center px-2 py-1 text-sm font-medium">
                  Services <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-56 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2 max-h-64 overflow-y-auto">
                    {navItems.find(item => item.name === 'Services')?.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-xs"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link to="/countries" className="text-white hover:text-orange-500 flex items-center px-2 py-1 text-sm font-medium">
                  Countries <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-48 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {navItems.find(item => item.name === 'Countries')?.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-xs"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link to="/scholarship" className="text-white hover:text-orange-500 flex items-center px-2 py-1 text-sm font-medium">
                  Scholarship <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-48 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {navItems.find(item => item.name === 'Scholarship')?.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-xs"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="text-white hover:text-orange-500 px-2 py-1 text-sm font-medium">Contact</Link>
              
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-3 py-1 ml-1 text-xs"
              >
                Free Consultation
              </Button>
            </div>

            {/* Medium Tablet Navigation (md to lg) - Essential items only */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              <Link to="/" className="text-white hover:text-orange-500 px-2 py-1 text-sm">Home</Link>
              <Link to="/services" className="text-white hover:text-orange-500 px-2 py-1 text-sm">Services</Link>
              <Link to="/countries" className="text-white hover:text-orange-500 px-2 py-1 text-sm">Countries</Link>
              <Link to="/scholarship" className="text-white hover:text-orange-500 px-2 py-1 text-sm">Scholarship</Link>
              <Link to="/contact" className="text-white hover:text-orange-500 px-2 py-1 text-sm">Contact</Link>
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-2 py-1 ml-1 text-xs"
              >
                Free Call
              </Button>
            </div>

            {/* Mobile Menu Button (small screens) */}
            <div className="md:hidden flex items-center space-x-2">
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-3 py-1 text-xs"
              >
                Free Call
              </Button>
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
            <MobileNavigation
              navItems={navItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setIsMenuOpen={setIsMenuOpen}
              scrollToConsultation={scrollToConsultation}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
