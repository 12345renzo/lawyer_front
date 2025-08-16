"use client";
import React, { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

interface UserProfileProps {
  isOpen?: boolean;
  onToggleSidebar?: () => void;
  onCloseSidebar?: () => void; // Nueva función para cerrar completamente
}

const UserProfile: React.FC<UserProfileProps> = ({
  isOpen = true,
  onToggleSidebar,
  onCloseSidebar,
}) => {
  const { isDarkMode } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detectar pantallas menores a 1000px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        // Si estamos en desktop y el sidebar estaba cerrado, también cerrar el sidebar
        if (!isMobile && !isOpen && onCloseSidebar) {
          onCloseSidebar();
        }
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isMobile, isOpen, onCloseSidebar]);

  const handleClick = () => {
    if (!isMobile && !isOpen && onToggleSidebar) {
      // Desktop y cerrado: abrir sidebar Y mostrar dropdown
      onToggleSidebar();
      setIsDropdownOpen(true);
    } else {
      // Móvil o ya abierto: solo toggle dropdown
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);

    // Siempre cerrar el sidebar/hamburguesa al seleccionar una opción
    if (onCloseSidebar) {
      onCloseSidebar();
    }
  };

  const dropdownItems = [
    { label: "Mi perfil", href: "#" },
    { label: "Configuración", href: "#" },
    { label: "Cerrar sesión", href: "#" },
  ];

  return (
    <div
      className="p-4 border-t border-gray-200 dark:border-gray-700 relative"
      ref={dropdownRef}
    >
      <div
        className={`p-2 rounded-lg ${
          isDarkMode
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-gray-100 hover:bg-gray-200"
        } cursor-pointer transition-colors duration-200 group`}
        onClick={handleClick}
      >
        <div className="flex items-center">
          {/* Avatar siempre visible */}
          <div
            className={`w-7 h-7 rounded-full transition-all duration-300 ${
              isDarkMode ? "bg-yellow-400" : "bg-blue-600"
            } flex items-center justify-center ${isOpen ? "mr-3" : "mx-auto"}`}
          >
            <User
              className={`h-5 w-5 ${
                isDarkMode ? "text-gray-900" : "text-white"
              }`}
            />
          </div>

          {/* Información del usuario - con transición suave */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            <div className="whitespace-nowrap">
              <div
                className={`font-semibold text-sm  ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Ana Martín
              </div>
              <div className="text-xs text-gray-500">Abogada Senior</div>
            </div>
          </div>

          {/* Tooltip para cuando está colapsado (solo desktop) */}
          {!isOpen && !isMobile && (
            <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              Ana Martín
            </div>
          )}
        </div>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className={`absolute left-0 right-0 mx-2 ${
            // Posicionamiento condicional: arriba para desktop (>=1000px), abajo para mobile (<1000px)
            isMobile ? "top-full mt-0.5" : "bottom-full mb-2"
          } ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          } rounded-lg shadow-lg border ${
            isDarkMode ? "border-gray-600" : "border-gray-200"
          } z-50`}
        >
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <li key={index} className="mx-2">
                <a
                  href={item.href}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 rounded ${
                    isDarkMode
                      ? "hover:bg-gray-600 text-white"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                  onClick={handleItemClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
