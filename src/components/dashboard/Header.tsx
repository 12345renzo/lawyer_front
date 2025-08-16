"use client";

import React from "react";
import { Menu, X, Bell } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import Button from "../ui/Button";

interface HeaderProps {
  isSidebarOpen: boolean;
  activeTab: string;
  onToggleSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  isSidebarOpen,
  activeTab,
  onToggleSidebar,
  className,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const themeClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case "dashboard":
        return "Dashboard";
      case "cases":
        return "Expedientes";
      case "clients":
        return "Clientes";
      case "calendar":
        return "Agenda";
      case "billing":
        return "Facturación";
      case "settings":
        return "Configuración";
      default:
        return "Dashboard";
    }
  };

  return (
    <header
      className={`${themeClasses} border-b px-6 py-3.5 sticky top-0 z-20 ${className}`}
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className={`p-2 rounded-lg mr-4 transition-colors ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <h1
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {getTabTitle(activeTab)}
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 rounded-lg transition-colors relative ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            {isDarkMode ? "🌞" : "🌙"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
