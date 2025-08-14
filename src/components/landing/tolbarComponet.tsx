// src/components/dashboard/TopBar/TopBar.tsx
import React from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';

interface TopBarProps {
  isDarkMode: boolean;
  activeTab: string;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleTheme: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  isDarkMode,
  activeTab,
  isSidebarOpen,
  toggleSidebar,
  toggleTheme,
}) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const tabTitles: Record<string, string> = {
    dashboard: 'Dashboard',
    cases: 'Expedientes',
    clients: 'Clientes',
    calendar: 'Agenda',
    billing: 'Facturación',
    settings: 'Configuración'
  };

  return (
    <header className={`${cardClasses} border-b px-6 py-4 sticky top-0 z-20`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg mr-4 transition-colors ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <h1 className="text-2xl font-bold">{tabTitles[activeTab]}</h1>
        </div>

        <div className="flex items-center space-x-4">
          <SearchInput isDarkMode={isDarkMode} />
          <NotificationButton isDarkMode={isDarkMode} />
          <ThemeToggleButton 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />
        </div>
      </div>
    </header>
  );
};

// Subcomponentes de TopBar
const SearchInput: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    <input
      type="text"
      placeholder="Buscar..."
      className={`pl-10 pr-4 py-2 rounded-lg border transition-colors ${
        isDarkMode 
          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  </div>
);

const NotificationButton: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
  <button className={`p-2 rounded-lg transition-colors relative ${
    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  }`}>
    <Bell className="h-5 w-5" />
    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
  </button>
);

const ThemeToggleButton: React.FC<{ 
  isDarkMode: boolean; 
  toggleTheme: () => void 
}> = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className={`p-2 rounded-lg transition-colors ${
      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
    }`}
  >
    {isDarkMode ? '🌞' : '🌙'}
  </button>
);

export default TopBar;