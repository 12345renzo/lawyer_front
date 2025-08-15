"use client";

import React from "react";
import { Clock, Shield, CreditCard, Smartphone } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: Clock,
      title: "Automatización de Tareas",
      description:
        "Gestión automática de casos, recordatorios de plazos legales y seguimiento de expedientes.",
    },
    {
      icon: Shield,
      title: "Seguridad RGPD",
      description:
        "Datos completamente encriptados, backups automáticos y cumplimiento total con RGPD.",
    },
    {
      icon: CreditCard,
      title: "Facturación Integrada",
      description:
        "Emisión automática de recibos, seguimiento de pagos y control completo de honorarios.",
    },
    {
      icon: Smartphone,
      title: "Acceso Multiplataforma",
      description:
        "Disponible en web, iOS y Android. Accede a tu despacho desde cualquier dispositivo.",
    },
  ];

  const themeClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-gray-50 border-gray-200";

  return (
    <section
      id="funcionalidades"
      className={`py-20 ${themeClasses} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
          >
            Funcionalidades que{" "}
            <span className={isDarkMode ? "text-yellow-400" : "text-blue-600"}>
              Transforman
            </span>{" "}
            tu Práctica
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
          >
            Diseñado específicamente para las necesidades de abogados y
            despachos modernos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600 border border-gray-600"
                  : "bg-white hover:shadow-lg border border-gray-200"
              }`}
            >
              <feature.icon
                className={`h-12 w-12 mb-4 ${
                  isDarkMode ? "text-yellow-400" : "text-blue-600"
                }`}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-black"
                }`}
              >
                {feature.title}
              </h3>
              <p className={isDarkMode ? "text-gray-300" : "text-black"}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
