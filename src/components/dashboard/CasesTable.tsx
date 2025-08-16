"use client";

import React from "react";
import { Download, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import Button from "../ui/Button";

interface CasesTableProps {
  className?: string;
}

const CasesTable: React.FC<CasesTableProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const recentCases = [
    {
      id: "2024-001",
      title: "Divorcio contencioso",
      client: "María González",
      status: "active",
      priority: "high",
      nextDate: "2024-03-15",
      type: "Familiar",
    },
    {
      id: "2024-002",
      title: "Reclamación laboral",
      client: "José Martínez",
      status: "pending",
      priority: "medium",
      nextDate: "2024-03-22",
      type: "Laboral",
    },
    {
      id: "2024-003",
      title: "Constitución sociedad",
      client: "TechStart SL",
      status: "completed",
      priority: "low",
      nextDate: "2024-03-10",
      type: "Mercantil",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return isDarkMode
          ? "text-green-400 bg-green-900"
          : "text-green-800 bg-green-100";
      case "pending":
        return isDarkMode
          ? "text-yellow-400 bg-yellow-900"
          : "text-yellow-800 bg-yellow-100";
      case "completed":
        return isDarkMode
          ? "text-blue-400 bg-blue-900"
          : "text-blue-800 bg-blue-100";
      default:
        return isDarkMode
          ? "text-gray-400 bg-gray-800"
          : "text-gray-800 bg-gray-100";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Activo";
      case "pending":
        return "Pendiente";
      case "completed":
        return "Completado";
      default:
        return "Desconocido";
    }
  };

  const cardClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  const tableClasses = isDarkMode ? "border-gray-700" : "border-gray-200";

  const rowClasses = isDarkMode
    ? "border-gray-700 hover:bg-gray-750"
    : "border-gray-200 hover:bg-gray-50";

  const typeClasses = isDarkMode
    ? "bg-gray-600 text-gray-300"
    : "bg-gray-200 text-gray-700";

  return (
    <div className={`rounded-xl border ${cardClasses} p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2
          className={`text-xl font-semibold  ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Gestión de Expedientes
        </h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className={`${
              isDarkMode
                ? "border-gray-600 hover:border-yellow-400 hover:text-yellow-400 text-white"
                : "border-gray-300 hover:border-blue-600 hover:text-blue-600 text-black"
            }`}
          >
            <Download className={`h-4 w-4 inline mr-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}/>
            Exportar
          </Button>
          <Button
            variant="primary"
            size="sm"
            className={`${
              isDarkMode
                ? "bg-yellow-500 hover:bg-yellow-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Nuevo Expediente
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${tableClasses}`}>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                ID
              </th>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Título
              </th>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Cliente
              </th>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Tipo
              </th>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Estado
              </th>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Fecha
              </th>
              <th
                className={`text-left py-3 px-4 font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {recentCases.map((case_) => (
              <tr
                key={case_.id}
                className={`border-b transition-colors ${rowClasses}`}
              >
                <td className={`py-3 px-4 font-mono text-sm ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}>#{case_.id}</td>
                <td className={`py-3 px-4 font-medium ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}>{case_.title}</td>
                <td className={`py-3 px-4 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}>{case_.client}</td>
                <td className={`py-3 px-4 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}>
                  <span className={`px-2 py-1 rounded text-xs ${typeClasses}`}>
                    {case_.type}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      case_.status
                    )}`}
                  >
                    {getStatusLabel(case_.status)}
                  </span>
                </td>
                <td className={`py-3 px-4 text-sm ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}>{case_.nextDate}</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`p-1 rounded transition-colors ${
                        isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                      }`}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`p-1 rounded transition-colors ${
                        isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                      }`}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`p-1 rounded transition-colors ${
                        isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                      }`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasesTable;
