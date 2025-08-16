"use client";

import React from "react";
import { FileText, Users, Calendar, CreditCard } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import Button from "../ui/Button";

interface QuickActionsProps {
  className?: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const quickActions = [
    { icon: FileText, label: "Crear expediente" },
    { icon: Users, label: "Añadir cliente" },
    { icon: Calendar, label: "Programar cita" },
    { icon: CreditCard, label: "Generar factura" },
  ];

  const cardClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  const actionClasses = isDarkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-gray-700";

  return (
    <div className={`rounded-xl border ${cardClasses} p-6 ${className}`}>
      <h2
        className={`text-xl font-semibold mb-4  ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Acciones Rápidas
      </h2>
      <div className="space-y-2">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full p-3 rounded-lg text-left transition-colors ${actionClasses}`}
          >
            <action.icon className="h-5 w-5 inline mr-3" />
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
