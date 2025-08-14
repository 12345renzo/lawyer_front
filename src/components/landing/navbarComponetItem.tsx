import { navbarItem } from '@/src/interface/landing/thema';
import React from 'react'

interface navbarItemProps {
  item: navbarItem;
  isActive: boolean;
  isDarkMode: boolean;
  onClick: () => void;
}

const NavbarComponetItem: React.FC<navbarItemProps> = ({ 
  item, 
  isActive, 
  isDarkMode, 
  onClick 
}) => {
  const Icon = item.icon;
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
        isActive
          ? isDarkMode 
            ? 'bg-yellow-900/20 text-yellow-400 border-r-2 border-yellow-400'
            : 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
          : isDarkMode
            ? 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
            : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      <Icon className="h-5 w-5 mr-3" />
      {item.label}
    </button>
  );
};

export default NavbarComponetItem;