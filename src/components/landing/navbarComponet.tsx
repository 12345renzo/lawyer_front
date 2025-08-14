import { navbarItem } from "@/src/interface/landing/thema";
import NavbarComponetItem  from "./navbarComponetItem";
import React from "react";
import UserProfile from "./userProfileComponet";
import { Scale } from "lucide-react";

interface navbarProps {
  isDarkMode: boolean;
  isOpen: boolean;
  activeTab: string;
  items: navbarItem[];
  onTabChange: (tab: string) => void;
}

const NavbarComponet: React.FC<navbarProps> = ({ 
  isDarkMode, 
  isOpen, 
  activeTab, 
  items, 
  onTabChange 
}) => {
  const sidebarClasses = isDarkMode
    ? 'bg-gray-900 border-gray-700'
    : 'bg-white border-gray-200';

  return (
    <div className={`fixed left-0 top-0 h-full z-30 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64 ${sidebarClasses} border-r shadow-lg`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <Scale className={`h-8 w-8 mr-3 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />
          <span className="font-bold text-xl">LexGest</span>
        </div>
      </div>

      <nav className="mt-6">
        {items.map((item) => (
          <NavbarComponetItem
            key={item.id}
            item={item}
            isActive={activeTab === item.id}
            isDarkMode={isDarkMode}
            onClick={() => onTabChange(item.id)}
          />
        ))}
      </nav>

      <UserProfile isDarkMode={isDarkMode} />
    </div>
  );
};

export default NavbarComponet;
