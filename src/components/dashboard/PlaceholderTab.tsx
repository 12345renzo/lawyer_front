"use client";

import React from "react";
import { Users, Calendar, CreditCard, Settings } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import Button from "../ui/Button";

interface PlaceholderTabProps {
  activeTab: string;
  className?: string;
}

const PlaceholderTab: React.FC<PlaceholderTabProps> = ({
  activeTab,
  className,
}) => {
  const { isDarkMode } = useTheme();

  const getTabInfo = (tab: string) => {
    switch (tab) {
      case "clients":
        return {
          icon: Users,
          title: "Gestión de Clientes",
          description:
            "Esta sección está en desarrollo. Próximamente disponible con todas las funcionalidades.",
        };
      case "calendar":
        return {
          icon: Calendar,
          title: "Calendario y Agenda",
          description:
            "Esta sección está en desarrollo. Próximamente disponible con todas las funcionalidades.",
        };
      case "billing":
        return {
          icon: CreditCard,
          title: "Sistema de Facturación",
          description:
            "Esta sección está en desarrollo. Próximamente disponible con todas las funcionalidades.",
        };
      case "settings":
        return {
          icon: Settings,
          title: "Configuración del Sistema",
          description:
            "Esta sección está en desarrollo. Próximamente disponible con todas las funcionalidades.",
        };
      default:
        return {
          icon: Users,
          title: "Sección en Desarrollo",
          description:
            "Esta sección está en desarrollo. Próximamente disponible con todas las funcionalidades.",
        };
    }
  };

  const tabInfo = getTabInfo(activeTab);
  const IconComponent = tabInfo.icon;

  const cardClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  const iconBgClasses = isDarkMode ? "bg-gray-700" : "bg-gray-100";

  return (
    <div className={`p-6 ${className}`}>
      <div className={`rounded-xl border ${cardClasses} p-12 text-center`}>
        <div
          className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${iconBgClasses}`}
        >
          <IconComponent className="h-8 w-8 text-gray-500" />
        </div>
        <h3
          className={`text-xl font-semibold mb-2  ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {tabInfo.title}
        </h3>
        <p className={`mb-6  ${isDarkMode ? "text-white" : "text-black"}`}>
          {tabInfo.description}
        </p>
        <Button
          variant="primary"
          size="md"
          className={`${
            isDarkMode
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Solicitar Acceso Beta
        </Button>
      </div>
    </div>
  );
};

export default PlaceholderTab;
