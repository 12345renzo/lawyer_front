"use client";

import React from 'react';
import { Scale, Home, FileText, Users, Calendar, CreditCard, Settings, User } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, onTabChange, className }) => {
  const { isDarkMode } = useTheme();

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'cases', label: 'Expedientes', icon: FileText },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'calendar', label: 'Agenda', icon: Calendar },
    { id: 'billing', label: 'Facturación', icon: CreditCard },
    { id: 'settings', label: 'Configuración', icon: Settings }
  ];

  const themeClasses = isDarkMode
    ? 'bg-gray-900 border-gray-700'
    : 'bg-white border-gray-200';

  return (
    <div className={`fixed left-0 top-0 h-full z-30 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64 ${themeClasses} border-r shadow-lg ${className}`}>
      
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <Scale className={`h-8 w-8 mr-3 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />
          <span className="font-bold text-xl">LexGest</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
              activeTab === item.id
                ? isDarkMode
                  ? 'bg-yellow-900/20 text-yellow-400 border-r-2 border-yellow-400'
                  : 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                : isDarkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="flex items-center mb-2">
            <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-blue-600'} flex items-center justify-center mr-3`}>
              <User className={`h-5 w-5 ${isDarkMode ? 'text-gray-900' : 'text-white'}`} />
            </div>
            <div>
              <div className="font-semibold text-sm">Ana Martín</div>
              <div className="text-xs text-gray-500">Abogada Senior</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
