
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string; }[];
}

interface MobileNavigationProps {
  navItems: NavItem[];
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToConsultation: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navItems,
  activeDropdown,
  setActiveDropdown,
  setIsMenuOpen,
  scrollToConsultation
}) => {
  return (
    <div className="lg:hidden bg-black border-t border-orange-500">
      <div className="py-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.name}>
            <div 
              className="flex items-center justify-between px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                if (item.dropdown) {
                  setActiveDropdown(activeDropdown === item.name ? null : item.name);
                } else {
                  setIsMenuOpen(false);
                }
              }}
            >
              <Link
                to={item.href}
                className="flex-1"
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} 
                />
              )}
            </div>
            {item.dropdown && activeDropdown === item.name && (
              <div className="ml-4 space-y-1 bg-gray-900">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    to={dropdownItem.href}
                    className="block px-4 py-2 text-gray-300 hover:text-orange-500 transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dropdownItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="px-4 pt-4">
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
  );
};

export default MobileNavigation;
