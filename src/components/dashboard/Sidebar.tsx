"use client";
import React, { useState, useEffect } from "react";
import {
  Scale,
  Home,
  FileText,
  Users,
  Calendar,
  CreditCard,
  Settings,
} from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import UserProfile from "./UserProfile";

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onToggleSidebar?: () => void;
  onCloseSidebar?: () => void; // Nueva función para cerrar completamente
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activeTab,
  onTabChange,
  onToggleSidebar,
  onCloseSidebar,
  className,
}) => {
  const { isDarkMode } = useTheme();
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar pantallas de 500px o menos y móvil
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsVerySmallScreen(width <= 500);
      setIsMobile(width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "cases", label: "Expedientes", icon: FileText },
    { id: "clients", label: "Clientes", icon: Users },
    { id: "calendar", label: "Agenda", icon: Calendar },
    { id: "billing", label: "Facturación", icon: CreditCard },
    { id: "settings", label: "Configuración", icon: Settings },
  ];

  const themeClasses = isDarkMode
    ? "bg-gray-900 border-gray-700"
    : "bg-white border-gray-200";

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    // Solo cerrar en móvil al seleccionar una opción
    if (isMobile && onCloseSidebar) {
      onCloseSidebar();
    }
  };

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 lg:hidden"
          onClick={onCloseSidebar}
        />
      )}

      {/* Sidebar para desktop (siempre visible con iconos) */}
      <div
        className={`fixed left-0 top-0 h-full z-30 transition-all duration-300 hidden lg:flex flex-col
        ${
          isOpen ? "w-64" : "w-17"
        } ${themeClasses} border-r shadow-lg ${className}`}
      >
        {/* Logo Section */}
        <div
          className={`p-4 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
            isOpen ? "px-6" : "px-4"
          }`}
        >
          <div className="flex items-center">
            <Scale
              className={`h-8 w-8 transition-all duration-300 ${
                isDarkMode ? "text-yellow-400" : "text-blue-600"
              } ${!isOpen ? "mx-auto" : "mr-3"}`}
            />
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "w-auto opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span
                className={`font-bold text-xl whitespace-nowrap  ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                LexGest
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`w-full flex items-center transition-all duration-300 ${
                isOpen ? "px-6" : "px-4"
              } py-3 text-left group relative ${
                activeTab === item.id
                  ? isDarkMode
                    ? "bg-yellow-900/20 text-yellow-400 border-r-2 border-yellow-400"
                    : "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : isDarkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <item.icon
                className={`h-5 w-5 transition-all duration-300 ${
                  isOpen ? "mr-3" : "mx-auto"
                } flex-shrink-0`}
              />
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "w-auto opacity-100" : "w-0 opacity-0"
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </div>

              {/* Tooltip individual para cada botón cuando está colapsado */}
              {!isOpen && (
                <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  {item.label}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <UserProfile
          isOpen={isOpen}
          onToggleSidebar={onToggleSidebar}
          onCloseSidebar={onCloseSidebar}
        />
      </div>

      {/* Sidebar para móvil (dropdown) */}
      <div
        className={`fixed top-0 left-0 h-full z-30 transition-transform duration-300 lg:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        ${isVerySmallScreen ? "w-screen" : "w-64"} 
        ${themeClasses} ${
          !isVerySmallScreen ? "border-r" : ""
        } shadow-lg ${className}`}
      >
        {/* Logo Section */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Scale
              className={`h-8 w-8 mr-3 ${
                isDarkMode ? "text-yellow-400" : "text-blue-600"
              }`}
            />
            <span className={`font-bold text-xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}>LexGest</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === item.id
                  ? isDarkMode
                    ? "bg-yellow-900/20 text-yellow-400 border-r-2 border-yellow-400"
                    : "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : isDarkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Profile - En móvil siempre está expandido */}
        <UserProfile isOpen={true} onCloseSidebar={onCloseSidebar} />
      </div>
    </>
  );
};

export default Sidebar;
