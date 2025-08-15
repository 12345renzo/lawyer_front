"use client";

import React from "react";
import { Scale, Moon, Sun, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Button from "../ui/Button";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const themeClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-gray-50 border-gray-200";

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#precios", label: "Precios" },
    { href: "#contacto", label: "Contacto" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@lexgest.com" },
    { icon: Phone, text: "+34 900 123 456" },
    { icon: MapPin, text: "Madrid, España" },
  ];

  return (
    <footer
      id="contacto"
      className={`py-16 border-t ${themeClasses} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-blue-600 mr-2" />
              <span
                className={`font-bold text-xl ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                LexGest
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              La solución completa para la gestión moderna de despachos
              jurídicos.
            </p>
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="text-sm">
                {isDarkMode ? "Modo Día" : "Modo Noche"}
              </span>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contacto
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center">
                  <contact.icon className="h-4 w-4 mr-2" />
                  {contact.text}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              ¿Listo para empezar?
            </h3>
            <Button
              variant="primary"
              className={`w-full mb-4 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDarkMode
                  ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Solicitar Demo
            </Button>
            <p className="text-sm text-gray-500">
              Sin compromiso. Configuración en 5 minutos.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t text-center text-gray-500 ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <p>© 2024 LexGest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
